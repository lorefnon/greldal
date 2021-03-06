import * as t from "io-ts";
import { Dictionary, isRegExp } from "lodash";
import { GraphQLInputType, isInputType, GraphQLOutputType, isOutputType } from "graphql";

/** Convenience utility types */

export const MappedRT = <RT1 extends t.Mixed, RT2 extends t.Mixed = RT1>(mapped: RT1, stored: RT2) =>
    t.type({
        stored,
        mapped,
    });

export const MaybeMappedRT = <RT1 extends t.Mixed, RT2 extends t.Mixed = RT1>(mapped: RT1, stored: RT2) =>
    t.union([mapped, MappedRT(mapped, stored)]);

export type Maybe<T> = null | undefined | T;

export type NNil<T> = Exclude<T, undefined | null>;

export interface Dict<T = any> extends Dictionary<T> {}

export interface Lazy<T> {
    (): T;
}

export type MaybeLazy<T> = T | Lazy<T>;

export type MaybePromise<T> = T | Promise<T>;

export type MaybeArray<T> = T | T[];

export type MaybeArrayItem<T extends MaybeArray<any>> = T extends MaybeArray<infer I> ? I : never;

export interface Factory<T> {
    (...args: any[]): T;
}

export interface Newable<T> {
    new (...args: any[]): T;
}

export type StrKey<T> = keyof T & string;
export type IdxKey<T> = keyof T & number;

export type Normalizer<PreNormalizedT, NormalizedT> = (v: PreNormalizedT) => NormalizedT;

export type MandateProps<T, P extends keyof T> = Omit<T, P> & { [K in keyof Pick<T, P>]-?: T[K] };

export type ReturnType<T extends (...args: any[]) => any> = T extends (...args: any[]) => infer R ? R : any;

export type Fn<A extends any[] = any[], R = any> = (...args: A) => R;

export type TypeGuard<S> = (v: any) => v is S;

export type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

export type ReplaceWith<TSource, TKey, TSub = never> = { [K in keyof TSource]: K extends TKey ? TSub : TSource[K] };

export type MakeOptional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

export interface Mapped<TMapped, TStored = TMapped> {
    mapped: TMapped;
    stored: TStored;
}

export type MaybeMapped<T> = T | Mapped<T>;

export type KeyOf<T> = keyof T;
export type ValueOf<T> = T[KeyOf<T>];

/**
 * Runtime type representation to validate if a value is instance of a class
 */
export class InstanceType<T> extends t.Type<T> {
    readonly _tag: "InstanceType" = "InstanceType";
    constructor(Ctor: Newable<T>) {
        super(
            `Instance<${Ctor.name || "Unknown"}>`,
            (m): m is T => m instanceof Ctor,
            (m, c) => (this.is(m) ? t.success(m) : t.failure(m, c)),
            t.identity,
        );
    }
}

export const InstanceOf = <T>(Ctor: Newable<T>) => new InstanceType<T>(Ctor);

export const IOType: InstanceType<t.Type<any>> = InstanceOf<t.Type<any>>(t.Type);

export type MakePartial<T extends object, K extends keyof T> = Partial<Pick<T, K>> & Omit<T, K>;

export const GQLInputType = new t.Type<GraphQLInputType>(
    "GQLInputType",
    (m): m is GraphQLInputType => isInputType(m),
    (m, c) => (isInputType(m) ? t.success(m) : t.failure(m, c)),
    t.identity,
);

export const GQLOutputType = new t.Type<GraphQLOutputType>(
    "GQLOutputType",
    (m): m is GraphQLOutputType => isOutputType(m),
    (m, c) => (isOutputType(m) ? t.success(m) : t.failure(m, c)),
    t.identity,
);

export const RegExpType = new t.Type<RegExp>(
    "RegExp",
    (m): m is RegExp => isRegExp(m),
    (m, c) => (isRegExp(m) ? t.success(m) : t.failure(m, c)),
    t.identity,
);

export type ExtendsWitness<U extends T, T> = U;

interface _MultiSelectionItem<TTgt, TCtx> {
    selection(): TTgt;
    shouldUse(ctx: TCtx): Promise<boolean>;
}

export type MultiSelectionItem<TTgt, TCtx> = MakeOptional<_MultiSelectionItem<TTgt, TCtx>, "shouldUse">;

export type MultiSelection<
    TTgt,
    TCtx,
    TMember extends MultiSelectionItem<TTgt, TCtx> = MultiSelectionItem<TTgt, TCtx>
> = Dictionary<TMember>;

export type Interceptor<T> = (i: T) => T;

export type PartialDeep<T> = {
    [P in keyof T]?: T[P] extends Array<infer U>
        ? Array<PartialDeep<U>>
        : T[P] extends ReadonlyArray<infer U>
        ? ReadonlyArray<PartialDeep<U>>
        : PartialDeep<T[P]>;
};

export type Predicate<T> = (i: T) => boolean;
