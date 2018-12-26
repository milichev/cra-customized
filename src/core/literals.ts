type Any = any; // tslint:disable-line:no-any

/**
 * Defines a type containing the difference of types `T` and `U`.
 *
 * Usages of this must be replaced with those described in the TypeScript issue
 * https://github.com/Microsoft/TypeScript/issues/12215 once added to the standard lib.
 */
export type Diff<T extends string, U extends string> =
  (
    { [P in T]: P } &
    { [P in U]: never } &
    { [x: string]: never }
    )[T];

/**
 * Defines a type containing keys of `T` excluding set of keys K.
 *
 * @example
 *
 * type B = Omit<A, 'c'>;
 *
 * Usages of this must be replaced with those described in the TypeScript issue
 * https://github.com/Microsoft/TypeScript/issues/12215#issuecomment-311923766
 */

export type Omit<T, K extends keyof T> = Pick<T,
  (
    { [P in keyof T]: P } &
    { [P in K]: never } &
    { [x: string]: never, [x: number]: never }
    )[keyof T]>;

export type Filter<T, U> = T extends U ? T : never;

export type Optional<T> = T | undefined;

export type Nullable<T> = T | null;

export type NonNullableProps<T> = {
  [P in keyof T]: Exclude<T[P], null>;
};

export type NullableProps<T> = {
  [P in keyof T]: T[P] | null;
};

export interface MapObject<T = Any> {
  [name: string]: T;
}

export type TypedMapObject<K extends keyof Any, T = unknown> = {
  [key in K]: T;
};

export type Predicate<T = Any> = {
  (item: T, ...rest: Any[]): boolean;
};
