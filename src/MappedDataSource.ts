import { getTypeAccessorError } from "./errors";
import { TypeGuard, Dict, NNil, Maybe, MaybeArrayItem } from "./util-types";
import { isString, transform, camelCase, upperFirst, snakeCase, forEach, reduce } from "lodash";
import * as t from "io-ts";
import * as Knex from "knex";
import _debug from "debug";
import { GraphQLInputType, GraphQLOutputType } from "graphql";
import { MappedField } from "./MappedField";
import { FieldMapping } from "./FieldMapping";
import { MappedAssociation } from "./MappedAssociation";
import { singularize, pluralize } from "inflection";
import {
    deriveDefaultShallowOutputType,
    deriveDefaultOutputType,
    deriveDefaultShallowInputType,
    derivePaginatedOutputType,
} from "./graphql-type-mapper";
import { assertSupportedConnector, globalConnector, assertConnectorConfigured } from "./connector";
import { MemoizeGetter } from "./utils";
import { StoreQueryParams } from "./SingleSourceQueryOperationResolver";
import { ReverseMapper } from "./ReverseMapper";
import { AliasHierarchyVisitor } from "./AliasHierarchyVisitor";
import { DataSourceMapping } from "./DataSourceMapping";

const debug = _debug("greldal:MappedDataSource");

type DataSourceAssociationType<T extends DataSourceMapping, K extends keyof T["associations"]> = MaybeArrayItem<
    NNil<T["associations"]>[K]
>;

type AssociatedDataSource<T extends DataSourceMapping, K extends keyof T["associations"]> = ReturnType<
    DataSourceAssociationType<T, K>["target"]
>;

type ShallowEntityType<T extends DataSourceMapping> = {
    [K in keyof T["fields"]]: t.TypeOf<NNil<T["fields"]>[K]["type"]>
};

type NestedEntityType<T extends DataSourceMapping> = ShallowEntityType<T> &
    { [K in keyof T["associations"]]: AssociatedDataSource<T, K>["EntityType"] };

/**
 * Represents mapping between a relational data source and associated GraphQL types
 * originating from the schema of this data source.
 *
 * @api-category MapperClass
 */
export class MappedDataSource<T extends DataSourceMapping = any> {
    fields: { [K in keyof T["fields"]]: MappedField<MappedDataSource<T>, NNil<T["fields"]>[K]> };
    associations: { [K in keyof T["associations"]]: MappedAssociation<MappedDataSource<T>> };

    constructor(private mapping: T) {
        this.fields = transform(
            mapping.fields!,
            (result, fieldMapping, name) => {
                result[name] = new MappedField(this, name, fieldMapping);
            },
            {},
        ) as any;
        this.associations = transform(
            mapping.associations!,
            (result, associationMapping, name) => {
                result[name] = new MappedAssociation(this, name, associationMapping);
            },
            {},
        ) as any;
        debug(
            "Mapped data source with name: %s, fields: %O, associations: %O",
            this.mappedName,
            Object.keys(this.fields),
            Object.keys(this.associations),
        );
        if (mapping.connector) {
            assertSupportedConnector(mapping.connector);
        }
    }

    get connector(): Knex {
        return assertConnectorConfigured(this.mapping.connector || globalConnector);
    }

    rootQueryBuilder(aliasHierarchyVisitor?: Maybe<AliasHierarchyVisitor>): Knex.QueryBuilder {
        if (this.mapping.rootQuery) return this.mapping.rootQuery(aliasHierarchyVisitor);
        return aliasHierarchyVisitor
            ? this.connector(`${this.storedName} as ${aliasHierarchyVisitor.alias}`)
            : this.connector(this.storedName);
    }

    get primaryFields() {
        return Object.values<MappedField<any>>(this.fields).filter(f => f.isPrimary);
    }

    @MemoizeGetter
    get mappedName() {
        return (isString as TypeGuard<string>)(this.mapping.name)
            ? upperFirst(camelCase(singularize(this.mapping.name)))
            : this.mapping.name.mapped;
    }

    @MemoizeGetter
    get shallowMappedName() {
        return `Shallow${this.mappedName}`;
    }

    @MemoizeGetter
    get storedName() {
        return (isString as TypeGuard<string>)(this.mapping.name)
            ? snakeCase(pluralize(this.mapping.name))
            : this.mapping.name.stored;
    }

    @MemoizeGetter
    get pageContainerName() {
        return `${this.mappedName}PageContainer`;
    }

    @MemoizeGetter
    get shallowPageContainerName() {
        return `${this.shallowMappedName}PageContainer`;
    }

    @MemoizeGetter
    get pageName() {
        return `${this.mappedName}Page`;
    }

    @MemoizeGetter
    get shallowPageName() {
        return `${this.shallowMappedName}Page`;
    }

    @MemoizeGetter
    get storedColumnNames() {
        return transform(
            this.fields,
            (result: string[], field: MappedField<MappedDataSource<T>, FieldMapping<any, any>>) => {
                if (field.isMappedFromColumn) {
                    result.push(field.sourceColumn!);
                }
            },
            [],
        );
    }

    @MemoizeGetter
    get shallowEntityProps(): t.Props & Dict<t.Type<any>> {
        return transform(
            this.mapping.fields!,
            (result, f, name) => {
                result[name] = f.type;
            },
            {},
        );
    }

    @MemoizeGetter
    get associationProps(): t.Props & Dict<t.Type<any>> {
        const result: t.Props & Dict<t.Type<any>> = {};
        forEach(this.associations, (association, name) => {
            result[name] = association.target.entityType;
        });
        return transform(
            this.associations,
            (result: t.Props, association: MappedAssociation<MappedDataSource<T>>, name: string) => {
                result[name] = association.target.entityType;
            },
            {},
        );
    }

    @MemoizeGetter
    get entityProps(): t.Props & Dict<t.Type<any>> {
        return {
            ...this.shallowEntityProps,
            ...this.associationProps,
        };
    }

    @MemoizeGetter
    get shallowEntityType() {
        return t.type(this.shallowEntityProps);
    }

    @MemoizeGetter
    get entityType() {
        return t.type(this.entityProps);
    }

    get ShallowEntityType(): ShallowEntityType<T> {
        throw getTypeAccessorError("ShallowEntityType", "MappedDataSource");
    }

    get EntityType(): NestedEntityType<T> {
        throw getTypeAccessorError("NestedEntityType", "MappedDataSource");
    }

    get MappingType(): T {
        throw getTypeAccessorError("MappingType", "MappedDataSource");
    }

    @MemoizeGetter
    get defaultOutputType(): GraphQLOutputType {
        return deriveDefaultOutputType(this);
    }

    @MemoizeGetter
    get paginatedOutputType() {
        return derivePaginatedOutputType(this.pageContainerName, this.pageName, this.defaultOutputType);
    }

    @MemoizeGetter
    get paginatedShallowOutputType() {
        return derivePaginatedOutputType(
            this.shallowPageContainerName,
            this.shallowPageName,
            this.defaultShallowOutputType,
        );
    }

    @MemoizeGetter
    get defaultShallowInputType(): GraphQLInputType {
        debug("Deriving default shallow input type for: ", this.mappedName);
        return deriveDefaultShallowInputType(this);
    }

    @MemoizeGetter
    get defaultShallowOutputType(): GraphQLOutputType {
        return deriveDefaultShallowOutputType(this);
    }

    mapEntitiesToDBRows(entities: ShallowEntityType<T>[]): Dict[] {
        return entities.map(entity =>
            reduce<ShallowEntityType<T>, Dict>(
                entity,
                (result: Dict, val, key: any) => {
                    const field = this.fields[key as keyof T["fields"]];
                    if (field) {
                        return field.reduce(result, val);
                    }
                    return result;
                },
                {},
            ),
        );
    }

    mapDBRowsToEntities(rows: Dict[], storeParams: StoreQueryParams<MappedDataSource<T>>) {
        return new ReverseMapper(storeParams).reverseMap(rows);
    }

    mapDBRowsToShallowEntities(rows: Dict[]) {
        return rows.map(row => {
            const mappedRow: Dict = {};
            for (const [, field] of Object.entries<MappedField<MappedDataSource<T>, FieldMapping<any, any>>>(
                this.fields,
            )) {
                mappedRow[field.mappedName] = field.getValue(row);
            }
            return mappedRow;
        });
    }

    mapQueryParams(whereArgs: Dict, aliasHierarchyVisitor: AliasHierarchyVisitor) {
        const whereParams: Dict = {};
        Object.entries(whereArgs).forEach(([name, arg]) => {
            const field: MappedField = (this.fields as any)[name];
            if (field) {
                whereParams[`${aliasHierarchyVisitor.alias}.${field.sourceColumn}`] = arg;
                return;
            }
        });
        return whereParams;
    }
}

/**
 * Map a relational data source using specified configuration
 *
 * Refer the guide on [Mapping Data Sources](/mapping-data-sources) for detailed examples
 *
 * ## Args:
 * - mapping: [DataSourceMapping](api:DataSourceMapping) Mapping configuration
 *
 * ## Returns:
 * - [MappedDataSource](api:MappedDataSource)
 *
 * @api-category PrimaryAPI
 */
export const mapDataSource = <T extends DataSourceMapping>(mapping: T) => new MappedDataSource<T>(mapping);
