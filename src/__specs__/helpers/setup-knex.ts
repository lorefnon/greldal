import Knex from "knex";
import tmp from "tmp";
import assert from "assert";
import _debug from "debug";

import { Maybe } from "../../utils/util-types";

const debug = _debug("greldal:setup-knex");

/*
Example: postgresql://localhost:5432
*/
export const getConnectionString = () => {
    const connectionString = process.env.DB_CONNECTION_STRING;
    assert(connectionString, "Expected DB_CONNECTION_STRING environment variable to be defined");
    return connectionString;
};

export const setupKnex = () => {
    const isCI = process.env.CI === "true" || process.env.CI === "1";
    let config: Maybe<Knex.Config>;
    const db = process.env.DB;
    if (!db || db === "sqlite3") {
        const sqliteFile = tmp.fileSync();
        config = {
            client: "sqlite3",
            connection: {
                filename: sqliteFile.name,
                multipleStatements: true,
            },
            useNullAsDefault: true,
        };
    } else if (db === "mysql2") {
        if (isCI) {
            config = {
                client: "mysql2",
                connection: {
                    host: "127.0.0.1",
                    user: "travis",
                    database: "greldal_test",
                    password: "",
                },
            };
        } else {
            config = {
                client: "mysql2",
                connection: getConnectionString(),
            };
        }
    } else if (db === "pg") {
        if (isCI) {
            config = {
                client: "pg",
                connection: {
                    host: "127.0.0.1",
                    user: "postgres",
                    database: "greldal_test",
                    password: "pwd",
                },
            };
        } else {
            config = {
                client: "pg",
                connection: getConnectionString(),
            };
        }
    } else {
        console.log("here :")
        throw new Error(`Invalid db selection: ${db}`);
    }
    debug("Connecting to knex using configuration: %O", config);
    assert(config, "Failed to configure database for the test suite. You may need to update above configuration");
    const knex = Knex({
        ...config,
        debug: !!process.env.DEBUG,
        pool: {
            min: 0,
        },
    });
    console.log('knex =>', knex);
    return knex;
};
