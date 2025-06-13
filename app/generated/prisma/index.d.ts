
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model entry
 * 
 */
export type entry = $Result.DefaultSelection<Prisma.$entryPayload>
/**
 * Model Part
 * 
 */
export type Part = $Result.DefaultSelection<Prisma.$PartPayload>
/**
 * Model Defects
 * 
 */
export type Defects = $Result.DefaultSelection<Prisma.$DefectsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.entry`: Exposes CRUD operations for the **entry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Entries
    * const entries = await prisma.entry.findMany()
    * ```
    */
  get entry(): Prisma.entryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.part`: Exposes CRUD operations for the **Part** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Parts
    * const parts = await prisma.part.findMany()
    * ```
    */
  get part(): Prisma.PartDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.defects`: Exposes CRUD operations for the **Defects** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Defects
    * const defects = await prisma.defects.findMany()
    * ```
    */
  get defects(): Prisma.DefectsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Users: 'Users',
    entry: 'entry',
    Part: 'Part',
    Defects: 'Defects'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "users" | "entry" | "part" | "defects"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      entry: {
        payload: Prisma.$entryPayload<ExtArgs>
        fields: Prisma.entryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.entryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.entryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entryPayload>
          }
          findFirst: {
            args: Prisma.entryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.entryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entryPayload>
          }
          findMany: {
            args: Prisma.entryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entryPayload>[]
          }
          create: {
            args: Prisma.entryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entryPayload>
          }
          createMany: {
            args: Prisma.entryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.entryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entryPayload>[]
          }
          delete: {
            args: Prisma.entryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entryPayload>
          }
          update: {
            args: Prisma.entryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entryPayload>
          }
          deleteMany: {
            args: Prisma.entryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.entryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.entryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entryPayload>[]
          }
          upsert: {
            args: Prisma.entryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entryPayload>
          }
          aggregate: {
            args: Prisma.EntryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEntry>
          }
          groupBy: {
            args: Prisma.entryGroupByArgs<ExtArgs>
            result: $Utils.Optional<EntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.entryCountArgs<ExtArgs>
            result: $Utils.Optional<EntryCountAggregateOutputType> | number
          }
        }
      }
      Part: {
        payload: Prisma.$PartPayload<ExtArgs>
        fields: Prisma.PartFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PartFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PartFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartPayload>
          }
          findFirst: {
            args: Prisma.PartFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PartFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartPayload>
          }
          findMany: {
            args: Prisma.PartFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartPayload>[]
          }
          create: {
            args: Prisma.PartCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartPayload>
          }
          createMany: {
            args: Prisma.PartCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PartCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartPayload>[]
          }
          delete: {
            args: Prisma.PartDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartPayload>
          }
          update: {
            args: Prisma.PartUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartPayload>
          }
          deleteMany: {
            args: Prisma.PartDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PartUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PartUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartPayload>[]
          }
          upsert: {
            args: Prisma.PartUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartPayload>
          }
          aggregate: {
            args: Prisma.PartAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePart>
          }
          groupBy: {
            args: Prisma.PartGroupByArgs<ExtArgs>
            result: $Utils.Optional<PartGroupByOutputType>[]
          }
          count: {
            args: Prisma.PartCountArgs<ExtArgs>
            result: $Utils.Optional<PartCountAggregateOutputType> | number
          }
        }
      }
      Defects: {
        payload: Prisma.$DefectsPayload<ExtArgs>
        fields: Prisma.DefectsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DefectsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DefectsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DefectsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DefectsPayload>
          }
          findFirst: {
            args: Prisma.DefectsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DefectsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DefectsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DefectsPayload>
          }
          findMany: {
            args: Prisma.DefectsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DefectsPayload>[]
          }
          create: {
            args: Prisma.DefectsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DefectsPayload>
          }
          createMany: {
            args: Prisma.DefectsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DefectsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DefectsPayload>[]
          }
          delete: {
            args: Prisma.DefectsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DefectsPayload>
          }
          update: {
            args: Prisma.DefectsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DefectsPayload>
          }
          deleteMany: {
            args: Prisma.DefectsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DefectsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DefectsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DefectsPayload>[]
          }
          upsert: {
            args: Prisma.DefectsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DefectsPayload>
          }
          aggregate: {
            args: Prisma.DefectsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDefects>
          }
          groupBy: {
            args: Prisma.DefectsGroupByArgs<ExtArgs>
            result: $Utils.Optional<DefectsGroupByOutputType>[]
          }
          count: {
            args: Prisma.DefectsCountArgs<ExtArgs>
            result: $Utils.Optional<DefectsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    users?: UsersOmit
    entry?: entryOmit
    part?: PartOmit
    defects?: DefectsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    name: string | null
    username: string | null
    password: string | null
    role: string | null
    email: string | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    name: string | null
    username: string | null
    password: string | null
    role: string | null
    email: string | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    name: number
    username: number
    password: number
    role: number
    email: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    name?: true
    username?: true
    password?: true
    role?: true
    email?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    name?: true
    username?: true
    password?: true
    role?: true
    email?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    name?: true
    username?: true
    password?: true
    role?: true
    email?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    name: string
    username: string
    password: string
    role: string
    email: string | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    email?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    email?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    email?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectScalar = {
    id?: boolean
    name?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    email?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "username" | "password" | "role" | "email", ExtArgs["result"]["users"]>

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      username: string
      password: string
      role: string
      email: string | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UsersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsersCreateManyAndReturnArgs>(args?: SelectSubset<T, UsersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UsersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsersUpdateManyAndReturnArgs>(args: SelectSubset<T, UsersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly id: FieldRef<"Users", 'Int'>
    readonly name: FieldRef<"Users", 'String'>
    readonly username: FieldRef<"Users", 'String'>
    readonly password: FieldRef<"Users", 'String'>
    readonly role: FieldRef<"Users", 'String'>
    readonly email: FieldRef<"Users", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users createManyAndReturn
   */
  export type UsersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users updateManyAndReturn
   */
  export type UsersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
  }


  /**
   * Model entry
   */

  export type AggregateEntry = {
    _count: EntryCountAggregateOutputType | null
    _avg: EntryAvgAggregateOutputType | null
    _sum: EntrySumAggregateOutputType | null
    _min: EntryMinAggregateOutputType | null
    _max: EntryMaxAggregateOutputType | null
  }

  export type EntryAvgAggregateOutputType = {
    id: number | null
  }

  export type EntrySumAggregateOutputType = {
    id: number | null
  }

  export type EntryMinAggregateOutputType = {
    id: number | null
    verifiername: string | null
    checkername: string | null
    partnumber: string | null
    defectstatus: string | null
    defect: string | null
    datetime: Date | null
  }

  export type EntryMaxAggregateOutputType = {
    id: number | null
    verifiername: string | null
    checkername: string | null
    partnumber: string | null
    defectstatus: string | null
    defect: string | null
    datetime: Date | null
  }

  export type EntryCountAggregateOutputType = {
    id: number
    verifiername: number
    checkername: number
    partnumber: number
    defectstatus: number
    defect: number
    datetime: number
    _all: number
  }


  export type EntryAvgAggregateInputType = {
    id?: true
  }

  export type EntrySumAggregateInputType = {
    id?: true
  }

  export type EntryMinAggregateInputType = {
    id?: true
    verifiername?: true
    checkername?: true
    partnumber?: true
    defectstatus?: true
    defect?: true
    datetime?: true
  }

  export type EntryMaxAggregateInputType = {
    id?: true
    verifiername?: true
    checkername?: true
    partnumber?: true
    defectstatus?: true
    defect?: true
    datetime?: true
  }

  export type EntryCountAggregateInputType = {
    id?: true
    verifiername?: true
    checkername?: true
    partnumber?: true
    defectstatus?: true
    defect?: true
    datetime?: true
    _all?: true
  }

  export type EntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which entry to aggregate.
     */
    where?: entryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of entries to fetch.
     */
    orderBy?: entryOrderByWithRelationInput | entryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: entryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` entries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` entries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned entries
    **/
    _count?: true | EntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EntryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EntrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EntryMaxAggregateInputType
  }

  export type GetEntryAggregateType<T extends EntryAggregateArgs> = {
        [P in keyof T & keyof AggregateEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEntry[P]>
      : GetScalarType<T[P], AggregateEntry[P]>
  }




  export type entryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: entryWhereInput
    orderBy?: entryOrderByWithAggregationInput | entryOrderByWithAggregationInput[]
    by: EntryScalarFieldEnum[] | EntryScalarFieldEnum
    having?: entryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EntryCountAggregateInputType | true
    _avg?: EntryAvgAggregateInputType
    _sum?: EntrySumAggregateInputType
    _min?: EntryMinAggregateInputType
    _max?: EntryMaxAggregateInputType
  }

  export type EntryGroupByOutputType = {
    id: number
    verifiername: string
    checkername: string
    partnumber: string
    defectstatus: string
    defect: string
    datetime: Date
    _count: EntryCountAggregateOutputType | null
    _avg: EntryAvgAggregateOutputType | null
    _sum: EntrySumAggregateOutputType | null
    _min: EntryMinAggregateOutputType | null
    _max: EntryMaxAggregateOutputType | null
  }

  type GetEntryGroupByPayload<T extends entryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EntryGroupByOutputType[P]>
            : GetScalarType<T[P], EntryGroupByOutputType[P]>
        }
      >
    >


  export type entrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    verifiername?: boolean
    checkername?: boolean
    partnumber?: boolean
    defectstatus?: boolean
    defect?: boolean
    datetime?: boolean
  }, ExtArgs["result"]["entry"]>

  export type entrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    verifiername?: boolean
    checkername?: boolean
    partnumber?: boolean
    defectstatus?: boolean
    defect?: boolean
    datetime?: boolean
  }, ExtArgs["result"]["entry"]>

  export type entrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    verifiername?: boolean
    checkername?: boolean
    partnumber?: boolean
    defectstatus?: boolean
    defect?: boolean
    datetime?: boolean
  }, ExtArgs["result"]["entry"]>

  export type entrySelectScalar = {
    id?: boolean
    verifiername?: boolean
    checkername?: boolean
    partnumber?: boolean
    defectstatus?: boolean
    defect?: boolean
    datetime?: boolean
  }

  export type entryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "verifiername" | "checkername" | "partnumber" | "defectstatus" | "defect" | "datetime", ExtArgs["result"]["entry"]>

  export type $entryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "entry"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      verifiername: string
      checkername: string
      partnumber: string
      defectstatus: string
      defect: string
      datetime: Date
    }, ExtArgs["result"]["entry"]>
    composites: {}
  }

  type entryGetPayload<S extends boolean | null | undefined | entryDefaultArgs> = $Result.GetResult<Prisma.$entryPayload, S>

  type entryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<entryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EntryCountAggregateInputType | true
    }

  export interface entryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['entry'], meta: { name: 'entry' } }
    /**
     * Find zero or one Entry that matches the filter.
     * @param {entryFindUniqueArgs} args - Arguments to find a Entry
     * @example
     * // Get one Entry
     * const entry = await prisma.entry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends entryFindUniqueArgs>(args: SelectSubset<T, entryFindUniqueArgs<ExtArgs>>): Prisma__entryClient<$Result.GetResult<Prisma.$entryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Entry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {entryFindUniqueOrThrowArgs} args - Arguments to find a Entry
     * @example
     * // Get one Entry
     * const entry = await prisma.entry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends entryFindUniqueOrThrowArgs>(args: SelectSubset<T, entryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__entryClient<$Result.GetResult<Prisma.$entryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Entry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {entryFindFirstArgs} args - Arguments to find a Entry
     * @example
     * // Get one Entry
     * const entry = await prisma.entry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends entryFindFirstArgs>(args?: SelectSubset<T, entryFindFirstArgs<ExtArgs>>): Prisma__entryClient<$Result.GetResult<Prisma.$entryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Entry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {entryFindFirstOrThrowArgs} args - Arguments to find a Entry
     * @example
     * // Get one Entry
     * const entry = await prisma.entry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends entryFindFirstOrThrowArgs>(args?: SelectSubset<T, entryFindFirstOrThrowArgs<ExtArgs>>): Prisma__entryClient<$Result.GetResult<Prisma.$entryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Entries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {entryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Entries
     * const entries = await prisma.entry.findMany()
     * 
     * // Get first 10 Entries
     * const entries = await prisma.entry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const entryWithIdOnly = await prisma.entry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends entryFindManyArgs>(args?: SelectSubset<T, entryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$entryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Entry.
     * @param {entryCreateArgs} args - Arguments to create a Entry.
     * @example
     * // Create one Entry
     * const Entry = await prisma.entry.create({
     *   data: {
     *     // ... data to create a Entry
     *   }
     * })
     * 
     */
    create<T extends entryCreateArgs>(args: SelectSubset<T, entryCreateArgs<ExtArgs>>): Prisma__entryClient<$Result.GetResult<Prisma.$entryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Entries.
     * @param {entryCreateManyArgs} args - Arguments to create many Entries.
     * @example
     * // Create many Entries
     * const entry = await prisma.entry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends entryCreateManyArgs>(args?: SelectSubset<T, entryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Entries and returns the data saved in the database.
     * @param {entryCreateManyAndReturnArgs} args - Arguments to create many Entries.
     * @example
     * // Create many Entries
     * const entry = await prisma.entry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Entries and only return the `id`
     * const entryWithIdOnly = await prisma.entry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends entryCreateManyAndReturnArgs>(args?: SelectSubset<T, entryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$entryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Entry.
     * @param {entryDeleteArgs} args - Arguments to delete one Entry.
     * @example
     * // Delete one Entry
     * const Entry = await prisma.entry.delete({
     *   where: {
     *     // ... filter to delete one Entry
     *   }
     * })
     * 
     */
    delete<T extends entryDeleteArgs>(args: SelectSubset<T, entryDeleteArgs<ExtArgs>>): Prisma__entryClient<$Result.GetResult<Prisma.$entryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Entry.
     * @param {entryUpdateArgs} args - Arguments to update one Entry.
     * @example
     * // Update one Entry
     * const entry = await prisma.entry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends entryUpdateArgs>(args: SelectSubset<T, entryUpdateArgs<ExtArgs>>): Prisma__entryClient<$Result.GetResult<Prisma.$entryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Entries.
     * @param {entryDeleteManyArgs} args - Arguments to filter Entries to delete.
     * @example
     * // Delete a few Entries
     * const { count } = await prisma.entry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends entryDeleteManyArgs>(args?: SelectSubset<T, entryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Entries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {entryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Entries
     * const entry = await prisma.entry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends entryUpdateManyArgs>(args: SelectSubset<T, entryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Entries and returns the data updated in the database.
     * @param {entryUpdateManyAndReturnArgs} args - Arguments to update many Entries.
     * @example
     * // Update many Entries
     * const entry = await prisma.entry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Entries and only return the `id`
     * const entryWithIdOnly = await prisma.entry.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends entryUpdateManyAndReturnArgs>(args: SelectSubset<T, entryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$entryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Entry.
     * @param {entryUpsertArgs} args - Arguments to update or create a Entry.
     * @example
     * // Update or create a Entry
     * const entry = await prisma.entry.upsert({
     *   create: {
     *     // ... data to create a Entry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Entry we want to update
     *   }
     * })
     */
    upsert<T extends entryUpsertArgs>(args: SelectSubset<T, entryUpsertArgs<ExtArgs>>): Prisma__entryClient<$Result.GetResult<Prisma.$entryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Entries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {entryCountArgs} args - Arguments to filter Entries to count.
     * @example
     * // Count the number of Entries
     * const count = await prisma.entry.count({
     *   where: {
     *     // ... the filter for the Entries we want to count
     *   }
     * })
    **/
    count<T extends entryCountArgs>(
      args?: Subset<T, entryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Entry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EntryAggregateArgs>(args: Subset<T, EntryAggregateArgs>): Prisma.PrismaPromise<GetEntryAggregateType<T>>

    /**
     * Group by Entry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {entryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends entryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: entryGroupByArgs['orderBy'] }
        : { orderBy?: entryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, entryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the entry model
   */
  readonly fields: entryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for entry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__entryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the entry model
   */
  interface entryFieldRefs {
    readonly id: FieldRef<"entry", 'Int'>
    readonly verifiername: FieldRef<"entry", 'String'>
    readonly checkername: FieldRef<"entry", 'String'>
    readonly partnumber: FieldRef<"entry", 'String'>
    readonly defectstatus: FieldRef<"entry", 'String'>
    readonly defect: FieldRef<"entry", 'String'>
    readonly datetime: FieldRef<"entry", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * entry findUnique
   */
  export type entryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entry
     */
    select?: entrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the entry
     */
    omit?: entryOmit<ExtArgs> | null
    /**
     * Filter, which entry to fetch.
     */
    where: entryWhereUniqueInput
  }

  /**
   * entry findUniqueOrThrow
   */
  export type entryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entry
     */
    select?: entrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the entry
     */
    omit?: entryOmit<ExtArgs> | null
    /**
     * Filter, which entry to fetch.
     */
    where: entryWhereUniqueInput
  }

  /**
   * entry findFirst
   */
  export type entryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entry
     */
    select?: entrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the entry
     */
    omit?: entryOmit<ExtArgs> | null
    /**
     * Filter, which entry to fetch.
     */
    where?: entryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of entries to fetch.
     */
    orderBy?: entryOrderByWithRelationInput | entryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for entries.
     */
    cursor?: entryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` entries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` entries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of entries.
     */
    distinct?: EntryScalarFieldEnum | EntryScalarFieldEnum[]
  }

  /**
   * entry findFirstOrThrow
   */
  export type entryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entry
     */
    select?: entrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the entry
     */
    omit?: entryOmit<ExtArgs> | null
    /**
     * Filter, which entry to fetch.
     */
    where?: entryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of entries to fetch.
     */
    orderBy?: entryOrderByWithRelationInput | entryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for entries.
     */
    cursor?: entryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` entries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` entries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of entries.
     */
    distinct?: EntryScalarFieldEnum | EntryScalarFieldEnum[]
  }

  /**
   * entry findMany
   */
  export type entryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entry
     */
    select?: entrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the entry
     */
    omit?: entryOmit<ExtArgs> | null
    /**
     * Filter, which entries to fetch.
     */
    where?: entryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of entries to fetch.
     */
    orderBy?: entryOrderByWithRelationInput | entryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing entries.
     */
    cursor?: entryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` entries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` entries.
     */
    skip?: number
    distinct?: EntryScalarFieldEnum | EntryScalarFieldEnum[]
  }

  /**
   * entry create
   */
  export type entryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entry
     */
    select?: entrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the entry
     */
    omit?: entryOmit<ExtArgs> | null
    /**
     * The data needed to create a entry.
     */
    data: XOR<entryCreateInput, entryUncheckedCreateInput>
  }

  /**
   * entry createMany
   */
  export type entryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many entries.
     */
    data: entryCreateManyInput | entryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * entry createManyAndReturn
   */
  export type entryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entry
     */
    select?: entrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the entry
     */
    omit?: entryOmit<ExtArgs> | null
    /**
     * The data used to create many entries.
     */
    data: entryCreateManyInput | entryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * entry update
   */
  export type entryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entry
     */
    select?: entrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the entry
     */
    omit?: entryOmit<ExtArgs> | null
    /**
     * The data needed to update a entry.
     */
    data: XOR<entryUpdateInput, entryUncheckedUpdateInput>
    /**
     * Choose, which entry to update.
     */
    where: entryWhereUniqueInput
  }

  /**
   * entry updateMany
   */
  export type entryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update entries.
     */
    data: XOR<entryUpdateManyMutationInput, entryUncheckedUpdateManyInput>
    /**
     * Filter which entries to update
     */
    where?: entryWhereInput
    /**
     * Limit how many entries to update.
     */
    limit?: number
  }

  /**
   * entry updateManyAndReturn
   */
  export type entryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entry
     */
    select?: entrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the entry
     */
    omit?: entryOmit<ExtArgs> | null
    /**
     * The data used to update entries.
     */
    data: XOR<entryUpdateManyMutationInput, entryUncheckedUpdateManyInput>
    /**
     * Filter which entries to update
     */
    where?: entryWhereInput
    /**
     * Limit how many entries to update.
     */
    limit?: number
  }

  /**
   * entry upsert
   */
  export type entryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entry
     */
    select?: entrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the entry
     */
    omit?: entryOmit<ExtArgs> | null
    /**
     * The filter to search for the entry to update in case it exists.
     */
    where: entryWhereUniqueInput
    /**
     * In case the entry found by the `where` argument doesn't exist, create a new entry with this data.
     */
    create: XOR<entryCreateInput, entryUncheckedCreateInput>
    /**
     * In case the entry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<entryUpdateInput, entryUncheckedUpdateInput>
  }

  /**
   * entry delete
   */
  export type entryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entry
     */
    select?: entrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the entry
     */
    omit?: entryOmit<ExtArgs> | null
    /**
     * Filter which entry to delete.
     */
    where: entryWhereUniqueInput
  }

  /**
   * entry deleteMany
   */
  export type entryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which entries to delete
     */
    where?: entryWhereInput
    /**
     * Limit how many entries to delete.
     */
    limit?: number
  }

  /**
   * entry without action
   */
  export type entryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entry
     */
    select?: entrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the entry
     */
    omit?: entryOmit<ExtArgs> | null
  }


  /**
   * Model Part
   */

  export type AggregatePart = {
    _count: PartCountAggregateOutputType | null
    _avg: PartAvgAggregateOutputType | null
    _sum: PartSumAggregateOutputType | null
    _min: PartMinAggregateOutputType | null
    _max: PartMaxAggregateOutputType | null
  }

  export type PartAvgAggregateOutputType = {
    id: number | null
    numLeakageFixtures: number | null
  }

  export type PartSumAggregateOutputType = {
    id: number | null
    numLeakageFixtures: number | null
  }

  export type PartMinAggregateOutputType = {
    id: number | null
    customer: string | null
    assyPartNo: string | null
    subAssyPartNo: string | null
    qualityPlanAvailable: string | null
    idA: string | null
    plugGaugeAvailableA: string | null
    idB: string | null
    plugGaugeAvailableB: string | null
    wallThicknessA: string | null
    wallThicknessB: string | null
    flareLengthMin: string | null
    endCapLengthMin: string | null
    profileFixtureAvailable: string | null
    hardness: string | null
    hardnessPinGaugeAvailable: string | null
    notchingRequired: string | null
    notchingToolAvailable: string | null
    connectorRequired: string | null
    connectorFixtureAvailable: string | null
    oetikerClampRequired: string | null
    oetikerClampFixture: string | null
    mubeaClamp: string | null
    mubeaClampFixture: string | null
    springBandClamp: string | null
    heatSinkSleeve: string | null
    assyProfileFixtureAvailable: string | null
    leakageTestingRequired: string | null
    leakageTestingPerformed: string | null
    leakageFixtureAvailable: string | null
    numLeakageFixtures: number | null
    cleanlinessMiliporeTest: string | null
    burstReqAvailable: string | null
    pullOutLoad: string | null
    vacuumTestingRequired: string | null
    vacuumTestingPerformed: string | null
    padPrintingFixture: string | null
    column: string | null
  }

  export type PartMaxAggregateOutputType = {
    id: number | null
    customer: string | null
    assyPartNo: string | null
    subAssyPartNo: string | null
    qualityPlanAvailable: string | null
    idA: string | null
    plugGaugeAvailableA: string | null
    idB: string | null
    plugGaugeAvailableB: string | null
    wallThicknessA: string | null
    wallThicknessB: string | null
    flareLengthMin: string | null
    endCapLengthMin: string | null
    profileFixtureAvailable: string | null
    hardness: string | null
    hardnessPinGaugeAvailable: string | null
    notchingRequired: string | null
    notchingToolAvailable: string | null
    connectorRequired: string | null
    connectorFixtureAvailable: string | null
    oetikerClampRequired: string | null
    oetikerClampFixture: string | null
    mubeaClamp: string | null
    mubeaClampFixture: string | null
    springBandClamp: string | null
    heatSinkSleeve: string | null
    assyProfileFixtureAvailable: string | null
    leakageTestingRequired: string | null
    leakageTestingPerformed: string | null
    leakageFixtureAvailable: string | null
    numLeakageFixtures: number | null
    cleanlinessMiliporeTest: string | null
    burstReqAvailable: string | null
    pullOutLoad: string | null
    vacuumTestingRequired: string | null
    vacuumTestingPerformed: string | null
    padPrintingFixture: string | null
    column: string | null
  }

  export type PartCountAggregateOutputType = {
    id: number
    customer: number
    assyPartNo: number
    subAssyPartNo: number
    qualityPlanAvailable: number
    idA: number
    plugGaugeAvailableA: number
    idB: number
    plugGaugeAvailableB: number
    wallThicknessA: number
    wallThicknessB: number
    flareLengthMin: number
    endCapLengthMin: number
    profileFixtureAvailable: number
    hardness: number
    hardnessPinGaugeAvailable: number
    notchingRequired: number
    notchingToolAvailable: number
    connectorRequired: number
    connectorFixtureAvailable: number
    oetikerClampRequired: number
    oetikerClampFixture: number
    mubeaClamp: number
    mubeaClampFixture: number
    springBandClamp: number
    heatSinkSleeve: number
    assyProfileFixtureAvailable: number
    leakageTestingRequired: number
    leakageTestingPerformed: number
    leakageFixtureAvailable: number
    numLeakageFixtures: number
    cleanlinessMiliporeTest: number
    burstReqAvailable: number
    pullOutLoad: number
    vacuumTestingRequired: number
    vacuumTestingPerformed: number
    padPrintingFixture: number
    column: number
    _all: number
  }


  export type PartAvgAggregateInputType = {
    id?: true
    numLeakageFixtures?: true
  }

  export type PartSumAggregateInputType = {
    id?: true
    numLeakageFixtures?: true
  }

  export type PartMinAggregateInputType = {
    id?: true
    customer?: true
    assyPartNo?: true
    subAssyPartNo?: true
    qualityPlanAvailable?: true
    idA?: true
    plugGaugeAvailableA?: true
    idB?: true
    plugGaugeAvailableB?: true
    wallThicknessA?: true
    wallThicknessB?: true
    flareLengthMin?: true
    endCapLengthMin?: true
    profileFixtureAvailable?: true
    hardness?: true
    hardnessPinGaugeAvailable?: true
    notchingRequired?: true
    notchingToolAvailable?: true
    connectorRequired?: true
    connectorFixtureAvailable?: true
    oetikerClampRequired?: true
    oetikerClampFixture?: true
    mubeaClamp?: true
    mubeaClampFixture?: true
    springBandClamp?: true
    heatSinkSleeve?: true
    assyProfileFixtureAvailable?: true
    leakageTestingRequired?: true
    leakageTestingPerformed?: true
    leakageFixtureAvailable?: true
    numLeakageFixtures?: true
    cleanlinessMiliporeTest?: true
    burstReqAvailable?: true
    pullOutLoad?: true
    vacuumTestingRequired?: true
    vacuumTestingPerformed?: true
    padPrintingFixture?: true
    column?: true
  }

  export type PartMaxAggregateInputType = {
    id?: true
    customer?: true
    assyPartNo?: true
    subAssyPartNo?: true
    qualityPlanAvailable?: true
    idA?: true
    plugGaugeAvailableA?: true
    idB?: true
    plugGaugeAvailableB?: true
    wallThicknessA?: true
    wallThicknessB?: true
    flareLengthMin?: true
    endCapLengthMin?: true
    profileFixtureAvailable?: true
    hardness?: true
    hardnessPinGaugeAvailable?: true
    notchingRequired?: true
    notchingToolAvailable?: true
    connectorRequired?: true
    connectorFixtureAvailable?: true
    oetikerClampRequired?: true
    oetikerClampFixture?: true
    mubeaClamp?: true
    mubeaClampFixture?: true
    springBandClamp?: true
    heatSinkSleeve?: true
    assyProfileFixtureAvailable?: true
    leakageTestingRequired?: true
    leakageTestingPerformed?: true
    leakageFixtureAvailable?: true
    numLeakageFixtures?: true
    cleanlinessMiliporeTest?: true
    burstReqAvailable?: true
    pullOutLoad?: true
    vacuumTestingRequired?: true
    vacuumTestingPerformed?: true
    padPrintingFixture?: true
    column?: true
  }

  export type PartCountAggregateInputType = {
    id?: true
    customer?: true
    assyPartNo?: true
    subAssyPartNo?: true
    qualityPlanAvailable?: true
    idA?: true
    plugGaugeAvailableA?: true
    idB?: true
    plugGaugeAvailableB?: true
    wallThicknessA?: true
    wallThicknessB?: true
    flareLengthMin?: true
    endCapLengthMin?: true
    profileFixtureAvailable?: true
    hardness?: true
    hardnessPinGaugeAvailable?: true
    notchingRequired?: true
    notchingToolAvailable?: true
    connectorRequired?: true
    connectorFixtureAvailable?: true
    oetikerClampRequired?: true
    oetikerClampFixture?: true
    mubeaClamp?: true
    mubeaClampFixture?: true
    springBandClamp?: true
    heatSinkSleeve?: true
    assyProfileFixtureAvailable?: true
    leakageTestingRequired?: true
    leakageTestingPerformed?: true
    leakageFixtureAvailable?: true
    numLeakageFixtures?: true
    cleanlinessMiliporeTest?: true
    burstReqAvailable?: true
    pullOutLoad?: true
    vacuumTestingRequired?: true
    vacuumTestingPerformed?: true
    padPrintingFixture?: true
    column?: true
    _all?: true
  }

  export type PartAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Part to aggregate.
     */
    where?: PartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parts to fetch.
     */
    orderBy?: PartOrderByWithRelationInput | PartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Parts
    **/
    _count?: true | PartCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PartAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PartSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PartMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PartMaxAggregateInputType
  }

  export type GetPartAggregateType<T extends PartAggregateArgs> = {
        [P in keyof T & keyof AggregatePart]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePart[P]>
      : GetScalarType<T[P], AggregatePart[P]>
  }




  export type PartGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PartWhereInput
    orderBy?: PartOrderByWithAggregationInput | PartOrderByWithAggregationInput[]
    by: PartScalarFieldEnum[] | PartScalarFieldEnum
    having?: PartScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PartCountAggregateInputType | true
    _avg?: PartAvgAggregateInputType
    _sum?: PartSumAggregateInputType
    _min?: PartMinAggregateInputType
    _max?: PartMaxAggregateInputType
  }

  export type PartGroupByOutputType = {
    id: number
    customer: string
    assyPartNo: string
    subAssyPartNo: string
    qualityPlanAvailable: string
    idA: string
    plugGaugeAvailableA: string
    idB: string
    plugGaugeAvailableB: string
    wallThicknessA: string
    wallThicknessB: string
    flareLengthMin: string
    endCapLengthMin: string
    profileFixtureAvailable: string
    hardness: string
    hardnessPinGaugeAvailable: string
    notchingRequired: string
    notchingToolAvailable: string
    connectorRequired: string
    connectorFixtureAvailable: string
    oetikerClampRequired: string
    oetikerClampFixture: string
    mubeaClamp: string
    mubeaClampFixture: string
    springBandClamp: string
    heatSinkSleeve: string
    assyProfileFixtureAvailable: string
    leakageTestingRequired: string
    leakageTestingPerformed: string
    leakageFixtureAvailable: string
    numLeakageFixtures: number
    cleanlinessMiliporeTest: string
    burstReqAvailable: string
    pullOutLoad: string
    vacuumTestingRequired: string
    vacuumTestingPerformed: string
    padPrintingFixture: string
    column: string
    _count: PartCountAggregateOutputType | null
    _avg: PartAvgAggregateOutputType | null
    _sum: PartSumAggregateOutputType | null
    _min: PartMinAggregateOutputType | null
    _max: PartMaxAggregateOutputType | null
  }

  type GetPartGroupByPayload<T extends PartGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PartGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PartGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PartGroupByOutputType[P]>
            : GetScalarType<T[P], PartGroupByOutputType[P]>
        }
      >
    >


  export type PartSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customer?: boolean
    assyPartNo?: boolean
    subAssyPartNo?: boolean
    qualityPlanAvailable?: boolean
    idA?: boolean
    plugGaugeAvailableA?: boolean
    idB?: boolean
    plugGaugeAvailableB?: boolean
    wallThicknessA?: boolean
    wallThicknessB?: boolean
    flareLengthMin?: boolean
    endCapLengthMin?: boolean
    profileFixtureAvailable?: boolean
    hardness?: boolean
    hardnessPinGaugeAvailable?: boolean
    notchingRequired?: boolean
    notchingToolAvailable?: boolean
    connectorRequired?: boolean
    connectorFixtureAvailable?: boolean
    oetikerClampRequired?: boolean
    oetikerClampFixture?: boolean
    mubeaClamp?: boolean
    mubeaClampFixture?: boolean
    springBandClamp?: boolean
    heatSinkSleeve?: boolean
    assyProfileFixtureAvailable?: boolean
    leakageTestingRequired?: boolean
    leakageTestingPerformed?: boolean
    leakageFixtureAvailable?: boolean
    numLeakageFixtures?: boolean
    cleanlinessMiliporeTest?: boolean
    burstReqAvailable?: boolean
    pullOutLoad?: boolean
    vacuumTestingRequired?: boolean
    vacuumTestingPerformed?: boolean
    padPrintingFixture?: boolean
    column?: boolean
  }, ExtArgs["result"]["part"]>

  export type PartSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customer?: boolean
    assyPartNo?: boolean
    subAssyPartNo?: boolean
    qualityPlanAvailable?: boolean
    idA?: boolean
    plugGaugeAvailableA?: boolean
    idB?: boolean
    plugGaugeAvailableB?: boolean
    wallThicknessA?: boolean
    wallThicknessB?: boolean
    flareLengthMin?: boolean
    endCapLengthMin?: boolean
    profileFixtureAvailable?: boolean
    hardness?: boolean
    hardnessPinGaugeAvailable?: boolean
    notchingRequired?: boolean
    notchingToolAvailable?: boolean
    connectorRequired?: boolean
    connectorFixtureAvailable?: boolean
    oetikerClampRequired?: boolean
    oetikerClampFixture?: boolean
    mubeaClamp?: boolean
    mubeaClampFixture?: boolean
    springBandClamp?: boolean
    heatSinkSleeve?: boolean
    assyProfileFixtureAvailable?: boolean
    leakageTestingRequired?: boolean
    leakageTestingPerformed?: boolean
    leakageFixtureAvailable?: boolean
    numLeakageFixtures?: boolean
    cleanlinessMiliporeTest?: boolean
    burstReqAvailable?: boolean
    pullOutLoad?: boolean
    vacuumTestingRequired?: boolean
    vacuumTestingPerformed?: boolean
    padPrintingFixture?: boolean
    column?: boolean
  }, ExtArgs["result"]["part"]>

  export type PartSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customer?: boolean
    assyPartNo?: boolean
    subAssyPartNo?: boolean
    qualityPlanAvailable?: boolean
    idA?: boolean
    plugGaugeAvailableA?: boolean
    idB?: boolean
    plugGaugeAvailableB?: boolean
    wallThicknessA?: boolean
    wallThicknessB?: boolean
    flareLengthMin?: boolean
    endCapLengthMin?: boolean
    profileFixtureAvailable?: boolean
    hardness?: boolean
    hardnessPinGaugeAvailable?: boolean
    notchingRequired?: boolean
    notchingToolAvailable?: boolean
    connectorRequired?: boolean
    connectorFixtureAvailable?: boolean
    oetikerClampRequired?: boolean
    oetikerClampFixture?: boolean
    mubeaClamp?: boolean
    mubeaClampFixture?: boolean
    springBandClamp?: boolean
    heatSinkSleeve?: boolean
    assyProfileFixtureAvailable?: boolean
    leakageTestingRequired?: boolean
    leakageTestingPerformed?: boolean
    leakageFixtureAvailable?: boolean
    numLeakageFixtures?: boolean
    cleanlinessMiliporeTest?: boolean
    burstReqAvailable?: boolean
    pullOutLoad?: boolean
    vacuumTestingRequired?: boolean
    vacuumTestingPerformed?: boolean
    padPrintingFixture?: boolean
    column?: boolean
  }, ExtArgs["result"]["part"]>

  export type PartSelectScalar = {
    id?: boolean
    customer?: boolean
    assyPartNo?: boolean
    subAssyPartNo?: boolean
    qualityPlanAvailable?: boolean
    idA?: boolean
    plugGaugeAvailableA?: boolean
    idB?: boolean
    plugGaugeAvailableB?: boolean
    wallThicknessA?: boolean
    wallThicknessB?: boolean
    flareLengthMin?: boolean
    endCapLengthMin?: boolean
    profileFixtureAvailable?: boolean
    hardness?: boolean
    hardnessPinGaugeAvailable?: boolean
    notchingRequired?: boolean
    notchingToolAvailable?: boolean
    connectorRequired?: boolean
    connectorFixtureAvailable?: boolean
    oetikerClampRequired?: boolean
    oetikerClampFixture?: boolean
    mubeaClamp?: boolean
    mubeaClampFixture?: boolean
    springBandClamp?: boolean
    heatSinkSleeve?: boolean
    assyProfileFixtureAvailable?: boolean
    leakageTestingRequired?: boolean
    leakageTestingPerformed?: boolean
    leakageFixtureAvailable?: boolean
    numLeakageFixtures?: boolean
    cleanlinessMiliporeTest?: boolean
    burstReqAvailable?: boolean
    pullOutLoad?: boolean
    vacuumTestingRequired?: boolean
    vacuumTestingPerformed?: boolean
    padPrintingFixture?: boolean
    column?: boolean
  }

  export type PartOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "customer" | "assyPartNo" | "subAssyPartNo" | "qualityPlanAvailable" | "idA" | "plugGaugeAvailableA" | "idB" | "plugGaugeAvailableB" | "wallThicknessA" | "wallThicknessB" | "flareLengthMin" | "endCapLengthMin" | "profileFixtureAvailable" | "hardness" | "hardnessPinGaugeAvailable" | "notchingRequired" | "notchingToolAvailable" | "connectorRequired" | "connectorFixtureAvailable" | "oetikerClampRequired" | "oetikerClampFixture" | "mubeaClamp" | "mubeaClampFixture" | "springBandClamp" | "heatSinkSleeve" | "assyProfileFixtureAvailable" | "leakageTestingRequired" | "leakageTestingPerformed" | "leakageFixtureAvailable" | "numLeakageFixtures" | "cleanlinessMiliporeTest" | "burstReqAvailable" | "pullOutLoad" | "vacuumTestingRequired" | "vacuumTestingPerformed" | "padPrintingFixture" | "column", ExtArgs["result"]["part"]>

  export type $PartPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Part"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      customer: string
      assyPartNo: string
      subAssyPartNo: string
      qualityPlanAvailable: string
      idA: string
      plugGaugeAvailableA: string
      idB: string
      plugGaugeAvailableB: string
      wallThicknessA: string
      wallThicknessB: string
      flareLengthMin: string
      endCapLengthMin: string
      profileFixtureAvailable: string
      hardness: string
      hardnessPinGaugeAvailable: string
      notchingRequired: string
      notchingToolAvailable: string
      connectorRequired: string
      connectorFixtureAvailable: string
      oetikerClampRequired: string
      oetikerClampFixture: string
      mubeaClamp: string
      mubeaClampFixture: string
      springBandClamp: string
      heatSinkSleeve: string
      assyProfileFixtureAvailable: string
      leakageTestingRequired: string
      leakageTestingPerformed: string
      leakageFixtureAvailable: string
      numLeakageFixtures: number
      cleanlinessMiliporeTest: string
      burstReqAvailable: string
      pullOutLoad: string
      vacuumTestingRequired: string
      vacuumTestingPerformed: string
      padPrintingFixture: string
      column: string
    }, ExtArgs["result"]["part"]>
    composites: {}
  }

  type PartGetPayload<S extends boolean | null | undefined | PartDefaultArgs> = $Result.GetResult<Prisma.$PartPayload, S>

  type PartCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PartFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PartCountAggregateInputType | true
    }

  export interface PartDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Part'], meta: { name: 'Part' } }
    /**
     * Find zero or one Part that matches the filter.
     * @param {PartFindUniqueArgs} args - Arguments to find a Part
     * @example
     * // Get one Part
     * const part = await prisma.part.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PartFindUniqueArgs>(args: SelectSubset<T, PartFindUniqueArgs<ExtArgs>>): Prisma__PartClient<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Part that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PartFindUniqueOrThrowArgs} args - Arguments to find a Part
     * @example
     * // Get one Part
     * const part = await prisma.part.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PartFindUniqueOrThrowArgs>(args: SelectSubset<T, PartFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PartClient<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Part that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartFindFirstArgs} args - Arguments to find a Part
     * @example
     * // Get one Part
     * const part = await prisma.part.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PartFindFirstArgs>(args?: SelectSubset<T, PartFindFirstArgs<ExtArgs>>): Prisma__PartClient<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Part that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartFindFirstOrThrowArgs} args - Arguments to find a Part
     * @example
     * // Get one Part
     * const part = await prisma.part.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PartFindFirstOrThrowArgs>(args?: SelectSubset<T, PartFindFirstOrThrowArgs<ExtArgs>>): Prisma__PartClient<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Parts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Parts
     * const parts = await prisma.part.findMany()
     * 
     * // Get first 10 Parts
     * const parts = await prisma.part.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const partWithIdOnly = await prisma.part.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PartFindManyArgs>(args?: SelectSubset<T, PartFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Part.
     * @param {PartCreateArgs} args - Arguments to create a Part.
     * @example
     * // Create one Part
     * const Part = await prisma.part.create({
     *   data: {
     *     // ... data to create a Part
     *   }
     * })
     * 
     */
    create<T extends PartCreateArgs>(args: SelectSubset<T, PartCreateArgs<ExtArgs>>): Prisma__PartClient<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Parts.
     * @param {PartCreateManyArgs} args - Arguments to create many Parts.
     * @example
     * // Create many Parts
     * const part = await prisma.part.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PartCreateManyArgs>(args?: SelectSubset<T, PartCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Parts and returns the data saved in the database.
     * @param {PartCreateManyAndReturnArgs} args - Arguments to create many Parts.
     * @example
     * // Create many Parts
     * const part = await prisma.part.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Parts and only return the `id`
     * const partWithIdOnly = await prisma.part.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PartCreateManyAndReturnArgs>(args?: SelectSubset<T, PartCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Part.
     * @param {PartDeleteArgs} args - Arguments to delete one Part.
     * @example
     * // Delete one Part
     * const Part = await prisma.part.delete({
     *   where: {
     *     // ... filter to delete one Part
     *   }
     * })
     * 
     */
    delete<T extends PartDeleteArgs>(args: SelectSubset<T, PartDeleteArgs<ExtArgs>>): Prisma__PartClient<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Part.
     * @param {PartUpdateArgs} args - Arguments to update one Part.
     * @example
     * // Update one Part
     * const part = await prisma.part.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PartUpdateArgs>(args: SelectSubset<T, PartUpdateArgs<ExtArgs>>): Prisma__PartClient<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Parts.
     * @param {PartDeleteManyArgs} args - Arguments to filter Parts to delete.
     * @example
     * // Delete a few Parts
     * const { count } = await prisma.part.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PartDeleteManyArgs>(args?: SelectSubset<T, PartDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Parts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Parts
     * const part = await prisma.part.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PartUpdateManyArgs>(args: SelectSubset<T, PartUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Parts and returns the data updated in the database.
     * @param {PartUpdateManyAndReturnArgs} args - Arguments to update many Parts.
     * @example
     * // Update many Parts
     * const part = await prisma.part.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Parts and only return the `id`
     * const partWithIdOnly = await prisma.part.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PartUpdateManyAndReturnArgs>(args: SelectSubset<T, PartUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Part.
     * @param {PartUpsertArgs} args - Arguments to update or create a Part.
     * @example
     * // Update or create a Part
     * const part = await prisma.part.upsert({
     *   create: {
     *     // ... data to create a Part
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Part we want to update
     *   }
     * })
     */
    upsert<T extends PartUpsertArgs>(args: SelectSubset<T, PartUpsertArgs<ExtArgs>>): Prisma__PartClient<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Parts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartCountArgs} args - Arguments to filter Parts to count.
     * @example
     * // Count the number of Parts
     * const count = await prisma.part.count({
     *   where: {
     *     // ... the filter for the Parts we want to count
     *   }
     * })
    **/
    count<T extends PartCountArgs>(
      args?: Subset<T, PartCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PartCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Part.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PartAggregateArgs>(args: Subset<T, PartAggregateArgs>): Prisma.PrismaPromise<GetPartAggregateType<T>>

    /**
     * Group by Part.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PartGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PartGroupByArgs['orderBy'] }
        : { orderBy?: PartGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PartGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPartGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Part model
   */
  readonly fields: PartFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Part.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PartClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Part model
   */
  interface PartFieldRefs {
    readonly id: FieldRef<"Part", 'Int'>
    readonly customer: FieldRef<"Part", 'String'>
    readonly assyPartNo: FieldRef<"Part", 'String'>
    readonly subAssyPartNo: FieldRef<"Part", 'String'>
    readonly qualityPlanAvailable: FieldRef<"Part", 'String'>
    readonly idA: FieldRef<"Part", 'String'>
    readonly plugGaugeAvailableA: FieldRef<"Part", 'String'>
    readonly idB: FieldRef<"Part", 'String'>
    readonly plugGaugeAvailableB: FieldRef<"Part", 'String'>
    readonly wallThicknessA: FieldRef<"Part", 'String'>
    readonly wallThicknessB: FieldRef<"Part", 'String'>
    readonly flareLengthMin: FieldRef<"Part", 'String'>
    readonly endCapLengthMin: FieldRef<"Part", 'String'>
    readonly profileFixtureAvailable: FieldRef<"Part", 'String'>
    readonly hardness: FieldRef<"Part", 'String'>
    readonly hardnessPinGaugeAvailable: FieldRef<"Part", 'String'>
    readonly notchingRequired: FieldRef<"Part", 'String'>
    readonly notchingToolAvailable: FieldRef<"Part", 'String'>
    readonly connectorRequired: FieldRef<"Part", 'String'>
    readonly connectorFixtureAvailable: FieldRef<"Part", 'String'>
    readonly oetikerClampRequired: FieldRef<"Part", 'String'>
    readonly oetikerClampFixture: FieldRef<"Part", 'String'>
    readonly mubeaClamp: FieldRef<"Part", 'String'>
    readonly mubeaClampFixture: FieldRef<"Part", 'String'>
    readonly springBandClamp: FieldRef<"Part", 'String'>
    readonly heatSinkSleeve: FieldRef<"Part", 'String'>
    readonly assyProfileFixtureAvailable: FieldRef<"Part", 'String'>
    readonly leakageTestingRequired: FieldRef<"Part", 'String'>
    readonly leakageTestingPerformed: FieldRef<"Part", 'String'>
    readonly leakageFixtureAvailable: FieldRef<"Part", 'String'>
    readonly numLeakageFixtures: FieldRef<"Part", 'Int'>
    readonly cleanlinessMiliporeTest: FieldRef<"Part", 'String'>
    readonly burstReqAvailable: FieldRef<"Part", 'String'>
    readonly pullOutLoad: FieldRef<"Part", 'String'>
    readonly vacuumTestingRequired: FieldRef<"Part", 'String'>
    readonly vacuumTestingPerformed: FieldRef<"Part", 'String'>
    readonly padPrintingFixture: FieldRef<"Part", 'String'>
    readonly column: FieldRef<"Part", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Part findUnique
   */
  export type PartFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Part
     */
    omit?: PartOmit<ExtArgs> | null
    /**
     * Filter, which Part to fetch.
     */
    where: PartWhereUniqueInput
  }

  /**
   * Part findUniqueOrThrow
   */
  export type PartFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Part
     */
    omit?: PartOmit<ExtArgs> | null
    /**
     * Filter, which Part to fetch.
     */
    where: PartWhereUniqueInput
  }

  /**
   * Part findFirst
   */
  export type PartFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Part
     */
    omit?: PartOmit<ExtArgs> | null
    /**
     * Filter, which Part to fetch.
     */
    where?: PartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parts to fetch.
     */
    orderBy?: PartOrderByWithRelationInput | PartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Parts.
     */
    cursor?: PartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Parts.
     */
    distinct?: PartScalarFieldEnum | PartScalarFieldEnum[]
  }

  /**
   * Part findFirstOrThrow
   */
  export type PartFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Part
     */
    omit?: PartOmit<ExtArgs> | null
    /**
     * Filter, which Part to fetch.
     */
    where?: PartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parts to fetch.
     */
    orderBy?: PartOrderByWithRelationInput | PartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Parts.
     */
    cursor?: PartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Parts.
     */
    distinct?: PartScalarFieldEnum | PartScalarFieldEnum[]
  }

  /**
   * Part findMany
   */
  export type PartFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Part
     */
    omit?: PartOmit<ExtArgs> | null
    /**
     * Filter, which Parts to fetch.
     */
    where?: PartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parts to fetch.
     */
    orderBy?: PartOrderByWithRelationInput | PartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Parts.
     */
    cursor?: PartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parts.
     */
    skip?: number
    distinct?: PartScalarFieldEnum | PartScalarFieldEnum[]
  }

  /**
   * Part create
   */
  export type PartCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Part
     */
    omit?: PartOmit<ExtArgs> | null
    /**
     * The data needed to create a Part.
     */
    data: XOR<PartCreateInput, PartUncheckedCreateInput>
  }

  /**
   * Part createMany
   */
  export type PartCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Parts.
     */
    data: PartCreateManyInput | PartCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Part createManyAndReturn
   */
  export type PartCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Part
     */
    omit?: PartOmit<ExtArgs> | null
    /**
     * The data used to create many Parts.
     */
    data: PartCreateManyInput | PartCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Part update
   */
  export type PartUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Part
     */
    omit?: PartOmit<ExtArgs> | null
    /**
     * The data needed to update a Part.
     */
    data: XOR<PartUpdateInput, PartUncheckedUpdateInput>
    /**
     * Choose, which Part to update.
     */
    where: PartWhereUniqueInput
  }

  /**
   * Part updateMany
   */
  export type PartUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Parts.
     */
    data: XOR<PartUpdateManyMutationInput, PartUncheckedUpdateManyInput>
    /**
     * Filter which Parts to update
     */
    where?: PartWhereInput
    /**
     * Limit how many Parts to update.
     */
    limit?: number
  }

  /**
   * Part updateManyAndReturn
   */
  export type PartUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Part
     */
    omit?: PartOmit<ExtArgs> | null
    /**
     * The data used to update Parts.
     */
    data: XOR<PartUpdateManyMutationInput, PartUncheckedUpdateManyInput>
    /**
     * Filter which Parts to update
     */
    where?: PartWhereInput
    /**
     * Limit how many Parts to update.
     */
    limit?: number
  }

  /**
   * Part upsert
   */
  export type PartUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Part
     */
    omit?: PartOmit<ExtArgs> | null
    /**
     * The filter to search for the Part to update in case it exists.
     */
    where: PartWhereUniqueInput
    /**
     * In case the Part found by the `where` argument doesn't exist, create a new Part with this data.
     */
    create: XOR<PartCreateInput, PartUncheckedCreateInput>
    /**
     * In case the Part was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PartUpdateInput, PartUncheckedUpdateInput>
  }

  /**
   * Part delete
   */
  export type PartDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Part
     */
    omit?: PartOmit<ExtArgs> | null
    /**
     * Filter which Part to delete.
     */
    where: PartWhereUniqueInput
  }

  /**
   * Part deleteMany
   */
  export type PartDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Parts to delete
     */
    where?: PartWhereInput
    /**
     * Limit how many Parts to delete.
     */
    limit?: number
  }

  /**
   * Part without action
   */
  export type PartDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Part
     */
    omit?: PartOmit<ExtArgs> | null
  }


  /**
   * Model Defects
   */

  export type AggregateDefects = {
    _count: DefectsCountAggregateOutputType | null
    _avg: DefectsAvgAggregateOutputType | null
    _sum: DefectsSumAggregateOutputType | null
    _min: DefectsMinAggregateOutputType | null
    _max: DefectsMaxAggregateOutputType | null
  }

  export type DefectsAvgAggregateOutputType = {
    id: number | null
  }

  export type DefectsSumAggregateOutputType = {
    id: number | null
  }

  export type DefectsMinAggregateOutputType = {
    id: number | null
    defectcode: string | null
    defect: string | null
  }

  export type DefectsMaxAggregateOutputType = {
    id: number | null
    defectcode: string | null
    defect: string | null
  }

  export type DefectsCountAggregateOutputType = {
    id: number
    defectcode: number
    defect: number
    _all: number
  }


  export type DefectsAvgAggregateInputType = {
    id?: true
  }

  export type DefectsSumAggregateInputType = {
    id?: true
  }

  export type DefectsMinAggregateInputType = {
    id?: true
    defectcode?: true
    defect?: true
  }

  export type DefectsMaxAggregateInputType = {
    id?: true
    defectcode?: true
    defect?: true
  }

  export type DefectsCountAggregateInputType = {
    id?: true
    defectcode?: true
    defect?: true
    _all?: true
  }

  export type DefectsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Defects to aggregate.
     */
    where?: DefectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Defects to fetch.
     */
    orderBy?: DefectsOrderByWithRelationInput | DefectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DefectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Defects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Defects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Defects
    **/
    _count?: true | DefectsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DefectsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DefectsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DefectsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DefectsMaxAggregateInputType
  }

  export type GetDefectsAggregateType<T extends DefectsAggregateArgs> = {
        [P in keyof T & keyof AggregateDefects]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDefects[P]>
      : GetScalarType<T[P], AggregateDefects[P]>
  }




  export type DefectsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DefectsWhereInput
    orderBy?: DefectsOrderByWithAggregationInput | DefectsOrderByWithAggregationInput[]
    by: DefectsScalarFieldEnum[] | DefectsScalarFieldEnum
    having?: DefectsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DefectsCountAggregateInputType | true
    _avg?: DefectsAvgAggregateInputType
    _sum?: DefectsSumAggregateInputType
    _min?: DefectsMinAggregateInputType
    _max?: DefectsMaxAggregateInputType
  }

  export type DefectsGroupByOutputType = {
    id: number
    defectcode: string
    defect: string
    _count: DefectsCountAggregateOutputType | null
    _avg: DefectsAvgAggregateOutputType | null
    _sum: DefectsSumAggregateOutputType | null
    _min: DefectsMinAggregateOutputType | null
    _max: DefectsMaxAggregateOutputType | null
  }

  type GetDefectsGroupByPayload<T extends DefectsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DefectsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DefectsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DefectsGroupByOutputType[P]>
            : GetScalarType<T[P], DefectsGroupByOutputType[P]>
        }
      >
    >


  export type DefectsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    defectcode?: boolean
    defect?: boolean
  }, ExtArgs["result"]["defects"]>

  export type DefectsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    defectcode?: boolean
    defect?: boolean
  }, ExtArgs["result"]["defects"]>

  export type DefectsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    defectcode?: boolean
    defect?: boolean
  }, ExtArgs["result"]["defects"]>

  export type DefectsSelectScalar = {
    id?: boolean
    defectcode?: boolean
    defect?: boolean
  }

  export type DefectsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "defectcode" | "defect", ExtArgs["result"]["defects"]>

  export type $DefectsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Defects"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      defectcode: string
      defect: string
    }, ExtArgs["result"]["defects"]>
    composites: {}
  }

  type DefectsGetPayload<S extends boolean | null | undefined | DefectsDefaultArgs> = $Result.GetResult<Prisma.$DefectsPayload, S>

  type DefectsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DefectsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DefectsCountAggregateInputType | true
    }

  export interface DefectsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Defects'], meta: { name: 'Defects' } }
    /**
     * Find zero or one Defects that matches the filter.
     * @param {DefectsFindUniqueArgs} args - Arguments to find a Defects
     * @example
     * // Get one Defects
     * const defects = await prisma.defects.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DefectsFindUniqueArgs>(args: SelectSubset<T, DefectsFindUniqueArgs<ExtArgs>>): Prisma__DefectsClient<$Result.GetResult<Prisma.$DefectsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Defects that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DefectsFindUniqueOrThrowArgs} args - Arguments to find a Defects
     * @example
     * // Get one Defects
     * const defects = await prisma.defects.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DefectsFindUniqueOrThrowArgs>(args: SelectSubset<T, DefectsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DefectsClient<$Result.GetResult<Prisma.$DefectsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Defects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DefectsFindFirstArgs} args - Arguments to find a Defects
     * @example
     * // Get one Defects
     * const defects = await prisma.defects.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DefectsFindFirstArgs>(args?: SelectSubset<T, DefectsFindFirstArgs<ExtArgs>>): Prisma__DefectsClient<$Result.GetResult<Prisma.$DefectsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Defects that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DefectsFindFirstOrThrowArgs} args - Arguments to find a Defects
     * @example
     * // Get one Defects
     * const defects = await prisma.defects.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DefectsFindFirstOrThrowArgs>(args?: SelectSubset<T, DefectsFindFirstOrThrowArgs<ExtArgs>>): Prisma__DefectsClient<$Result.GetResult<Prisma.$DefectsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Defects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DefectsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Defects
     * const defects = await prisma.defects.findMany()
     * 
     * // Get first 10 Defects
     * const defects = await prisma.defects.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const defectsWithIdOnly = await prisma.defects.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DefectsFindManyArgs>(args?: SelectSubset<T, DefectsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DefectsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Defects.
     * @param {DefectsCreateArgs} args - Arguments to create a Defects.
     * @example
     * // Create one Defects
     * const Defects = await prisma.defects.create({
     *   data: {
     *     // ... data to create a Defects
     *   }
     * })
     * 
     */
    create<T extends DefectsCreateArgs>(args: SelectSubset<T, DefectsCreateArgs<ExtArgs>>): Prisma__DefectsClient<$Result.GetResult<Prisma.$DefectsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Defects.
     * @param {DefectsCreateManyArgs} args - Arguments to create many Defects.
     * @example
     * // Create many Defects
     * const defects = await prisma.defects.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DefectsCreateManyArgs>(args?: SelectSubset<T, DefectsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Defects and returns the data saved in the database.
     * @param {DefectsCreateManyAndReturnArgs} args - Arguments to create many Defects.
     * @example
     * // Create many Defects
     * const defects = await prisma.defects.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Defects and only return the `id`
     * const defectsWithIdOnly = await prisma.defects.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DefectsCreateManyAndReturnArgs>(args?: SelectSubset<T, DefectsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DefectsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Defects.
     * @param {DefectsDeleteArgs} args - Arguments to delete one Defects.
     * @example
     * // Delete one Defects
     * const Defects = await prisma.defects.delete({
     *   where: {
     *     // ... filter to delete one Defects
     *   }
     * })
     * 
     */
    delete<T extends DefectsDeleteArgs>(args: SelectSubset<T, DefectsDeleteArgs<ExtArgs>>): Prisma__DefectsClient<$Result.GetResult<Prisma.$DefectsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Defects.
     * @param {DefectsUpdateArgs} args - Arguments to update one Defects.
     * @example
     * // Update one Defects
     * const defects = await prisma.defects.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DefectsUpdateArgs>(args: SelectSubset<T, DefectsUpdateArgs<ExtArgs>>): Prisma__DefectsClient<$Result.GetResult<Prisma.$DefectsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Defects.
     * @param {DefectsDeleteManyArgs} args - Arguments to filter Defects to delete.
     * @example
     * // Delete a few Defects
     * const { count } = await prisma.defects.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DefectsDeleteManyArgs>(args?: SelectSubset<T, DefectsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Defects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DefectsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Defects
     * const defects = await prisma.defects.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DefectsUpdateManyArgs>(args: SelectSubset<T, DefectsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Defects and returns the data updated in the database.
     * @param {DefectsUpdateManyAndReturnArgs} args - Arguments to update many Defects.
     * @example
     * // Update many Defects
     * const defects = await prisma.defects.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Defects and only return the `id`
     * const defectsWithIdOnly = await prisma.defects.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DefectsUpdateManyAndReturnArgs>(args: SelectSubset<T, DefectsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DefectsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Defects.
     * @param {DefectsUpsertArgs} args - Arguments to update or create a Defects.
     * @example
     * // Update or create a Defects
     * const defects = await prisma.defects.upsert({
     *   create: {
     *     // ... data to create a Defects
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Defects we want to update
     *   }
     * })
     */
    upsert<T extends DefectsUpsertArgs>(args: SelectSubset<T, DefectsUpsertArgs<ExtArgs>>): Prisma__DefectsClient<$Result.GetResult<Prisma.$DefectsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Defects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DefectsCountArgs} args - Arguments to filter Defects to count.
     * @example
     * // Count the number of Defects
     * const count = await prisma.defects.count({
     *   where: {
     *     // ... the filter for the Defects we want to count
     *   }
     * })
    **/
    count<T extends DefectsCountArgs>(
      args?: Subset<T, DefectsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DefectsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Defects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DefectsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DefectsAggregateArgs>(args: Subset<T, DefectsAggregateArgs>): Prisma.PrismaPromise<GetDefectsAggregateType<T>>

    /**
     * Group by Defects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DefectsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DefectsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DefectsGroupByArgs['orderBy'] }
        : { orderBy?: DefectsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DefectsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDefectsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Defects model
   */
  readonly fields: DefectsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Defects.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DefectsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Defects model
   */
  interface DefectsFieldRefs {
    readonly id: FieldRef<"Defects", 'Int'>
    readonly defectcode: FieldRef<"Defects", 'String'>
    readonly defect: FieldRef<"Defects", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Defects findUnique
   */
  export type DefectsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Defects
     */
    select?: DefectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Defects
     */
    omit?: DefectsOmit<ExtArgs> | null
    /**
     * Filter, which Defects to fetch.
     */
    where: DefectsWhereUniqueInput
  }

  /**
   * Defects findUniqueOrThrow
   */
  export type DefectsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Defects
     */
    select?: DefectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Defects
     */
    omit?: DefectsOmit<ExtArgs> | null
    /**
     * Filter, which Defects to fetch.
     */
    where: DefectsWhereUniqueInput
  }

  /**
   * Defects findFirst
   */
  export type DefectsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Defects
     */
    select?: DefectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Defects
     */
    omit?: DefectsOmit<ExtArgs> | null
    /**
     * Filter, which Defects to fetch.
     */
    where?: DefectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Defects to fetch.
     */
    orderBy?: DefectsOrderByWithRelationInput | DefectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Defects.
     */
    cursor?: DefectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Defects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Defects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Defects.
     */
    distinct?: DefectsScalarFieldEnum | DefectsScalarFieldEnum[]
  }

  /**
   * Defects findFirstOrThrow
   */
  export type DefectsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Defects
     */
    select?: DefectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Defects
     */
    omit?: DefectsOmit<ExtArgs> | null
    /**
     * Filter, which Defects to fetch.
     */
    where?: DefectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Defects to fetch.
     */
    orderBy?: DefectsOrderByWithRelationInput | DefectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Defects.
     */
    cursor?: DefectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Defects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Defects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Defects.
     */
    distinct?: DefectsScalarFieldEnum | DefectsScalarFieldEnum[]
  }

  /**
   * Defects findMany
   */
  export type DefectsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Defects
     */
    select?: DefectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Defects
     */
    omit?: DefectsOmit<ExtArgs> | null
    /**
     * Filter, which Defects to fetch.
     */
    where?: DefectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Defects to fetch.
     */
    orderBy?: DefectsOrderByWithRelationInput | DefectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Defects.
     */
    cursor?: DefectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Defects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Defects.
     */
    skip?: number
    distinct?: DefectsScalarFieldEnum | DefectsScalarFieldEnum[]
  }

  /**
   * Defects create
   */
  export type DefectsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Defects
     */
    select?: DefectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Defects
     */
    omit?: DefectsOmit<ExtArgs> | null
    /**
     * The data needed to create a Defects.
     */
    data: XOR<DefectsCreateInput, DefectsUncheckedCreateInput>
  }

  /**
   * Defects createMany
   */
  export type DefectsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Defects.
     */
    data: DefectsCreateManyInput | DefectsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Defects createManyAndReturn
   */
  export type DefectsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Defects
     */
    select?: DefectsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Defects
     */
    omit?: DefectsOmit<ExtArgs> | null
    /**
     * The data used to create many Defects.
     */
    data: DefectsCreateManyInput | DefectsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Defects update
   */
  export type DefectsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Defects
     */
    select?: DefectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Defects
     */
    omit?: DefectsOmit<ExtArgs> | null
    /**
     * The data needed to update a Defects.
     */
    data: XOR<DefectsUpdateInput, DefectsUncheckedUpdateInput>
    /**
     * Choose, which Defects to update.
     */
    where: DefectsWhereUniqueInput
  }

  /**
   * Defects updateMany
   */
  export type DefectsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Defects.
     */
    data: XOR<DefectsUpdateManyMutationInput, DefectsUncheckedUpdateManyInput>
    /**
     * Filter which Defects to update
     */
    where?: DefectsWhereInput
    /**
     * Limit how many Defects to update.
     */
    limit?: number
  }

  /**
   * Defects updateManyAndReturn
   */
  export type DefectsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Defects
     */
    select?: DefectsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Defects
     */
    omit?: DefectsOmit<ExtArgs> | null
    /**
     * The data used to update Defects.
     */
    data: XOR<DefectsUpdateManyMutationInput, DefectsUncheckedUpdateManyInput>
    /**
     * Filter which Defects to update
     */
    where?: DefectsWhereInput
    /**
     * Limit how many Defects to update.
     */
    limit?: number
  }

  /**
   * Defects upsert
   */
  export type DefectsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Defects
     */
    select?: DefectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Defects
     */
    omit?: DefectsOmit<ExtArgs> | null
    /**
     * The filter to search for the Defects to update in case it exists.
     */
    where: DefectsWhereUniqueInput
    /**
     * In case the Defects found by the `where` argument doesn't exist, create a new Defects with this data.
     */
    create: XOR<DefectsCreateInput, DefectsUncheckedCreateInput>
    /**
     * In case the Defects was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DefectsUpdateInput, DefectsUncheckedUpdateInput>
  }

  /**
   * Defects delete
   */
  export type DefectsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Defects
     */
    select?: DefectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Defects
     */
    omit?: DefectsOmit<ExtArgs> | null
    /**
     * Filter which Defects to delete.
     */
    where: DefectsWhereUniqueInput
  }

  /**
   * Defects deleteMany
   */
  export type DefectsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Defects to delete
     */
    where?: DefectsWhereInput
    /**
     * Limit how many Defects to delete.
     */
    limit?: number
  }

  /**
   * Defects without action
   */
  export type DefectsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Defects
     */
    select?: DefectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Defects
     */
    omit?: DefectsOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    username: 'username',
    password: 'password',
    role: 'role',
    email: 'email'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const EntryScalarFieldEnum: {
    id: 'id',
    verifiername: 'verifiername',
    checkername: 'checkername',
    partnumber: 'partnumber',
    defectstatus: 'defectstatus',
    defect: 'defect',
    datetime: 'datetime'
  };

  export type EntryScalarFieldEnum = (typeof EntryScalarFieldEnum)[keyof typeof EntryScalarFieldEnum]


  export const PartScalarFieldEnum: {
    id: 'id',
    customer: 'customer',
    assyPartNo: 'assyPartNo',
    subAssyPartNo: 'subAssyPartNo',
    qualityPlanAvailable: 'qualityPlanAvailable',
    idA: 'idA',
    plugGaugeAvailableA: 'plugGaugeAvailableA',
    idB: 'idB',
    plugGaugeAvailableB: 'plugGaugeAvailableB',
    wallThicknessA: 'wallThicknessA',
    wallThicknessB: 'wallThicknessB',
    flareLengthMin: 'flareLengthMin',
    endCapLengthMin: 'endCapLengthMin',
    profileFixtureAvailable: 'profileFixtureAvailable',
    hardness: 'hardness',
    hardnessPinGaugeAvailable: 'hardnessPinGaugeAvailable',
    notchingRequired: 'notchingRequired',
    notchingToolAvailable: 'notchingToolAvailable',
    connectorRequired: 'connectorRequired',
    connectorFixtureAvailable: 'connectorFixtureAvailable',
    oetikerClampRequired: 'oetikerClampRequired',
    oetikerClampFixture: 'oetikerClampFixture',
    mubeaClamp: 'mubeaClamp',
    mubeaClampFixture: 'mubeaClampFixture',
    springBandClamp: 'springBandClamp',
    heatSinkSleeve: 'heatSinkSleeve',
    assyProfileFixtureAvailable: 'assyProfileFixtureAvailable',
    leakageTestingRequired: 'leakageTestingRequired',
    leakageTestingPerformed: 'leakageTestingPerformed',
    leakageFixtureAvailable: 'leakageFixtureAvailable',
    numLeakageFixtures: 'numLeakageFixtures',
    cleanlinessMiliporeTest: 'cleanlinessMiliporeTest',
    burstReqAvailable: 'burstReqAvailable',
    pullOutLoad: 'pullOutLoad',
    vacuumTestingRequired: 'vacuumTestingRequired',
    vacuumTestingPerformed: 'vacuumTestingPerformed',
    padPrintingFixture: 'padPrintingFixture',
    column: 'column'
  };

  export type PartScalarFieldEnum = (typeof PartScalarFieldEnum)[keyof typeof PartScalarFieldEnum]


  export const DefectsScalarFieldEnum: {
    id: 'id',
    defectcode: 'defectcode',
    defect: 'defect'
  };

  export type DefectsScalarFieldEnum = (typeof DefectsScalarFieldEnum)[keyof typeof DefectsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    id?: IntFilter<"Users"> | number
    name?: StringFilter<"Users"> | string
    username?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    role?: StringFilter<"Users"> | string
    email?: StringNullableFilter<"Users"> | string | null
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    email?: SortOrderInput | SortOrder
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    name?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    role?: StringFilter<"Users"> | string
    email?: StringNullableFilter<"Users"> | string | null
  }, "id" | "username">

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    email?: SortOrderInput | SortOrder
    _count?: UsersCountOrderByAggregateInput
    _avg?: UsersAvgOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
    _sum?: UsersSumOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Users"> | number
    name?: StringWithAggregatesFilter<"Users"> | string
    username?: StringWithAggregatesFilter<"Users"> | string
    password?: StringWithAggregatesFilter<"Users"> | string
    role?: StringWithAggregatesFilter<"Users"> | string
    email?: StringNullableWithAggregatesFilter<"Users"> | string | null
  }

  export type entryWhereInput = {
    AND?: entryWhereInput | entryWhereInput[]
    OR?: entryWhereInput[]
    NOT?: entryWhereInput | entryWhereInput[]
    id?: IntFilter<"entry"> | number
    verifiername?: StringFilter<"entry"> | string
    checkername?: StringFilter<"entry"> | string
    partnumber?: StringFilter<"entry"> | string
    defectstatus?: StringFilter<"entry"> | string
    defect?: StringFilter<"entry"> | string
    datetime?: DateTimeFilter<"entry"> | Date | string
  }

  export type entryOrderByWithRelationInput = {
    id?: SortOrder
    verifiername?: SortOrder
    checkername?: SortOrder
    partnumber?: SortOrder
    defectstatus?: SortOrder
    defect?: SortOrder
    datetime?: SortOrder
  }

  export type entryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: entryWhereInput | entryWhereInput[]
    OR?: entryWhereInput[]
    NOT?: entryWhereInput | entryWhereInput[]
    verifiername?: StringFilter<"entry"> | string
    checkername?: StringFilter<"entry"> | string
    partnumber?: StringFilter<"entry"> | string
    defectstatus?: StringFilter<"entry"> | string
    defect?: StringFilter<"entry"> | string
    datetime?: DateTimeFilter<"entry"> | Date | string
  }, "id">

  export type entryOrderByWithAggregationInput = {
    id?: SortOrder
    verifiername?: SortOrder
    checkername?: SortOrder
    partnumber?: SortOrder
    defectstatus?: SortOrder
    defect?: SortOrder
    datetime?: SortOrder
    _count?: entryCountOrderByAggregateInput
    _avg?: entryAvgOrderByAggregateInput
    _max?: entryMaxOrderByAggregateInput
    _min?: entryMinOrderByAggregateInput
    _sum?: entrySumOrderByAggregateInput
  }

  export type entryScalarWhereWithAggregatesInput = {
    AND?: entryScalarWhereWithAggregatesInput | entryScalarWhereWithAggregatesInput[]
    OR?: entryScalarWhereWithAggregatesInput[]
    NOT?: entryScalarWhereWithAggregatesInput | entryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"entry"> | number
    verifiername?: StringWithAggregatesFilter<"entry"> | string
    checkername?: StringWithAggregatesFilter<"entry"> | string
    partnumber?: StringWithAggregatesFilter<"entry"> | string
    defectstatus?: StringWithAggregatesFilter<"entry"> | string
    defect?: StringWithAggregatesFilter<"entry"> | string
    datetime?: DateTimeWithAggregatesFilter<"entry"> | Date | string
  }

  export type PartWhereInput = {
    AND?: PartWhereInput | PartWhereInput[]
    OR?: PartWhereInput[]
    NOT?: PartWhereInput | PartWhereInput[]
    id?: IntFilter<"Part"> | number
    customer?: StringFilter<"Part"> | string
    assyPartNo?: StringFilter<"Part"> | string
    subAssyPartNo?: StringFilter<"Part"> | string
    qualityPlanAvailable?: StringFilter<"Part"> | string
    idA?: StringFilter<"Part"> | string
    plugGaugeAvailableA?: StringFilter<"Part"> | string
    idB?: StringFilter<"Part"> | string
    plugGaugeAvailableB?: StringFilter<"Part"> | string
    wallThicknessA?: StringFilter<"Part"> | string
    wallThicknessB?: StringFilter<"Part"> | string
    flareLengthMin?: StringFilter<"Part"> | string
    endCapLengthMin?: StringFilter<"Part"> | string
    profileFixtureAvailable?: StringFilter<"Part"> | string
    hardness?: StringFilter<"Part"> | string
    hardnessPinGaugeAvailable?: StringFilter<"Part"> | string
    notchingRequired?: StringFilter<"Part"> | string
    notchingToolAvailable?: StringFilter<"Part"> | string
    connectorRequired?: StringFilter<"Part"> | string
    connectorFixtureAvailable?: StringFilter<"Part"> | string
    oetikerClampRequired?: StringFilter<"Part"> | string
    oetikerClampFixture?: StringFilter<"Part"> | string
    mubeaClamp?: StringFilter<"Part"> | string
    mubeaClampFixture?: StringFilter<"Part"> | string
    springBandClamp?: StringFilter<"Part"> | string
    heatSinkSleeve?: StringFilter<"Part"> | string
    assyProfileFixtureAvailable?: StringFilter<"Part"> | string
    leakageTestingRequired?: StringFilter<"Part"> | string
    leakageTestingPerformed?: StringFilter<"Part"> | string
    leakageFixtureAvailable?: StringFilter<"Part"> | string
    numLeakageFixtures?: IntFilter<"Part"> | number
    cleanlinessMiliporeTest?: StringFilter<"Part"> | string
    burstReqAvailable?: StringFilter<"Part"> | string
    pullOutLoad?: StringFilter<"Part"> | string
    vacuumTestingRequired?: StringFilter<"Part"> | string
    vacuumTestingPerformed?: StringFilter<"Part"> | string
    padPrintingFixture?: StringFilter<"Part"> | string
    column?: StringFilter<"Part"> | string
  }

  export type PartOrderByWithRelationInput = {
    id?: SortOrder
    customer?: SortOrder
    assyPartNo?: SortOrder
    subAssyPartNo?: SortOrder
    qualityPlanAvailable?: SortOrder
    idA?: SortOrder
    plugGaugeAvailableA?: SortOrder
    idB?: SortOrder
    plugGaugeAvailableB?: SortOrder
    wallThicknessA?: SortOrder
    wallThicknessB?: SortOrder
    flareLengthMin?: SortOrder
    endCapLengthMin?: SortOrder
    profileFixtureAvailable?: SortOrder
    hardness?: SortOrder
    hardnessPinGaugeAvailable?: SortOrder
    notchingRequired?: SortOrder
    notchingToolAvailable?: SortOrder
    connectorRequired?: SortOrder
    connectorFixtureAvailable?: SortOrder
    oetikerClampRequired?: SortOrder
    oetikerClampFixture?: SortOrder
    mubeaClamp?: SortOrder
    mubeaClampFixture?: SortOrder
    springBandClamp?: SortOrder
    heatSinkSleeve?: SortOrder
    assyProfileFixtureAvailable?: SortOrder
    leakageTestingRequired?: SortOrder
    leakageTestingPerformed?: SortOrder
    leakageFixtureAvailable?: SortOrder
    numLeakageFixtures?: SortOrder
    cleanlinessMiliporeTest?: SortOrder
    burstReqAvailable?: SortOrder
    pullOutLoad?: SortOrder
    vacuumTestingRequired?: SortOrder
    vacuumTestingPerformed?: SortOrder
    padPrintingFixture?: SortOrder
    column?: SortOrder
  }

  export type PartWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PartWhereInput | PartWhereInput[]
    OR?: PartWhereInput[]
    NOT?: PartWhereInput | PartWhereInput[]
    customer?: StringFilter<"Part"> | string
    assyPartNo?: StringFilter<"Part"> | string
    subAssyPartNo?: StringFilter<"Part"> | string
    qualityPlanAvailable?: StringFilter<"Part"> | string
    idA?: StringFilter<"Part"> | string
    plugGaugeAvailableA?: StringFilter<"Part"> | string
    idB?: StringFilter<"Part"> | string
    plugGaugeAvailableB?: StringFilter<"Part"> | string
    wallThicknessA?: StringFilter<"Part"> | string
    wallThicknessB?: StringFilter<"Part"> | string
    flareLengthMin?: StringFilter<"Part"> | string
    endCapLengthMin?: StringFilter<"Part"> | string
    profileFixtureAvailable?: StringFilter<"Part"> | string
    hardness?: StringFilter<"Part"> | string
    hardnessPinGaugeAvailable?: StringFilter<"Part"> | string
    notchingRequired?: StringFilter<"Part"> | string
    notchingToolAvailable?: StringFilter<"Part"> | string
    connectorRequired?: StringFilter<"Part"> | string
    connectorFixtureAvailable?: StringFilter<"Part"> | string
    oetikerClampRequired?: StringFilter<"Part"> | string
    oetikerClampFixture?: StringFilter<"Part"> | string
    mubeaClamp?: StringFilter<"Part"> | string
    mubeaClampFixture?: StringFilter<"Part"> | string
    springBandClamp?: StringFilter<"Part"> | string
    heatSinkSleeve?: StringFilter<"Part"> | string
    assyProfileFixtureAvailable?: StringFilter<"Part"> | string
    leakageTestingRequired?: StringFilter<"Part"> | string
    leakageTestingPerformed?: StringFilter<"Part"> | string
    leakageFixtureAvailable?: StringFilter<"Part"> | string
    numLeakageFixtures?: IntFilter<"Part"> | number
    cleanlinessMiliporeTest?: StringFilter<"Part"> | string
    burstReqAvailable?: StringFilter<"Part"> | string
    pullOutLoad?: StringFilter<"Part"> | string
    vacuumTestingRequired?: StringFilter<"Part"> | string
    vacuumTestingPerformed?: StringFilter<"Part"> | string
    padPrintingFixture?: StringFilter<"Part"> | string
    column?: StringFilter<"Part"> | string
  }, "id">

  export type PartOrderByWithAggregationInput = {
    id?: SortOrder
    customer?: SortOrder
    assyPartNo?: SortOrder
    subAssyPartNo?: SortOrder
    qualityPlanAvailable?: SortOrder
    idA?: SortOrder
    plugGaugeAvailableA?: SortOrder
    idB?: SortOrder
    plugGaugeAvailableB?: SortOrder
    wallThicknessA?: SortOrder
    wallThicknessB?: SortOrder
    flareLengthMin?: SortOrder
    endCapLengthMin?: SortOrder
    profileFixtureAvailable?: SortOrder
    hardness?: SortOrder
    hardnessPinGaugeAvailable?: SortOrder
    notchingRequired?: SortOrder
    notchingToolAvailable?: SortOrder
    connectorRequired?: SortOrder
    connectorFixtureAvailable?: SortOrder
    oetikerClampRequired?: SortOrder
    oetikerClampFixture?: SortOrder
    mubeaClamp?: SortOrder
    mubeaClampFixture?: SortOrder
    springBandClamp?: SortOrder
    heatSinkSleeve?: SortOrder
    assyProfileFixtureAvailable?: SortOrder
    leakageTestingRequired?: SortOrder
    leakageTestingPerformed?: SortOrder
    leakageFixtureAvailable?: SortOrder
    numLeakageFixtures?: SortOrder
    cleanlinessMiliporeTest?: SortOrder
    burstReqAvailable?: SortOrder
    pullOutLoad?: SortOrder
    vacuumTestingRequired?: SortOrder
    vacuumTestingPerformed?: SortOrder
    padPrintingFixture?: SortOrder
    column?: SortOrder
    _count?: PartCountOrderByAggregateInput
    _avg?: PartAvgOrderByAggregateInput
    _max?: PartMaxOrderByAggregateInput
    _min?: PartMinOrderByAggregateInput
    _sum?: PartSumOrderByAggregateInput
  }

  export type PartScalarWhereWithAggregatesInput = {
    AND?: PartScalarWhereWithAggregatesInput | PartScalarWhereWithAggregatesInput[]
    OR?: PartScalarWhereWithAggregatesInput[]
    NOT?: PartScalarWhereWithAggregatesInput | PartScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Part"> | number
    customer?: StringWithAggregatesFilter<"Part"> | string
    assyPartNo?: StringWithAggregatesFilter<"Part"> | string
    subAssyPartNo?: StringWithAggregatesFilter<"Part"> | string
    qualityPlanAvailable?: StringWithAggregatesFilter<"Part"> | string
    idA?: StringWithAggregatesFilter<"Part"> | string
    plugGaugeAvailableA?: StringWithAggregatesFilter<"Part"> | string
    idB?: StringWithAggregatesFilter<"Part"> | string
    plugGaugeAvailableB?: StringWithAggregatesFilter<"Part"> | string
    wallThicknessA?: StringWithAggregatesFilter<"Part"> | string
    wallThicknessB?: StringWithAggregatesFilter<"Part"> | string
    flareLengthMin?: StringWithAggregatesFilter<"Part"> | string
    endCapLengthMin?: StringWithAggregatesFilter<"Part"> | string
    profileFixtureAvailable?: StringWithAggregatesFilter<"Part"> | string
    hardness?: StringWithAggregatesFilter<"Part"> | string
    hardnessPinGaugeAvailable?: StringWithAggregatesFilter<"Part"> | string
    notchingRequired?: StringWithAggregatesFilter<"Part"> | string
    notchingToolAvailable?: StringWithAggregatesFilter<"Part"> | string
    connectorRequired?: StringWithAggregatesFilter<"Part"> | string
    connectorFixtureAvailable?: StringWithAggregatesFilter<"Part"> | string
    oetikerClampRequired?: StringWithAggregatesFilter<"Part"> | string
    oetikerClampFixture?: StringWithAggregatesFilter<"Part"> | string
    mubeaClamp?: StringWithAggregatesFilter<"Part"> | string
    mubeaClampFixture?: StringWithAggregatesFilter<"Part"> | string
    springBandClamp?: StringWithAggregatesFilter<"Part"> | string
    heatSinkSleeve?: StringWithAggregatesFilter<"Part"> | string
    assyProfileFixtureAvailable?: StringWithAggregatesFilter<"Part"> | string
    leakageTestingRequired?: StringWithAggregatesFilter<"Part"> | string
    leakageTestingPerformed?: StringWithAggregatesFilter<"Part"> | string
    leakageFixtureAvailable?: StringWithAggregatesFilter<"Part"> | string
    numLeakageFixtures?: IntWithAggregatesFilter<"Part"> | number
    cleanlinessMiliporeTest?: StringWithAggregatesFilter<"Part"> | string
    burstReqAvailable?: StringWithAggregatesFilter<"Part"> | string
    pullOutLoad?: StringWithAggregatesFilter<"Part"> | string
    vacuumTestingRequired?: StringWithAggregatesFilter<"Part"> | string
    vacuumTestingPerformed?: StringWithAggregatesFilter<"Part"> | string
    padPrintingFixture?: StringWithAggregatesFilter<"Part"> | string
    column?: StringWithAggregatesFilter<"Part"> | string
  }

  export type DefectsWhereInput = {
    AND?: DefectsWhereInput | DefectsWhereInput[]
    OR?: DefectsWhereInput[]
    NOT?: DefectsWhereInput | DefectsWhereInput[]
    id?: IntFilter<"Defects"> | number
    defectcode?: StringFilter<"Defects"> | string
    defect?: StringFilter<"Defects"> | string
  }

  export type DefectsOrderByWithRelationInput = {
    id?: SortOrder
    defectcode?: SortOrder
    defect?: SortOrder
  }

  export type DefectsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DefectsWhereInput | DefectsWhereInput[]
    OR?: DefectsWhereInput[]
    NOT?: DefectsWhereInput | DefectsWhereInput[]
    defectcode?: StringFilter<"Defects"> | string
    defect?: StringFilter<"Defects"> | string
  }, "id">

  export type DefectsOrderByWithAggregationInput = {
    id?: SortOrder
    defectcode?: SortOrder
    defect?: SortOrder
    _count?: DefectsCountOrderByAggregateInput
    _avg?: DefectsAvgOrderByAggregateInput
    _max?: DefectsMaxOrderByAggregateInput
    _min?: DefectsMinOrderByAggregateInput
    _sum?: DefectsSumOrderByAggregateInput
  }

  export type DefectsScalarWhereWithAggregatesInput = {
    AND?: DefectsScalarWhereWithAggregatesInput | DefectsScalarWhereWithAggregatesInput[]
    OR?: DefectsScalarWhereWithAggregatesInput[]
    NOT?: DefectsScalarWhereWithAggregatesInput | DefectsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Defects"> | number
    defectcode?: StringWithAggregatesFilter<"Defects"> | string
    defect?: StringWithAggregatesFilter<"Defects"> | string
  }

  export type UsersCreateInput = {
    name: string
    username: string
    password: string
    role?: string
    email?: string | null
  }

  export type UsersUncheckedCreateInput = {
    id?: number
    name: string
    username: string
    password: string
    role?: string
    email?: string | null
  }

  export type UsersUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsersCreateManyInput = {
    id?: number
    name: string
    username: string
    password: string
    role?: string
    email?: string | null
  }

  export type UsersUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type entryCreateInput = {
    verifiername: string
    checkername: string
    partnumber: string
    defectstatus: string
    defect: string
    datetime?: Date | string
  }

  export type entryUncheckedCreateInput = {
    id?: number
    verifiername: string
    checkername: string
    partnumber: string
    defectstatus: string
    defect: string
    datetime?: Date | string
  }

  export type entryUpdateInput = {
    verifiername?: StringFieldUpdateOperationsInput | string
    checkername?: StringFieldUpdateOperationsInput | string
    partnumber?: StringFieldUpdateOperationsInput | string
    defectstatus?: StringFieldUpdateOperationsInput | string
    defect?: StringFieldUpdateOperationsInput | string
    datetime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type entryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    verifiername?: StringFieldUpdateOperationsInput | string
    checkername?: StringFieldUpdateOperationsInput | string
    partnumber?: StringFieldUpdateOperationsInput | string
    defectstatus?: StringFieldUpdateOperationsInput | string
    defect?: StringFieldUpdateOperationsInput | string
    datetime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type entryCreateManyInput = {
    id?: number
    verifiername: string
    checkername: string
    partnumber: string
    defectstatus: string
    defect: string
    datetime?: Date | string
  }

  export type entryUpdateManyMutationInput = {
    verifiername?: StringFieldUpdateOperationsInput | string
    checkername?: StringFieldUpdateOperationsInput | string
    partnumber?: StringFieldUpdateOperationsInput | string
    defectstatus?: StringFieldUpdateOperationsInput | string
    defect?: StringFieldUpdateOperationsInput | string
    datetime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type entryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    verifiername?: StringFieldUpdateOperationsInput | string
    checkername?: StringFieldUpdateOperationsInput | string
    partnumber?: StringFieldUpdateOperationsInput | string
    defectstatus?: StringFieldUpdateOperationsInput | string
    defect?: StringFieldUpdateOperationsInput | string
    datetime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartCreateInput = {
    customer: string
    assyPartNo: string
    subAssyPartNo: string
    qualityPlanAvailable: string
    idA: string
    plugGaugeAvailableA: string
    idB: string
    plugGaugeAvailableB: string
    wallThicknessA: string
    wallThicknessB: string
    flareLengthMin: string
    endCapLengthMin: string
    profileFixtureAvailable: string
    hardness: string
    hardnessPinGaugeAvailable: string
    notchingRequired: string
    notchingToolAvailable: string
    connectorRequired: string
    connectorFixtureAvailable: string
    oetikerClampRequired: string
    oetikerClampFixture: string
    mubeaClamp: string
    mubeaClampFixture: string
    springBandClamp: string
    heatSinkSleeve: string
    assyProfileFixtureAvailable: string
    leakageTestingRequired: string
    leakageTestingPerformed: string
    leakageFixtureAvailable: string
    numLeakageFixtures: number
    cleanlinessMiliporeTest: string
    burstReqAvailable: string
    pullOutLoad: string
    vacuumTestingRequired: string
    vacuumTestingPerformed: string
    padPrintingFixture: string
    column?: string
  }

  export type PartUncheckedCreateInput = {
    id?: number
    customer: string
    assyPartNo: string
    subAssyPartNo: string
    qualityPlanAvailable: string
    idA: string
    plugGaugeAvailableA: string
    idB: string
    plugGaugeAvailableB: string
    wallThicknessA: string
    wallThicknessB: string
    flareLengthMin: string
    endCapLengthMin: string
    profileFixtureAvailable: string
    hardness: string
    hardnessPinGaugeAvailable: string
    notchingRequired: string
    notchingToolAvailable: string
    connectorRequired: string
    connectorFixtureAvailable: string
    oetikerClampRequired: string
    oetikerClampFixture: string
    mubeaClamp: string
    mubeaClampFixture: string
    springBandClamp: string
    heatSinkSleeve: string
    assyProfileFixtureAvailable: string
    leakageTestingRequired: string
    leakageTestingPerformed: string
    leakageFixtureAvailable: string
    numLeakageFixtures: number
    cleanlinessMiliporeTest: string
    burstReqAvailable: string
    pullOutLoad: string
    vacuumTestingRequired: string
    vacuumTestingPerformed: string
    padPrintingFixture: string
    column?: string
  }

  export type PartUpdateInput = {
    customer?: StringFieldUpdateOperationsInput | string
    assyPartNo?: StringFieldUpdateOperationsInput | string
    subAssyPartNo?: StringFieldUpdateOperationsInput | string
    qualityPlanAvailable?: StringFieldUpdateOperationsInput | string
    idA?: StringFieldUpdateOperationsInput | string
    plugGaugeAvailableA?: StringFieldUpdateOperationsInput | string
    idB?: StringFieldUpdateOperationsInput | string
    plugGaugeAvailableB?: StringFieldUpdateOperationsInput | string
    wallThicknessA?: StringFieldUpdateOperationsInput | string
    wallThicknessB?: StringFieldUpdateOperationsInput | string
    flareLengthMin?: StringFieldUpdateOperationsInput | string
    endCapLengthMin?: StringFieldUpdateOperationsInput | string
    profileFixtureAvailable?: StringFieldUpdateOperationsInput | string
    hardness?: StringFieldUpdateOperationsInput | string
    hardnessPinGaugeAvailable?: StringFieldUpdateOperationsInput | string
    notchingRequired?: StringFieldUpdateOperationsInput | string
    notchingToolAvailable?: StringFieldUpdateOperationsInput | string
    connectorRequired?: StringFieldUpdateOperationsInput | string
    connectorFixtureAvailable?: StringFieldUpdateOperationsInput | string
    oetikerClampRequired?: StringFieldUpdateOperationsInput | string
    oetikerClampFixture?: StringFieldUpdateOperationsInput | string
    mubeaClamp?: StringFieldUpdateOperationsInput | string
    mubeaClampFixture?: StringFieldUpdateOperationsInput | string
    springBandClamp?: StringFieldUpdateOperationsInput | string
    heatSinkSleeve?: StringFieldUpdateOperationsInput | string
    assyProfileFixtureAvailable?: StringFieldUpdateOperationsInput | string
    leakageTestingRequired?: StringFieldUpdateOperationsInput | string
    leakageTestingPerformed?: StringFieldUpdateOperationsInput | string
    leakageFixtureAvailable?: StringFieldUpdateOperationsInput | string
    numLeakageFixtures?: IntFieldUpdateOperationsInput | number
    cleanlinessMiliporeTest?: StringFieldUpdateOperationsInput | string
    burstReqAvailable?: StringFieldUpdateOperationsInput | string
    pullOutLoad?: StringFieldUpdateOperationsInput | string
    vacuumTestingRequired?: StringFieldUpdateOperationsInput | string
    vacuumTestingPerformed?: StringFieldUpdateOperationsInput | string
    padPrintingFixture?: StringFieldUpdateOperationsInput | string
    column?: StringFieldUpdateOperationsInput | string
  }

  export type PartUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    customer?: StringFieldUpdateOperationsInput | string
    assyPartNo?: StringFieldUpdateOperationsInput | string
    subAssyPartNo?: StringFieldUpdateOperationsInput | string
    qualityPlanAvailable?: StringFieldUpdateOperationsInput | string
    idA?: StringFieldUpdateOperationsInput | string
    plugGaugeAvailableA?: StringFieldUpdateOperationsInput | string
    idB?: StringFieldUpdateOperationsInput | string
    plugGaugeAvailableB?: StringFieldUpdateOperationsInput | string
    wallThicknessA?: StringFieldUpdateOperationsInput | string
    wallThicknessB?: StringFieldUpdateOperationsInput | string
    flareLengthMin?: StringFieldUpdateOperationsInput | string
    endCapLengthMin?: StringFieldUpdateOperationsInput | string
    profileFixtureAvailable?: StringFieldUpdateOperationsInput | string
    hardness?: StringFieldUpdateOperationsInput | string
    hardnessPinGaugeAvailable?: StringFieldUpdateOperationsInput | string
    notchingRequired?: StringFieldUpdateOperationsInput | string
    notchingToolAvailable?: StringFieldUpdateOperationsInput | string
    connectorRequired?: StringFieldUpdateOperationsInput | string
    connectorFixtureAvailable?: StringFieldUpdateOperationsInput | string
    oetikerClampRequired?: StringFieldUpdateOperationsInput | string
    oetikerClampFixture?: StringFieldUpdateOperationsInput | string
    mubeaClamp?: StringFieldUpdateOperationsInput | string
    mubeaClampFixture?: StringFieldUpdateOperationsInput | string
    springBandClamp?: StringFieldUpdateOperationsInput | string
    heatSinkSleeve?: StringFieldUpdateOperationsInput | string
    assyProfileFixtureAvailable?: StringFieldUpdateOperationsInput | string
    leakageTestingRequired?: StringFieldUpdateOperationsInput | string
    leakageTestingPerformed?: StringFieldUpdateOperationsInput | string
    leakageFixtureAvailable?: StringFieldUpdateOperationsInput | string
    numLeakageFixtures?: IntFieldUpdateOperationsInput | number
    cleanlinessMiliporeTest?: StringFieldUpdateOperationsInput | string
    burstReqAvailable?: StringFieldUpdateOperationsInput | string
    pullOutLoad?: StringFieldUpdateOperationsInput | string
    vacuumTestingRequired?: StringFieldUpdateOperationsInput | string
    vacuumTestingPerformed?: StringFieldUpdateOperationsInput | string
    padPrintingFixture?: StringFieldUpdateOperationsInput | string
    column?: StringFieldUpdateOperationsInput | string
  }

  export type PartCreateManyInput = {
    id?: number
    customer: string
    assyPartNo: string
    subAssyPartNo: string
    qualityPlanAvailable: string
    idA: string
    plugGaugeAvailableA: string
    idB: string
    plugGaugeAvailableB: string
    wallThicknessA: string
    wallThicknessB: string
    flareLengthMin: string
    endCapLengthMin: string
    profileFixtureAvailable: string
    hardness: string
    hardnessPinGaugeAvailable: string
    notchingRequired: string
    notchingToolAvailable: string
    connectorRequired: string
    connectorFixtureAvailable: string
    oetikerClampRequired: string
    oetikerClampFixture: string
    mubeaClamp: string
    mubeaClampFixture: string
    springBandClamp: string
    heatSinkSleeve: string
    assyProfileFixtureAvailable: string
    leakageTestingRequired: string
    leakageTestingPerformed: string
    leakageFixtureAvailable: string
    numLeakageFixtures: number
    cleanlinessMiliporeTest: string
    burstReqAvailable: string
    pullOutLoad: string
    vacuumTestingRequired: string
    vacuumTestingPerformed: string
    padPrintingFixture: string
    column?: string
  }

  export type PartUpdateManyMutationInput = {
    customer?: StringFieldUpdateOperationsInput | string
    assyPartNo?: StringFieldUpdateOperationsInput | string
    subAssyPartNo?: StringFieldUpdateOperationsInput | string
    qualityPlanAvailable?: StringFieldUpdateOperationsInput | string
    idA?: StringFieldUpdateOperationsInput | string
    plugGaugeAvailableA?: StringFieldUpdateOperationsInput | string
    idB?: StringFieldUpdateOperationsInput | string
    plugGaugeAvailableB?: StringFieldUpdateOperationsInput | string
    wallThicknessA?: StringFieldUpdateOperationsInput | string
    wallThicknessB?: StringFieldUpdateOperationsInput | string
    flareLengthMin?: StringFieldUpdateOperationsInput | string
    endCapLengthMin?: StringFieldUpdateOperationsInput | string
    profileFixtureAvailable?: StringFieldUpdateOperationsInput | string
    hardness?: StringFieldUpdateOperationsInput | string
    hardnessPinGaugeAvailable?: StringFieldUpdateOperationsInput | string
    notchingRequired?: StringFieldUpdateOperationsInput | string
    notchingToolAvailable?: StringFieldUpdateOperationsInput | string
    connectorRequired?: StringFieldUpdateOperationsInput | string
    connectorFixtureAvailable?: StringFieldUpdateOperationsInput | string
    oetikerClampRequired?: StringFieldUpdateOperationsInput | string
    oetikerClampFixture?: StringFieldUpdateOperationsInput | string
    mubeaClamp?: StringFieldUpdateOperationsInput | string
    mubeaClampFixture?: StringFieldUpdateOperationsInput | string
    springBandClamp?: StringFieldUpdateOperationsInput | string
    heatSinkSleeve?: StringFieldUpdateOperationsInput | string
    assyProfileFixtureAvailable?: StringFieldUpdateOperationsInput | string
    leakageTestingRequired?: StringFieldUpdateOperationsInput | string
    leakageTestingPerformed?: StringFieldUpdateOperationsInput | string
    leakageFixtureAvailable?: StringFieldUpdateOperationsInput | string
    numLeakageFixtures?: IntFieldUpdateOperationsInput | number
    cleanlinessMiliporeTest?: StringFieldUpdateOperationsInput | string
    burstReqAvailable?: StringFieldUpdateOperationsInput | string
    pullOutLoad?: StringFieldUpdateOperationsInput | string
    vacuumTestingRequired?: StringFieldUpdateOperationsInput | string
    vacuumTestingPerformed?: StringFieldUpdateOperationsInput | string
    padPrintingFixture?: StringFieldUpdateOperationsInput | string
    column?: StringFieldUpdateOperationsInput | string
  }

  export type PartUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    customer?: StringFieldUpdateOperationsInput | string
    assyPartNo?: StringFieldUpdateOperationsInput | string
    subAssyPartNo?: StringFieldUpdateOperationsInput | string
    qualityPlanAvailable?: StringFieldUpdateOperationsInput | string
    idA?: StringFieldUpdateOperationsInput | string
    plugGaugeAvailableA?: StringFieldUpdateOperationsInput | string
    idB?: StringFieldUpdateOperationsInput | string
    plugGaugeAvailableB?: StringFieldUpdateOperationsInput | string
    wallThicknessA?: StringFieldUpdateOperationsInput | string
    wallThicknessB?: StringFieldUpdateOperationsInput | string
    flareLengthMin?: StringFieldUpdateOperationsInput | string
    endCapLengthMin?: StringFieldUpdateOperationsInput | string
    profileFixtureAvailable?: StringFieldUpdateOperationsInput | string
    hardness?: StringFieldUpdateOperationsInput | string
    hardnessPinGaugeAvailable?: StringFieldUpdateOperationsInput | string
    notchingRequired?: StringFieldUpdateOperationsInput | string
    notchingToolAvailable?: StringFieldUpdateOperationsInput | string
    connectorRequired?: StringFieldUpdateOperationsInput | string
    connectorFixtureAvailable?: StringFieldUpdateOperationsInput | string
    oetikerClampRequired?: StringFieldUpdateOperationsInput | string
    oetikerClampFixture?: StringFieldUpdateOperationsInput | string
    mubeaClamp?: StringFieldUpdateOperationsInput | string
    mubeaClampFixture?: StringFieldUpdateOperationsInput | string
    springBandClamp?: StringFieldUpdateOperationsInput | string
    heatSinkSleeve?: StringFieldUpdateOperationsInput | string
    assyProfileFixtureAvailable?: StringFieldUpdateOperationsInput | string
    leakageTestingRequired?: StringFieldUpdateOperationsInput | string
    leakageTestingPerformed?: StringFieldUpdateOperationsInput | string
    leakageFixtureAvailable?: StringFieldUpdateOperationsInput | string
    numLeakageFixtures?: IntFieldUpdateOperationsInput | number
    cleanlinessMiliporeTest?: StringFieldUpdateOperationsInput | string
    burstReqAvailable?: StringFieldUpdateOperationsInput | string
    pullOutLoad?: StringFieldUpdateOperationsInput | string
    vacuumTestingRequired?: StringFieldUpdateOperationsInput | string
    vacuumTestingPerformed?: StringFieldUpdateOperationsInput | string
    padPrintingFixture?: StringFieldUpdateOperationsInput | string
    column?: StringFieldUpdateOperationsInput | string
  }

  export type DefectsCreateInput = {
    defectcode: string
    defect: string
  }

  export type DefectsUncheckedCreateInput = {
    id?: number
    defectcode: string
    defect: string
  }

  export type DefectsUpdateInput = {
    defectcode?: StringFieldUpdateOperationsInput | string
    defect?: StringFieldUpdateOperationsInput | string
  }

  export type DefectsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    defectcode?: StringFieldUpdateOperationsInput | string
    defect?: StringFieldUpdateOperationsInput | string
  }

  export type DefectsCreateManyInput = {
    id?: number
    defectcode: string
    defect: string
  }

  export type DefectsUpdateManyMutationInput = {
    defectcode?: StringFieldUpdateOperationsInput | string
    defect?: StringFieldUpdateOperationsInput | string
  }

  export type DefectsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    defectcode?: StringFieldUpdateOperationsInput | string
    defect?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    email?: SortOrder
  }

  export type UsersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    email?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    email?: SortOrder
  }

  export type UsersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type entryCountOrderByAggregateInput = {
    id?: SortOrder
    verifiername?: SortOrder
    checkername?: SortOrder
    partnumber?: SortOrder
    defectstatus?: SortOrder
    defect?: SortOrder
    datetime?: SortOrder
  }

  export type entryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type entryMaxOrderByAggregateInput = {
    id?: SortOrder
    verifiername?: SortOrder
    checkername?: SortOrder
    partnumber?: SortOrder
    defectstatus?: SortOrder
    defect?: SortOrder
    datetime?: SortOrder
  }

  export type entryMinOrderByAggregateInput = {
    id?: SortOrder
    verifiername?: SortOrder
    checkername?: SortOrder
    partnumber?: SortOrder
    defectstatus?: SortOrder
    defect?: SortOrder
    datetime?: SortOrder
  }

  export type entrySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type PartCountOrderByAggregateInput = {
    id?: SortOrder
    customer?: SortOrder
    assyPartNo?: SortOrder
    subAssyPartNo?: SortOrder
    qualityPlanAvailable?: SortOrder
    idA?: SortOrder
    plugGaugeAvailableA?: SortOrder
    idB?: SortOrder
    plugGaugeAvailableB?: SortOrder
    wallThicknessA?: SortOrder
    wallThicknessB?: SortOrder
    flareLengthMin?: SortOrder
    endCapLengthMin?: SortOrder
    profileFixtureAvailable?: SortOrder
    hardness?: SortOrder
    hardnessPinGaugeAvailable?: SortOrder
    notchingRequired?: SortOrder
    notchingToolAvailable?: SortOrder
    connectorRequired?: SortOrder
    connectorFixtureAvailable?: SortOrder
    oetikerClampRequired?: SortOrder
    oetikerClampFixture?: SortOrder
    mubeaClamp?: SortOrder
    mubeaClampFixture?: SortOrder
    springBandClamp?: SortOrder
    heatSinkSleeve?: SortOrder
    assyProfileFixtureAvailable?: SortOrder
    leakageTestingRequired?: SortOrder
    leakageTestingPerformed?: SortOrder
    leakageFixtureAvailable?: SortOrder
    numLeakageFixtures?: SortOrder
    cleanlinessMiliporeTest?: SortOrder
    burstReqAvailable?: SortOrder
    pullOutLoad?: SortOrder
    vacuumTestingRequired?: SortOrder
    vacuumTestingPerformed?: SortOrder
    padPrintingFixture?: SortOrder
    column?: SortOrder
  }

  export type PartAvgOrderByAggregateInput = {
    id?: SortOrder
    numLeakageFixtures?: SortOrder
  }

  export type PartMaxOrderByAggregateInput = {
    id?: SortOrder
    customer?: SortOrder
    assyPartNo?: SortOrder
    subAssyPartNo?: SortOrder
    qualityPlanAvailable?: SortOrder
    idA?: SortOrder
    plugGaugeAvailableA?: SortOrder
    idB?: SortOrder
    plugGaugeAvailableB?: SortOrder
    wallThicknessA?: SortOrder
    wallThicknessB?: SortOrder
    flareLengthMin?: SortOrder
    endCapLengthMin?: SortOrder
    profileFixtureAvailable?: SortOrder
    hardness?: SortOrder
    hardnessPinGaugeAvailable?: SortOrder
    notchingRequired?: SortOrder
    notchingToolAvailable?: SortOrder
    connectorRequired?: SortOrder
    connectorFixtureAvailable?: SortOrder
    oetikerClampRequired?: SortOrder
    oetikerClampFixture?: SortOrder
    mubeaClamp?: SortOrder
    mubeaClampFixture?: SortOrder
    springBandClamp?: SortOrder
    heatSinkSleeve?: SortOrder
    assyProfileFixtureAvailable?: SortOrder
    leakageTestingRequired?: SortOrder
    leakageTestingPerformed?: SortOrder
    leakageFixtureAvailable?: SortOrder
    numLeakageFixtures?: SortOrder
    cleanlinessMiliporeTest?: SortOrder
    burstReqAvailable?: SortOrder
    pullOutLoad?: SortOrder
    vacuumTestingRequired?: SortOrder
    vacuumTestingPerformed?: SortOrder
    padPrintingFixture?: SortOrder
    column?: SortOrder
  }

  export type PartMinOrderByAggregateInput = {
    id?: SortOrder
    customer?: SortOrder
    assyPartNo?: SortOrder
    subAssyPartNo?: SortOrder
    qualityPlanAvailable?: SortOrder
    idA?: SortOrder
    plugGaugeAvailableA?: SortOrder
    idB?: SortOrder
    plugGaugeAvailableB?: SortOrder
    wallThicknessA?: SortOrder
    wallThicknessB?: SortOrder
    flareLengthMin?: SortOrder
    endCapLengthMin?: SortOrder
    profileFixtureAvailable?: SortOrder
    hardness?: SortOrder
    hardnessPinGaugeAvailable?: SortOrder
    notchingRequired?: SortOrder
    notchingToolAvailable?: SortOrder
    connectorRequired?: SortOrder
    connectorFixtureAvailable?: SortOrder
    oetikerClampRequired?: SortOrder
    oetikerClampFixture?: SortOrder
    mubeaClamp?: SortOrder
    mubeaClampFixture?: SortOrder
    springBandClamp?: SortOrder
    heatSinkSleeve?: SortOrder
    assyProfileFixtureAvailable?: SortOrder
    leakageTestingRequired?: SortOrder
    leakageTestingPerformed?: SortOrder
    leakageFixtureAvailable?: SortOrder
    numLeakageFixtures?: SortOrder
    cleanlinessMiliporeTest?: SortOrder
    burstReqAvailable?: SortOrder
    pullOutLoad?: SortOrder
    vacuumTestingRequired?: SortOrder
    vacuumTestingPerformed?: SortOrder
    padPrintingFixture?: SortOrder
    column?: SortOrder
  }

  export type PartSumOrderByAggregateInput = {
    id?: SortOrder
    numLeakageFixtures?: SortOrder
  }

  export type DefectsCountOrderByAggregateInput = {
    id?: SortOrder
    defectcode?: SortOrder
    defect?: SortOrder
  }

  export type DefectsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DefectsMaxOrderByAggregateInput = {
    id?: SortOrder
    defectcode?: SortOrder
    defect?: SortOrder
  }

  export type DefectsMinOrderByAggregateInput = {
    id?: SortOrder
    defectcode?: SortOrder
    defect?: SortOrder
  }

  export type DefectsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}