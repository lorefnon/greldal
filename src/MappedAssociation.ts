import { MappedDataSource } from "./MappedDataSource";
import { singularize } from "inflection";
import { SingleSourceQueryOperationResolver } from "./SingleSourceQueryOperationResolver";
import { getTypeAccessorError } from "./utils/errors";
import { MappedSingleSourceOperation } from "./MappedSingleSourceOperation";
import { isBoolean, isPlainObject, transform } from "lodash";
import _debug from "debug";
import * as Knex from "knex";
import { indexBy, MemoizeGetter } from "./utils/utils";
import { isString, isFunction } from "util";
import { TypeGuard, Dict, PartialDeep } from "./utils/util-types";
import { AliasHierarchyVisitor } from "./AliasHierarchyVisitor";
import { assertType } from "./utils/assertions";
import {
    AssociationMappingRT,
    AssociationMapping,
    AssociationPreFetchConfig,
    MappedForeignOperation,
    AssociationPostFetchConfig,
    AssociationJoinConfig,
    JoinTypeId,
} from "./AssociationMapping";
import { MappedSingleSourceQueryOperation } from "./MappedSingleSourceQueryOperation";
import { createJoinBuilder } from "./utils/JoinBuilder";
import { SourceAwareResolverContext } from "./SourceAwareResolverContext";

const debug = _debug("greldal:MappedAssociation");

/**
 * A mapped association represents an association among multiple data sources and encapsulates the knowledge of how to fetch a connected
 * data source while resolving an operation in another data source.
 *
 * @api-category MapperClass
 */
export class MappedAssociation<TSrc extends MappedDataSource = any, TTgt extends MappedDataSource = any> {
    constructor(public dataSource: TSrc, public mappedName: string, private mapping: AssociationMapping<TSrc, TTgt>) {
        assertType(
            AssociationMappingRT,
            mapping,
            `Association mapping configuration:\nDataSource<${dataSource}>[associations][${mappedName}]`,
        );
    }

    /**
     * If the association will resolve to at most one associated entity
     */
    @MemoizeGetter
    get singular() {
        if (isBoolean(this.mapping.singular)) {
            return this.mapping.singular;
        }
        return singularize(this.mappedName) === this.mappedName;
    }

    /**
     * If the association will be exposed through GraphQL API
     */
    get exposed() {
        return this.mapping.exposed !== false;
    }

    /**
     * Linked data source
     */
    get target(): TTgt {
        return this.mapping.target.apply(this);
    }

    /**
     * Association description made available through the GraphQL API
     */
    get description() {
        return this.mapping.description;
    }

    /**
     * If the association supports paginated response
     */
    get isPaginated() {
        return !!this.mapping.paginate;
    }

    /**
     * For a given operation, identify one of the (potentially) many many fetch configurations specified
     * using the fetchThrough mapping property.
     */
    getFetchConfig<
        TCtx extends SourceAwareResolverContext<TMappedOperation, TRootSrc, TGQLArgs, TGQLSource, TGQLContext>,
        TRootSrc extends MappedDataSource<any>,
        TMappedOperation extends MappedSingleSourceQueryOperation<TRootSrc, TGQLArgs>,
        TGQLArgs extends {},
        TGQLSource = any,
        TGQLContext = any,
        TResolved = any
    >(operation: SingleSourceQueryOperationResolver<TCtx, TRootSrc, TMappedOperation, TGQLArgs, TResolved>) {
        for (const config of this.mapping.fetchThrough) {
            if (
                !config.useIf ||
                config.useIf.call<
                    MappedAssociation<TSrc, TTgt>,
                    [SingleSourceQueryOperationResolver<TCtx, TRootSrc, TMappedOperation, TGQLArgs, TResolved>],
                    boolean
                >(this, operation)
            ) {
                return config;
            }
        }
        return null;
    }

    /**
     * Start Side loading associated entities before the parent entity has been fetched
     */
    preFetch<
        TCtx extends SourceAwareResolverContext<TMappedOperation, TRootSrc, TGQLArgs, TGQLSource, TGQLContext>,
        TRootSrc extends MappedDataSource<any>,
        TMappedOperation extends MappedSingleSourceQueryOperation<TRootSrc, TGQLArgs>,
        TGQLArgs extends {},
        TGQLSource = any,
        TGQLContext = any,
        TResolved = any
    >(
        preFetchConfig: AssociationPreFetchConfig<TSrc, TTgt>,
        operation: SingleSourceQueryOperationResolver<TCtx, TRootSrc, TMappedOperation, TGQLArgs, TResolved>,
    ) {
        return preFetchConfig.preFetch.call<
            MappedAssociation<TSrc, TTgt>,
            [SingleSourceQueryOperationResolver<TCtx, TRootSrc, TMappedOperation, TGQLArgs, TResolved>],
            MappedForeignOperation<MappedSingleSourceOperation<TTgt, any>>
        >(this, operation);
    }

    /**
     * Side-load associated entities after parent entity has been fetched
     */
    postFetch<
        TCtx extends SourceAwareResolverContext<TMappedOperation, TRootSrc, TGQLArgs, TGQLSource, TGQLContext>,
        TRootSrc extends MappedDataSource<any>,
        TMappedOperation extends MappedSingleSourceQueryOperation<TRootSrc, TGQLArgs>,
        TGQLArgs extends {},
        TGQLSource = any,
        TGQLContext = any,
        TResolved = any
    >(
        postFetchConfig: AssociationPostFetchConfig<TSrc, TTgt>,
        operation: SingleSourceQueryOperationResolver<TCtx, TRootSrc, TMappedOperation, TGQLArgs, TResolved>,
        parents: PartialDeep<TSrc["EntityType"]>[],
    ) {
        return postFetchConfig.postFetch.call<
            MappedAssociation<TSrc, TTgt>,
            [
                SingleSourceQueryOperationResolver<TCtx, TRootSrc, TMappedOperation, TGQLArgs, TResolved>,
                PartialDeep<TSrc["EntityType"]>[],
            ],
            MappedForeignOperation<MappedSingleSourceOperation<TTgt, any>>
        >(this, operation, parents);
    }

    join(
        joinConfig: AssociationJoinConfig<TSrc, TTgt>,
        queryBuilder: Knex.QueryBuilder,
        aliasHierarchyVisitor: AliasHierarchyVisitor,
    ): AliasHierarchyVisitor {
        if ((isFunction as TypeGuard<Function>)(joinConfig.join)) {
            return joinConfig.join(createJoinBuilder(queryBuilder, aliasHierarchyVisitor)).aliasHierarchyVisitor;
        }
        if ((isString as TypeGuard<JoinTypeId>)(joinConfig.join) && isPlainObject(this.associatorColumns)) {
            const { storedName } = this.target;
            const sourceAlias = aliasHierarchyVisitor.alias;
            const nextAliasHierarchyVisitor = aliasHierarchyVisitor.visit(this.mappedName)!;
            const { alias } = nextAliasHierarchyVisitor;
            queryBuilder[joinConfig.join](
                `${storedName} as ${alias}`,
                `${sourceAlias}.${this.associatorColumns!.inSource}`,
                `${alias}.${this.associatorColumns!.inRelated}`,
            );
            return nextAliasHierarchyVisitor;
        }
        throw new Error(`Not enough information to autoJoin association. Specify a join function`);
    }

    isAutoJoinable(joinConfig: AssociationJoinConfig<TSrc, TTgt>) {
        return isString(joinConfig.join) && isPlainObject(this.associatorColumns);
    }

    /**
     * Associates side loaded entities with parent entity.
     */
    associateResultsWithParents(
        fetchConfig: AssociationPreFetchConfig<TSrc, TTgt> | AssociationPostFetchConfig<TSrc, TTgt>,
    ) {
        return (parents: PartialDeep<TSrc["EntityType"]>[], results: PartialDeep<TTgt["EntityType"]>[]) => {
            if (fetchConfig.associateResultsWithParents) {
                return fetchConfig.associateResultsWithParents.call(this, parents, results);
            }
            debug("associating results with parents -- parents: %O, results: %O", parents, results);
            if (!this.mapping.associatorColumns) {
                throw new Error("Either associatorColumns or associateResultsWithParents must be specified");
            }
            const { inRelated, inSource } = this.mapping.associatorColumns!;
            const parentsIndex = indexBy(parents, inSource);
            results.forEach(result => {
                const pkey = result[inRelated] as any;
                if (!pkey) return;
                const parent = parentsIndex[pkey] as any;
                if (!parent) return;
                if (this.mapping.singular) {
                    parent[this.mappedName] = result;
                } else {
                    parent[this.mappedName] = parent[this.mappedName] || [];
                    parent[this.mappedName].push(result);
                }
            });
        };
    }

    /**
     * Columns used to link the data sources at the persistence layer
     */
    get associatorColumns() {
        return this.mapping.associatorColumns;
    }

    /**
     * Getter to obtain the type of source DataSource.
     *
     * This is expected to be used only in mapped typescript types. Invoking the getter directly
     * at runtime will throw.
     */
    get DataSourceType(): TSrc {
        throw getTypeAccessorError("DataSourceType", "MappedAssociation");
    }

    /**
     * Getter to obtain the type of associated DataSource.
     *
     * This is expected to be used only in mapped typescript types. Invoking the getter directly
     * at runtime will throw.
     */
    get AssociatedDataSourceType(): TTgt {
        throw getTypeAccessorError("AssociatedDataSourceType", "MappedAssociation");
    }

    /**
     * Getter to obtain the type of entity from source DataSource.
     *
     * This is expected to be used only in mapped typescript types. Invoking the getter directly
     * at runtime will throw.
     */
    get SourceEntityType(): TSrc["EntityType"] {
        throw getTypeAccessorError("SourceEntityType", "MappedAssociation");
    }

    /**
     * Getter to obtain the type of entity from associated DataSource.
     *
     * This is expected to be used only in mapped typescript types. Invoking the getter directly
     * at runtime will throw.
     */
    get AssociatedEntityType(): TTgt["EntityType"] {
        throw getTypeAccessorError("AssociatedEntityType", "MappedAssociation");
    }
}

type AssociationMappingResult<
    TMapping extends Dict<AssociationMapping<any, MappedDataSource>>,
    TSrc extends MappedDataSource
> = {
    [K in keyof TMapping]: MappedAssociation<TSrc, ReturnType<TMapping[K]["target"]>>;
};

/**
 * Used to define an association between two data sources.
 *
 * Make sure you have gone through the [Association Mapping](guide:mapping-associations) guide first which elaborates on
 * the concepts behind association mapping.
 *
 * Association mapping determines how two data sources can be linked (through joins, or auxiliary queries) so
 * that operations can be performed over multiple data sources.
 *
 * Accepts an [AssociationMapping](api:AssociationMapping) configuration.
 *
 * @api-category PrimaryAPI
 * @param associations
 */
export const mapAssociations = <TMapping extends Dict<AssociationMapping<any, MappedDataSource>>>(
    associations: TMapping,
) => <TSrc extends MappedDataSource>(dataSource: TSrc): AssociationMappingResult<TMapping, TSrc> =>
    transform(
        associations,
        (result: Dict, associationMapping, name) => {
            result[name] = new MappedAssociation(dataSource, name, associationMapping);
        },
        {},
    ) as any;
