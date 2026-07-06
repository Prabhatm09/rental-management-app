
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
 * Model Property
 * 
 */
export type Property = $Result.DefaultSelection<Prisma.$PropertyPayload>
/**
 * Model RentalUnit
 * 
 */
export type RentalUnit = $Result.DefaultSelection<Prisma.$RentalUnitPayload>
/**
 * Model Meter
 * 
 */
export type Meter = $Result.DefaultSelection<Prisma.$MeterPayload>
/**
 * Model MeterAssignment
 * 
 */
export type MeterAssignment = $Result.DefaultSelection<Prisma.$MeterAssignmentPayload>
/**
 * Model Tenant
 * 
 */
export type Tenant = $Result.DefaultSelection<Prisma.$TenantPayload>
/**
 * Model RentalAgreement
 * 
 */
export type RentalAgreement = $Result.DefaultSelection<Prisma.$RentalAgreementPayload>
/**
 * Model AgreementCharge
 * 
 */
export type AgreementCharge = $Result.DefaultSelection<Prisma.$AgreementChargePayload>
/**
 * Model MeterReading
 * 
 */
export type MeterReading = $Result.DefaultSelection<Prisma.$MeterReadingPayload>
/**
 * Model Bill
 * 
 */
export type Bill = $Result.DefaultSelection<Prisma.$BillPayload>
/**
 * Model BillItem
 * 
 */
export type BillItem = $Result.DefaultSelection<Prisma.$BillItemPayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UnitType: {
  ROOM: 'ROOM',
  PORTION: 'PORTION',
  FLOOR: 'FLOOR',
  SHOP: 'SHOP',
  OFFICE: 'OFFICE'
};

export type UnitType = (typeof UnitType)[keyof typeof UnitType]


export const MeterType: {
  ELECTRICITY: 'ELECTRICITY',
  WATER: 'WATER'
};

export type MeterType = (typeof MeterType)[keyof typeof MeterType]


export const MeterStatus: {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE'
};

export type MeterStatus = (typeof MeterStatus)[keyof typeof MeterStatus]


export const RentalStatus: {
  ACTIVE: 'ACTIVE',
  COMPLETED: 'COMPLETED',
  TERMINATED: 'TERMINATED'
};

export type RentalStatus = (typeof RentalStatus)[keyof typeof RentalStatus]


export const ChargeType: {
  RENT: 'RENT',
  ELECTRICITY: 'ELECTRICITY',
  WATER: 'WATER',
  MAINTENANCE: 'MAINTENANCE',
  PARKING: 'PARKING',
  OTHER: 'OTHER'
};

export type ChargeType = (typeof ChargeType)[keyof typeof ChargeType]


export const ChargeMethod: {
  FIXED: 'FIXED',
  PER_UNIT: 'PER_UNIT',
  CUSTOM: 'CUSTOM'
};

export type ChargeMethod = (typeof ChargeMethod)[keyof typeof ChargeMethod]


export const BillStatus: {
  DRAFT: 'DRAFT',
  GENERATED: 'GENERATED',
  PAID: 'PAID',
  PARTIAL: 'PARTIAL',
  OVERDUE: 'OVERDUE'
};

export type BillStatus = (typeof BillStatus)[keyof typeof BillStatus]


export const PaymentMethod: {
  CASH: 'CASH',
  UPI: 'UPI',
  BANK_TRANSFER: 'BANK_TRANSFER'
};

export type PaymentMethod = (typeof PaymentMethod)[keyof typeof PaymentMethod]

}

export type UnitType = $Enums.UnitType

export const UnitType: typeof $Enums.UnitType

export type MeterType = $Enums.MeterType

export const MeterType: typeof $Enums.MeterType

export type MeterStatus = $Enums.MeterStatus

export const MeterStatus: typeof $Enums.MeterStatus

export type RentalStatus = $Enums.RentalStatus

export const RentalStatus: typeof $Enums.RentalStatus

export type ChargeType = $Enums.ChargeType

export const ChargeType: typeof $Enums.ChargeType

export type ChargeMethod = $Enums.ChargeMethod

export const ChargeMethod: typeof $Enums.ChargeMethod

export type BillStatus = $Enums.BillStatus

export const BillStatus: typeof $Enums.BillStatus

export type PaymentMethod = $Enums.PaymentMethod

export const PaymentMethod: typeof $Enums.PaymentMethod

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Properties
 * const properties = await prisma.property.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Properties
   * const properties = await prisma.property.findMany()
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
   * `prisma.property`: Exposes CRUD operations for the **Property** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Properties
    * const properties = await prisma.property.findMany()
    * ```
    */
  get property(): Prisma.PropertyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rentalUnit`: Exposes CRUD operations for the **RentalUnit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RentalUnits
    * const rentalUnits = await prisma.rentalUnit.findMany()
    * ```
    */
  get rentalUnit(): Prisma.RentalUnitDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.meter`: Exposes CRUD operations for the **Meter** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Meters
    * const meters = await prisma.meter.findMany()
    * ```
    */
  get meter(): Prisma.MeterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.meterAssignment`: Exposes CRUD operations for the **MeterAssignment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MeterAssignments
    * const meterAssignments = await prisma.meterAssignment.findMany()
    * ```
    */
  get meterAssignment(): Prisma.MeterAssignmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tenant`: Exposes CRUD operations for the **Tenant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tenants
    * const tenants = await prisma.tenant.findMany()
    * ```
    */
  get tenant(): Prisma.TenantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rentalAgreement`: Exposes CRUD operations for the **RentalAgreement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RentalAgreements
    * const rentalAgreements = await prisma.rentalAgreement.findMany()
    * ```
    */
  get rentalAgreement(): Prisma.RentalAgreementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.agreementCharge`: Exposes CRUD operations for the **AgreementCharge** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AgreementCharges
    * const agreementCharges = await prisma.agreementCharge.findMany()
    * ```
    */
  get agreementCharge(): Prisma.AgreementChargeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.meterReading`: Exposes CRUD operations for the **MeterReading** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MeterReadings
    * const meterReadings = await prisma.meterReading.findMany()
    * ```
    */
  get meterReading(): Prisma.MeterReadingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bill`: Exposes CRUD operations for the **Bill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bills
    * const bills = await prisma.bill.findMany()
    * ```
    */
  get bill(): Prisma.BillDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.billItem`: Exposes CRUD operations for the **BillItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BillItems
    * const billItems = await prisma.billItem.findMany()
    * ```
    */
  get billItem(): Prisma.BillItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Property: 'Property',
    RentalUnit: 'RentalUnit',
    Meter: 'Meter',
    MeterAssignment: 'MeterAssignment',
    Tenant: 'Tenant',
    RentalAgreement: 'RentalAgreement',
    AgreementCharge: 'AgreementCharge',
    MeterReading: 'MeterReading',
    Bill: 'Bill',
    BillItem: 'BillItem',
    Payment: 'Payment'
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
      modelProps: "property" | "rentalUnit" | "meter" | "meterAssignment" | "tenant" | "rentalAgreement" | "agreementCharge" | "meterReading" | "bill" | "billItem" | "payment"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Property: {
        payload: Prisma.$PropertyPayload<ExtArgs>
        fields: Prisma.PropertyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PropertyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PropertyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          findFirst: {
            args: Prisma.PropertyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PropertyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          findMany: {
            args: Prisma.PropertyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>[]
          }
          create: {
            args: Prisma.PropertyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          createMany: {
            args: Prisma.PropertyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PropertyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>[]
          }
          delete: {
            args: Prisma.PropertyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          update: {
            args: Prisma.PropertyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          deleteMany: {
            args: Prisma.PropertyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PropertyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PropertyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>[]
          }
          upsert: {
            args: Prisma.PropertyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          aggregate: {
            args: Prisma.PropertyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProperty>
          }
          groupBy: {
            args: Prisma.PropertyGroupByArgs<ExtArgs>
            result: $Utils.Optional<PropertyGroupByOutputType>[]
          }
          count: {
            args: Prisma.PropertyCountArgs<ExtArgs>
            result: $Utils.Optional<PropertyCountAggregateOutputType> | number
          }
        }
      }
      RentalUnit: {
        payload: Prisma.$RentalUnitPayload<ExtArgs>
        fields: Prisma.RentalUnitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RentalUnitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalUnitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RentalUnitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalUnitPayload>
          }
          findFirst: {
            args: Prisma.RentalUnitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalUnitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RentalUnitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalUnitPayload>
          }
          findMany: {
            args: Prisma.RentalUnitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalUnitPayload>[]
          }
          create: {
            args: Prisma.RentalUnitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalUnitPayload>
          }
          createMany: {
            args: Prisma.RentalUnitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RentalUnitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalUnitPayload>[]
          }
          delete: {
            args: Prisma.RentalUnitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalUnitPayload>
          }
          update: {
            args: Prisma.RentalUnitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalUnitPayload>
          }
          deleteMany: {
            args: Prisma.RentalUnitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RentalUnitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RentalUnitUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalUnitPayload>[]
          }
          upsert: {
            args: Prisma.RentalUnitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalUnitPayload>
          }
          aggregate: {
            args: Prisma.RentalUnitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRentalUnit>
          }
          groupBy: {
            args: Prisma.RentalUnitGroupByArgs<ExtArgs>
            result: $Utils.Optional<RentalUnitGroupByOutputType>[]
          }
          count: {
            args: Prisma.RentalUnitCountArgs<ExtArgs>
            result: $Utils.Optional<RentalUnitCountAggregateOutputType> | number
          }
        }
      }
      Meter: {
        payload: Prisma.$MeterPayload<ExtArgs>
        fields: Prisma.MeterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MeterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MeterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeterPayload>
          }
          findFirst: {
            args: Prisma.MeterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MeterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeterPayload>
          }
          findMany: {
            args: Prisma.MeterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeterPayload>[]
          }
          create: {
            args: Prisma.MeterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeterPayload>
          }
          createMany: {
            args: Prisma.MeterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MeterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeterPayload>[]
          }
          delete: {
            args: Prisma.MeterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeterPayload>
          }
          update: {
            args: Prisma.MeterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeterPayload>
          }
          deleteMany: {
            args: Prisma.MeterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MeterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MeterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeterPayload>[]
          }
          upsert: {
            args: Prisma.MeterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeterPayload>
          }
          aggregate: {
            args: Prisma.MeterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMeter>
          }
          groupBy: {
            args: Prisma.MeterGroupByArgs<ExtArgs>
            result: $Utils.Optional<MeterGroupByOutputType>[]
          }
          count: {
            args: Prisma.MeterCountArgs<ExtArgs>
            result: $Utils.Optional<MeterCountAggregateOutputType> | number
          }
        }
      }
      MeterAssignment: {
        payload: Prisma.$MeterAssignmentPayload<ExtArgs>
        fields: Prisma.MeterAssignmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MeterAssignmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeterAssignmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MeterAssignmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeterAssignmentPayload>
          }
          findFirst: {
            args: Prisma.MeterAssignmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeterAssignmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MeterAssignmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeterAssignmentPayload>
          }
          findMany: {
            args: Prisma.MeterAssignmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeterAssignmentPayload>[]
          }
          create: {
            args: Prisma.MeterAssignmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeterAssignmentPayload>
          }
          createMany: {
            args: Prisma.MeterAssignmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MeterAssignmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeterAssignmentPayload>[]
          }
          delete: {
            args: Prisma.MeterAssignmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeterAssignmentPayload>
          }
          update: {
            args: Prisma.MeterAssignmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeterAssignmentPayload>
          }
          deleteMany: {
            args: Prisma.MeterAssignmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MeterAssignmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MeterAssignmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeterAssignmentPayload>[]
          }
          upsert: {
            args: Prisma.MeterAssignmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeterAssignmentPayload>
          }
          aggregate: {
            args: Prisma.MeterAssignmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMeterAssignment>
          }
          groupBy: {
            args: Prisma.MeterAssignmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<MeterAssignmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.MeterAssignmentCountArgs<ExtArgs>
            result: $Utils.Optional<MeterAssignmentCountAggregateOutputType> | number
          }
        }
      }
      Tenant: {
        payload: Prisma.$TenantPayload<ExtArgs>
        fields: Prisma.TenantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TenantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TenantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          findFirst: {
            args: Prisma.TenantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TenantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          findMany: {
            args: Prisma.TenantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>[]
          }
          create: {
            args: Prisma.TenantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          createMany: {
            args: Prisma.TenantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TenantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>[]
          }
          delete: {
            args: Prisma.TenantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          update: {
            args: Prisma.TenantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          deleteMany: {
            args: Prisma.TenantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TenantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TenantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>[]
          }
          upsert: {
            args: Prisma.TenantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          aggregate: {
            args: Prisma.TenantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTenant>
          }
          groupBy: {
            args: Prisma.TenantGroupByArgs<ExtArgs>
            result: $Utils.Optional<TenantGroupByOutputType>[]
          }
          count: {
            args: Prisma.TenantCountArgs<ExtArgs>
            result: $Utils.Optional<TenantCountAggregateOutputType> | number
          }
        }
      }
      RentalAgreement: {
        payload: Prisma.$RentalAgreementPayload<ExtArgs>
        fields: Prisma.RentalAgreementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RentalAgreementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalAgreementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RentalAgreementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalAgreementPayload>
          }
          findFirst: {
            args: Prisma.RentalAgreementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalAgreementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RentalAgreementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalAgreementPayload>
          }
          findMany: {
            args: Prisma.RentalAgreementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalAgreementPayload>[]
          }
          create: {
            args: Prisma.RentalAgreementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalAgreementPayload>
          }
          createMany: {
            args: Prisma.RentalAgreementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RentalAgreementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalAgreementPayload>[]
          }
          delete: {
            args: Prisma.RentalAgreementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalAgreementPayload>
          }
          update: {
            args: Prisma.RentalAgreementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalAgreementPayload>
          }
          deleteMany: {
            args: Prisma.RentalAgreementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RentalAgreementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RentalAgreementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalAgreementPayload>[]
          }
          upsert: {
            args: Prisma.RentalAgreementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalAgreementPayload>
          }
          aggregate: {
            args: Prisma.RentalAgreementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRentalAgreement>
          }
          groupBy: {
            args: Prisma.RentalAgreementGroupByArgs<ExtArgs>
            result: $Utils.Optional<RentalAgreementGroupByOutputType>[]
          }
          count: {
            args: Prisma.RentalAgreementCountArgs<ExtArgs>
            result: $Utils.Optional<RentalAgreementCountAggregateOutputType> | number
          }
        }
      }
      AgreementCharge: {
        payload: Prisma.$AgreementChargePayload<ExtArgs>
        fields: Prisma.AgreementChargeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AgreementChargeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgreementChargePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AgreementChargeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgreementChargePayload>
          }
          findFirst: {
            args: Prisma.AgreementChargeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgreementChargePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AgreementChargeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgreementChargePayload>
          }
          findMany: {
            args: Prisma.AgreementChargeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgreementChargePayload>[]
          }
          create: {
            args: Prisma.AgreementChargeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgreementChargePayload>
          }
          createMany: {
            args: Prisma.AgreementChargeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AgreementChargeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgreementChargePayload>[]
          }
          delete: {
            args: Prisma.AgreementChargeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgreementChargePayload>
          }
          update: {
            args: Prisma.AgreementChargeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgreementChargePayload>
          }
          deleteMany: {
            args: Prisma.AgreementChargeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AgreementChargeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AgreementChargeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgreementChargePayload>[]
          }
          upsert: {
            args: Prisma.AgreementChargeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgreementChargePayload>
          }
          aggregate: {
            args: Prisma.AgreementChargeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAgreementCharge>
          }
          groupBy: {
            args: Prisma.AgreementChargeGroupByArgs<ExtArgs>
            result: $Utils.Optional<AgreementChargeGroupByOutputType>[]
          }
          count: {
            args: Prisma.AgreementChargeCountArgs<ExtArgs>
            result: $Utils.Optional<AgreementChargeCountAggregateOutputType> | number
          }
        }
      }
      MeterReading: {
        payload: Prisma.$MeterReadingPayload<ExtArgs>
        fields: Prisma.MeterReadingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MeterReadingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeterReadingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MeterReadingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeterReadingPayload>
          }
          findFirst: {
            args: Prisma.MeterReadingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeterReadingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MeterReadingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeterReadingPayload>
          }
          findMany: {
            args: Prisma.MeterReadingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeterReadingPayload>[]
          }
          create: {
            args: Prisma.MeterReadingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeterReadingPayload>
          }
          createMany: {
            args: Prisma.MeterReadingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MeterReadingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeterReadingPayload>[]
          }
          delete: {
            args: Prisma.MeterReadingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeterReadingPayload>
          }
          update: {
            args: Prisma.MeterReadingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeterReadingPayload>
          }
          deleteMany: {
            args: Prisma.MeterReadingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MeterReadingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MeterReadingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeterReadingPayload>[]
          }
          upsert: {
            args: Prisma.MeterReadingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeterReadingPayload>
          }
          aggregate: {
            args: Prisma.MeterReadingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMeterReading>
          }
          groupBy: {
            args: Prisma.MeterReadingGroupByArgs<ExtArgs>
            result: $Utils.Optional<MeterReadingGroupByOutputType>[]
          }
          count: {
            args: Prisma.MeterReadingCountArgs<ExtArgs>
            result: $Utils.Optional<MeterReadingCountAggregateOutputType> | number
          }
        }
      }
      Bill: {
        payload: Prisma.$BillPayload<ExtArgs>
        fields: Prisma.BillFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BillFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BillFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload>
          }
          findFirst: {
            args: Prisma.BillFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BillFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload>
          }
          findMany: {
            args: Prisma.BillFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload>[]
          }
          create: {
            args: Prisma.BillCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload>
          }
          createMany: {
            args: Prisma.BillCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BillCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload>[]
          }
          delete: {
            args: Prisma.BillDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload>
          }
          update: {
            args: Prisma.BillUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload>
          }
          deleteMany: {
            args: Prisma.BillDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BillUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BillUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload>[]
          }
          upsert: {
            args: Prisma.BillUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload>
          }
          aggregate: {
            args: Prisma.BillAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBill>
          }
          groupBy: {
            args: Prisma.BillGroupByArgs<ExtArgs>
            result: $Utils.Optional<BillGroupByOutputType>[]
          }
          count: {
            args: Prisma.BillCountArgs<ExtArgs>
            result: $Utils.Optional<BillCountAggregateOutputType> | number
          }
        }
      }
      BillItem: {
        payload: Prisma.$BillItemPayload<ExtArgs>
        fields: Prisma.BillItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BillItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BillItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillItemPayload>
          }
          findFirst: {
            args: Prisma.BillItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BillItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillItemPayload>
          }
          findMany: {
            args: Prisma.BillItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillItemPayload>[]
          }
          create: {
            args: Prisma.BillItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillItemPayload>
          }
          createMany: {
            args: Prisma.BillItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BillItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillItemPayload>[]
          }
          delete: {
            args: Prisma.BillItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillItemPayload>
          }
          update: {
            args: Prisma.BillItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillItemPayload>
          }
          deleteMany: {
            args: Prisma.BillItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BillItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BillItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillItemPayload>[]
          }
          upsert: {
            args: Prisma.BillItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillItemPayload>
          }
          aggregate: {
            args: Prisma.BillItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBillItem>
          }
          groupBy: {
            args: Prisma.BillItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<BillItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.BillItemCountArgs<ExtArgs>
            result: $Utils.Optional<BillItemCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    property?: PropertyOmit
    rentalUnit?: RentalUnitOmit
    meter?: MeterOmit
    meterAssignment?: MeterAssignmentOmit
    tenant?: TenantOmit
    rentalAgreement?: RentalAgreementOmit
    agreementCharge?: AgreementChargeOmit
    meterReading?: MeterReadingOmit
    bill?: BillOmit
    billItem?: BillItemOmit
    payment?: PaymentOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type PropertyCountOutputType
   */

  export type PropertyCountOutputType = {
    units: number
    meters: number
  }

  export type PropertyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    units?: boolean | PropertyCountOutputTypeCountUnitsArgs
    meters?: boolean | PropertyCountOutputTypeCountMetersArgs
  }

  // Custom InputTypes
  /**
   * PropertyCountOutputType without action
   */
  export type PropertyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyCountOutputType
     */
    select?: PropertyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PropertyCountOutputType without action
   */
  export type PropertyCountOutputTypeCountUnitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RentalUnitWhereInput
  }

  /**
   * PropertyCountOutputType without action
   */
  export type PropertyCountOutputTypeCountMetersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MeterWhereInput
  }


  /**
   * Count Type RentalUnitCountOutputType
   */

  export type RentalUnitCountOutputType = {
    assignments: number
    rentals: number
  }

  export type RentalUnitCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignments?: boolean | RentalUnitCountOutputTypeCountAssignmentsArgs
    rentals?: boolean | RentalUnitCountOutputTypeCountRentalsArgs
  }

  // Custom InputTypes
  /**
   * RentalUnitCountOutputType without action
   */
  export type RentalUnitCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalUnitCountOutputType
     */
    select?: RentalUnitCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RentalUnitCountOutputType without action
   */
  export type RentalUnitCountOutputTypeCountAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MeterAssignmentWhereInput
  }

  /**
   * RentalUnitCountOutputType without action
   */
  export type RentalUnitCountOutputTypeCountRentalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RentalAgreementWhereInput
  }


  /**
   * Count Type MeterCountOutputType
   */

  export type MeterCountOutputType = {
    assignments: number
    readings: number
  }

  export type MeterCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignments?: boolean | MeterCountOutputTypeCountAssignmentsArgs
    readings?: boolean | MeterCountOutputTypeCountReadingsArgs
  }

  // Custom InputTypes
  /**
   * MeterCountOutputType without action
   */
  export type MeterCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeterCountOutputType
     */
    select?: MeterCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MeterCountOutputType without action
   */
  export type MeterCountOutputTypeCountAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MeterAssignmentWhereInput
  }

  /**
   * MeterCountOutputType without action
   */
  export type MeterCountOutputTypeCountReadingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MeterReadingWhereInput
  }


  /**
   * Count Type TenantCountOutputType
   */

  export type TenantCountOutputType = {
    rentals: number
  }

  export type TenantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rentals?: boolean | TenantCountOutputTypeCountRentalsArgs
  }

  // Custom InputTypes
  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantCountOutputType
     */
    select?: TenantCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountRentalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RentalAgreementWhereInput
  }


  /**
   * Count Type RentalAgreementCountOutputType
   */

  export type RentalAgreementCountOutputType = {
    charges: number
    bills: number
  }

  export type RentalAgreementCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    charges?: boolean | RentalAgreementCountOutputTypeCountChargesArgs
    bills?: boolean | RentalAgreementCountOutputTypeCountBillsArgs
  }

  // Custom InputTypes
  /**
   * RentalAgreementCountOutputType without action
   */
  export type RentalAgreementCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalAgreementCountOutputType
     */
    select?: RentalAgreementCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RentalAgreementCountOutputType without action
   */
  export type RentalAgreementCountOutputTypeCountChargesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgreementChargeWhereInput
  }

  /**
   * RentalAgreementCountOutputType without action
   */
  export type RentalAgreementCountOutputTypeCountBillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BillWhereInput
  }


  /**
   * Count Type BillCountOutputType
   */

  export type BillCountOutputType = {
    items: number
    payments: number
  }

  export type BillCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | BillCountOutputTypeCountItemsArgs
    payments?: boolean | BillCountOutputTypeCountPaymentsArgs
  }

  // Custom InputTypes
  /**
   * BillCountOutputType without action
   */
  export type BillCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillCountOutputType
     */
    select?: BillCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BillCountOutputType without action
   */
  export type BillCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BillItemWhereInput
  }

  /**
   * BillCountOutputType without action
   */
  export type BillCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Property
   */

  export type AggregateProperty = {
    _count: PropertyCountAggregateOutputType | null
    _min: PropertyMinAggregateOutputType | null
    _max: PropertyMaxAggregateOutputType | null
  }

  export type PropertyMinAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    city: string | null
    state: string | null
    pinCode: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PropertyMaxAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    city: string | null
    state: string | null
    pinCode: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PropertyCountAggregateOutputType = {
    id: number
    name: number
    address: number
    city: number
    state: number
    pinCode: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PropertyMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    city?: true
    state?: true
    pinCode?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PropertyMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    city?: true
    state?: true
    pinCode?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PropertyCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    city?: true
    state?: true
    pinCode?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PropertyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Property to aggregate.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Properties
    **/
    _count?: true | PropertyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PropertyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PropertyMaxAggregateInputType
  }

  export type GetPropertyAggregateType<T extends PropertyAggregateArgs> = {
        [P in keyof T & keyof AggregateProperty]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProperty[P]>
      : GetScalarType<T[P], AggregateProperty[P]>
  }




  export type PropertyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyWhereInput
    orderBy?: PropertyOrderByWithAggregationInput | PropertyOrderByWithAggregationInput[]
    by: PropertyScalarFieldEnum[] | PropertyScalarFieldEnum
    having?: PropertyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PropertyCountAggregateInputType | true
    _min?: PropertyMinAggregateInputType
    _max?: PropertyMaxAggregateInputType
  }

  export type PropertyGroupByOutputType = {
    id: string
    name: string
    address: string | null
    city: string | null
    state: string | null
    pinCode: string | null
    createdAt: Date
    updatedAt: Date
    _count: PropertyCountAggregateOutputType | null
    _min: PropertyMinAggregateOutputType | null
    _max: PropertyMaxAggregateOutputType | null
  }

  type GetPropertyGroupByPayload<T extends PropertyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PropertyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PropertyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PropertyGroupByOutputType[P]>
            : GetScalarType<T[P], PropertyGroupByOutputType[P]>
        }
      >
    >


  export type PropertySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    pinCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    units?: boolean | Property$unitsArgs<ExtArgs>
    meters?: boolean | Property$metersArgs<ExtArgs>
    _count?: boolean | PropertyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["property"]>

  export type PropertySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    pinCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["property"]>

  export type PropertySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    pinCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["property"]>

  export type PropertySelectScalar = {
    id?: boolean
    name?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    pinCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PropertyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "address" | "city" | "state" | "pinCode" | "createdAt" | "updatedAt", ExtArgs["result"]["property"]>
  export type PropertyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    units?: boolean | Property$unitsArgs<ExtArgs>
    meters?: boolean | Property$metersArgs<ExtArgs>
    _count?: boolean | PropertyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PropertyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PropertyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PropertyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Property"
    objects: {
      units: Prisma.$RentalUnitPayload<ExtArgs>[]
      meters: Prisma.$MeterPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      address: string | null
      city: string | null
      state: string | null
      pinCode: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["property"]>
    composites: {}
  }

  type PropertyGetPayload<S extends boolean | null | undefined | PropertyDefaultArgs> = $Result.GetResult<Prisma.$PropertyPayload, S>

  type PropertyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PropertyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PropertyCountAggregateInputType | true
    }

  export interface PropertyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Property'], meta: { name: 'Property' } }
    /**
     * Find zero or one Property that matches the filter.
     * @param {PropertyFindUniqueArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PropertyFindUniqueArgs>(args: SelectSubset<T, PropertyFindUniqueArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Property that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PropertyFindUniqueOrThrowArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PropertyFindUniqueOrThrowArgs>(args: SelectSubset<T, PropertyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Property that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFindFirstArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PropertyFindFirstArgs>(args?: SelectSubset<T, PropertyFindFirstArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Property that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFindFirstOrThrowArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PropertyFindFirstOrThrowArgs>(args?: SelectSubset<T, PropertyFindFirstOrThrowArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Properties that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Properties
     * const properties = await prisma.property.findMany()
     * 
     * // Get first 10 Properties
     * const properties = await prisma.property.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const propertyWithIdOnly = await prisma.property.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PropertyFindManyArgs>(args?: SelectSubset<T, PropertyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Property.
     * @param {PropertyCreateArgs} args - Arguments to create a Property.
     * @example
     * // Create one Property
     * const Property = await prisma.property.create({
     *   data: {
     *     // ... data to create a Property
     *   }
     * })
     * 
     */
    create<T extends PropertyCreateArgs>(args: SelectSubset<T, PropertyCreateArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Properties.
     * @param {PropertyCreateManyArgs} args - Arguments to create many Properties.
     * @example
     * // Create many Properties
     * const property = await prisma.property.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PropertyCreateManyArgs>(args?: SelectSubset<T, PropertyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Properties and returns the data saved in the database.
     * @param {PropertyCreateManyAndReturnArgs} args - Arguments to create many Properties.
     * @example
     * // Create many Properties
     * const property = await prisma.property.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Properties and only return the `id`
     * const propertyWithIdOnly = await prisma.property.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PropertyCreateManyAndReturnArgs>(args?: SelectSubset<T, PropertyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Property.
     * @param {PropertyDeleteArgs} args - Arguments to delete one Property.
     * @example
     * // Delete one Property
     * const Property = await prisma.property.delete({
     *   where: {
     *     // ... filter to delete one Property
     *   }
     * })
     * 
     */
    delete<T extends PropertyDeleteArgs>(args: SelectSubset<T, PropertyDeleteArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Property.
     * @param {PropertyUpdateArgs} args - Arguments to update one Property.
     * @example
     * // Update one Property
     * const property = await prisma.property.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PropertyUpdateArgs>(args: SelectSubset<T, PropertyUpdateArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Properties.
     * @param {PropertyDeleteManyArgs} args - Arguments to filter Properties to delete.
     * @example
     * // Delete a few Properties
     * const { count } = await prisma.property.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PropertyDeleteManyArgs>(args?: SelectSubset<T, PropertyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Properties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Properties
     * const property = await prisma.property.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PropertyUpdateManyArgs>(args: SelectSubset<T, PropertyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Properties and returns the data updated in the database.
     * @param {PropertyUpdateManyAndReturnArgs} args - Arguments to update many Properties.
     * @example
     * // Update many Properties
     * const property = await prisma.property.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Properties and only return the `id`
     * const propertyWithIdOnly = await prisma.property.updateManyAndReturn({
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
    updateManyAndReturn<T extends PropertyUpdateManyAndReturnArgs>(args: SelectSubset<T, PropertyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Property.
     * @param {PropertyUpsertArgs} args - Arguments to update or create a Property.
     * @example
     * // Update or create a Property
     * const property = await prisma.property.upsert({
     *   create: {
     *     // ... data to create a Property
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Property we want to update
     *   }
     * })
     */
    upsert<T extends PropertyUpsertArgs>(args: SelectSubset<T, PropertyUpsertArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Properties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyCountArgs} args - Arguments to filter Properties to count.
     * @example
     * // Count the number of Properties
     * const count = await prisma.property.count({
     *   where: {
     *     // ... the filter for the Properties we want to count
     *   }
     * })
    **/
    count<T extends PropertyCountArgs>(
      args?: Subset<T, PropertyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PropertyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Property.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PropertyAggregateArgs>(args: Subset<T, PropertyAggregateArgs>): Prisma.PrismaPromise<GetPropertyAggregateType<T>>

    /**
     * Group by Property.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyGroupByArgs} args - Group by arguments.
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
      T extends PropertyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PropertyGroupByArgs['orderBy'] }
        : { orderBy?: PropertyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PropertyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPropertyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Property model
   */
  readonly fields: PropertyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Property.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PropertyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    units<T extends Property$unitsArgs<ExtArgs> = {}>(args?: Subset<T, Property$unitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RentalUnitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    meters<T extends Property$metersArgs<ExtArgs> = {}>(args?: Subset<T, Property$metersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Property model
   */
  interface PropertyFieldRefs {
    readonly id: FieldRef<"Property", 'String'>
    readonly name: FieldRef<"Property", 'String'>
    readonly address: FieldRef<"Property", 'String'>
    readonly city: FieldRef<"Property", 'String'>
    readonly state: FieldRef<"Property", 'String'>
    readonly pinCode: FieldRef<"Property", 'String'>
    readonly createdAt: FieldRef<"Property", 'DateTime'>
    readonly updatedAt: FieldRef<"Property", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Property findUnique
   */
  export type PropertyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property findUniqueOrThrow
   */
  export type PropertyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property findFirst
   */
  export type PropertyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Properties.
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Properties.
     */
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * Property findFirstOrThrow
   */
  export type PropertyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Properties.
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Properties.
     */
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * Property findMany
   */
  export type PropertyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Properties to fetch.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Properties.
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * Property create
   */
  export type PropertyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * The data needed to create a Property.
     */
    data: XOR<PropertyCreateInput, PropertyUncheckedCreateInput>
  }

  /**
   * Property createMany
   */
  export type PropertyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Properties.
     */
    data: PropertyCreateManyInput | PropertyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Property createManyAndReturn
   */
  export type PropertyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * The data used to create many Properties.
     */
    data: PropertyCreateManyInput | PropertyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Property update
   */
  export type PropertyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * The data needed to update a Property.
     */
    data: XOR<PropertyUpdateInput, PropertyUncheckedUpdateInput>
    /**
     * Choose, which Property to update.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property updateMany
   */
  export type PropertyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Properties.
     */
    data: XOR<PropertyUpdateManyMutationInput, PropertyUncheckedUpdateManyInput>
    /**
     * Filter which Properties to update
     */
    where?: PropertyWhereInput
    /**
     * Limit how many Properties to update.
     */
    limit?: number
  }

  /**
   * Property updateManyAndReturn
   */
  export type PropertyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * The data used to update Properties.
     */
    data: XOR<PropertyUpdateManyMutationInput, PropertyUncheckedUpdateManyInput>
    /**
     * Filter which Properties to update
     */
    where?: PropertyWhereInput
    /**
     * Limit how many Properties to update.
     */
    limit?: number
  }

  /**
   * Property upsert
   */
  export type PropertyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * The filter to search for the Property to update in case it exists.
     */
    where: PropertyWhereUniqueInput
    /**
     * In case the Property found by the `where` argument doesn't exist, create a new Property with this data.
     */
    create: XOR<PropertyCreateInput, PropertyUncheckedCreateInput>
    /**
     * In case the Property was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PropertyUpdateInput, PropertyUncheckedUpdateInput>
  }

  /**
   * Property delete
   */
  export type PropertyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter which Property to delete.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property deleteMany
   */
  export type PropertyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Properties to delete
     */
    where?: PropertyWhereInput
    /**
     * Limit how many Properties to delete.
     */
    limit?: number
  }

  /**
   * Property.units
   */
  export type Property$unitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalUnit
     */
    select?: RentalUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalUnit
     */
    omit?: RentalUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalUnitInclude<ExtArgs> | null
    where?: RentalUnitWhereInput
    orderBy?: RentalUnitOrderByWithRelationInput | RentalUnitOrderByWithRelationInput[]
    cursor?: RentalUnitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RentalUnitScalarFieldEnum | RentalUnitScalarFieldEnum[]
  }

  /**
   * Property.meters
   */
  export type Property$metersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meter
     */
    select?: MeterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meter
     */
    omit?: MeterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeterInclude<ExtArgs> | null
    where?: MeterWhereInput
    orderBy?: MeterOrderByWithRelationInput | MeterOrderByWithRelationInput[]
    cursor?: MeterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MeterScalarFieldEnum | MeterScalarFieldEnum[]
  }

  /**
   * Property without action
   */
  export type PropertyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
  }


  /**
   * Model RentalUnit
   */

  export type AggregateRentalUnit = {
    _count: RentalUnitCountAggregateOutputType | null
    _avg: RentalUnitAvgAggregateOutputType | null
    _sum: RentalUnitSumAggregateOutputType | null
    _min: RentalUnitMinAggregateOutputType | null
    _max: RentalUnitMaxAggregateOutputType | null
  }

  export type RentalUnitAvgAggregateOutputType = {
    floor: number | null
  }

  export type RentalUnitSumAggregateOutputType = {
    floor: number | null
  }

  export type RentalUnitMinAggregateOutputType = {
    id: string | null
    name: string | null
    unitNumber: string | null
    floor: number | null
    type: $Enums.UnitType | null
    propertyId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RentalUnitMaxAggregateOutputType = {
    id: string | null
    name: string | null
    unitNumber: string | null
    floor: number | null
    type: $Enums.UnitType | null
    propertyId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RentalUnitCountAggregateOutputType = {
    id: number
    name: number
    unitNumber: number
    floor: number
    type: number
    propertyId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RentalUnitAvgAggregateInputType = {
    floor?: true
  }

  export type RentalUnitSumAggregateInputType = {
    floor?: true
  }

  export type RentalUnitMinAggregateInputType = {
    id?: true
    name?: true
    unitNumber?: true
    floor?: true
    type?: true
    propertyId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RentalUnitMaxAggregateInputType = {
    id?: true
    name?: true
    unitNumber?: true
    floor?: true
    type?: true
    propertyId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RentalUnitCountAggregateInputType = {
    id?: true
    name?: true
    unitNumber?: true
    floor?: true
    type?: true
    propertyId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RentalUnitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RentalUnit to aggregate.
     */
    where?: RentalUnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RentalUnits to fetch.
     */
    orderBy?: RentalUnitOrderByWithRelationInput | RentalUnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RentalUnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RentalUnits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RentalUnits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RentalUnits
    **/
    _count?: true | RentalUnitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RentalUnitAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RentalUnitSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RentalUnitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RentalUnitMaxAggregateInputType
  }

  export type GetRentalUnitAggregateType<T extends RentalUnitAggregateArgs> = {
        [P in keyof T & keyof AggregateRentalUnit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRentalUnit[P]>
      : GetScalarType<T[P], AggregateRentalUnit[P]>
  }




  export type RentalUnitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RentalUnitWhereInput
    orderBy?: RentalUnitOrderByWithAggregationInput | RentalUnitOrderByWithAggregationInput[]
    by: RentalUnitScalarFieldEnum[] | RentalUnitScalarFieldEnum
    having?: RentalUnitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RentalUnitCountAggregateInputType | true
    _avg?: RentalUnitAvgAggregateInputType
    _sum?: RentalUnitSumAggregateInputType
    _min?: RentalUnitMinAggregateInputType
    _max?: RentalUnitMaxAggregateInputType
  }

  export type RentalUnitGroupByOutputType = {
    id: string
    name: string
    unitNumber: string
    floor: number
    type: $Enums.UnitType
    propertyId: string
    createdAt: Date
    updatedAt: Date
    _count: RentalUnitCountAggregateOutputType | null
    _avg: RentalUnitAvgAggregateOutputType | null
    _sum: RentalUnitSumAggregateOutputType | null
    _min: RentalUnitMinAggregateOutputType | null
    _max: RentalUnitMaxAggregateOutputType | null
  }

  type GetRentalUnitGroupByPayload<T extends RentalUnitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RentalUnitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RentalUnitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RentalUnitGroupByOutputType[P]>
            : GetScalarType<T[P], RentalUnitGroupByOutputType[P]>
        }
      >
    >


  export type RentalUnitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    unitNumber?: boolean
    floor?: boolean
    type?: boolean
    propertyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    assignments?: boolean | RentalUnit$assignmentsArgs<ExtArgs>
    rentals?: boolean | RentalUnit$rentalsArgs<ExtArgs>
    _count?: boolean | RentalUnitCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rentalUnit"]>

  export type RentalUnitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    unitNumber?: boolean
    floor?: boolean
    type?: boolean
    propertyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rentalUnit"]>

  export type RentalUnitSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    unitNumber?: boolean
    floor?: boolean
    type?: boolean
    propertyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rentalUnit"]>

  export type RentalUnitSelectScalar = {
    id?: boolean
    name?: boolean
    unitNumber?: boolean
    floor?: boolean
    type?: boolean
    propertyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RentalUnitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "unitNumber" | "floor" | "type" | "propertyId" | "createdAt" | "updatedAt", ExtArgs["result"]["rentalUnit"]>
  export type RentalUnitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    assignments?: boolean | RentalUnit$assignmentsArgs<ExtArgs>
    rentals?: boolean | RentalUnit$rentalsArgs<ExtArgs>
    _count?: boolean | RentalUnitCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RentalUnitIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }
  export type RentalUnitIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }

  export type $RentalUnitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RentalUnit"
    objects: {
      property: Prisma.$PropertyPayload<ExtArgs>
      assignments: Prisma.$MeterAssignmentPayload<ExtArgs>[]
      rentals: Prisma.$RentalAgreementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      unitNumber: string
      floor: number
      type: $Enums.UnitType
      propertyId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["rentalUnit"]>
    composites: {}
  }

  type RentalUnitGetPayload<S extends boolean | null | undefined | RentalUnitDefaultArgs> = $Result.GetResult<Prisma.$RentalUnitPayload, S>

  type RentalUnitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RentalUnitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RentalUnitCountAggregateInputType | true
    }

  export interface RentalUnitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RentalUnit'], meta: { name: 'RentalUnit' } }
    /**
     * Find zero or one RentalUnit that matches the filter.
     * @param {RentalUnitFindUniqueArgs} args - Arguments to find a RentalUnit
     * @example
     * // Get one RentalUnit
     * const rentalUnit = await prisma.rentalUnit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RentalUnitFindUniqueArgs>(args: SelectSubset<T, RentalUnitFindUniqueArgs<ExtArgs>>): Prisma__RentalUnitClient<$Result.GetResult<Prisma.$RentalUnitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RentalUnit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RentalUnitFindUniqueOrThrowArgs} args - Arguments to find a RentalUnit
     * @example
     * // Get one RentalUnit
     * const rentalUnit = await prisma.rentalUnit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RentalUnitFindUniqueOrThrowArgs>(args: SelectSubset<T, RentalUnitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RentalUnitClient<$Result.GetResult<Prisma.$RentalUnitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RentalUnit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalUnitFindFirstArgs} args - Arguments to find a RentalUnit
     * @example
     * // Get one RentalUnit
     * const rentalUnit = await prisma.rentalUnit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RentalUnitFindFirstArgs>(args?: SelectSubset<T, RentalUnitFindFirstArgs<ExtArgs>>): Prisma__RentalUnitClient<$Result.GetResult<Prisma.$RentalUnitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RentalUnit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalUnitFindFirstOrThrowArgs} args - Arguments to find a RentalUnit
     * @example
     * // Get one RentalUnit
     * const rentalUnit = await prisma.rentalUnit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RentalUnitFindFirstOrThrowArgs>(args?: SelectSubset<T, RentalUnitFindFirstOrThrowArgs<ExtArgs>>): Prisma__RentalUnitClient<$Result.GetResult<Prisma.$RentalUnitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RentalUnits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalUnitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RentalUnits
     * const rentalUnits = await prisma.rentalUnit.findMany()
     * 
     * // Get first 10 RentalUnits
     * const rentalUnits = await prisma.rentalUnit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rentalUnitWithIdOnly = await prisma.rentalUnit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RentalUnitFindManyArgs>(args?: SelectSubset<T, RentalUnitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RentalUnitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RentalUnit.
     * @param {RentalUnitCreateArgs} args - Arguments to create a RentalUnit.
     * @example
     * // Create one RentalUnit
     * const RentalUnit = await prisma.rentalUnit.create({
     *   data: {
     *     // ... data to create a RentalUnit
     *   }
     * })
     * 
     */
    create<T extends RentalUnitCreateArgs>(args: SelectSubset<T, RentalUnitCreateArgs<ExtArgs>>): Prisma__RentalUnitClient<$Result.GetResult<Prisma.$RentalUnitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RentalUnits.
     * @param {RentalUnitCreateManyArgs} args - Arguments to create many RentalUnits.
     * @example
     * // Create many RentalUnits
     * const rentalUnit = await prisma.rentalUnit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RentalUnitCreateManyArgs>(args?: SelectSubset<T, RentalUnitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RentalUnits and returns the data saved in the database.
     * @param {RentalUnitCreateManyAndReturnArgs} args - Arguments to create many RentalUnits.
     * @example
     * // Create many RentalUnits
     * const rentalUnit = await prisma.rentalUnit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RentalUnits and only return the `id`
     * const rentalUnitWithIdOnly = await prisma.rentalUnit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RentalUnitCreateManyAndReturnArgs>(args?: SelectSubset<T, RentalUnitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RentalUnitPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RentalUnit.
     * @param {RentalUnitDeleteArgs} args - Arguments to delete one RentalUnit.
     * @example
     * // Delete one RentalUnit
     * const RentalUnit = await prisma.rentalUnit.delete({
     *   where: {
     *     // ... filter to delete one RentalUnit
     *   }
     * })
     * 
     */
    delete<T extends RentalUnitDeleteArgs>(args: SelectSubset<T, RentalUnitDeleteArgs<ExtArgs>>): Prisma__RentalUnitClient<$Result.GetResult<Prisma.$RentalUnitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RentalUnit.
     * @param {RentalUnitUpdateArgs} args - Arguments to update one RentalUnit.
     * @example
     * // Update one RentalUnit
     * const rentalUnit = await prisma.rentalUnit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RentalUnitUpdateArgs>(args: SelectSubset<T, RentalUnitUpdateArgs<ExtArgs>>): Prisma__RentalUnitClient<$Result.GetResult<Prisma.$RentalUnitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RentalUnits.
     * @param {RentalUnitDeleteManyArgs} args - Arguments to filter RentalUnits to delete.
     * @example
     * // Delete a few RentalUnits
     * const { count } = await prisma.rentalUnit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RentalUnitDeleteManyArgs>(args?: SelectSubset<T, RentalUnitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RentalUnits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalUnitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RentalUnits
     * const rentalUnit = await prisma.rentalUnit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RentalUnitUpdateManyArgs>(args: SelectSubset<T, RentalUnitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RentalUnits and returns the data updated in the database.
     * @param {RentalUnitUpdateManyAndReturnArgs} args - Arguments to update many RentalUnits.
     * @example
     * // Update many RentalUnits
     * const rentalUnit = await prisma.rentalUnit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RentalUnits and only return the `id`
     * const rentalUnitWithIdOnly = await prisma.rentalUnit.updateManyAndReturn({
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
    updateManyAndReturn<T extends RentalUnitUpdateManyAndReturnArgs>(args: SelectSubset<T, RentalUnitUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RentalUnitPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RentalUnit.
     * @param {RentalUnitUpsertArgs} args - Arguments to update or create a RentalUnit.
     * @example
     * // Update or create a RentalUnit
     * const rentalUnit = await prisma.rentalUnit.upsert({
     *   create: {
     *     // ... data to create a RentalUnit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RentalUnit we want to update
     *   }
     * })
     */
    upsert<T extends RentalUnitUpsertArgs>(args: SelectSubset<T, RentalUnitUpsertArgs<ExtArgs>>): Prisma__RentalUnitClient<$Result.GetResult<Prisma.$RentalUnitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RentalUnits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalUnitCountArgs} args - Arguments to filter RentalUnits to count.
     * @example
     * // Count the number of RentalUnits
     * const count = await prisma.rentalUnit.count({
     *   where: {
     *     // ... the filter for the RentalUnits we want to count
     *   }
     * })
    **/
    count<T extends RentalUnitCountArgs>(
      args?: Subset<T, RentalUnitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RentalUnitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RentalUnit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalUnitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RentalUnitAggregateArgs>(args: Subset<T, RentalUnitAggregateArgs>): Prisma.PrismaPromise<GetRentalUnitAggregateType<T>>

    /**
     * Group by RentalUnit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalUnitGroupByArgs} args - Group by arguments.
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
      T extends RentalUnitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RentalUnitGroupByArgs['orderBy'] }
        : { orderBy?: RentalUnitGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RentalUnitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRentalUnitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RentalUnit model
   */
  readonly fields: RentalUnitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RentalUnit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RentalUnitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    property<T extends PropertyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PropertyDefaultArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    assignments<T extends RentalUnit$assignmentsArgs<ExtArgs> = {}>(args?: Subset<T, RentalUnit$assignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeterAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    rentals<T extends RentalUnit$rentalsArgs<ExtArgs> = {}>(args?: Subset<T, RentalUnit$rentalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RentalAgreementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the RentalUnit model
   */
  interface RentalUnitFieldRefs {
    readonly id: FieldRef<"RentalUnit", 'String'>
    readonly name: FieldRef<"RentalUnit", 'String'>
    readonly unitNumber: FieldRef<"RentalUnit", 'String'>
    readonly floor: FieldRef<"RentalUnit", 'Int'>
    readonly type: FieldRef<"RentalUnit", 'UnitType'>
    readonly propertyId: FieldRef<"RentalUnit", 'String'>
    readonly createdAt: FieldRef<"RentalUnit", 'DateTime'>
    readonly updatedAt: FieldRef<"RentalUnit", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RentalUnit findUnique
   */
  export type RentalUnitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalUnit
     */
    select?: RentalUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalUnit
     */
    omit?: RentalUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalUnitInclude<ExtArgs> | null
    /**
     * Filter, which RentalUnit to fetch.
     */
    where: RentalUnitWhereUniqueInput
  }

  /**
   * RentalUnit findUniqueOrThrow
   */
  export type RentalUnitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalUnit
     */
    select?: RentalUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalUnit
     */
    omit?: RentalUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalUnitInclude<ExtArgs> | null
    /**
     * Filter, which RentalUnit to fetch.
     */
    where: RentalUnitWhereUniqueInput
  }

  /**
   * RentalUnit findFirst
   */
  export type RentalUnitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalUnit
     */
    select?: RentalUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalUnit
     */
    omit?: RentalUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalUnitInclude<ExtArgs> | null
    /**
     * Filter, which RentalUnit to fetch.
     */
    where?: RentalUnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RentalUnits to fetch.
     */
    orderBy?: RentalUnitOrderByWithRelationInput | RentalUnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RentalUnits.
     */
    cursor?: RentalUnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RentalUnits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RentalUnits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RentalUnits.
     */
    distinct?: RentalUnitScalarFieldEnum | RentalUnitScalarFieldEnum[]
  }

  /**
   * RentalUnit findFirstOrThrow
   */
  export type RentalUnitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalUnit
     */
    select?: RentalUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalUnit
     */
    omit?: RentalUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalUnitInclude<ExtArgs> | null
    /**
     * Filter, which RentalUnit to fetch.
     */
    where?: RentalUnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RentalUnits to fetch.
     */
    orderBy?: RentalUnitOrderByWithRelationInput | RentalUnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RentalUnits.
     */
    cursor?: RentalUnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RentalUnits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RentalUnits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RentalUnits.
     */
    distinct?: RentalUnitScalarFieldEnum | RentalUnitScalarFieldEnum[]
  }

  /**
   * RentalUnit findMany
   */
  export type RentalUnitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalUnit
     */
    select?: RentalUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalUnit
     */
    omit?: RentalUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalUnitInclude<ExtArgs> | null
    /**
     * Filter, which RentalUnits to fetch.
     */
    where?: RentalUnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RentalUnits to fetch.
     */
    orderBy?: RentalUnitOrderByWithRelationInput | RentalUnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RentalUnits.
     */
    cursor?: RentalUnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RentalUnits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RentalUnits.
     */
    skip?: number
    distinct?: RentalUnitScalarFieldEnum | RentalUnitScalarFieldEnum[]
  }

  /**
   * RentalUnit create
   */
  export type RentalUnitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalUnit
     */
    select?: RentalUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalUnit
     */
    omit?: RentalUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalUnitInclude<ExtArgs> | null
    /**
     * The data needed to create a RentalUnit.
     */
    data: XOR<RentalUnitCreateInput, RentalUnitUncheckedCreateInput>
  }

  /**
   * RentalUnit createMany
   */
  export type RentalUnitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RentalUnits.
     */
    data: RentalUnitCreateManyInput | RentalUnitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RentalUnit createManyAndReturn
   */
  export type RentalUnitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalUnit
     */
    select?: RentalUnitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RentalUnit
     */
    omit?: RentalUnitOmit<ExtArgs> | null
    /**
     * The data used to create many RentalUnits.
     */
    data: RentalUnitCreateManyInput | RentalUnitCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalUnitIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RentalUnit update
   */
  export type RentalUnitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalUnit
     */
    select?: RentalUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalUnit
     */
    omit?: RentalUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalUnitInclude<ExtArgs> | null
    /**
     * The data needed to update a RentalUnit.
     */
    data: XOR<RentalUnitUpdateInput, RentalUnitUncheckedUpdateInput>
    /**
     * Choose, which RentalUnit to update.
     */
    where: RentalUnitWhereUniqueInput
  }

  /**
   * RentalUnit updateMany
   */
  export type RentalUnitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RentalUnits.
     */
    data: XOR<RentalUnitUpdateManyMutationInput, RentalUnitUncheckedUpdateManyInput>
    /**
     * Filter which RentalUnits to update
     */
    where?: RentalUnitWhereInput
    /**
     * Limit how many RentalUnits to update.
     */
    limit?: number
  }

  /**
   * RentalUnit updateManyAndReturn
   */
  export type RentalUnitUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalUnit
     */
    select?: RentalUnitSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RentalUnit
     */
    omit?: RentalUnitOmit<ExtArgs> | null
    /**
     * The data used to update RentalUnits.
     */
    data: XOR<RentalUnitUpdateManyMutationInput, RentalUnitUncheckedUpdateManyInput>
    /**
     * Filter which RentalUnits to update
     */
    where?: RentalUnitWhereInput
    /**
     * Limit how many RentalUnits to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalUnitIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RentalUnit upsert
   */
  export type RentalUnitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalUnit
     */
    select?: RentalUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalUnit
     */
    omit?: RentalUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalUnitInclude<ExtArgs> | null
    /**
     * The filter to search for the RentalUnit to update in case it exists.
     */
    where: RentalUnitWhereUniqueInput
    /**
     * In case the RentalUnit found by the `where` argument doesn't exist, create a new RentalUnit with this data.
     */
    create: XOR<RentalUnitCreateInput, RentalUnitUncheckedCreateInput>
    /**
     * In case the RentalUnit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RentalUnitUpdateInput, RentalUnitUncheckedUpdateInput>
  }

  /**
   * RentalUnit delete
   */
  export type RentalUnitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalUnit
     */
    select?: RentalUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalUnit
     */
    omit?: RentalUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalUnitInclude<ExtArgs> | null
    /**
     * Filter which RentalUnit to delete.
     */
    where: RentalUnitWhereUniqueInput
  }

  /**
   * RentalUnit deleteMany
   */
  export type RentalUnitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RentalUnits to delete
     */
    where?: RentalUnitWhereInput
    /**
     * Limit how many RentalUnits to delete.
     */
    limit?: number
  }

  /**
   * RentalUnit.assignments
   */
  export type RentalUnit$assignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeterAssignment
     */
    select?: MeterAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeterAssignment
     */
    omit?: MeterAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeterAssignmentInclude<ExtArgs> | null
    where?: MeterAssignmentWhereInput
    orderBy?: MeterAssignmentOrderByWithRelationInput | MeterAssignmentOrderByWithRelationInput[]
    cursor?: MeterAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MeterAssignmentScalarFieldEnum | MeterAssignmentScalarFieldEnum[]
  }

  /**
   * RentalUnit.rentals
   */
  export type RentalUnit$rentalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalAgreement
     */
    select?: RentalAgreementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalAgreement
     */
    omit?: RentalAgreementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalAgreementInclude<ExtArgs> | null
    where?: RentalAgreementWhereInput
    orderBy?: RentalAgreementOrderByWithRelationInput | RentalAgreementOrderByWithRelationInput[]
    cursor?: RentalAgreementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RentalAgreementScalarFieldEnum | RentalAgreementScalarFieldEnum[]
  }

  /**
   * RentalUnit without action
   */
  export type RentalUnitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalUnit
     */
    select?: RentalUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalUnit
     */
    omit?: RentalUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalUnitInclude<ExtArgs> | null
  }


  /**
   * Model Meter
   */

  export type AggregateMeter = {
    _count: MeterCountAggregateOutputType | null
    _min: MeterMinAggregateOutputType | null
    _max: MeterMaxAggregateOutputType | null
  }

  export type MeterMinAggregateOutputType = {
    id: string | null
    meterNumber: string | null
    type: $Enums.MeterType | null
    status: $Enums.MeterStatus | null
    propertyId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MeterMaxAggregateOutputType = {
    id: string | null
    meterNumber: string | null
    type: $Enums.MeterType | null
    status: $Enums.MeterStatus | null
    propertyId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MeterCountAggregateOutputType = {
    id: number
    meterNumber: number
    type: number
    status: number
    propertyId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MeterMinAggregateInputType = {
    id?: true
    meterNumber?: true
    type?: true
    status?: true
    propertyId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MeterMaxAggregateInputType = {
    id?: true
    meterNumber?: true
    type?: true
    status?: true
    propertyId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MeterCountAggregateInputType = {
    id?: true
    meterNumber?: true
    type?: true
    status?: true
    propertyId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MeterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Meter to aggregate.
     */
    where?: MeterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meters to fetch.
     */
    orderBy?: MeterOrderByWithRelationInput | MeterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MeterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Meters
    **/
    _count?: true | MeterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MeterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MeterMaxAggregateInputType
  }

  export type GetMeterAggregateType<T extends MeterAggregateArgs> = {
        [P in keyof T & keyof AggregateMeter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMeter[P]>
      : GetScalarType<T[P], AggregateMeter[P]>
  }




  export type MeterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MeterWhereInput
    orderBy?: MeterOrderByWithAggregationInput | MeterOrderByWithAggregationInput[]
    by: MeterScalarFieldEnum[] | MeterScalarFieldEnum
    having?: MeterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MeterCountAggregateInputType | true
    _min?: MeterMinAggregateInputType
    _max?: MeterMaxAggregateInputType
  }

  export type MeterGroupByOutputType = {
    id: string
    meterNumber: string
    type: $Enums.MeterType
    status: $Enums.MeterStatus
    propertyId: string
    createdAt: Date
    updatedAt: Date
    _count: MeterCountAggregateOutputType | null
    _min: MeterMinAggregateOutputType | null
    _max: MeterMaxAggregateOutputType | null
  }

  type GetMeterGroupByPayload<T extends MeterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MeterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MeterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MeterGroupByOutputType[P]>
            : GetScalarType<T[P], MeterGroupByOutputType[P]>
        }
      >
    >


  export type MeterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    meterNumber?: boolean
    type?: boolean
    status?: boolean
    propertyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    assignments?: boolean | Meter$assignmentsArgs<ExtArgs>
    readings?: boolean | Meter$readingsArgs<ExtArgs>
    _count?: boolean | MeterCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meter"]>

  export type MeterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    meterNumber?: boolean
    type?: boolean
    status?: boolean
    propertyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meter"]>

  export type MeterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    meterNumber?: boolean
    type?: boolean
    status?: boolean
    propertyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meter"]>

  export type MeterSelectScalar = {
    id?: boolean
    meterNumber?: boolean
    type?: boolean
    status?: boolean
    propertyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MeterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "meterNumber" | "type" | "status" | "propertyId" | "createdAt" | "updatedAt", ExtArgs["result"]["meter"]>
  export type MeterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    assignments?: boolean | Meter$assignmentsArgs<ExtArgs>
    readings?: boolean | Meter$readingsArgs<ExtArgs>
    _count?: boolean | MeterCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MeterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }
  export type MeterIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }

  export type $MeterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Meter"
    objects: {
      property: Prisma.$PropertyPayload<ExtArgs>
      assignments: Prisma.$MeterAssignmentPayload<ExtArgs>[]
      readings: Prisma.$MeterReadingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      meterNumber: string
      type: $Enums.MeterType
      status: $Enums.MeterStatus
      propertyId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["meter"]>
    composites: {}
  }

  type MeterGetPayload<S extends boolean | null | undefined | MeterDefaultArgs> = $Result.GetResult<Prisma.$MeterPayload, S>

  type MeterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MeterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MeterCountAggregateInputType | true
    }

  export interface MeterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Meter'], meta: { name: 'Meter' } }
    /**
     * Find zero or one Meter that matches the filter.
     * @param {MeterFindUniqueArgs} args - Arguments to find a Meter
     * @example
     * // Get one Meter
     * const meter = await prisma.meter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MeterFindUniqueArgs>(args: SelectSubset<T, MeterFindUniqueArgs<ExtArgs>>): Prisma__MeterClient<$Result.GetResult<Prisma.$MeterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Meter that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MeterFindUniqueOrThrowArgs} args - Arguments to find a Meter
     * @example
     * // Get one Meter
     * const meter = await prisma.meter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MeterFindUniqueOrThrowArgs>(args: SelectSubset<T, MeterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MeterClient<$Result.GetResult<Prisma.$MeterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Meter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeterFindFirstArgs} args - Arguments to find a Meter
     * @example
     * // Get one Meter
     * const meter = await prisma.meter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MeterFindFirstArgs>(args?: SelectSubset<T, MeterFindFirstArgs<ExtArgs>>): Prisma__MeterClient<$Result.GetResult<Prisma.$MeterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Meter that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeterFindFirstOrThrowArgs} args - Arguments to find a Meter
     * @example
     * // Get one Meter
     * const meter = await prisma.meter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MeterFindFirstOrThrowArgs>(args?: SelectSubset<T, MeterFindFirstOrThrowArgs<ExtArgs>>): Prisma__MeterClient<$Result.GetResult<Prisma.$MeterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Meters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Meters
     * const meters = await prisma.meter.findMany()
     * 
     * // Get first 10 Meters
     * const meters = await prisma.meter.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const meterWithIdOnly = await prisma.meter.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MeterFindManyArgs>(args?: SelectSubset<T, MeterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Meter.
     * @param {MeterCreateArgs} args - Arguments to create a Meter.
     * @example
     * // Create one Meter
     * const Meter = await prisma.meter.create({
     *   data: {
     *     // ... data to create a Meter
     *   }
     * })
     * 
     */
    create<T extends MeterCreateArgs>(args: SelectSubset<T, MeterCreateArgs<ExtArgs>>): Prisma__MeterClient<$Result.GetResult<Prisma.$MeterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Meters.
     * @param {MeterCreateManyArgs} args - Arguments to create many Meters.
     * @example
     * // Create many Meters
     * const meter = await prisma.meter.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MeterCreateManyArgs>(args?: SelectSubset<T, MeterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Meters and returns the data saved in the database.
     * @param {MeterCreateManyAndReturnArgs} args - Arguments to create many Meters.
     * @example
     * // Create many Meters
     * const meter = await prisma.meter.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Meters and only return the `id`
     * const meterWithIdOnly = await prisma.meter.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MeterCreateManyAndReturnArgs>(args?: SelectSubset<T, MeterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Meter.
     * @param {MeterDeleteArgs} args - Arguments to delete one Meter.
     * @example
     * // Delete one Meter
     * const Meter = await prisma.meter.delete({
     *   where: {
     *     // ... filter to delete one Meter
     *   }
     * })
     * 
     */
    delete<T extends MeterDeleteArgs>(args: SelectSubset<T, MeterDeleteArgs<ExtArgs>>): Prisma__MeterClient<$Result.GetResult<Prisma.$MeterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Meter.
     * @param {MeterUpdateArgs} args - Arguments to update one Meter.
     * @example
     * // Update one Meter
     * const meter = await prisma.meter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MeterUpdateArgs>(args: SelectSubset<T, MeterUpdateArgs<ExtArgs>>): Prisma__MeterClient<$Result.GetResult<Prisma.$MeterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Meters.
     * @param {MeterDeleteManyArgs} args - Arguments to filter Meters to delete.
     * @example
     * // Delete a few Meters
     * const { count } = await prisma.meter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MeterDeleteManyArgs>(args?: SelectSubset<T, MeterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Meters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Meters
     * const meter = await prisma.meter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MeterUpdateManyArgs>(args: SelectSubset<T, MeterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Meters and returns the data updated in the database.
     * @param {MeterUpdateManyAndReturnArgs} args - Arguments to update many Meters.
     * @example
     * // Update many Meters
     * const meter = await prisma.meter.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Meters and only return the `id`
     * const meterWithIdOnly = await prisma.meter.updateManyAndReturn({
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
    updateManyAndReturn<T extends MeterUpdateManyAndReturnArgs>(args: SelectSubset<T, MeterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Meter.
     * @param {MeterUpsertArgs} args - Arguments to update or create a Meter.
     * @example
     * // Update or create a Meter
     * const meter = await prisma.meter.upsert({
     *   create: {
     *     // ... data to create a Meter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Meter we want to update
     *   }
     * })
     */
    upsert<T extends MeterUpsertArgs>(args: SelectSubset<T, MeterUpsertArgs<ExtArgs>>): Prisma__MeterClient<$Result.GetResult<Prisma.$MeterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Meters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeterCountArgs} args - Arguments to filter Meters to count.
     * @example
     * // Count the number of Meters
     * const count = await prisma.meter.count({
     *   where: {
     *     // ... the filter for the Meters we want to count
     *   }
     * })
    **/
    count<T extends MeterCountArgs>(
      args?: Subset<T, MeterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MeterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Meter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MeterAggregateArgs>(args: Subset<T, MeterAggregateArgs>): Prisma.PrismaPromise<GetMeterAggregateType<T>>

    /**
     * Group by Meter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeterGroupByArgs} args - Group by arguments.
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
      T extends MeterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MeterGroupByArgs['orderBy'] }
        : { orderBy?: MeterGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MeterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMeterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Meter model
   */
  readonly fields: MeterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Meter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MeterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    property<T extends PropertyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PropertyDefaultArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    assignments<T extends Meter$assignmentsArgs<ExtArgs> = {}>(args?: Subset<T, Meter$assignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeterAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    readings<T extends Meter$readingsArgs<ExtArgs> = {}>(args?: Subset<T, Meter$readingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeterReadingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Meter model
   */
  interface MeterFieldRefs {
    readonly id: FieldRef<"Meter", 'String'>
    readonly meterNumber: FieldRef<"Meter", 'String'>
    readonly type: FieldRef<"Meter", 'MeterType'>
    readonly status: FieldRef<"Meter", 'MeterStatus'>
    readonly propertyId: FieldRef<"Meter", 'String'>
    readonly createdAt: FieldRef<"Meter", 'DateTime'>
    readonly updatedAt: FieldRef<"Meter", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Meter findUnique
   */
  export type MeterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meter
     */
    select?: MeterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meter
     */
    omit?: MeterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeterInclude<ExtArgs> | null
    /**
     * Filter, which Meter to fetch.
     */
    where: MeterWhereUniqueInput
  }

  /**
   * Meter findUniqueOrThrow
   */
  export type MeterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meter
     */
    select?: MeterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meter
     */
    omit?: MeterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeterInclude<ExtArgs> | null
    /**
     * Filter, which Meter to fetch.
     */
    where: MeterWhereUniqueInput
  }

  /**
   * Meter findFirst
   */
  export type MeterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meter
     */
    select?: MeterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meter
     */
    omit?: MeterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeterInclude<ExtArgs> | null
    /**
     * Filter, which Meter to fetch.
     */
    where?: MeterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meters to fetch.
     */
    orderBy?: MeterOrderByWithRelationInput | MeterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Meters.
     */
    cursor?: MeterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Meters.
     */
    distinct?: MeterScalarFieldEnum | MeterScalarFieldEnum[]
  }

  /**
   * Meter findFirstOrThrow
   */
  export type MeterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meter
     */
    select?: MeterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meter
     */
    omit?: MeterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeterInclude<ExtArgs> | null
    /**
     * Filter, which Meter to fetch.
     */
    where?: MeterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meters to fetch.
     */
    orderBy?: MeterOrderByWithRelationInput | MeterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Meters.
     */
    cursor?: MeterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Meters.
     */
    distinct?: MeterScalarFieldEnum | MeterScalarFieldEnum[]
  }

  /**
   * Meter findMany
   */
  export type MeterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meter
     */
    select?: MeterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meter
     */
    omit?: MeterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeterInclude<ExtArgs> | null
    /**
     * Filter, which Meters to fetch.
     */
    where?: MeterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meters to fetch.
     */
    orderBy?: MeterOrderByWithRelationInput | MeterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Meters.
     */
    cursor?: MeterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meters.
     */
    skip?: number
    distinct?: MeterScalarFieldEnum | MeterScalarFieldEnum[]
  }

  /**
   * Meter create
   */
  export type MeterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meter
     */
    select?: MeterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meter
     */
    omit?: MeterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeterInclude<ExtArgs> | null
    /**
     * The data needed to create a Meter.
     */
    data: XOR<MeterCreateInput, MeterUncheckedCreateInput>
  }

  /**
   * Meter createMany
   */
  export type MeterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Meters.
     */
    data: MeterCreateManyInput | MeterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Meter createManyAndReturn
   */
  export type MeterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meter
     */
    select?: MeterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Meter
     */
    omit?: MeterOmit<ExtArgs> | null
    /**
     * The data used to create many Meters.
     */
    data: MeterCreateManyInput | MeterCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeterIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Meter update
   */
  export type MeterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meter
     */
    select?: MeterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meter
     */
    omit?: MeterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeterInclude<ExtArgs> | null
    /**
     * The data needed to update a Meter.
     */
    data: XOR<MeterUpdateInput, MeterUncheckedUpdateInput>
    /**
     * Choose, which Meter to update.
     */
    where: MeterWhereUniqueInput
  }

  /**
   * Meter updateMany
   */
  export type MeterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Meters.
     */
    data: XOR<MeterUpdateManyMutationInput, MeterUncheckedUpdateManyInput>
    /**
     * Filter which Meters to update
     */
    where?: MeterWhereInput
    /**
     * Limit how many Meters to update.
     */
    limit?: number
  }

  /**
   * Meter updateManyAndReturn
   */
  export type MeterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meter
     */
    select?: MeterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Meter
     */
    omit?: MeterOmit<ExtArgs> | null
    /**
     * The data used to update Meters.
     */
    data: XOR<MeterUpdateManyMutationInput, MeterUncheckedUpdateManyInput>
    /**
     * Filter which Meters to update
     */
    where?: MeterWhereInput
    /**
     * Limit how many Meters to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeterIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Meter upsert
   */
  export type MeterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meter
     */
    select?: MeterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meter
     */
    omit?: MeterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeterInclude<ExtArgs> | null
    /**
     * The filter to search for the Meter to update in case it exists.
     */
    where: MeterWhereUniqueInput
    /**
     * In case the Meter found by the `where` argument doesn't exist, create a new Meter with this data.
     */
    create: XOR<MeterCreateInput, MeterUncheckedCreateInput>
    /**
     * In case the Meter was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MeterUpdateInput, MeterUncheckedUpdateInput>
  }

  /**
   * Meter delete
   */
  export type MeterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meter
     */
    select?: MeterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meter
     */
    omit?: MeterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeterInclude<ExtArgs> | null
    /**
     * Filter which Meter to delete.
     */
    where: MeterWhereUniqueInput
  }

  /**
   * Meter deleteMany
   */
  export type MeterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Meters to delete
     */
    where?: MeterWhereInput
    /**
     * Limit how many Meters to delete.
     */
    limit?: number
  }

  /**
   * Meter.assignments
   */
  export type Meter$assignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeterAssignment
     */
    select?: MeterAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeterAssignment
     */
    omit?: MeterAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeterAssignmentInclude<ExtArgs> | null
    where?: MeterAssignmentWhereInput
    orderBy?: MeterAssignmentOrderByWithRelationInput | MeterAssignmentOrderByWithRelationInput[]
    cursor?: MeterAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MeterAssignmentScalarFieldEnum | MeterAssignmentScalarFieldEnum[]
  }

  /**
   * Meter.readings
   */
  export type Meter$readingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeterReading
     */
    select?: MeterReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeterReading
     */
    omit?: MeterReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeterReadingInclude<ExtArgs> | null
    where?: MeterReadingWhereInput
    orderBy?: MeterReadingOrderByWithRelationInput | MeterReadingOrderByWithRelationInput[]
    cursor?: MeterReadingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MeterReadingScalarFieldEnum | MeterReadingScalarFieldEnum[]
  }

  /**
   * Meter without action
   */
  export type MeterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meter
     */
    select?: MeterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meter
     */
    omit?: MeterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeterInclude<ExtArgs> | null
  }


  /**
   * Model MeterAssignment
   */

  export type AggregateMeterAssignment = {
    _count: MeterAssignmentCountAggregateOutputType | null
    _min: MeterAssignmentMinAggregateOutputType | null
    _max: MeterAssignmentMaxAggregateOutputType | null
  }

  export type MeterAssignmentMinAggregateOutputType = {
    id: string | null
    meterId: string | null
    rentalUnitId: string | null
    createdAt: Date | null
  }

  export type MeterAssignmentMaxAggregateOutputType = {
    id: string | null
    meterId: string | null
    rentalUnitId: string | null
    createdAt: Date | null
  }

  export type MeterAssignmentCountAggregateOutputType = {
    id: number
    meterId: number
    rentalUnitId: number
    createdAt: number
    _all: number
  }


  export type MeterAssignmentMinAggregateInputType = {
    id?: true
    meterId?: true
    rentalUnitId?: true
    createdAt?: true
  }

  export type MeterAssignmentMaxAggregateInputType = {
    id?: true
    meterId?: true
    rentalUnitId?: true
    createdAt?: true
  }

  export type MeterAssignmentCountAggregateInputType = {
    id?: true
    meterId?: true
    rentalUnitId?: true
    createdAt?: true
    _all?: true
  }

  export type MeterAssignmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MeterAssignment to aggregate.
     */
    where?: MeterAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MeterAssignments to fetch.
     */
    orderBy?: MeterAssignmentOrderByWithRelationInput | MeterAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MeterAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MeterAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MeterAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MeterAssignments
    **/
    _count?: true | MeterAssignmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MeterAssignmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MeterAssignmentMaxAggregateInputType
  }

  export type GetMeterAssignmentAggregateType<T extends MeterAssignmentAggregateArgs> = {
        [P in keyof T & keyof AggregateMeterAssignment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMeterAssignment[P]>
      : GetScalarType<T[P], AggregateMeterAssignment[P]>
  }




  export type MeterAssignmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MeterAssignmentWhereInput
    orderBy?: MeterAssignmentOrderByWithAggregationInput | MeterAssignmentOrderByWithAggregationInput[]
    by: MeterAssignmentScalarFieldEnum[] | MeterAssignmentScalarFieldEnum
    having?: MeterAssignmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MeterAssignmentCountAggregateInputType | true
    _min?: MeterAssignmentMinAggregateInputType
    _max?: MeterAssignmentMaxAggregateInputType
  }

  export type MeterAssignmentGroupByOutputType = {
    id: string
    meterId: string
    rentalUnitId: string
    createdAt: Date
    _count: MeterAssignmentCountAggregateOutputType | null
    _min: MeterAssignmentMinAggregateOutputType | null
    _max: MeterAssignmentMaxAggregateOutputType | null
  }

  type GetMeterAssignmentGroupByPayload<T extends MeterAssignmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MeterAssignmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MeterAssignmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MeterAssignmentGroupByOutputType[P]>
            : GetScalarType<T[P], MeterAssignmentGroupByOutputType[P]>
        }
      >
    >


  export type MeterAssignmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    meterId?: boolean
    rentalUnitId?: boolean
    createdAt?: boolean
    meter?: boolean | MeterDefaultArgs<ExtArgs>
    rentalUnit?: boolean | RentalUnitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meterAssignment"]>

  export type MeterAssignmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    meterId?: boolean
    rentalUnitId?: boolean
    createdAt?: boolean
    meter?: boolean | MeterDefaultArgs<ExtArgs>
    rentalUnit?: boolean | RentalUnitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meterAssignment"]>

  export type MeterAssignmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    meterId?: boolean
    rentalUnitId?: boolean
    createdAt?: boolean
    meter?: boolean | MeterDefaultArgs<ExtArgs>
    rentalUnit?: boolean | RentalUnitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meterAssignment"]>

  export type MeterAssignmentSelectScalar = {
    id?: boolean
    meterId?: boolean
    rentalUnitId?: boolean
    createdAt?: boolean
  }

  export type MeterAssignmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "meterId" | "rentalUnitId" | "createdAt", ExtArgs["result"]["meterAssignment"]>
  export type MeterAssignmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meter?: boolean | MeterDefaultArgs<ExtArgs>
    rentalUnit?: boolean | RentalUnitDefaultArgs<ExtArgs>
  }
  export type MeterAssignmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meter?: boolean | MeterDefaultArgs<ExtArgs>
    rentalUnit?: boolean | RentalUnitDefaultArgs<ExtArgs>
  }
  export type MeterAssignmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meter?: boolean | MeterDefaultArgs<ExtArgs>
    rentalUnit?: boolean | RentalUnitDefaultArgs<ExtArgs>
  }

  export type $MeterAssignmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MeterAssignment"
    objects: {
      meter: Prisma.$MeterPayload<ExtArgs>
      rentalUnit: Prisma.$RentalUnitPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      meterId: string
      rentalUnitId: string
      createdAt: Date
    }, ExtArgs["result"]["meterAssignment"]>
    composites: {}
  }

  type MeterAssignmentGetPayload<S extends boolean | null | undefined | MeterAssignmentDefaultArgs> = $Result.GetResult<Prisma.$MeterAssignmentPayload, S>

  type MeterAssignmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MeterAssignmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MeterAssignmentCountAggregateInputType | true
    }

  export interface MeterAssignmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MeterAssignment'], meta: { name: 'MeterAssignment' } }
    /**
     * Find zero or one MeterAssignment that matches the filter.
     * @param {MeterAssignmentFindUniqueArgs} args - Arguments to find a MeterAssignment
     * @example
     * // Get one MeterAssignment
     * const meterAssignment = await prisma.meterAssignment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MeterAssignmentFindUniqueArgs>(args: SelectSubset<T, MeterAssignmentFindUniqueArgs<ExtArgs>>): Prisma__MeterAssignmentClient<$Result.GetResult<Prisma.$MeterAssignmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MeterAssignment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MeterAssignmentFindUniqueOrThrowArgs} args - Arguments to find a MeterAssignment
     * @example
     * // Get one MeterAssignment
     * const meterAssignment = await prisma.meterAssignment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MeterAssignmentFindUniqueOrThrowArgs>(args: SelectSubset<T, MeterAssignmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MeterAssignmentClient<$Result.GetResult<Prisma.$MeterAssignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MeterAssignment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeterAssignmentFindFirstArgs} args - Arguments to find a MeterAssignment
     * @example
     * // Get one MeterAssignment
     * const meterAssignment = await prisma.meterAssignment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MeterAssignmentFindFirstArgs>(args?: SelectSubset<T, MeterAssignmentFindFirstArgs<ExtArgs>>): Prisma__MeterAssignmentClient<$Result.GetResult<Prisma.$MeterAssignmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MeterAssignment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeterAssignmentFindFirstOrThrowArgs} args - Arguments to find a MeterAssignment
     * @example
     * // Get one MeterAssignment
     * const meterAssignment = await prisma.meterAssignment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MeterAssignmentFindFirstOrThrowArgs>(args?: SelectSubset<T, MeterAssignmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__MeterAssignmentClient<$Result.GetResult<Prisma.$MeterAssignmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MeterAssignments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeterAssignmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MeterAssignments
     * const meterAssignments = await prisma.meterAssignment.findMany()
     * 
     * // Get first 10 MeterAssignments
     * const meterAssignments = await prisma.meterAssignment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const meterAssignmentWithIdOnly = await prisma.meterAssignment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MeterAssignmentFindManyArgs>(args?: SelectSubset<T, MeterAssignmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeterAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MeterAssignment.
     * @param {MeterAssignmentCreateArgs} args - Arguments to create a MeterAssignment.
     * @example
     * // Create one MeterAssignment
     * const MeterAssignment = await prisma.meterAssignment.create({
     *   data: {
     *     // ... data to create a MeterAssignment
     *   }
     * })
     * 
     */
    create<T extends MeterAssignmentCreateArgs>(args: SelectSubset<T, MeterAssignmentCreateArgs<ExtArgs>>): Prisma__MeterAssignmentClient<$Result.GetResult<Prisma.$MeterAssignmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MeterAssignments.
     * @param {MeterAssignmentCreateManyArgs} args - Arguments to create many MeterAssignments.
     * @example
     * // Create many MeterAssignments
     * const meterAssignment = await prisma.meterAssignment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MeterAssignmentCreateManyArgs>(args?: SelectSubset<T, MeterAssignmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MeterAssignments and returns the data saved in the database.
     * @param {MeterAssignmentCreateManyAndReturnArgs} args - Arguments to create many MeterAssignments.
     * @example
     * // Create many MeterAssignments
     * const meterAssignment = await prisma.meterAssignment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MeterAssignments and only return the `id`
     * const meterAssignmentWithIdOnly = await prisma.meterAssignment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MeterAssignmentCreateManyAndReturnArgs>(args?: SelectSubset<T, MeterAssignmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeterAssignmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MeterAssignment.
     * @param {MeterAssignmentDeleteArgs} args - Arguments to delete one MeterAssignment.
     * @example
     * // Delete one MeterAssignment
     * const MeterAssignment = await prisma.meterAssignment.delete({
     *   where: {
     *     // ... filter to delete one MeterAssignment
     *   }
     * })
     * 
     */
    delete<T extends MeterAssignmentDeleteArgs>(args: SelectSubset<T, MeterAssignmentDeleteArgs<ExtArgs>>): Prisma__MeterAssignmentClient<$Result.GetResult<Prisma.$MeterAssignmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MeterAssignment.
     * @param {MeterAssignmentUpdateArgs} args - Arguments to update one MeterAssignment.
     * @example
     * // Update one MeterAssignment
     * const meterAssignment = await prisma.meterAssignment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MeterAssignmentUpdateArgs>(args: SelectSubset<T, MeterAssignmentUpdateArgs<ExtArgs>>): Prisma__MeterAssignmentClient<$Result.GetResult<Prisma.$MeterAssignmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MeterAssignments.
     * @param {MeterAssignmentDeleteManyArgs} args - Arguments to filter MeterAssignments to delete.
     * @example
     * // Delete a few MeterAssignments
     * const { count } = await prisma.meterAssignment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MeterAssignmentDeleteManyArgs>(args?: SelectSubset<T, MeterAssignmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MeterAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeterAssignmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MeterAssignments
     * const meterAssignment = await prisma.meterAssignment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MeterAssignmentUpdateManyArgs>(args: SelectSubset<T, MeterAssignmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MeterAssignments and returns the data updated in the database.
     * @param {MeterAssignmentUpdateManyAndReturnArgs} args - Arguments to update many MeterAssignments.
     * @example
     * // Update many MeterAssignments
     * const meterAssignment = await prisma.meterAssignment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MeterAssignments and only return the `id`
     * const meterAssignmentWithIdOnly = await prisma.meterAssignment.updateManyAndReturn({
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
    updateManyAndReturn<T extends MeterAssignmentUpdateManyAndReturnArgs>(args: SelectSubset<T, MeterAssignmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeterAssignmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MeterAssignment.
     * @param {MeterAssignmentUpsertArgs} args - Arguments to update or create a MeterAssignment.
     * @example
     * // Update or create a MeterAssignment
     * const meterAssignment = await prisma.meterAssignment.upsert({
     *   create: {
     *     // ... data to create a MeterAssignment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MeterAssignment we want to update
     *   }
     * })
     */
    upsert<T extends MeterAssignmentUpsertArgs>(args: SelectSubset<T, MeterAssignmentUpsertArgs<ExtArgs>>): Prisma__MeterAssignmentClient<$Result.GetResult<Prisma.$MeterAssignmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MeterAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeterAssignmentCountArgs} args - Arguments to filter MeterAssignments to count.
     * @example
     * // Count the number of MeterAssignments
     * const count = await prisma.meterAssignment.count({
     *   where: {
     *     // ... the filter for the MeterAssignments we want to count
     *   }
     * })
    **/
    count<T extends MeterAssignmentCountArgs>(
      args?: Subset<T, MeterAssignmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MeterAssignmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MeterAssignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeterAssignmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MeterAssignmentAggregateArgs>(args: Subset<T, MeterAssignmentAggregateArgs>): Prisma.PrismaPromise<GetMeterAssignmentAggregateType<T>>

    /**
     * Group by MeterAssignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeterAssignmentGroupByArgs} args - Group by arguments.
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
      T extends MeterAssignmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MeterAssignmentGroupByArgs['orderBy'] }
        : { orderBy?: MeterAssignmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MeterAssignmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMeterAssignmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MeterAssignment model
   */
  readonly fields: MeterAssignmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MeterAssignment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MeterAssignmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    meter<T extends MeterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MeterDefaultArgs<ExtArgs>>): Prisma__MeterClient<$Result.GetResult<Prisma.$MeterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    rentalUnit<T extends RentalUnitDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RentalUnitDefaultArgs<ExtArgs>>): Prisma__RentalUnitClient<$Result.GetResult<Prisma.$RentalUnitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MeterAssignment model
   */
  interface MeterAssignmentFieldRefs {
    readonly id: FieldRef<"MeterAssignment", 'String'>
    readonly meterId: FieldRef<"MeterAssignment", 'String'>
    readonly rentalUnitId: FieldRef<"MeterAssignment", 'String'>
    readonly createdAt: FieldRef<"MeterAssignment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MeterAssignment findUnique
   */
  export type MeterAssignmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeterAssignment
     */
    select?: MeterAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeterAssignment
     */
    omit?: MeterAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeterAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which MeterAssignment to fetch.
     */
    where: MeterAssignmentWhereUniqueInput
  }

  /**
   * MeterAssignment findUniqueOrThrow
   */
  export type MeterAssignmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeterAssignment
     */
    select?: MeterAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeterAssignment
     */
    omit?: MeterAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeterAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which MeterAssignment to fetch.
     */
    where: MeterAssignmentWhereUniqueInput
  }

  /**
   * MeterAssignment findFirst
   */
  export type MeterAssignmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeterAssignment
     */
    select?: MeterAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeterAssignment
     */
    omit?: MeterAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeterAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which MeterAssignment to fetch.
     */
    where?: MeterAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MeterAssignments to fetch.
     */
    orderBy?: MeterAssignmentOrderByWithRelationInput | MeterAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MeterAssignments.
     */
    cursor?: MeterAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MeterAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MeterAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MeterAssignments.
     */
    distinct?: MeterAssignmentScalarFieldEnum | MeterAssignmentScalarFieldEnum[]
  }

  /**
   * MeterAssignment findFirstOrThrow
   */
  export type MeterAssignmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeterAssignment
     */
    select?: MeterAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeterAssignment
     */
    omit?: MeterAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeterAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which MeterAssignment to fetch.
     */
    where?: MeterAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MeterAssignments to fetch.
     */
    orderBy?: MeterAssignmentOrderByWithRelationInput | MeterAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MeterAssignments.
     */
    cursor?: MeterAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MeterAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MeterAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MeterAssignments.
     */
    distinct?: MeterAssignmentScalarFieldEnum | MeterAssignmentScalarFieldEnum[]
  }

  /**
   * MeterAssignment findMany
   */
  export type MeterAssignmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeterAssignment
     */
    select?: MeterAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeterAssignment
     */
    omit?: MeterAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeterAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which MeterAssignments to fetch.
     */
    where?: MeterAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MeterAssignments to fetch.
     */
    orderBy?: MeterAssignmentOrderByWithRelationInput | MeterAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MeterAssignments.
     */
    cursor?: MeterAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MeterAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MeterAssignments.
     */
    skip?: number
    distinct?: MeterAssignmentScalarFieldEnum | MeterAssignmentScalarFieldEnum[]
  }

  /**
   * MeterAssignment create
   */
  export type MeterAssignmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeterAssignment
     */
    select?: MeterAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeterAssignment
     */
    omit?: MeterAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeterAssignmentInclude<ExtArgs> | null
    /**
     * The data needed to create a MeterAssignment.
     */
    data: XOR<MeterAssignmentCreateInput, MeterAssignmentUncheckedCreateInput>
  }

  /**
   * MeterAssignment createMany
   */
  export type MeterAssignmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MeterAssignments.
     */
    data: MeterAssignmentCreateManyInput | MeterAssignmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MeterAssignment createManyAndReturn
   */
  export type MeterAssignmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeterAssignment
     */
    select?: MeterAssignmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MeterAssignment
     */
    omit?: MeterAssignmentOmit<ExtArgs> | null
    /**
     * The data used to create many MeterAssignments.
     */
    data: MeterAssignmentCreateManyInput | MeterAssignmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeterAssignmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MeterAssignment update
   */
  export type MeterAssignmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeterAssignment
     */
    select?: MeterAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeterAssignment
     */
    omit?: MeterAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeterAssignmentInclude<ExtArgs> | null
    /**
     * The data needed to update a MeterAssignment.
     */
    data: XOR<MeterAssignmentUpdateInput, MeterAssignmentUncheckedUpdateInput>
    /**
     * Choose, which MeterAssignment to update.
     */
    where: MeterAssignmentWhereUniqueInput
  }

  /**
   * MeterAssignment updateMany
   */
  export type MeterAssignmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MeterAssignments.
     */
    data: XOR<MeterAssignmentUpdateManyMutationInput, MeterAssignmentUncheckedUpdateManyInput>
    /**
     * Filter which MeterAssignments to update
     */
    where?: MeterAssignmentWhereInput
    /**
     * Limit how many MeterAssignments to update.
     */
    limit?: number
  }

  /**
   * MeterAssignment updateManyAndReturn
   */
  export type MeterAssignmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeterAssignment
     */
    select?: MeterAssignmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MeterAssignment
     */
    omit?: MeterAssignmentOmit<ExtArgs> | null
    /**
     * The data used to update MeterAssignments.
     */
    data: XOR<MeterAssignmentUpdateManyMutationInput, MeterAssignmentUncheckedUpdateManyInput>
    /**
     * Filter which MeterAssignments to update
     */
    where?: MeterAssignmentWhereInput
    /**
     * Limit how many MeterAssignments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeterAssignmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MeterAssignment upsert
   */
  export type MeterAssignmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeterAssignment
     */
    select?: MeterAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeterAssignment
     */
    omit?: MeterAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeterAssignmentInclude<ExtArgs> | null
    /**
     * The filter to search for the MeterAssignment to update in case it exists.
     */
    where: MeterAssignmentWhereUniqueInput
    /**
     * In case the MeterAssignment found by the `where` argument doesn't exist, create a new MeterAssignment with this data.
     */
    create: XOR<MeterAssignmentCreateInput, MeterAssignmentUncheckedCreateInput>
    /**
     * In case the MeterAssignment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MeterAssignmentUpdateInput, MeterAssignmentUncheckedUpdateInput>
  }

  /**
   * MeterAssignment delete
   */
  export type MeterAssignmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeterAssignment
     */
    select?: MeterAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeterAssignment
     */
    omit?: MeterAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeterAssignmentInclude<ExtArgs> | null
    /**
     * Filter which MeterAssignment to delete.
     */
    where: MeterAssignmentWhereUniqueInput
  }

  /**
   * MeterAssignment deleteMany
   */
  export type MeterAssignmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MeterAssignments to delete
     */
    where?: MeterAssignmentWhereInput
    /**
     * Limit how many MeterAssignments to delete.
     */
    limit?: number
  }

  /**
   * MeterAssignment without action
   */
  export type MeterAssignmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeterAssignment
     */
    select?: MeterAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeterAssignment
     */
    omit?: MeterAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeterAssignmentInclude<ExtArgs> | null
  }


  /**
   * Model Tenant
   */

  export type AggregateTenant = {
    _count: TenantCountAggregateOutputType | null
    _min: TenantMinAggregateOutputType | null
    _max: TenantMaxAggregateOutputType | null
  }

  export type TenantMinAggregateOutputType = {
    id: string | null
    fullName: string | null
    phone: string | null
    email: string | null
    governmentId: string | null
    address: string | null
    emergencyContact: string | null
    createdAt: Date | null
  }

  export type TenantMaxAggregateOutputType = {
    id: string | null
    fullName: string | null
    phone: string | null
    email: string | null
    governmentId: string | null
    address: string | null
    emergencyContact: string | null
    createdAt: Date | null
  }

  export type TenantCountAggregateOutputType = {
    id: number
    fullName: number
    phone: number
    email: number
    governmentId: number
    address: number
    emergencyContact: number
    createdAt: number
    _all: number
  }


  export type TenantMinAggregateInputType = {
    id?: true
    fullName?: true
    phone?: true
    email?: true
    governmentId?: true
    address?: true
    emergencyContact?: true
    createdAt?: true
  }

  export type TenantMaxAggregateInputType = {
    id?: true
    fullName?: true
    phone?: true
    email?: true
    governmentId?: true
    address?: true
    emergencyContact?: true
    createdAt?: true
  }

  export type TenantCountAggregateInputType = {
    id?: true
    fullName?: true
    phone?: true
    email?: true
    governmentId?: true
    address?: true
    emergencyContact?: true
    createdAt?: true
    _all?: true
  }

  export type TenantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tenant to aggregate.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tenants
    **/
    _count?: true | TenantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TenantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TenantMaxAggregateInputType
  }

  export type GetTenantAggregateType<T extends TenantAggregateArgs> = {
        [P in keyof T & keyof AggregateTenant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTenant[P]>
      : GetScalarType<T[P], AggregateTenant[P]>
  }




  export type TenantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TenantWhereInput
    orderBy?: TenantOrderByWithAggregationInput | TenantOrderByWithAggregationInput[]
    by: TenantScalarFieldEnum[] | TenantScalarFieldEnum
    having?: TenantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TenantCountAggregateInputType | true
    _min?: TenantMinAggregateInputType
    _max?: TenantMaxAggregateInputType
  }

  export type TenantGroupByOutputType = {
    id: string
    fullName: string
    phone: string
    email: string | null
    governmentId: string | null
    address: string | null
    emergencyContact: string | null
    createdAt: Date
    _count: TenantCountAggregateOutputType | null
    _min: TenantMinAggregateOutputType | null
    _max: TenantMaxAggregateOutputType | null
  }

  type GetTenantGroupByPayload<T extends TenantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TenantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TenantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TenantGroupByOutputType[P]>
            : GetScalarType<T[P], TenantGroupByOutputType[P]>
        }
      >
    >


  export type TenantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    phone?: boolean
    email?: boolean
    governmentId?: boolean
    address?: boolean
    emergencyContact?: boolean
    createdAt?: boolean
    rentals?: boolean | Tenant$rentalsArgs<ExtArgs>
    _count?: boolean | TenantCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tenant"]>

  export type TenantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    phone?: boolean
    email?: boolean
    governmentId?: boolean
    address?: boolean
    emergencyContact?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["tenant"]>

  export type TenantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    phone?: boolean
    email?: boolean
    governmentId?: boolean
    address?: boolean
    emergencyContact?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["tenant"]>

  export type TenantSelectScalar = {
    id?: boolean
    fullName?: boolean
    phone?: boolean
    email?: boolean
    governmentId?: boolean
    address?: boolean
    emergencyContact?: boolean
    createdAt?: boolean
  }

  export type TenantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullName" | "phone" | "email" | "governmentId" | "address" | "emergencyContact" | "createdAt", ExtArgs["result"]["tenant"]>
  export type TenantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rentals?: boolean | Tenant$rentalsArgs<ExtArgs>
    _count?: boolean | TenantCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TenantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TenantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TenantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tenant"
    objects: {
      rentals: Prisma.$RentalAgreementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fullName: string
      phone: string
      email: string | null
      governmentId: string | null
      address: string | null
      emergencyContact: string | null
      createdAt: Date
    }, ExtArgs["result"]["tenant"]>
    composites: {}
  }

  type TenantGetPayload<S extends boolean | null | undefined | TenantDefaultArgs> = $Result.GetResult<Prisma.$TenantPayload, S>

  type TenantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TenantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TenantCountAggregateInputType | true
    }

  export interface TenantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tenant'], meta: { name: 'Tenant' } }
    /**
     * Find zero or one Tenant that matches the filter.
     * @param {TenantFindUniqueArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TenantFindUniqueArgs>(args: SelectSubset<T, TenantFindUniqueArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tenant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TenantFindUniqueOrThrowArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TenantFindUniqueOrThrowArgs>(args: SelectSubset<T, TenantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tenant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFindFirstArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TenantFindFirstArgs>(args?: SelectSubset<T, TenantFindFirstArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tenant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFindFirstOrThrowArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TenantFindFirstOrThrowArgs>(args?: SelectSubset<T, TenantFindFirstOrThrowArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tenants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tenants
     * const tenants = await prisma.tenant.findMany()
     * 
     * // Get first 10 Tenants
     * const tenants = await prisma.tenant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tenantWithIdOnly = await prisma.tenant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TenantFindManyArgs>(args?: SelectSubset<T, TenantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tenant.
     * @param {TenantCreateArgs} args - Arguments to create a Tenant.
     * @example
     * // Create one Tenant
     * const Tenant = await prisma.tenant.create({
     *   data: {
     *     // ... data to create a Tenant
     *   }
     * })
     * 
     */
    create<T extends TenantCreateArgs>(args: SelectSubset<T, TenantCreateArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tenants.
     * @param {TenantCreateManyArgs} args - Arguments to create many Tenants.
     * @example
     * // Create many Tenants
     * const tenant = await prisma.tenant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TenantCreateManyArgs>(args?: SelectSubset<T, TenantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tenants and returns the data saved in the database.
     * @param {TenantCreateManyAndReturnArgs} args - Arguments to create many Tenants.
     * @example
     * // Create many Tenants
     * const tenant = await prisma.tenant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tenants and only return the `id`
     * const tenantWithIdOnly = await prisma.tenant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TenantCreateManyAndReturnArgs>(args?: SelectSubset<T, TenantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tenant.
     * @param {TenantDeleteArgs} args - Arguments to delete one Tenant.
     * @example
     * // Delete one Tenant
     * const Tenant = await prisma.tenant.delete({
     *   where: {
     *     // ... filter to delete one Tenant
     *   }
     * })
     * 
     */
    delete<T extends TenantDeleteArgs>(args: SelectSubset<T, TenantDeleteArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tenant.
     * @param {TenantUpdateArgs} args - Arguments to update one Tenant.
     * @example
     * // Update one Tenant
     * const tenant = await prisma.tenant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TenantUpdateArgs>(args: SelectSubset<T, TenantUpdateArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tenants.
     * @param {TenantDeleteManyArgs} args - Arguments to filter Tenants to delete.
     * @example
     * // Delete a few Tenants
     * const { count } = await prisma.tenant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TenantDeleteManyArgs>(args?: SelectSubset<T, TenantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tenants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tenants
     * const tenant = await prisma.tenant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TenantUpdateManyArgs>(args: SelectSubset<T, TenantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tenants and returns the data updated in the database.
     * @param {TenantUpdateManyAndReturnArgs} args - Arguments to update many Tenants.
     * @example
     * // Update many Tenants
     * const tenant = await prisma.tenant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tenants and only return the `id`
     * const tenantWithIdOnly = await prisma.tenant.updateManyAndReturn({
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
    updateManyAndReturn<T extends TenantUpdateManyAndReturnArgs>(args: SelectSubset<T, TenantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tenant.
     * @param {TenantUpsertArgs} args - Arguments to update or create a Tenant.
     * @example
     * // Update or create a Tenant
     * const tenant = await prisma.tenant.upsert({
     *   create: {
     *     // ... data to create a Tenant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tenant we want to update
     *   }
     * })
     */
    upsert<T extends TenantUpsertArgs>(args: SelectSubset<T, TenantUpsertArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tenants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantCountArgs} args - Arguments to filter Tenants to count.
     * @example
     * // Count the number of Tenants
     * const count = await prisma.tenant.count({
     *   where: {
     *     // ... the filter for the Tenants we want to count
     *   }
     * })
    **/
    count<T extends TenantCountArgs>(
      args?: Subset<T, TenantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TenantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tenant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TenantAggregateArgs>(args: Subset<T, TenantAggregateArgs>): Prisma.PrismaPromise<GetTenantAggregateType<T>>

    /**
     * Group by Tenant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantGroupByArgs} args - Group by arguments.
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
      T extends TenantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TenantGroupByArgs['orderBy'] }
        : { orderBy?: TenantGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TenantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTenantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tenant model
   */
  readonly fields: TenantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tenant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TenantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rentals<T extends Tenant$rentalsArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$rentalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RentalAgreementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Tenant model
   */
  interface TenantFieldRefs {
    readonly id: FieldRef<"Tenant", 'String'>
    readonly fullName: FieldRef<"Tenant", 'String'>
    readonly phone: FieldRef<"Tenant", 'String'>
    readonly email: FieldRef<"Tenant", 'String'>
    readonly governmentId: FieldRef<"Tenant", 'String'>
    readonly address: FieldRef<"Tenant", 'String'>
    readonly emergencyContact: FieldRef<"Tenant", 'String'>
    readonly createdAt: FieldRef<"Tenant", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tenant findUnique
   */
  export type TenantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant findUniqueOrThrow
   */
  export type TenantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant findFirst
   */
  export type TenantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tenants.
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tenants.
     */
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }

  /**
   * Tenant findFirstOrThrow
   */
  export type TenantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tenants.
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tenants.
     */
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }

  /**
   * Tenant findMany
   */
  export type TenantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenants to fetch.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tenants.
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }

  /**
   * Tenant create
   */
  export type TenantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * The data needed to create a Tenant.
     */
    data: XOR<TenantCreateInput, TenantUncheckedCreateInput>
  }

  /**
   * Tenant createMany
   */
  export type TenantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tenants.
     */
    data: TenantCreateManyInput | TenantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tenant createManyAndReturn
   */
  export type TenantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * The data used to create many Tenants.
     */
    data: TenantCreateManyInput | TenantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tenant update
   */
  export type TenantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * The data needed to update a Tenant.
     */
    data: XOR<TenantUpdateInput, TenantUncheckedUpdateInput>
    /**
     * Choose, which Tenant to update.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant updateMany
   */
  export type TenantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tenants.
     */
    data: XOR<TenantUpdateManyMutationInput, TenantUncheckedUpdateManyInput>
    /**
     * Filter which Tenants to update
     */
    where?: TenantWhereInput
    /**
     * Limit how many Tenants to update.
     */
    limit?: number
  }

  /**
   * Tenant updateManyAndReturn
   */
  export type TenantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * The data used to update Tenants.
     */
    data: XOR<TenantUpdateManyMutationInput, TenantUncheckedUpdateManyInput>
    /**
     * Filter which Tenants to update
     */
    where?: TenantWhereInput
    /**
     * Limit how many Tenants to update.
     */
    limit?: number
  }

  /**
   * Tenant upsert
   */
  export type TenantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * The filter to search for the Tenant to update in case it exists.
     */
    where: TenantWhereUniqueInput
    /**
     * In case the Tenant found by the `where` argument doesn't exist, create a new Tenant with this data.
     */
    create: XOR<TenantCreateInput, TenantUncheckedCreateInput>
    /**
     * In case the Tenant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TenantUpdateInput, TenantUncheckedUpdateInput>
  }

  /**
   * Tenant delete
   */
  export type TenantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter which Tenant to delete.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant deleteMany
   */
  export type TenantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tenants to delete
     */
    where?: TenantWhereInput
    /**
     * Limit how many Tenants to delete.
     */
    limit?: number
  }

  /**
   * Tenant.rentals
   */
  export type Tenant$rentalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalAgreement
     */
    select?: RentalAgreementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalAgreement
     */
    omit?: RentalAgreementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalAgreementInclude<ExtArgs> | null
    where?: RentalAgreementWhereInput
    orderBy?: RentalAgreementOrderByWithRelationInput | RentalAgreementOrderByWithRelationInput[]
    cursor?: RentalAgreementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RentalAgreementScalarFieldEnum | RentalAgreementScalarFieldEnum[]
  }

  /**
   * Tenant without action
   */
  export type TenantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
  }


  /**
   * Model RentalAgreement
   */

  export type AggregateRentalAgreement = {
    _count: RentalAgreementCountAggregateOutputType | null
    _avg: RentalAgreementAvgAggregateOutputType | null
    _sum: RentalAgreementSumAggregateOutputType | null
    _min: RentalAgreementMinAggregateOutputType | null
    _max: RentalAgreementMaxAggregateOutputType | null
  }

  export type RentalAgreementAvgAggregateOutputType = {
    securityDeposit: number | null
  }

  export type RentalAgreementSumAggregateOutputType = {
    securityDeposit: number | null
  }

  export type RentalAgreementMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    rentalUnitId: string | null
    securityDeposit: number | null
    startDate: Date | null
    endDate: Date | null
    status: $Enums.RentalStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RentalAgreementMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    rentalUnitId: string | null
    securityDeposit: number | null
    startDate: Date | null
    endDate: Date | null
    status: $Enums.RentalStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RentalAgreementCountAggregateOutputType = {
    id: number
    tenantId: number
    rentalUnitId: number
    securityDeposit: number
    startDate: number
    endDate: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RentalAgreementAvgAggregateInputType = {
    securityDeposit?: true
  }

  export type RentalAgreementSumAggregateInputType = {
    securityDeposit?: true
  }

  export type RentalAgreementMinAggregateInputType = {
    id?: true
    tenantId?: true
    rentalUnitId?: true
    securityDeposit?: true
    startDate?: true
    endDate?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RentalAgreementMaxAggregateInputType = {
    id?: true
    tenantId?: true
    rentalUnitId?: true
    securityDeposit?: true
    startDate?: true
    endDate?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RentalAgreementCountAggregateInputType = {
    id?: true
    tenantId?: true
    rentalUnitId?: true
    securityDeposit?: true
    startDate?: true
    endDate?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RentalAgreementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RentalAgreement to aggregate.
     */
    where?: RentalAgreementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RentalAgreements to fetch.
     */
    orderBy?: RentalAgreementOrderByWithRelationInput | RentalAgreementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RentalAgreementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RentalAgreements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RentalAgreements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RentalAgreements
    **/
    _count?: true | RentalAgreementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RentalAgreementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RentalAgreementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RentalAgreementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RentalAgreementMaxAggregateInputType
  }

  export type GetRentalAgreementAggregateType<T extends RentalAgreementAggregateArgs> = {
        [P in keyof T & keyof AggregateRentalAgreement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRentalAgreement[P]>
      : GetScalarType<T[P], AggregateRentalAgreement[P]>
  }




  export type RentalAgreementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RentalAgreementWhereInput
    orderBy?: RentalAgreementOrderByWithAggregationInput | RentalAgreementOrderByWithAggregationInput[]
    by: RentalAgreementScalarFieldEnum[] | RentalAgreementScalarFieldEnum
    having?: RentalAgreementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RentalAgreementCountAggregateInputType | true
    _avg?: RentalAgreementAvgAggregateInputType
    _sum?: RentalAgreementSumAggregateInputType
    _min?: RentalAgreementMinAggregateInputType
    _max?: RentalAgreementMaxAggregateInputType
  }

  export type RentalAgreementGroupByOutputType = {
    id: string
    tenantId: string
    rentalUnitId: string
    securityDeposit: number
    startDate: Date
    endDate: Date | null
    status: $Enums.RentalStatus
    createdAt: Date
    updatedAt: Date
    _count: RentalAgreementCountAggregateOutputType | null
    _avg: RentalAgreementAvgAggregateOutputType | null
    _sum: RentalAgreementSumAggregateOutputType | null
    _min: RentalAgreementMinAggregateOutputType | null
    _max: RentalAgreementMaxAggregateOutputType | null
  }

  type GetRentalAgreementGroupByPayload<T extends RentalAgreementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RentalAgreementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RentalAgreementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RentalAgreementGroupByOutputType[P]>
            : GetScalarType<T[P], RentalAgreementGroupByOutputType[P]>
        }
      >
    >


  export type RentalAgreementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    rentalUnitId?: boolean
    securityDeposit?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    rentalUnit?: boolean | RentalUnitDefaultArgs<ExtArgs>
    charges?: boolean | RentalAgreement$chargesArgs<ExtArgs>
    bills?: boolean | RentalAgreement$billsArgs<ExtArgs>
    _count?: boolean | RentalAgreementCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rentalAgreement"]>

  export type RentalAgreementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    rentalUnitId?: boolean
    securityDeposit?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    rentalUnit?: boolean | RentalUnitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rentalAgreement"]>

  export type RentalAgreementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    rentalUnitId?: boolean
    securityDeposit?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    rentalUnit?: boolean | RentalUnitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rentalAgreement"]>

  export type RentalAgreementSelectScalar = {
    id?: boolean
    tenantId?: boolean
    rentalUnitId?: boolean
    securityDeposit?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RentalAgreementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tenantId" | "rentalUnitId" | "securityDeposit" | "startDate" | "endDate" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["rentalAgreement"]>
  export type RentalAgreementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    rentalUnit?: boolean | RentalUnitDefaultArgs<ExtArgs>
    charges?: boolean | RentalAgreement$chargesArgs<ExtArgs>
    bills?: boolean | RentalAgreement$billsArgs<ExtArgs>
    _count?: boolean | RentalAgreementCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RentalAgreementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    rentalUnit?: boolean | RentalUnitDefaultArgs<ExtArgs>
  }
  export type RentalAgreementIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    rentalUnit?: boolean | RentalUnitDefaultArgs<ExtArgs>
  }

  export type $RentalAgreementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RentalAgreement"
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs>
      rentalUnit: Prisma.$RentalUnitPayload<ExtArgs>
      charges: Prisma.$AgreementChargePayload<ExtArgs>[]
      bills: Prisma.$BillPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      rentalUnitId: string
      securityDeposit: number
      startDate: Date
      endDate: Date | null
      status: $Enums.RentalStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["rentalAgreement"]>
    composites: {}
  }

  type RentalAgreementGetPayload<S extends boolean | null | undefined | RentalAgreementDefaultArgs> = $Result.GetResult<Prisma.$RentalAgreementPayload, S>

  type RentalAgreementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RentalAgreementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RentalAgreementCountAggregateInputType | true
    }

  export interface RentalAgreementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RentalAgreement'], meta: { name: 'RentalAgreement' } }
    /**
     * Find zero or one RentalAgreement that matches the filter.
     * @param {RentalAgreementFindUniqueArgs} args - Arguments to find a RentalAgreement
     * @example
     * // Get one RentalAgreement
     * const rentalAgreement = await prisma.rentalAgreement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RentalAgreementFindUniqueArgs>(args: SelectSubset<T, RentalAgreementFindUniqueArgs<ExtArgs>>): Prisma__RentalAgreementClient<$Result.GetResult<Prisma.$RentalAgreementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RentalAgreement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RentalAgreementFindUniqueOrThrowArgs} args - Arguments to find a RentalAgreement
     * @example
     * // Get one RentalAgreement
     * const rentalAgreement = await prisma.rentalAgreement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RentalAgreementFindUniqueOrThrowArgs>(args: SelectSubset<T, RentalAgreementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RentalAgreementClient<$Result.GetResult<Prisma.$RentalAgreementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RentalAgreement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalAgreementFindFirstArgs} args - Arguments to find a RentalAgreement
     * @example
     * // Get one RentalAgreement
     * const rentalAgreement = await prisma.rentalAgreement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RentalAgreementFindFirstArgs>(args?: SelectSubset<T, RentalAgreementFindFirstArgs<ExtArgs>>): Prisma__RentalAgreementClient<$Result.GetResult<Prisma.$RentalAgreementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RentalAgreement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalAgreementFindFirstOrThrowArgs} args - Arguments to find a RentalAgreement
     * @example
     * // Get one RentalAgreement
     * const rentalAgreement = await prisma.rentalAgreement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RentalAgreementFindFirstOrThrowArgs>(args?: SelectSubset<T, RentalAgreementFindFirstOrThrowArgs<ExtArgs>>): Prisma__RentalAgreementClient<$Result.GetResult<Prisma.$RentalAgreementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RentalAgreements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalAgreementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RentalAgreements
     * const rentalAgreements = await prisma.rentalAgreement.findMany()
     * 
     * // Get first 10 RentalAgreements
     * const rentalAgreements = await prisma.rentalAgreement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rentalAgreementWithIdOnly = await prisma.rentalAgreement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RentalAgreementFindManyArgs>(args?: SelectSubset<T, RentalAgreementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RentalAgreementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RentalAgreement.
     * @param {RentalAgreementCreateArgs} args - Arguments to create a RentalAgreement.
     * @example
     * // Create one RentalAgreement
     * const RentalAgreement = await prisma.rentalAgreement.create({
     *   data: {
     *     // ... data to create a RentalAgreement
     *   }
     * })
     * 
     */
    create<T extends RentalAgreementCreateArgs>(args: SelectSubset<T, RentalAgreementCreateArgs<ExtArgs>>): Prisma__RentalAgreementClient<$Result.GetResult<Prisma.$RentalAgreementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RentalAgreements.
     * @param {RentalAgreementCreateManyArgs} args - Arguments to create many RentalAgreements.
     * @example
     * // Create many RentalAgreements
     * const rentalAgreement = await prisma.rentalAgreement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RentalAgreementCreateManyArgs>(args?: SelectSubset<T, RentalAgreementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RentalAgreements and returns the data saved in the database.
     * @param {RentalAgreementCreateManyAndReturnArgs} args - Arguments to create many RentalAgreements.
     * @example
     * // Create many RentalAgreements
     * const rentalAgreement = await prisma.rentalAgreement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RentalAgreements and only return the `id`
     * const rentalAgreementWithIdOnly = await prisma.rentalAgreement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RentalAgreementCreateManyAndReturnArgs>(args?: SelectSubset<T, RentalAgreementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RentalAgreementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RentalAgreement.
     * @param {RentalAgreementDeleteArgs} args - Arguments to delete one RentalAgreement.
     * @example
     * // Delete one RentalAgreement
     * const RentalAgreement = await prisma.rentalAgreement.delete({
     *   where: {
     *     // ... filter to delete one RentalAgreement
     *   }
     * })
     * 
     */
    delete<T extends RentalAgreementDeleteArgs>(args: SelectSubset<T, RentalAgreementDeleteArgs<ExtArgs>>): Prisma__RentalAgreementClient<$Result.GetResult<Prisma.$RentalAgreementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RentalAgreement.
     * @param {RentalAgreementUpdateArgs} args - Arguments to update one RentalAgreement.
     * @example
     * // Update one RentalAgreement
     * const rentalAgreement = await prisma.rentalAgreement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RentalAgreementUpdateArgs>(args: SelectSubset<T, RentalAgreementUpdateArgs<ExtArgs>>): Prisma__RentalAgreementClient<$Result.GetResult<Prisma.$RentalAgreementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RentalAgreements.
     * @param {RentalAgreementDeleteManyArgs} args - Arguments to filter RentalAgreements to delete.
     * @example
     * // Delete a few RentalAgreements
     * const { count } = await prisma.rentalAgreement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RentalAgreementDeleteManyArgs>(args?: SelectSubset<T, RentalAgreementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RentalAgreements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalAgreementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RentalAgreements
     * const rentalAgreement = await prisma.rentalAgreement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RentalAgreementUpdateManyArgs>(args: SelectSubset<T, RentalAgreementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RentalAgreements and returns the data updated in the database.
     * @param {RentalAgreementUpdateManyAndReturnArgs} args - Arguments to update many RentalAgreements.
     * @example
     * // Update many RentalAgreements
     * const rentalAgreement = await prisma.rentalAgreement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RentalAgreements and only return the `id`
     * const rentalAgreementWithIdOnly = await prisma.rentalAgreement.updateManyAndReturn({
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
    updateManyAndReturn<T extends RentalAgreementUpdateManyAndReturnArgs>(args: SelectSubset<T, RentalAgreementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RentalAgreementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RentalAgreement.
     * @param {RentalAgreementUpsertArgs} args - Arguments to update or create a RentalAgreement.
     * @example
     * // Update or create a RentalAgreement
     * const rentalAgreement = await prisma.rentalAgreement.upsert({
     *   create: {
     *     // ... data to create a RentalAgreement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RentalAgreement we want to update
     *   }
     * })
     */
    upsert<T extends RentalAgreementUpsertArgs>(args: SelectSubset<T, RentalAgreementUpsertArgs<ExtArgs>>): Prisma__RentalAgreementClient<$Result.GetResult<Prisma.$RentalAgreementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RentalAgreements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalAgreementCountArgs} args - Arguments to filter RentalAgreements to count.
     * @example
     * // Count the number of RentalAgreements
     * const count = await prisma.rentalAgreement.count({
     *   where: {
     *     // ... the filter for the RentalAgreements we want to count
     *   }
     * })
    **/
    count<T extends RentalAgreementCountArgs>(
      args?: Subset<T, RentalAgreementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RentalAgreementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RentalAgreement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalAgreementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RentalAgreementAggregateArgs>(args: Subset<T, RentalAgreementAggregateArgs>): Prisma.PrismaPromise<GetRentalAgreementAggregateType<T>>

    /**
     * Group by RentalAgreement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalAgreementGroupByArgs} args - Group by arguments.
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
      T extends RentalAgreementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RentalAgreementGroupByArgs['orderBy'] }
        : { orderBy?: RentalAgreementGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RentalAgreementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRentalAgreementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RentalAgreement model
   */
  readonly fields: RentalAgreementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RentalAgreement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RentalAgreementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    rentalUnit<T extends RentalUnitDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RentalUnitDefaultArgs<ExtArgs>>): Prisma__RentalUnitClient<$Result.GetResult<Prisma.$RentalUnitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    charges<T extends RentalAgreement$chargesArgs<ExtArgs> = {}>(args?: Subset<T, RentalAgreement$chargesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgreementChargePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bills<T extends RentalAgreement$billsArgs<ExtArgs> = {}>(args?: Subset<T, RentalAgreement$billsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the RentalAgreement model
   */
  interface RentalAgreementFieldRefs {
    readonly id: FieldRef<"RentalAgreement", 'String'>
    readonly tenantId: FieldRef<"RentalAgreement", 'String'>
    readonly rentalUnitId: FieldRef<"RentalAgreement", 'String'>
    readonly securityDeposit: FieldRef<"RentalAgreement", 'Float'>
    readonly startDate: FieldRef<"RentalAgreement", 'DateTime'>
    readonly endDate: FieldRef<"RentalAgreement", 'DateTime'>
    readonly status: FieldRef<"RentalAgreement", 'RentalStatus'>
    readonly createdAt: FieldRef<"RentalAgreement", 'DateTime'>
    readonly updatedAt: FieldRef<"RentalAgreement", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RentalAgreement findUnique
   */
  export type RentalAgreementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalAgreement
     */
    select?: RentalAgreementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalAgreement
     */
    omit?: RentalAgreementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalAgreementInclude<ExtArgs> | null
    /**
     * Filter, which RentalAgreement to fetch.
     */
    where: RentalAgreementWhereUniqueInput
  }

  /**
   * RentalAgreement findUniqueOrThrow
   */
  export type RentalAgreementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalAgreement
     */
    select?: RentalAgreementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalAgreement
     */
    omit?: RentalAgreementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalAgreementInclude<ExtArgs> | null
    /**
     * Filter, which RentalAgreement to fetch.
     */
    where: RentalAgreementWhereUniqueInput
  }

  /**
   * RentalAgreement findFirst
   */
  export type RentalAgreementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalAgreement
     */
    select?: RentalAgreementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalAgreement
     */
    omit?: RentalAgreementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalAgreementInclude<ExtArgs> | null
    /**
     * Filter, which RentalAgreement to fetch.
     */
    where?: RentalAgreementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RentalAgreements to fetch.
     */
    orderBy?: RentalAgreementOrderByWithRelationInput | RentalAgreementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RentalAgreements.
     */
    cursor?: RentalAgreementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RentalAgreements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RentalAgreements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RentalAgreements.
     */
    distinct?: RentalAgreementScalarFieldEnum | RentalAgreementScalarFieldEnum[]
  }

  /**
   * RentalAgreement findFirstOrThrow
   */
  export type RentalAgreementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalAgreement
     */
    select?: RentalAgreementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalAgreement
     */
    omit?: RentalAgreementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalAgreementInclude<ExtArgs> | null
    /**
     * Filter, which RentalAgreement to fetch.
     */
    where?: RentalAgreementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RentalAgreements to fetch.
     */
    orderBy?: RentalAgreementOrderByWithRelationInput | RentalAgreementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RentalAgreements.
     */
    cursor?: RentalAgreementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RentalAgreements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RentalAgreements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RentalAgreements.
     */
    distinct?: RentalAgreementScalarFieldEnum | RentalAgreementScalarFieldEnum[]
  }

  /**
   * RentalAgreement findMany
   */
  export type RentalAgreementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalAgreement
     */
    select?: RentalAgreementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalAgreement
     */
    omit?: RentalAgreementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalAgreementInclude<ExtArgs> | null
    /**
     * Filter, which RentalAgreements to fetch.
     */
    where?: RentalAgreementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RentalAgreements to fetch.
     */
    orderBy?: RentalAgreementOrderByWithRelationInput | RentalAgreementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RentalAgreements.
     */
    cursor?: RentalAgreementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RentalAgreements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RentalAgreements.
     */
    skip?: number
    distinct?: RentalAgreementScalarFieldEnum | RentalAgreementScalarFieldEnum[]
  }

  /**
   * RentalAgreement create
   */
  export type RentalAgreementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalAgreement
     */
    select?: RentalAgreementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalAgreement
     */
    omit?: RentalAgreementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalAgreementInclude<ExtArgs> | null
    /**
     * The data needed to create a RentalAgreement.
     */
    data: XOR<RentalAgreementCreateInput, RentalAgreementUncheckedCreateInput>
  }

  /**
   * RentalAgreement createMany
   */
  export type RentalAgreementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RentalAgreements.
     */
    data: RentalAgreementCreateManyInput | RentalAgreementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RentalAgreement createManyAndReturn
   */
  export type RentalAgreementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalAgreement
     */
    select?: RentalAgreementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RentalAgreement
     */
    omit?: RentalAgreementOmit<ExtArgs> | null
    /**
     * The data used to create many RentalAgreements.
     */
    data: RentalAgreementCreateManyInput | RentalAgreementCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalAgreementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RentalAgreement update
   */
  export type RentalAgreementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalAgreement
     */
    select?: RentalAgreementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalAgreement
     */
    omit?: RentalAgreementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalAgreementInclude<ExtArgs> | null
    /**
     * The data needed to update a RentalAgreement.
     */
    data: XOR<RentalAgreementUpdateInput, RentalAgreementUncheckedUpdateInput>
    /**
     * Choose, which RentalAgreement to update.
     */
    where: RentalAgreementWhereUniqueInput
  }

  /**
   * RentalAgreement updateMany
   */
  export type RentalAgreementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RentalAgreements.
     */
    data: XOR<RentalAgreementUpdateManyMutationInput, RentalAgreementUncheckedUpdateManyInput>
    /**
     * Filter which RentalAgreements to update
     */
    where?: RentalAgreementWhereInput
    /**
     * Limit how many RentalAgreements to update.
     */
    limit?: number
  }

  /**
   * RentalAgreement updateManyAndReturn
   */
  export type RentalAgreementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalAgreement
     */
    select?: RentalAgreementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RentalAgreement
     */
    omit?: RentalAgreementOmit<ExtArgs> | null
    /**
     * The data used to update RentalAgreements.
     */
    data: XOR<RentalAgreementUpdateManyMutationInput, RentalAgreementUncheckedUpdateManyInput>
    /**
     * Filter which RentalAgreements to update
     */
    where?: RentalAgreementWhereInput
    /**
     * Limit how many RentalAgreements to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalAgreementIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RentalAgreement upsert
   */
  export type RentalAgreementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalAgreement
     */
    select?: RentalAgreementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalAgreement
     */
    omit?: RentalAgreementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalAgreementInclude<ExtArgs> | null
    /**
     * The filter to search for the RentalAgreement to update in case it exists.
     */
    where: RentalAgreementWhereUniqueInput
    /**
     * In case the RentalAgreement found by the `where` argument doesn't exist, create a new RentalAgreement with this data.
     */
    create: XOR<RentalAgreementCreateInput, RentalAgreementUncheckedCreateInput>
    /**
     * In case the RentalAgreement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RentalAgreementUpdateInput, RentalAgreementUncheckedUpdateInput>
  }

  /**
   * RentalAgreement delete
   */
  export type RentalAgreementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalAgreement
     */
    select?: RentalAgreementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalAgreement
     */
    omit?: RentalAgreementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalAgreementInclude<ExtArgs> | null
    /**
     * Filter which RentalAgreement to delete.
     */
    where: RentalAgreementWhereUniqueInput
  }

  /**
   * RentalAgreement deleteMany
   */
  export type RentalAgreementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RentalAgreements to delete
     */
    where?: RentalAgreementWhereInput
    /**
     * Limit how many RentalAgreements to delete.
     */
    limit?: number
  }

  /**
   * RentalAgreement.charges
   */
  export type RentalAgreement$chargesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgreementCharge
     */
    select?: AgreementChargeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgreementCharge
     */
    omit?: AgreementChargeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgreementChargeInclude<ExtArgs> | null
    where?: AgreementChargeWhereInput
    orderBy?: AgreementChargeOrderByWithRelationInput | AgreementChargeOrderByWithRelationInput[]
    cursor?: AgreementChargeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AgreementChargeScalarFieldEnum | AgreementChargeScalarFieldEnum[]
  }

  /**
   * RentalAgreement.bills
   */
  export type RentalAgreement$billsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
    where?: BillWhereInput
    orderBy?: BillOrderByWithRelationInput | BillOrderByWithRelationInput[]
    cursor?: BillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BillScalarFieldEnum | BillScalarFieldEnum[]
  }

  /**
   * RentalAgreement without action
   */
  export type RentalAgreementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalAgreement
     */
    select?: RentalAgreementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalAgreement
     */
    omit?: RentalAgreementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalAgreementInclude<ExtArgs> | null
  }


  /**
   * Model AgreementCharge
   */

  export type AggregateAgreementCharge = {
    _count: AgreementChargeCountAggregateOutputType | null
    _avg: AgreementChargeAvgAggregateOutputType | null
    _sum: AgreementChargeSumAggregateOutputType | null
    _min: AgreementChargeMinAggregateOutputType | null
    _max: AgreementChargeMaxAggregateOutputType | null
  }

  export type AgreementChargeAvgAggregateOutputType = {
    amount: number | null
  }

  export type AgreementChargeSumAggregateOutputType = {
    amount: number | null
  }

  export type AgreementChargeMinAggregateOutputType = {
    id: string | null
    rentalAgreementId: string | null
    chargeType: $Enums.ChargeType | null
    calculation: $Enums.ChargeMethod | null
    amount: number | null
    createdAt: Date | null
  }

  export type AgreementChargeMaxAggregateOutputType = {
    id: string | null
    rentalAgreementId: string | null
    chargeType: $Enums.ChargeType | null
    calculation: $Enums.ChargeMethod | null
    amount: number | null
    createdAt: Date | null
  }

  export type AgreementChargeCountAggregateOutputType = {
    id: number
    rentalAgreementId: number
    chargeType: number
    calculation: number
    amount: number
    createdAt: number
    _all: number
  }


  export type AgreementChargeAvgAggregateInputType = {
    amount?: true
  }

  export type AgreementChargeSumAggregateInputType = {
    amount?: true
  }

  export type AgreementChargeMinAggregateInputType = {
    id?: true
    rentalAgreementId?: true
    chargeType?: true
    calculation?: true
    amount?: true
    createdAt?: true
  }

  export type AgreementChargeMaxAggregateInputType = {
    id?: true
    rentalAgreementId?: true
    chargeType?: true
    calculation?: true
    amount?: true
    createdAt?: true
  }

  export type AgreementChargeCountAggregateInputType = {
    id?: true
    rentalAgreementId?: true
    chargeType?: true
    calculation?: true
    amount?: true
    createdAt?: true
    _all?: true
  }

  export type AgreementChargeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AgreementCharge to aggregate.
     */
    where?: AgreementChargeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AgreementCharges to fetch.
     */
    orderBy?: AgreementChargeOrderByWithRelationInput | AgreementChargeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AgreementChargeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AgreementCharges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AgreementCharges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AgreementCharges
    **/
    _count?: true | AgreementChargeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AgreementChargeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AgreementChargeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AgreementChargeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AgreementChargeMaxAggregateInputType
  }

  export type GetAgreementChargeAggregateType<T extends AgreementChargeAggregateArgs> = {
        [P in keyof T & keyof AggregateAgreementCharge]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAgreementCharge[P]>
      : GetScalarType<T[P], AggregateAgreementCharge[P]>
  }




  export type AgreementChargeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgreementChargeWhereInput
    orderBy?: AgreementChargeOrderByWithAggregationInput | AgreementChargeOrderByWithAggregationInput[]
    by: AgreementChargeScalarFieldEnum[] | AgreementChargeScalarFieldEnum
    having?: AgreementChargeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AgreementChargeCountAggregateInputType | true
    _avg?: AgreementChargeAvgAggregateInputType
    _sum?: AgreementChargeSumAggregateInputType
    _min?: AgreementChargeMinAggregateInputType
    _max?: AgreementChargeMaxAggregateInputType
  }

  export type AgreementChargeGroupByOutputType = {
    id: string
    rentalAgreementId: string
    chargeType: $Enums.ChargeType
    calculation: $Enums.ChargeMethod
    amount: number
    createdAt: Date
    _count: AgreementChargeCountAggregateOutputType | null
    _avg: AgreementChargeAvgAggregateOutputType | null
    _sum: AgreementChargeSumAggregateOutputType | null
    _min: AgreementChargeMinAggregateOutputType | null
    _max: AgreementChargeMaxAggregateOutputType | null
  }

  type GetAgreementChargeGroupByPayload<T extends AgreementChargeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AgreementChargeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AgreementChargeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AgreementChargeGroupByOutputType[P]>
            : GetScalarType<T[P], AgreementChargeGroupByOutputType[P]>
        }
      >
    >


  export type AgreementChargeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rentalAgreementId?: boolean
    chargeType?: boolean
    calculation?: boolean
    amount?: boolean
    createdAt?: boolean
    rentalAgreement?: boolean | RentalAgreementDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agreementCharge"]>

  export type AgreementChargeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rentalAgreementId?: boolean
    chargeType?: boolean
    calculation?: boolean
    amount?: boolean
    createdAt?: boolean
    rentalAgreement?: boolean | RentalAgreementDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agreementCharge"]>

  export type AgreementChargeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rentalAgreementId?: boolean
    chargeType?: boolean
    calculation?: boolean
    amount?: boolean
    createdAt?: boolean
    rentalAgreement?: boolean | RentalAgreementDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agreementCharge"]>

  export type AgreementChargeSelectScalar = {
    id?: boolean
    rentalAgreementId?: boolean
    chargeType?: boolean
    calculation?: boolean
    amount?: boolean
    createdAt?: boolean
  }

  export type AgreementChargeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "rentalAgreementId" | "chargeType" | "calculation" | "amount" | "createdAt", ExtArgs["result"]["agreementCharge"]>
  export type AgreementChargeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rentalAgreement?: boolean | RentalAgreementDefaultArgs<ExtArgs>
  }
  export type AgreementChargeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rentalAgreement?: boolean | RentalAgreementDefaultArgs<ExtArgs>
  }
  export type AgreementChargeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rentalAgreement?: boolean | RentalAgreementDefaultArgs<ExtArgs>
  }

  export type $AgreementChargePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AgreementCharge"
    objects: {
      rentalAgreement: Prisma.$RentalAgreementPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      rentalAgreementId: string
      chargeType: $Enums.ChargeType
      calculation: $Enums.ChargeMethod
      amount: number
      createdAt: Date
    }, ExtArgs["result"]["agreementCharge"]>
    composites: {}
  }

  type AgreementChargeGetPayload<S extends boolean | null | undefined | AgreementChargeDefaultArgs> = $Result.GetResult<Prisma.$AgreementChargePayload, S>

  type AgreementChargeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AgreementChargeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AgreementChargeCountAggregateInputType | true
    }

  export interface AgreementChargeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AgreementCharge'], meta: { name: 'AgreementCharge' } }
    /**
     * Find zero or one AgreementCharge that matches the filter.
     * @param {AgreementChargeFindUniqueArgs} args - Arguments to find a AgreementCharge
     * @example
     * // Get one AgreementCharge
     * const agreementCharge = await prisma.agreementCharge.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AgreementChargeFindUniqueArgs>(args: SelectSubset<T, AgreementChargeFindUniqueArgs<ExtArgs>>): Prisma__AgreementChargeClient<$Result.GetResult<Prisma.$AgreementChargePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AgreementCharge that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AgreementChargeFindUniqueOrThrowArgs} args - Arguments to find a AgreementCharge
     * @example
     * // Get one AgreementCharge
     * const agreementCharge = await prisma.agreementCharge.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AgreementChargeFindUniqueOrThrowArgs>(args: SelectSubset<T, AgreementChargeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AgreementChargeClient<$Result.GetResult<Prisma.$AgreementChargePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AgreementCharge that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgreementChargeFindFirstArgs} args - Arguments to find a AgreementCharge
     * @example
     * // Get one AgreementCharge
     * const agreementCharge = await prisma.agreementCharge.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AgreementChargeFindFirstArgs>(args?: SelectSubset<T, AgreementChargeFindFirstArgs<ExtArgs>>): Prisma__AgreementChargeClient<$Result.GetResult<Prisma.$AgreementChargePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AgreementCharge that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgreementChargeFindFirstOrThrowArgs} args - Arguments to find a AgreementCharge
     * @example
     * // Get one AgreementCharge
     * const agreementCharge = await prisma.agreementCharge.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AgreementChargeFindFirstOrThrowArgs>(args?: SelectSubset<T, AgreementChargeFindFirstOrThrowArgs<ExtArgs>>): Prisma__AgreementChargeClient<$Result.GetResult<Prisma.$AgreementChargePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AgreementCharges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgreementChargeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AgreementCharges
     * const agreementCharges = await prisma.agreementCharge.findMany()
     * 
     * // Get first 10 AgreementCharges
     * const agreementCharges = await prisma.agreementCharge.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const agreementChargeWithIdOnly = await prisma.agreementCharge.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AgreementChargeFindManyArgs>(args?: SelectSubset<T, AgreementChargeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgreementChargePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AgreementCharge.
     * @param {AgreementChargeCreateArgs} args - Arguments to create a AgreementCharge.
     * @example
     * // Create one AgreementCharge
     * const AgreementCharge = await prisma.agreementCharge.create({
     *   data: {
     *     // ... data to create a AgreementCharge
     *   }
     * })
     * 
     */
    create<T extends AgreementChargeCreateArgs>(args: SelectSubset<T, AgreementChargeCreateArgs<ExtArgs>>): Prisma__AgreementChargeClient<$Result.GetResult<Prisma.$AgreementChargePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AgreementCharges.
     * @param {AgreementChargeCreateManyArgs} args - Arguments to create many AgreementCharges.
     * @example
     * // Create many AgreementCharges
     * const agreementCharge = await prisma.agreementCharge.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AgreementChargeCreateManyArgs>(args?: SelectSubset<T, AgreementChargeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AgreementCharges and returns the data saved in the database.
     * @param {AgreementChargeCreateManyAndReturnArgs} args - Arguments to create many AgreementCharges.
     * @example
     * // Create many AgreementCharges
     * const agreementCharge = await prisma.agreementCharge.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AgreementCharges and only return the `id`
     * const agreementChargeWithIdOnly = await prisma.agreementCharge.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AgreementChargeCreateManyAndReturnArgs>(args?: SelectSubset<T, AgreementChargeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgreementChargePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AgreementCharge.
     * @param {AgreementChargeDeleteArgs} args - Arguments to delete one AgreementCharge.
     * @example
     * // Delete one AgreementCharge
     * const AgreementCharge = await prisma.agreementCharge.delete({
     *   where: {
     *     // ... filter to delete one AgreementCharge
     *   }
     * })
     * 
     */
    delete<T extends AgreementChargeDeleteArgs>(args: SelectSubset<T, AgreementChargeDeleteArgs<ExtArgs>>): Prisma__AgreementChargeClient<$Result.GetResult<Prisma.$AgreementChargePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AgreementCharge.
     * @param {AgreementChargeUpdateArgs} args - Arguments to update one AgreementCharge.
     * @example
     * // Update one AgreementCharge
     * const agreementCharge = await prisma.agreementCharge.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AgreementChargeUpdateArgs>(args: SelectSubset<T, AgreementChargeUpdateArgs<ExtArgs>>): Prisma__AgreementChargeClient<$Result.GetResult<Prisma.$AgreementChargePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AgreementCharges.
     * @param {AgreementChargeDeleteManyArgs} args - Arguments to filter AgreementCharges to delete.
     * @example
     * // Delete a few AgreementCharges
     * const { count } = await prisma.agreementCharge.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AgreementChargeDeleteManyArgs>(args?: SelectSubset<T, AgreementChargeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AgreementCharges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgreementChargeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AgreementCharges
     * const agreementCharge = await prisma.agreementCharge.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AgreementChargeUpdateManyArgs>(args: SelectSubset<T, AgreementChargeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AgreementCharges and returns the data updated in the database.
     * @param {AgreementChargeUpdateManyAndReturnArgs} args - Arguments to update many AgreementCharges.
     * @example
     * // Update many AgreementCharges
     * const agreementCharge = await prisma.agreementCharge.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AgreementCharges and only return the `id`
     * const agreementChargeWithIdOnly = await prisma.agreementCharge.updateManyAndReturn({
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
    updateManyAndReturn<T extends AgreementChargeUpdateManyAndReturnArgs>(args: SelectSubset<T, AgreementChargeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgreementChargePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AgreementCharge.
     * @param {AgreementChargeUpsertArgs} args - Arguments to update or create a AgreementCharge.
     * @example
     * // Update or create a AgreementCharge
     * const agreementCharge = await prisma.agreementCharge.upsert({
     *   create: {
     *     // ... data to create a AgreementCharge
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AgreementCharge we want to update
     *   }
     * })
     */
    upsert<T extends AgreementChargeUpsertArgs>(args: SelectSubset<T, AgreementChargeUpsertArgs<ExtArgs>>): Prisma__AgreementChargeClient<$Result.GetResult<Prisma.$AgreementChargePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AgreementCharges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgreementChargeCountArgs} args - Arguments to filter AgreementCharges to count.
     * @example
     * // Count the number of AgreementCharges
     * const count = await prisma.agreementCharge.count({
     *   where: {
     *     // ... the filter for the AgreementCharges we want to count
     *   }
     * })
    **/
    count<T extends AgreementChargeCountArgs>(
      args?: Subset<T, AgreementChargeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AgreementChargeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AgreementCharge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgreementChargeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AgreementChargeAggregateArgs>(args: Subset<T, AgreementChargeAggregateArgs>): Prisma.PrismaPromise<GetAgreementChargeAggregateType<T>>

    /**
     * Group by AgreementCharge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgreementChargeGroupByArgs} args - Group by arguments.
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
      T extends AgreementChargeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AgreementChargeGroupByArgs['orderBy'] }
        : { orderBy?: AgreementChargeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AgreementChargeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAgreementChargeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AgreementCharge model
   */
  readonly fields: AgreementChargeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AgreementCharge.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AgreementChargeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rentalAgreement<T extends RentalAgreementDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RentalAgreementDefaultArgs<ExtArgs>>): Prisma__RentalAgreementClient<$Result.GetResult<Prisma.$RentalAgreementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AgreementCharge model
   */
  interface AgreementChargeFieldRefs {
    readonly id: FieldRef<"AgreementCharge", 'String'>
    readonly rentalAgreementId: FieldRef<"AgreementCharge", 'String'>
    readonly chargeType: FieldRef<"AgreementCharge", 'ChargeType'>
    readonly calculation: FieldRef<"AgreementCharge", 'ChargeMethod'>
    readonly amount: FieldRef<"AgreementCharge", 'Float'>
    readonly createdAt: FieldRef<"AgreementCharge", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AgreementCharge findUnique
   */
  export type AgreementChargeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgreementCharge
     */
    select?: AgreementChargeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgreementCharge
     */
    omit?: AgreementChargeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgreementChargeInclude<ExtArgs> | null
    /**
     * Filter, which AgreementCharge to fetch.
     */
    where: AgreementChargeWhereUniqueInput
  }

  /**
   * AgreementCharge findUniqueOrThrow
   */
  export type AgreementChargeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgreementCharge
     */
    select?: AgreementChargeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgreementCharge
     */
    omit?: AgreementChargeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgreementChargeInclude<ExtArgs> | null
    /**
     * Filter, which AgreementCharge to fetch.
     */
    where: AgreementChargeWhereUniqueInput
  }

  /**
   * AgreementCharge findFirst
   */
  export type AgreementChargeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgreementCharge
     */
    select?: AgreementChargeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgreementCharge
     */
    omit?: AgreementChargeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgreementChargeInclude<ExtArgs> | null
    /**
     * Filter, which AgreementCharge to fetch.
     */
    where?: AgreementChargeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AgreementCharges to fetch.
     */
    orderBy?: AgreementChargeOrderByWithRelationInput | AgreementChargeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AgreementCharges.
     */
    cursor?: AgreementChargeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AgreementCharges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AgreementCharges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AgreementCharges.
     */
    distinct?: AgreementChargeScalarFieldEnum | AgreementChargeScalarFieldEnum[]
  }

  /**
   * AgreementCharge findFirstOrThrow
   */
  export type AgreementChargeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgreementCharge
     */
    select?: AgreementChargeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgreementCharge
     */
    omit?: AgreementChargeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgreementChargeInclude<ExtArgs> | null
    /**
     * Filter, which AgreementCharge to fetch.
     */
    where?: AgreementChargeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AgreementCharges to fetch.
     */
    orderBy?: AgreementChargeOrderByWithRelationInput | AgreementChargeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AgreementCharges.
     */
    cursor?: AgreementChargeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AgreementCharges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AgreementCharges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AgreementCharges.
     */
    distinct?: AgreementChargeScalarFieldEnum | AgreementChargeScalarFieldEnum[]
  }

  /**
   * AgreementCharge findMany
   */
  export type AgreementChargeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgreementCharge
     */
    select?: AgreementChargeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgreementCharge
     */
    omit?: AgreementChargeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgreementChargeInclude<ExtArgs> | null
    /**
     * Filter, which AgreementCharges to fetch.
     */
    where?: AgreementChargeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AgreementCharges to fetch.
     */
    orderBy?: AgreementChargeOrderByWithRelationInput | AgreementChargeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AgreementCharges.
     */
    cursor?: AgreementChargeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AgreementCharges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AgreementCharges.
     */
    skip?: number
    distinct?: AgreementChargeScalarFieldEnum | AgreementChargeScalarFieldEnum[]
  }

  /**
   * AgreementCharge create
   */
  export type AgreementChargeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgreementCharge
     */
    select?: AgreementChargeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgreementCharge
     */
    omit?: AgreementChargeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgreementChargeInclude<ExtArgs> | null
    /**
     * The data needed to create a AgreementCharge.
     */
    data: XOR<AgreementChargeCreateInput, AgreementChargeUncheckedCreateInput>
  }

  /**
   * AgreementCharge createMany
   */
  export type AgreementChargeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AgreementCharges.
     */
    data: AgreementChargeCreateManyInput | AgreementChargeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AgreementCharge createManyAndReturn
   */
  export type AgreementChargeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgreementCharge
     */
    select?: AgreementChargeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AgreementCharge
     */
    omit?: AgreementChargeOmit<ExtArgs> | null
    /**
     * The data used to create many AgreementCharges.
     */
    data: AgreementChargeCreateManyInput | AgreementChargeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgreementChargeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AgreementCharge update
   */
  export type AgreementChargeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgreementCharge
     */
    select?: AgreementChargeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgreementCharge
     */
    omit?: AgreementChargeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgreementChargeInclude<ExtArgs> | null
    /**
     * The data needed to update a AgreementCharge.
     */
    data: XOR<AgreementChargeUpdateInput, AgreementChargeUncheckedUpdateInput>
    /**
     * Choose, which AgreementCharge to update.
     */
    where: AgreementChargeWhereUniqueInput
  }

  /**
   * AgreementCharge updateMany
   */
  export type AgreementChargeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AgreementCharges.
     */
    data: XOR<AgreementChargeUpdateManyMutationInput, AgreementChargeUncheckedUpdateManyInput>
    /**
     * Filter which AgreementCharges to update
     */
    where?: AgreementChargeWhereInput
    /**
     * Limit how many AgreementCharges to update.
     */
    limit?: number
  }

  /**
   * AgreementCharge updateManyAndReturn
   */
  export type AgreementChargeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgreementCharge
     */
    select?: AgreementChargeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AgreementCharge
     */
    omit?: AgreementChargeOmit<ExtArgs> | null
    /**
     * The data used to update AgreementCharges.
     */
    data: XOR<AgreementChargeUpdateManyMutationInput, AgreementChargeUncheckedUpdateManyInput>
    /**
     * Filter which AgreementCharges to update
     */
    where?: AgreementChargeWhereInput
    /**
     * Limit how many AgreementCharges to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgreementChargeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AgreementCharge upsert
   */
  export type AgreementChargeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgreementCharge
     */
    select?: AgreementChargeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgreementCharge
     */
    omit?: AgreementChargeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgreementChargeInclude<ExtArgs> | null
    /**
     * The filter to search for the AgreementCharge to update in case it exists.
     */
    where: AgreementChargeWhereUniqueInput
    /**
     * In case the AgreementCharge found by the `where` argument doesn't exist, create a new AgreementCharge with this data.
     */
    create: XOR<AgreementChargeCreateInput, AgreementChargeUncheckedCreateInput>
    /**
     * In case the AgreementCharge was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AgreementChargeUpdateInput, AgreementChargeUncheckedUpdateInput>
  }

  /**
   * AgreementCharge delete
   */
  export type AgreementChargeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgreementCharge
     */
    select?: AgreementChargeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgreementCharge
     */
    omit?: AgreementChargeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgreementChargeInclude<ExtArgs> | null
    /**
     * Filter which AgreementCharge to delete.
     */
    where: AgreementChargeWhereUniqueInput
  }

  /**
   * AgreementCharge deleteMany
   */
  export type AgreementChargeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AgreementCharges to delete
     */
    where?: AgreementChargeWhereInput
    /**
     * Limit how many AgreementCharges to delete.
     */
    limit?: number
  }

  /**
   * AgreementCharge without action
   */
  export type AgreementChargeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgreementCharge
     */
    select?: AgreementChargeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgreementCharge
     */
    omit?: AgreementChargeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgreementChargeInclude<ExtArgs> | null
  }


  /**
   * Model MeterReading
   */

  export type AggregateMeterReading = {
    _count: MeterReadingCountAggregateOutputType | null
    _avg: MeterReadingAvgAggregateOutputType | null
    _sum: MeterReadingSumAggregateOutputType | null
    _min: MeterReadingMinAggregateOutputType | null
    _max: MeterReadingMaxAggregateOutputType | null
  }

  export type MeterReadingAvgAggregateOutputType = {
    previousReading: number | null
    currentReading: number | null
    unitsConsumed: number | null
  }

  export type MeterReadingSumAggregateOutputType = {
    previousReading: number | null
    currentReading: number | null
    unitsConsumed: number | null
  }

  export type MeterReadingMinAggregateOutputType = {
    id: string | null
    meterId: string | null
    readingDate: Date | null
    previousReading: number | null
    currentReading: number | null
    unitsConsumed: number | null
    createdAt: Date | null
  }

  export type MeterReadingMaxAggregateOutputType = {
    id: string | null
    meterId: string | null
    readingDate: Date | null
    previousReading: number | null
    currentReading: number | null
    unitsConsumed: number | null
    createdAt: Date | null
  }

  export type MeterReadingCountAggregateOutputType = {
    id: number
    meterId: number
    readingDate: number
    previousReading: number
    currentReading: number
    unitsConsumed: number
    createdAt: number
    _all: number
  }


  export type MeterReadingAvgAggregateInputType = {
    previousReading?: true
    currentReading?: true
    unitsConsumed?: true
  }

  export type MeterReadingSumAggregateInputType = {
    previousReading?: true
    currentReading?: true
    unitsConsumed?: true
  }

  export type MeterReadingMinAggregateInputType = {
    id?: true
    meterId?: true
    readingDate?: true
    previousReading?: true
    currentReading?: true
    unitsConsumed?: true
    createdAt?: true
  }

  export type MeterReadingMaxAggregateInputType = {
    id?: true
    meterId?: true
    readingDate?: true
    previousReading?: true
    currentReading?: true
    unitsConsumed?: true
    createdAt?: true
  }

  export type MeterReadingCountAggregateInputType = {
    id?: true
    meterId?: true
    readingDate?: true
    previousReading?: true
    currentReading?: true
    unitsConsumed?: true
    createdAt?: true
    _all?: true
  }

  export type MeterReadingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MeterReading to aggregate.
     */
    where?: MeterReadingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MeterReadings to fetch.
     */
    orderBy?: MeterReadingOrderByWithRelationInput | MeterReadingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MeterReadingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MeterReadings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MeterReadings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MeterReadings
    **/
    _count?: true | MeterReadingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MeterReadingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MeterReadingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MeterReadingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MeterReadingMaxAggregateInputType
  }

  export type GetMeterReadingAggregateType<T extends MeterReadingAggregateArgs> = {
        [P in keyof T & keyof AggregateMeterReading]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMeterReading[P]>
      : GetScalarType<T[P], AggregateMeterReading[P]>
  }




  export type MeterReadingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MeterReadingWhereInput
    orderBy?: MeterReadingOrderByWithAggregationInput | MeterReadingOrderByWithAggregationInput[]
    by: MeterReadingScalarFieldEnum[] | MeterReadingScalarFieldEnum
    having?: MeterReadingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MeterReadingCountAggregateInputType | true
    _avg?: MeterReadingAvgAggregateInputType
    _sum?: MeterReadingSumAggregateInputType
    _min?: MeterReadingMinAggregateInputType
    _max?: MeterReadingMaxAggregateInputType
  }

  export type MeterReadingGroupByOutputType = {
    id: string
    meterId: string
    readingDate: Date
    previousReading: number
    currentReading: number
    unitsConsumed: number
    createdAt: Date
    _count: MeterReadingCountAggregateOutputType | null
    _avg: MeterReadingAvgAggregateOutputType | null
    _sum: MeterReadingSumAggregateOutputType | null
    _min: MeterReadingMinAggregateOutputType | null
    _max: MeterReadingMaxAggregateOutputType | null
  }

  type GetMeterReadingGroupByPayload<T extends MeterReadingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MeterReadingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MeterReadingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MeterReadingGroupByOutputType[P]>
            : GetScalarType<T[P], MeterReadingGroupByOutputType[P]>
        }
      >
    >


  export type MeterReadingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    meterId?: boolean
    readingDate?: boolean
    previousReading?: boolean
    currentReading?: boolean
    unitsConsumed?: boolean
    createdAt?: boolean
    meter?: boolean | MeterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meterReading"]>

  export type MeterReadingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    meterId?: boolean
    readingDate?: boolean
    previousReading?: boolean
    currentReading?: boolean
    unitsConsumed?: boolean
    createdAt?: boolean
    meter?: boolean | MeterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meterReading"]>

  export type MeterReadingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    meterId?: boolean
    readingDate?: boolean
    previousReading?: boolean
    currentReading?: boolean
    unitsConsumed?: boolean
    createdAt?: boolean
    meter?: boolean | MeterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meterReading"]>

  export type MeterReadingSelectScalar = {
    id?: boolean
    meterId?: boolean
    readingDate?: boolean
    previousReading?: boolean
    currentReading?: boolean
    unitsConsumed?: boolean
    createdAt?: boolean
  }

  export type MeterReadingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "meterId" | "readingDate" | "previousReading" | "currentReading" | "unitsConsumed" | "createdAt", ExtArgs["result"]["meterReading"]>
  export type MeterReadingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meter?: boolean | MeterDefaultArgs<ExtArgs>
  }
  export type MeterReadingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meter?: boolean | MeterDefaultArgs<ExtArgs>
  }
  export type MeterReadingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meter?: boolean | MeterDefaultArgs<ExtArgs>
  }

  export type $MeterReadingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MeterReading"
    objects: {
      meter: Prisma.$MeterPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      meterId: string
      readingDate: Date
      previousReading: number
      currentReading: number
      unitsConsumed: number
      createdAt: Date
    }, ExtArgs["result"]["meterReading"]>
    composites: {}
  }

  type MeterReadingGetPayload<S extends boolean | null | undefined | MeterReadingDefaultArgs> = $Result.GetResult<Prisma.$MeterReadingPayload, S>

  type MeterReadingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MeterReadingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MeterReadingCountAggregateInputType | true
    }

  export interface MeterReadingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MeterReading'], meta: { name: 'MeterReading' } }
    /**
     * Find zero or one MeterReading that matches the filter.
     * @param {MeterReadingFindUniqueArgs} args - Arguments to find a MeterReading
     * @example
     * // Get one MeterReading
     * const meterReading = await prisma.meterReading.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MeterReadingFindUniqueArgs>(args: SelectSubset<T, MeterReadingFindUniqueArgs<ExtArgs>>): Prisma__MeterReadingClient<$Result.GetResult<Prisma.$MeterReadingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MeterReading that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MeterReadingFindUniqueOrThrowArgs} args - Arguments to find a MeterReading
     * @example
     * // Get one MeterReading
     * const meterReading = await prisma.meterReading.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MeterReadingFindUniqueOrThrowArgs>(args: SelectSubset<T, MeterReadingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MeterReadingClient<$Result.GetResult<Prisma.$MeterReadingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MeterReading that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeterReadingFindFirstArgs} args - Arguments to find a MeterReading
     * @example
     * // Get one MeterReading
     * const meterReading = await prisma.meterReading.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MeterReadingFindFirstArgs>(args?: SelectSubset<T, MeterReadingFindFirstArgs<ExtArgs>>): Prisma__MeterReadingClient<$Result.GetResult<Prisma.$MeterReadingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MeterReading that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeterReadingFindFirstOrThrowArgs} args - Arguments to find a MeterReading
     * @example
     * // Get one MeterReading
     * const meterReading = await prisma.meterReading.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MeterReadingFindFirstOrThrowArgs>(args?: SelectSubset<T, MeterReadingFindFirstOrThrowArgs<ExtArgs>>): Prisma__MeterReadingClient<$Result.GetResult<Prisma.$MeterReadingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MeterReadings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeterReadingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MeterReadings
     * const meterReadings = await prisma.meterReading.findMany()
     * 
     * // Get first 10 MeterReadings
     * const meterReadings = await prisma.meterReading.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const meterReadingWithIdOnly = await prisma.meterReading.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MeterReadingFindManyArgs>(args?: SelectSubset<T, MeterReadingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeterReadingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MeterReading.
     * @param {MeterReadingCreateArgs} args - Arguments to create a MeterReading.
     * @example
     * // Create one MeterReading
     * const MeterReading = await prisma.meterReading.create({
     *   data: {
     *     // ... data to create a MeterReading
     *   }
     * })
     * 
     */
    create<T extends MeterReadingCreateArgs>(args: SelectSubset<T, MeterReadingCreateArgs<ExtArgs>>): Prisma__MeterReadingClient<$Result.GetResult<Prisma.$MeterReadingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MeterReadings.
     * @param {MeterReadingCreateManyArgs} args - Arguments to create many MeterReadings.
     * @example
     * // Create many MeterReadings
     * const meterReading = await prisma.meterReading.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MeterReadingCreateManyArgs>(args?: SelectSubset<T, MeterReadingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MeterReadings and returns the data saved in the database.
     * @param {MeterReadingCreateManyAndReturnArgs} args - Arguments to create many MeterReadings.
     * @example
     * // Create many MeterReadings
     * const meterReading = await prisma.meterReading.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MeterReadings and only return the `id`
     * const meterReadingWithIdOnly = await prisma.meterReading.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MeterReadingCreateManyAndReturnArgs>(args?: SelectSubset<T, MeterReadingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeterReadingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MeterReading.
     * @param {MeterReadingDeleteArgs} args - Arguments to delete one MeterReading.
     * @example
     * // Delete one MeterReading
     * const MeterReading = await prisma.meterReading.delete({
     *   where: {
     *     // ... filter to delete one MeterReading
     *   }
     * })
     * 
     */
    delete<T extends MeterReadingDeleteArgs>(args: SelectSubset<T, MeterReadingDeleteArgs<ExtArgs>>): Prisma__MeterReadingClient<$Result.GetResult<Prisma.$MeterReadingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MeterReading.
     * @param {MeterReadingUpdateArgs} args - Arguments to update one MeterReading.
     * @example
     * // Update one MeterReading
     * const meterReading = await prisma.meterReading.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MeterReadingUpdateArgs>(args: SelectSubset<T, MeterReadingUpdateArgs<ExtArgs>>): Prisma__MeterReadingClient<$Result.GetResult<Prisma.$MeterReadingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MeterReadings.
     * @param {MeterReadingDeleteManyArgs} args - Arguments to filter MeterReadings to delete.
     * @example
     * // Delete a few MeterReadings
     * const { count } = await prisma.meterReading.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MeterReadingDeleteManyArgs>(args?: SelectSubset<T, MeterReadingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MeterReadings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeterReadingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MeterReadings
     * const meterReading = await prisma.meterReading.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MeterReadingUpdateManyArgs>(args: SelectSubset<T, MeterReadingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MeterReadings and returns the data updated in the database.
     * @param {MeterReadingUpdateManyAndReturnArgs} args - Arguments to update many MeterReadings.
     * @example
     * // Update many MeterReadings
     * const meterReading = await prisma.meterReading.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MeterReadings and only return the `id`
     * const meterReadingWithIdOnly = await prisma.meterReading.updateManyAndReturn({
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
    updateManyAndReturn<T extends MeterReadingUpdateManyAndReturnArgs>(args: SelectSubset<T, MeterReadingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeterReadingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MeterReading.
     * @param {MeterReadingUpsertArgs} args - Arguments to update or create a MeterReading.
     * @example
     * // Update or create a MeterReading
     * const meterReading = await prisma.meterReading.upsert({
     *   create: {
     *     // ... data to create a MeterReading
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MeterReading we want to update
     *   }
     * })
     */
    upsert<T extends MeterReadingUpsertArgs>(args: SelectSubset<T, MeterReadingUpsertArgs<ExtArgs>>): Prisma__MeterReadingClient<$Result.GetResult<Prisma.$MeterReadingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MeterReadings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeterReadingCountArgs} args - Arguments to filter MeterReadings to count.
     * @example
     * // Count the number of MeterReadings
     * const count = await prisma.meterReading.count({
     *   where: {
     *     // ... the filter for the MeterReadings we want to count
     *   }
     * })
    **/
    count<T extends MeterReadingCountArgs>(
      args?: Subset<T, MeterReadingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MeterReadingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MeterReading.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeterReadingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MeterReadingAggregateArgs>(args: Subset<T, MeterReadingAggregateArgs>): Prisma.PrismaPromise<GetMeterReadingAggregateType<T>>

    /**
     * Group by MeterReading.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeterReadingGroupByArgs} args - Group by arguments.
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
      T extends MeterReadingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MeterReadingGroupByArgs['orderBy'] }
        : { orderBy?: MeterReadingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MeterReadingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMeterReadingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MeterReading model
   */
  readonly fields: MeterReadingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MeterReading.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MeterReadingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    meter<T extends MeterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MeterDefaultArgs<ExtArgs>>): Prisma__MeterClient<$Result.GetResult<Prisma.$MeterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MeterReading model
   */
  interface MeterReadingFieldRefs {
    readonly id: FieldRef<"MeterReading", 'String'>
    readonly meterId: FieldRef<"MeterReading", 'String'>
    readonly readingDate: FieldRef<"MeterReading", 'DateTime'>
    readonly previousReading: FieldRef<"MeterReading", 'Float'>
    readonly currentReading: FieldRef<"MeterReading", 'Float'>
    readonly unitsConsumed: FieldRef<"MeterReading", 'Float'>
    readonly createdAt: FieldRef<"MeterReading", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MeterReading findUnique
   */
  export type MeterReadingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeterReading
     */
    select?: MeterReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeterReading
     */
    omit?: MeterReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeterReadingInclude<ExtArgs> | null
    /**
     * Filter, which MeterReading to fetch.
     */
    where: MeterReadingWhereUniqueInput
  }

  /**
   * MeterReading findUniqueOrThrow
   */
  export type MeterReadingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeterReading
     */
    select?: MeterReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeterReading
     */
    omit?: MeterReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeterReadingInclude<ExtArgs> | null
    /**
     * Filter, which MeterReading to fetch.
     */
    where: MeterReadingWhereUniqueInput
  }

  /**
   * MeterReading findFirst
   */
  export type MeterReadingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeterReading
     */
    select?: MeterReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeterReading
     */
    omit?: MeterReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeterReadingInclude<ExtArgs> | null
    /**
     * Filter, which MeterReading to fetch.
     */
    where?: MeterReadingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MeterReadings to fetch.
     */
    orderBy?: MeterReadingOrderByWithRelationInput | MeterReadingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MeterReadings.
     */
    cursor?: MeterReadingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MeterReadings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MeterReadings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MeterReadings.
     */
    distinct?: MeterReadingScalarFieldEnum | MeterReadingScalarFieldEnum[]
  }

  /**
   * MeterReading findFirstOrThrow
   */
  export type MeterReadingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeterReading
     */
    select?: MeterReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeterReading
     */
    omit?: MeterReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeterReadingInclude<ExtArgs> | null
    /**
     * Filter, which MeterReading to fetch.
     */
    where?: MeterReadingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MeterReadings to fetch.
     */
    orderBy?: MeterReadingOrderByWithRelationInput | MeterReadingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MeterReadings.
     */
    cursor?: MeterReadingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MeterReadings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MeterReadings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MeterReadings.
     */
    distinct?: MeterReadingScalarFieldEnum | MeterReadingScalarFieldEnum[]
  }

  /**
   * MeterReading findMany
   */
  export type MeterReadingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeterReading
     */
    select?: MeterReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeterReading
     */
    omit?: MeterReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeterReadingInclude<ExtArgs> | null
    /**
     * Filter, which MeterReadings to fetch.
     */
    where?: MeterReadingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MeterReadings to fetch.
     */
    orderBy?: MeterReadingOrderByWithRelationInput | MeterReadingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MeterReadings.
     */
    cursor?: MeterReadingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MeterReadings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MeterReadings.
     */
    skip?: number
    distinct?: MeterReadingScalarFieldEnum | MeterReadingScalarFieldEnum[]
  }

  /**
   * MeterReading create
   */
  export type MeterReadingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeterReading
     */
    select?: MeterReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeterReading
     */
    omit?: MeterReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeterReadingInclude<ExtArgs> | null
    /**
     * The data needed to create a MeterReading.
     */
    data: XOR<MeterReadingCreateInput, MeterReadingUncheckedCreateInput>
  }

  /**
   * MeterReading createMany
   */
  export type MeterReadingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MeterReadings.
     */
    data: MeterReadingCreateManyInput | MeterReadingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MeterReading createManyAndReturn
   */
  export type MeterReadingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeterReading
     */
    select?: MeterReadingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MeterReading
     */
    omit?: MeterReadingOmit<ExtArgs> | null
    /**
     * The data used to create many MeterReadings.
     */
    data: MeterReadingCreateManyInput | MeterReadingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeterReadingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MeterReading update
   */
  export type MeterReadingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeterReading
     */
    select?: MeterReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeterReading
     */
    omit?: MeterReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeterReadingInclude<ExtArgs> | null
    /**
     * The data needed to update a MeterReading.
     */
    data: XOR<MeterReadingUpdateInput, MeterReadingUncheckedUpdateInput>
    /**
     * Choose, which MeterReading to update.
     */
    where: MeterReadingWhereUniqueInput
  }

  /**
   * MeterReading updateMany
   */
  export type MeterReadingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MeterReadings.
     */
    data: XOR<MeterReadingUpdateManyMutationInput, MeterReadingUncheckedUpdateManyInput>
    /**
     * Filter which MeterReadings to update
     */
    where?: MeterReadingWhereInput
    /**
     * Limit how many MeterReadings to update.
     */
    limit?: number
  }

  /**
   * MeterReading updateManyAndReturn
   */
  export type MeterReadingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeterReading
     */
    select?: MeterReadingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MeterReading
     */
    omit?: MeterReadingOmit<ExtArgs> | null
    /**
     * The data used to update MeterReadings.
     */
    data: XOR<MeterReadingUpdateManyMutationInput, MeterReadingUncheckedUpdateManyInput>
    /**
     * Filter which MeterReadings to update
     */
    where?: MeterReadingWhereInput
    /**
     * Limit how many MeterReadings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeterReadingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MeterReading upsert
   */
  export type MeterReadingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeterReading
     */
    select?: MeterReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeterReading
     */
    omit?: MeterReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeterReadingInclude<ExtArgs> | null
    /**
     * The filter to search for the MeterReading to update in case it exists.
     */
    where: MeterReadingWhereUniqueInput
    /**
     * In case the MeterReading found by the `where` argument doesn't exist, create a new MeterReading with this data.
     */
    create: XOR<MeterReadingCreateInput, MeterReadingUncheckedCreateInput>
    /**
     * In case the MeterReading was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MeterReadingUpdateInput, MeterReadingUncheckedUpdateInput>
  }

  /**
   * MeterReading delete
   */
  export type MeterReadingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeterReading
     */
    select?: MeterReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeterReading
     */
    omit?: MeterReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeterReadingInclude<ExtArgs> | null
    /**
     * Filter which MeterReading to delete.
     */
    where: MeterReadingWhereUniqueInput
  }

  /**
   * MeterReading deleteMany
   */
  export type MeterReadingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MeterReadings to delete
     */
    where?: MeterReadingWhereInput
    /**
     * Limit how many MeterReadings to delete.
     */
    limit?: number
  }

  /**
   * MeterReading without action
   */
  export type MeterReadingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeterReading
     */
    select?: MeterReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeterReading
     */
    omit?: MeterReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeterReadingInclude<ExtArgs> | null
  }


  /**
   * Model Bill
   */

  export type AggregateBill = {
    _count: BillCountAggregateOutputType | null
    _avg: BillAvgAggregateOutputType | null
    _sum: BillSumAggregateOutputType | null
    _min: BillMinAggregateOutputType | null
    _max: BillMaxAggregateOutputType | null
  }

  export type BillAvgAggregateOutputType = {
    totalAmount: number | null
  }

  export type BillSumAggregateOutputType = {
    totalAmount: number | null
  }

  export type BillMinAggregateOutputType = {
    id: string | null
    rentalAgreementId: string | null
    billingMonth: Date | null
    totalAmount: number | null
    status: $Enums.BillStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BillMaxAggregateOutputType = {
    id: string | null
    rentalAgreementId: string | null
    billingMonth: Date | null
    totalAmount: number | null
    status: $Enums.BillStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BillCountAggregateOutputType = {
    id: number
    rentalAgreementId: number
    billingMonth: number
    totalAmount: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BillAvgAggregateInputType = {
    totalAmount?: true
  }

  export type BillSumAggregateInputType = {
    totalAmount?: true
  }

  export type BillMinAggregateInputType = {
    id?: true
    rentalAgreementId?: true
    billingMonth?: true
    totalAmount?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BillMaxAggregateInputType = {
    id?: true
    rentalAgreementId?: true
    billingMonth?: true
    totalAmount?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BillCountAggregateInputType = {
    id?: true
    rentalAgreementId?: true
    billingMonth?: true
    totalAmount?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BillAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bill to aggregate.
     */
    where?: BillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bills to fetch.
     */
    orderBy?: BillOrderByWithRelationInput | BillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bills
    **/
    _count?: true | BillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BillAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BillSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BillMaxAggregateInputType
  }

  export type GetBillAggregateType<T extends BillAggregateArgs> = {
        [P in keyof T & keyof AggregateBill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBill[P]>
      : GetScalarType<T[P], AggregateBill[P]>
  }




  export type BillGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BillWhereInput
    orderBy?: BillOrderByWithAggregationInput | BillOrderByWithAggregationInput[]
    by: BillScalarFieldEnum[] | BillScalarFieldEnum
    having?: BillScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BillCountAggregateInputType | true
    _avg?: BillAvgAggregateInputType
    _sum?: BillSumAggregateInputType
    _min?: BillMinAggregateInputType
    _max?: BillMaxAggregateInputType
  }

  export type BillGroupByOutputType = {
    id: string
    rentalAgreementId: string
    billingMonth: Date
    totalAmount: number
    status: $Enums.BillStatus
    createdAt: Date
    updatedAt: Date
    _count: BillCountAggregateOutputType | null
    _avg: BillAvgAggregateOutputType | null
    _sum: BillSumAggregateOutputType | null
    _min: BillMinAggregateOutputType | null
    _max: BillMaxAggregateOutputType | null
  }

  type GetBillGroupByPayload<T extends BillGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BillGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BillGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BillGroupByOutputType[P]>
            : GetScalarType<T[P], BillGroupByOutputType[P]>
        }
      >
    >


  export type BillSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rentalAgreementId?: boolean
    billingMonth?: boolean
    totalAmount?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rentalAgreement?: boolean | RentalAgreementDefaultArgs<ExtArgs>
    items?: boolean | Bill$itemsArgs<ExtArgs>
    payments?: boolean | Bill$paymentsArgs<ExtArgs>
    _count?: boolean | BillCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bill"]>

  export type BillSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rentalAgreementId?: boolean
    billingMonth?: boolean
    totalAmount?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rentalAgreement?: boolean | RentalAgreementDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bill"]>

  export type BillSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rentalAgreementId?: boolean
    billingMonth?: boolean
    totalAmount?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rentalAgreement?: boolean | RentalAgreementDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bill"]>

  export type BillSelectScalar = {
    id?: boolean
    rentalAgreementId?: boolean
    billingMonth?: boolean
    totalAmount?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BillOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "rentalAgreementId" | "billingMonth" | "totalAmount" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["bill"]>
  export type BillInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rentalAgreement?: boolean | RentalAgreementDefaultArgs<ExtArgs>
    items?: boolean | Bill$itemsArgs<ExtArgs>
    payments?: boolean | Bill$paymentsArgs<ExtArgs>
    _count?: boolean | BillCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BillIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rentalAgreement?: boolean | RentalAgreementDefaultArgs<ExtArgs>
  }
  export type BillIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rentalAgreement?: boolean | RentalAgreementDefaultArgs<ExtArgs>
  }

  export type $BillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bill"
    objects: {
      rentalAgreement: Prisma.$RentalAgreementPayload<ExtArgs>
      items: Prisma.$BillItemPayload<ExtArgs>[]
      payments: Prisma.$PaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      rentalAgreementId: string
      billingMonth: Date
      totalAmount: number
      status: $Enums.BillStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["bill"]>
    composites: {}
  }

  type BillGetPayload<S extends boolean | null | undefined | BillDefaultArgs> = $Result.GetResult<Prisma.$BillPayload, S>

  type BillCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BillFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BillCountAggregateInputType | true
    }

  export interface BillDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bill'], meta: { name: 'Bill' } }
    /**
     * Find zero or one Bill that matches the filter.
     * @param {BillFindUniqueArgs} args - Arguments to find a Bill
     * @example
     * // Get one Bill
     * const bill = await prisma.bill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BillFindUniqueArgs>(args: SelectSubset<T, BillFindUniqueArgs<ExtArgs>>): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bill that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BillFindUniqueOrThrowArgs} args - Arguments to find a Bill
     * @example
     * // Get one Bill
     * const bill = await prisma.bill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BillFindUniqueOrThrowArgs>(args: SelectSubset<T, BillFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillFindFirstArgs} args - Arguments to find a Bill
     * @example
     * // Get one Bill
     * const bill = await prisma.bill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BillFindFirstArgs>(args?: SelectSubset<T, BillFindFirstArgs<ExtArgs>>): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillFindFirstOrThrowArgs} args - Arguments to find a Bill
     * @example
     * // Get one Bill
     * const bill = await prisma.bill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BillFindFirstOrThrowArgs>(args?: SelectSubset<T, BillFindFirstOrThrowArgs<ExtArgs>>): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bills
     * const bills = await prisma.bill.findMany()
     * 
     * // Get first 10 Bills
     * const bills = await prisma.bill.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const billWithIdOnly = await prisma.bill.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BillFindManyArgs>(args?: SelectSubset<T, BillFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bill.
     * @param {BillCreateArgs} args - Arguments to create a Bill.
     * @example
     * // Create one Bill
     * const Bill = await prisma.bill.create({
     *   data: {
     *     // ... data to create a Bill
     *   }
     * })
     * 
     */
    create<T extends BillCreateArgs>(args: SelectSubset<T, BillCreateArgs<ExtArgs>>): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bills.
     * @param {BillCreateManyArgs} args - Arguments to create many Bills.
     * @example
     * // Create many Bills
     * const bill = await prisma.bill.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BillCreateManyArgs>(args?: SelectSubset<T, BillCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bills and returns the data saved in the database.
     * @param {BillCreateManyAndReturnArgs} args - Arguments to create many Bills.
     * @example
     * // Create many Bills
     * const bill = await prisma.bill.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bills and only return the `id`
     * const billWithIdOnly = await prisma.bill.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BillCreateManyAndReturnArgs>(args?: SelectSubset<T, BillCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Bill.
     * @param {BillDeleteArgs} args - Arguments to delete one Bill.
     * @example
     * // Delete one Bill
     * const Bill = await prisma.bill.delete({
     *   where: {
     *     // ... filter to delete one Bill
     *   }
     * })
     * 
     */
    delete<T extends BillDeleteArgs>(args: SelectSubset<T, BillDeleteArgs<ExtArgs>>): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bill.
     * @param {BillUpdateArgs} args - Arguments to update one Bill.
     * @example
     * // Update one Bill
     * const bill = await prisma.bill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BillUpdateArgs>(args: SelectSubset<T, BillUpdateArgs<ExtArgs>>): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bills.
     * @param {BillDeleteManyArgs} args - Arguments to filter Bills to delete.
     * @example
     * // Delete a few Bills
     * const { count } = await prisma.bill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BillDeleteManyArgs>(args?: SelectSubset<T, BillDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bills
     * const bill = await prisma.bill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BillUpdateManyArgs>(args: SelectSubset<T, BillUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bills and returns the data updated in the database.
     * @param {BillUpdateManyAndReturnArgs} args - Arguments to update many Bills.
     * @example
     * // Update many Bills
     * const bill = await prisma.bill.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bills and only return the `id`
     * const billWithIdOnly = await prisma.bill.updateManyAndReturn({
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
    updateManyAndReturn<T extends BillUpdateManyAndReturnArgs>(args: SelectSubset<T, BillUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Bill.
     * @param {BillUpsertArgs} args - Arguments to update or create a Bill.
     * @example
     * // Update or create a Bill
     * const bill = await prisma.bill.upsert({
     *   create: {
     *     // ... data to create a Bill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bill we want to update
     *   }
     * })
     */
    upsert<T extends BillUpsertArgs>(args: SelectSubset<T, BillUpsertArgs<ExtArgs>>): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillCountArgs} args - Arguments to filter Bills to count.
     * @example
     * // Count the number of Bills
     * const count = await prisma.bill.count({
     *   where: {
     *     // ... the filter for the Bills we want to count
     *   }
     * })
    **/
    count<T extends BillCountArgs>(
      args?: Subset<T, BillCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BillAggregateArgs>(args: Subset<T, BillAggregateArgs>): Prisma.PrismaPromise<GetBillAggregateType<T>>

    /**
     * Group by Bill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillGroupByArgs} args - Group by arguments.
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
      T extends BillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BillGroupByArgs['orderBy'] }
        : { orderBy?: BillGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bill model
   */
  readonly fields: BillFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BillClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rentalAgreement<T extends RentalAgreementDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RentalAgreementDefaultArgs<ExtArgs>>): Prisma__RentalAgreementClient<$Result.GetResult<Prisma.$RentalAgreementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    items<T extends Bill$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Bill$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payments<T extends Bill$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, Bill$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Bill model
   */
  interface BillFieldRefs {
    readonly id: FieldRef<"Bill", 'String'>
    readonly rentalAgreementId: FieldRef<"Bill", 'String'>
    readonly billingMonth: FieldRef<"Bill", 'DateTime'>
    readonly totalAmount: FieldRef<"Bill", 'Float'>
    readonly status: FieldRef<"Bill", 'BillStatus'>
    readonly createdAt: FieldRef<"Bill", 'DateTime'>
    readonly updatedAt: FieldRef<"Bill", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Bill findUnique
   */
  export type BillFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
    /**
     * Filter, which Bill to fetch.
     */
    where: BillWhereUniqueInput
  }

  /**
   * Bill findUniqueOrThrow
   */
  export type BillFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
    /**
     * Filter, which Bill to fetch.
     */
    where: BillWhereUniqueInput
  }

  /**
   * Bill findFirst
   */
  export type BillFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
    /**
     * Filter, which Bill to fetch.
     */
    where?: BillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bills to fetch.
     */
    orderBy?: BillOrderByWithRelationInput | BillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bills.
     */
    cursor?: BillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bills.
     */
    distinct?: BillScalarFieldEnum | BillScalarFieldEnum[]
  }

  /**
   * Bill findFirstOrThrow
   */
  export type BillFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
    /**
     * Filter, which Bill to fetch.
     */
    where?: BillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bills to fetch.
     */
    orderBy?: BillOrderByWithRelationInput | BillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bills.
     */
    cursor?: BillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bills.
     */
    distinct?: BillScalarFieldEnum | BillScalarFieldEnum[]
  }

  /**
   * Bill findMany
   */
  export type BillFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
    /**
     * Filter, which Bills to fetch.
     */
    where?: BillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bills to fetch.
     */
    orderBy?: BillOrderByWithRelationInput | BillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bills.
     */
    cursor?: BillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bills.
     */
    skip?: number
    distinct?: BillScalarFieldEnum | BillScalarFieldEnum[]
  }

  /**
   * Bill create
   */
  export type BillCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
    /**
     * The data needed to create a Bill.
     */
    data: XOR<BillCreateInput, BillUncheckedCreateInput>
  }

  /**
   * Bill createMany
   */
  export type BillCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bills.
     */
    data: BillCreateManyInput | BillCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Bill createManyAndReturn
   */
  export type BillCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * The data used to create many Bills.
     */
    data: BillCreateManyInput | BillCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Bill update
   */
  export type BillUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
    /**
     * The data needed to update a Bill.
     */
    data: XOR<BillUpdateInput, BillUncheckedUpdateInput>
    /**
     * Choose, which Bill to update.
     */
    where: BillWhereUniqueInput
  }

  /**
   * Bill updateMany
   */
  export type BillUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bills.
     */
    data: XOR<BillUpdateManyMutationInput, BillUncheckedUpdateManyInput>
    /**
     * Filter which Bills to update
     */
    where?: BillWhereInput
    /**
     * Limit how many Bills to update.
     */
    limit?: number
  }

  /**
   * Bill updateManyAndReturn
   */
  export type BillUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * The data used to update Bills.
     */
    data: XOR<BillUpdateManyMutationInput, BillUncheckedUpdateManyInput>
    /**
     * Filter which Bills to update
     */
    where?: BillWhereInput
    /**
     * Limit how many Bills to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Bill upsert
   */
  export type BillUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
    /**
     * The filter to search for the Bill to update in case it exists.
     */
    where: BillWhereUniqueInput
    /**
     * In case the Bill found by the `where` argument doesn't exist, create a new Bill with this data.
     */
    create: XOR<BillCreateInput, BillUncheckedCreateInput>
    /**
     * In case the Bill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BillUpdateInput, BillUncheckedUpdateInput>
  }

  /**
   * Bill delete
   */
  export type BillDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
    /**
     * Filter which Bill to delete.
     */
    where: BillWhereUniqueInput
  }

  /**
   * Bill deleteMany
   */
  export type BillDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bills to delete
     */
    where?: BillWhereInput
    /**
     * Limit how many Bills to delete.
     */
    limit?: number
  }

  /**
   * Bill.items
   */
  export type Bill$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillItem
     */
    select?: BillItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillItem
     */
    omit?: BillItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillItemInclude<ExtArgs> | null
    where?: BillItemWhereInput
    orderBy?: BillItemOrderByWithRelationInput | BillItemOrderByWithRelationInput[]
    cursor?: BillItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BillItemScalarFieldEnum | BillItemScalarFieldEnum[]
  }

  /**
   * Bill.payments
   */
  export type Bill$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Bill without action
   */
  export type BillDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
  }


  /**
   * Model BillItem
   */

  export type AggregateBillItem = {
    _count: BillItemCountAggregateOutputType | null
    _avg: BillItemAvgAggregateOutputType | null
    _sum: BillItemSumAggregateOutputType | null
    _min: BillItemMinAggregateOutputType | null
    _max: BillItemMaxAggregateOutputType | null
  }

  export type BillItemAvgAggregateOutputType = {
    quantity: number | null
    rate: number | null
    amount: number | null
  }

  export type BillItemSumAggregateOutputType = {
    quantity: number | null
    rate: number | null
    amount: number | null
  }

  export type BillItemMinAggregateOutputType = {
    id: string | null
    billId: string | null
    description: string | null
    quantity: number | null
    rate: number | null
    amount: number | null
  }

  export type BillItemMaxAggregateOutputType = {
    id: string | null
    billId: string | null
    description: string | null
    quantity: number | null
    rate: number | null
    amount: number | null
  }

  export type BillItemCountAggregateOutputType = {
    id: number
    billId: number
    description: number
    quantity: number
    rate: number
    amount: number
    _all: number
  }


  export type BillItemAvgAggregateInputType = {
    quantity?: true
    rate?: true
    amount?: true
  }

  export type BillItemSumAggregateInputType = {
    quantity?: true
    rate?: true
    amount?: true
  }

  export type BillItemMinAggregateInputType = {
    id?: true
    billId?: true
    description?: true
    quantity?: true
    rate?: true
    amount?: true
  }

  export type BillItemMaxAggregateInputType = {
    id?: true
    billId?: true
    description?: true
    quantity?: true
    rate?: true
    amount?: true
  }

  export type BillItemCountAggregateInputType = {
    id?: true
    billId?: true
    description?: true
    quantity?: true
    rate?: true
    amount?: true
    _all?: true
  }

  export type BillItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BillItem to aggregate.
     */
    where?: BillItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BillItems to fetch.
     */
    orderBy?: BillItemOrderByWithRelationInput | BillItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BillItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BillItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BillItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BillItems
    **/
    _count?: true | BillItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BillItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BillItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BillItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BillItemMaxAggregateInputType
  }

  export type GetBillItemAggregateType<T extends BillItemAggregateArgs> = {
        [P in keyof T & keyof AggregateBillItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBillItem[P]>
      : GetScalarType<T[P], AggregateBillItem[P]>
  }




  export type BillItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BillItemWhereInput
    orderBy?: BillItemOrderByWithAggregationInput | BillItemOrderByWithAggregationInput[]
    by: BillItemScalarFieldEnum[] | BillItemScalarFieldEnum
    having?: BillItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BillItemCountAggregateInputType | true
    _avg?: BillItemAvgAggregateInputType
    _sum?: BillItemSumAggregateInputType
    _min?: BillItemMinAggregateInputType
    _max?: BillItemMaxAggregateInputType
  }

  export type BillItemGroupByOutputType = {
    id: string
    billId: string
    description: string
    quantity: number
    rate: number
    amount: number
    _count: BillItemCountAggregateOutputType | null
    _avg: BillItemAvgAggregateOutputType | null
    _sum: BillItemSumAggregateOutputType | null
    _min: BillItemMinAggregateOutputType | null
    _max: BillItemMaxAggregateOutputType | null
  }

  type GetBillItemGroupByPayload<T extends BillItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BillItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BillItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BillItemGroupByOutputType[P]>
            : GetScalarType<T[P], BillItemGroupByOutputType[P]>
        }
      >
    >


  export type BillItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    billId?: boolean
    description?: boolean
    quantity?: boolean
    rate?: boolean
    amount?: boolean
    bill?: boolean | BillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["billItem"]>

  export type BillItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    billId?: boolean
    description?: boolean
    quantity?: boolean
    rate?: boolean
    amount?: boolean
    bill?: boolean | BillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["billItem"]>

  export type BillItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    billId?: boolean
    description?: boolean
    quantity?: boolean
    rate?: boolean
    amount?: boolean
    bill?: boolean | BillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["billItem"]>

  export type BillItemSelectScalar = {
    id?: boolean
    billId?: boolean
    description?: boolean
    quantity?: boolean
    rate?: boolean
    amount?: boolean
  }

  export type BillItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "billId" | "description" | "quantity" | "rate" | "amount", ExtArgs["result"]["billItem"]>
  export type BillItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bill?: boolean | BillDefaultArgs<ExtArgs>
  }
  export type BillItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bill?: boolean | BillDefaultArgs<ExtArgs>
  }
  export type BillItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bill?: boolean | BillDefaultArgs<ExtArgs>
  }

  export type $BillItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BillItem"
    objects: {
      bill: Prisma.$BillPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      billId: string
      description: string
      quantity: number
      rate: number
      amount: number
    }, ExtArgs["result"]["billItem"]>
    composites: {}
  }

  type BillItemGetPayload<S extends boolean | null | undefined | BillItemDefaultArgs> = $Result.GetResult<Prisma.$BillItemPayload, S>

  type BillItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BillItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BillItemCountAggregateInputType | true
    }

  export interface BillItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BillItem'], meta: { name: 'BillItem' } }
    /**
     * Find zero or one BillItem that matches the filter.
     * @param {BillItemFindUniqueArgs} args - Arguments to find a BillItem
     * @example
     * // Get one BillItem
     * const billItem = await prisma.billItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BillItemFindUniqueArgs>(args: SelectSubset<T, BillItemFindUniqueArgs<ExtArgs>>): Prisma__BillItemClient<$Result.GetResult<Prisma.$BillItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BillItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BillItemFindUniqueOrThrowArgs} args - Arguments to find a BillItem
     * @example
     * // Get one BillItem
     * const billItem = await prisma.billItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BillItemFindUniqueOrThrowArgs>(args: SelectSubset<T, BillItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BillItemClient<$Result.GetResult<Prisma.$BillItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BillItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillItemFindFirstArgs} args - Arguments to find a BillItem
     * @example
     * // Get one BillItem
     * const billItem = await prisma.billItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BillItemFindFirstArgs>(args?: SelectSubset<T, BillItemFindFirstArgs<ExtArgs>>): Prisma__BillItemClient<$Result.GetResult<Prisma.$BillItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BillItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillItemFindFirstOrThrowArgs} args - Arguments to find a BillItem
     * @example
     * // Get one BillItem
     * const billItem = await prisma.billItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BillItemFindFirstOrThrowArgs>(args?: SelectSubset<T, BillItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__BillItemClient<$Result.GetResult<Prisma.$BillItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BillItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BillItems
     * const billItems = await prisma.billItem.findMany()
     * 
     * // Get first 10 BillItems
     * const billItems = await prisma.billItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const billItemWithIdOnly = await prisma.billItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BillItemFindManyArgs>(args?: SelectSubset<T, BillItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BillItem.
     * @param {BillItemCreateArgs} args - Arguments to create a BillItem.
     * @example
     * // Create one BillItem
     * const BillItem = await prisma.billItem.create({
     *   data: {
     *     // ... data to create a BillItem
     *   }
     * })
     * 
     */
    create<T extends BillItemCreateArgs>(args: SelectSubset<T, BillItemCreateArgs<ExtArgs>>): Prisma__BillItemClient<$Result.GetResult<Prisma.$BillItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BillItems.
     * @param {BillItemCreateManyArgs} args - Arguments to create many BillItems.
     * @example
     * // Create many BillItems
     * const billItem = await prisma.billItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BillItemCreateManyArgs>(args?: SelectSubset<T, BillItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BillItems and returns the data saved in the database.
     * @param {BillItemCreateManyAndReturnArgs} args - Arguments to create many BillItems.
     * @example
     * // Create many BillItems
     * const billItem = await prisma.billItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BillItems and only return the `id`
     * const billItemWithIdOnly = await prisma.billItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BillItemCreateManyAndReturnArgs>(args?: SelectSubset<T, BillItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BillItem.
     * @param {BillItemDeleteArgs} args - Arguments to delete one BillItem.
     * @example
     * // Delete one BillItem
     * const BillItem = await prisma.billItem.delete({
     *   where: {
     *     // ... filter to delete one BillItem
     *   }
     * })
     * 
     */
    delete<T extends BillItemDeleteArgs>(args: SelectSubset<T, BillItemDeleteArgs<ExtArgs>>): Prisma__BillItemClient<$Result.GetResult<Prisma.$BillItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BillItem.
     * @param {BillItemUpdateArgs} args - Arguments to update one BillItem.
     * @example
     * // Update one BillItem
     * const billItem = await prisma.billItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BillItemUpdateArgs>(args: SelectSubset<T, BillItemUpdateArgs<ExtArgs>>): Prisma__BillItemClient<$Result.GetResult<Prisma.$BillItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BillItems.
     * @param {BillItemDeleteManyArgs} args - Arguments to filter BillItems to delete.
     * @example
     * // Delete a few BillItems
     * const { count } = await prisma.billItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BillItemDeleteManyArgs>(args?: SelectSubset<T, BillItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BillItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BillItems
     * const billItem = await prisma.billItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BillItemUpdateManyArgs>(args: SelectSubset<T, BillItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BillItems and returns the data updated in the database.
     * @param {BillItemUpdateManyAndReturnArgs} args - Arguments to update many BillItems.
     * @example
     * // Update many BillItems
     * const billItem = await prisma.billItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BillItems and only return the `id`
     * const billItemWithIdOnly = await prisma.billItem.updateManyAndReturn({
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
    updateManyAndReturn<T extends BillItemUpdateManyAndReturnArgs>(args: SelectSubset<T, BillItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BillItem.
     * @param {BillItemUpsertArgs} args - Arguments to update or create a BillItem.
     * @example
     * // Update or create a BillItem
     * const billItem = await prisma.billItem.upsert({
     *   create: {
     *     // ... data to create a BillItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BillItem we want to update
     *   }
     * })
     */
    upsert<T extends BillItemUpsertArgs>(args: SelectSubset<T, BillItemUpsertArgs<ExtArgs>>): Prisma__BillItemClient<$Result.GetResult<Prisma.$BillItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BillItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillItemCountArgs} args - Arguments to filter BillItems to count.
     * @example
     * // Count the number of BillItems
     * const count = await prisma.billItem.count({
     *   where: {
     *     // ... the filter for the BillItems we want to count
     *   }
     * })
    **/
    count<T extends BillItemCountArgs>(
      args?: Subset<T, BillItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BillItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BillItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BillItemAggregateArgs>(args: Subset<T, BillItemAggregateArgs>): Prisma.PrismaPromise<GetBillItemAggregateType<T>>

    /**
     * Group by BillItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillItemGroupByArgs} args - Group by arguments.
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
      T extends BillItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BillItemGroupByArgs['orderBy'] }
        : { orderBy?: BillItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BillItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBillItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BillItem model
   */
  readonly fields: BillItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BillItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BillItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bill<T extends BillDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BillDefaultArgs<ExtArgs>>): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the BillItem model
   */
  interface BillItemFieldRefs {
    readonly id: FieldRef<"BillItem", 'String'>
    readonly billId: FieldRef<"BillItem", 'String'>
    readonly description: FieldRef<"BillItem", 'String'>
    readonly quantity: FieldRef<"BillItem", 'Float'>
    readonly rate: FieldRef<"BillItem", 'Float'>
    readonly amount: FieldRef<"BillItem", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * BillItem findUnique
   */
  export type BillItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillItem
     */
    select?: BillItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillItem
     */
    omit?: BillItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillItemInclude<ExtArgs> | null
    /**
     * Filter, which BillItem to fetch.
     */
    where: BillItemWhereUniqueInput
  }

  /**
   * BillItem findUniqueOrThrow
   */
  export type BillItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillItem
     */
    select?: BillItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillItem
     */
    omit?: BillItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillItemInclude<ExtArgs> | null
    /**
     * Filter, which BillItem to fetch.
     */
    where: BillItemWhereUniqueInput
  }

  /**
   * BillItem findFirst
   */
  export type BillItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillItem
     */
    select?: BillItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillItem
     */
    omit?: BillItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillItemInclude<ExtArgs> | null
    /**
     * Filter, which BillItem to fetch.
     */
    where?: BillItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BillItems to fetch.
     */
    orderBy?: BillItemOrderByWithRelationInput | BillItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BillItems.
     */
    cursor?: BillItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BillItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BillItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BillItems.
     */
    distinct?: BillItemScalarFieldEnum | BillItemScalarFieldEnum[]
  }

  /**
   * BillItem findFirstOrThrow
   */
  export type BillItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillItem
     */
    select?: BillItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillItem
     */
    omit?: BillItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillItemInclude<ExtArgs> | null
    /**
     * Filter, which BillItem to fetch.
     */
    where?: BillItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BillItems to fetch.
     */
    orderBy?: BillItemOrderByWithRelationInput | BillItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BillItems.
     */
    cursor?: BillItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BillItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BillItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BillItems.
     */
    distinct?: BillItemScalarFieldEnum | BillItemScalarFieldEnum[]
  }

  /**
   * BillItem findMany
   */
  export type BillItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillItem
     */
    select?: BillItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillItem
     */
    omit?: BillItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillItemInclude<ExtArgs> | null
    /**
     * Filter, which BillItems to fetch.
     */
    where?: BillItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BillItems to fetch.
     */
    orderBy?: BillItemOrderByWithRelationInput | BillItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BillItems.
     */
    cursor?: BillItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BillItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BillItems.
     */
    skip?: number
    distinct?: BillItemScalarFieldEnum | BillItemScalarFieldEnum[]
  }

  /**
   * BillItem create
   */
  export type BillItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillItem
     */
    select?: BillItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillItem
     */
    omit?: BillItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillItemInclude<ExtArgs> | null
    /**
     * The data needed to create a BillItem.
     */
    data: XOR<BillItemCreateInput, BillItemUncheckedCreateInput>
  }

  /**
   * BillItem createMany
   */
  export type BillItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BillItems.
     */
    data: BillItemCreateManyInput | BillItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BillItem createManyAndReturn
   */
  export type BillItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillItem
     */
    select?: BillItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BillItem
     */
    omit?: BillItemOmit<ExtArgs> | null
    /**
     * The data used to create many BillItems.
     */
    data: BillItemCreateManyInput | BillItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BillItem update
   */
  export type BillItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillItem
     */
    select?: BillItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillItem
     */
    omit?: BillItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillItemInclude<ExtArgs> | null
    /**
     * The data needed to update a BillItem.
     */
    data: XOR<BillItemUpdateInput, BillItemUncheckedUpdateInput>
    /**
     * Choose, which BillItem to update.
     */
    where: BillItemWhereUniqueInput
  }

  /**
   * BillItem updateMany
   */
  export type BillItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BillItems.
     */
    data: XOR<BillItemUpdateManyMutationInput, BillItemUncheckedUpdateManyInput>
    /**
     * Filter which BillItems to update
     */
    where?: BillItemWhereInput
    /**
     * Limit how many BillItems to update.
     */
    limit?: number
  }

  /**
   * BillItem updateManyAndReturn
   */
  export type BillItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillItem
     */
    select?: BillItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BillItem
     */
    omit?: BillItemOmit<ExtArgs> | null
    /**
     * The data used to update BillItems.
     */
    data: XOR<BillItemUpdateManyMutationInput, BillItemUncheckedUpdateManyInput>
    /**
     * Filter which BillItems to update
     */
    where?: BillItemWhereInput
    /**
     * Limit how many BillItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BillItem upsert
   */
  export type BillItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillItem
     */
    select?: BillItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillItem
     */
    omit?: BillItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillItemInclude<ExtArgs> | null
    /**
     * The filter to search for the BillItem to update in case it exists.
     */
    where: BillItemWhereUniqueInput
    /**
     * In case the BillItem found by the `where` argument doesn't exist, create a new BillItem with this data.
     */
    create: XOR<BillItemCreateInput, BillItemUncheckedCreateInput>
    /**
     * In case the BillItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BillItemUpdateInput, BillItemUncheckedUpdateInput>
  }

  /**
   * BillItem delete
   */
  export type BillItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillItem
     */
    select?: BillItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillItem
     */
    omit?: BillItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillItemInclude<ExtArgs> | null
    /**
     * Filter which BillItem to delete.
     */
    where: BillItemWhereUniqueInput
  }

  /**
   * BillItem deleteMany
   */
  export type BillItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BillItems to delete
     */
    where?: BillItemWhereInput
    /**
     * Limit how many BillItems to delete.
     */
    limit?: number
  }

  /**
   * BillItem without action
   */
  export type BillItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillItem
     */
    select?: BillItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillItem
     */
    omit?: BillItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillItemInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    amount: number | null
  }

  export type PaymentSumAggregateOutputType = {
    amount: number | null
  }

  export type PaymentMinAggregateOutputType = {
    id: string | null
    billId: string | null
    amount: number | null
    paymentDate: Date | null
    method: $Enums.PaymentMethod | null
    referenceNo: string | null
    notes: string | null
    createdAt: Date | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: string | null
    billId: string | null
    amount: number | null
    paymentDate: Date | null
    method: $Enums.PaymentMethod | null
    referenceNo: string | null
    notes: string | null
    createdAt: Date | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    billId: number
    amount: number
    paymentDate: number
    method: number
    referenceNo: number
    notes: number
    createdAt: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    amount?: true
  }

  export type PaymentSumAggregateInputType = {
    amount?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    billId?: true
    amount?: true
    paymentDate?: true
    method?: true
    referenceNo?: true
    notes?: true
    createdAt?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    billId?: true
    amount?: true
    paymentDate?: true
    method?: true
    referenceNo?: true
    notes?: true
    createdAt?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    billId?: true
    amount?: true
    paymentDate?: true
    method?: true
    referenceNo?: true
    notes?: true
    createdAt?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: string
    billId: string
    amount: number
    paymentDate: Date
    method: $Enums.PaymentMethod
    referenceNo: string | null
    notes: string | null
    createdAt: Date
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    billId?: boolean
    amount?: boolean
    paymentDate?: boolean
    method?: boolean
    referenceNo?: boolean
    notes?: boolean
    createdAt?: boolean
    bill?: boolean | BillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    billId?: boolean
    amount?: boolean
    paymentDate?: boolean
    method?: boolean
    referenceNo?: boolean
    notes?: boolean
    createdAt?: boolean
    bill?: boolean | BillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    billId?: boolean
    amount?: boolean
    paymentDate?: boolean
    method?: boolean
    referenceNo?: boolean
    notes?: boolean
    createdAt?: boolean
    bill?: boolean | BillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectScalar = {
    id?: boolean
    billId?: boolean
    amount?: boolean
    paymentDate?: boolean
    method?: boolean
    referenceNo?: boolean
    notes?: boolean
    createdAt?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "billId" | "amount" | "paymentDate" | "method" | "referenceNo" | "notes" | "createdAt", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bill?: boolean | BillDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bill?: boolean | BillDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bill?: boolean | BillDefaultArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      bill: Prisma.$BillPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      billId: string
      amount: number
      paymentDate: Date
      method: $Enums.PaymentMethod
      referenceNo: string | null
      notes: string | null
      createdAt: Date
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {PaymentUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.updateManyAndReturn({
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
    updateManyAndReturn<T extends PaymentUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
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
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bill<T extends BillDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BillDefaultArgs<ExtArgs>>): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'String'>
    readonly billId: FieldRef<"Payment", 'String'>
    readonly amount: FieldRef<"Payment", 'Float'>
    readonly paymentDate: FieldRef<"Payment", 'DateTime'>
    readonly method: FieldRef<"Payment", 'PaymentMethod'>
    readonly referenceNo: FieldRef<"Payment", 'String'>
    readonly notes: FieldRef<"Payment", 'String'>
    readonly createdAt: FieldRef<"Payment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment createManyAndReturn
   */
  export type PaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment updateManyAndReturn
   */
  export type PaymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
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


  export const PropertyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    city: 'city',
    state: 'state',
    pinCode: 'pinCode',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PropertyScalarFieldEnum = (typeof PropertyScalarFieldEnum)[keyof typeof PropertyScalarFieldEnum]


  export const RentalUnitScalarFieldEnum: {
    id: 'id',
    name: 'name',
    unitNumber: 'unitNumber',
    floor: 'floor',
    type: 'type',
    propertyId: 'propertyId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RentalUnitScalarFieldEnum = (typeof RentalUnitScalarFieldEnum)[keyof typeof RentalUnitScalarFieldEnum]


  export const MeterScalarFieldEnum: {
    id: 'id',
    meterNumber: 'meterNumber',
    type: 'type',
    status: 'status',
    propertyId: 'propertyId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MeterScalarFieldEnum = (typeof MeterScalarFieldEnum)[keyof typeof MeterScalarFieldEnum]


  export const MeterAssignmentScalarFieldEnum: {
    id: 'id',
    meterId: 'meterId',
    rentalUnitId: 'rentalUnitId',
    createdAt: 'createdAt'
  };

  export type MeterAssignmentScalarFieldEnum = (typeof MeterAssignmentScalarFieldEnum)[keyof typeof MeterAssignmentScalarFieldEnum]


  export const TenantScalarFieldEnum: {
    id: 'id',
    fullName: 'fullName',
    phone: 'phone',
    email: 'email',
    governmentId: 'governmentId',
    address: 'address',
    emergencyContact: 'emergencyContact',
    createdAt: 'createdAt'
  };

  export type TenantScalarFieldEnum = (typeof TenantScalarFieldEnum)[keyof typeof TenantScalarFieldEnum]


  export const RentalAgreementScalarFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    rentalUnitId: 'rentalUnitId',
    securityDeposit: 'securityDeposit',
    startDate: 'startDate',
    endDate: 'endDate',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RentalAgreementScalarFieldEnum = (typeof RentalAgreementScalarFieldEnum)[keyof typeof RentalAgreementScalarFieldEnum]


  export const AgreementChargeScalarFieldEnum: {
    id: 'id',
    rentalAgreementId: 'rentalAgreementId',
    chargeType: 'chargeType',
    calculation: 'calculation',
    amount: 'amount',
    createdAt: 'createdAt'
  };

  export type AgreementChargeScalarFieldEnum = (typeof AgreementChargeScalarFieldEnum)[keyof typeof AgreementChargeScalarFieldEnum]


  export const MeterReadingScalarFieldEnum: {
    id: 'id',
    meterId: 'meterId',
    readingDate: 'readingDate',
    previousReading: 'previousReading',
    currentReading: 'currentReading',
    unitsConsumed: 'unitsConsumed',
    createdAt: 'createdAt'
  };

  export type MeterReadingScalarFieldEnum = (typeof MeterReadingScalarFieldEnum)[keyof typeof MeterReadingScalarFieldEnum]


  export const BillScalarFieldEnum: {
    id: 'id',
    rentalAgreementId: 'rentalAgreementId',
    billingMonth: 'billingMonth',
    totalAmount: 'totalAmount',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BillScalarFieldEnum = (typeof BillScalarFieldEnum)[keyof typeof BillScalarFieldEnum]


  export const BillItemScalarFieldEnum: {
    id: 'id',
    billId: 'billId',
    description: 'description',
    quantity: 'quantity',
    rate: 'rate',
    amount: 'amount'
  };

  export type BillItemScalarFieldEnum = (typeof BillItemScalarFieldEnum)[keyof typeof BillItemScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    billId: 'billId',
    amount: 'amount',
    paymentDate: 'paymentDate',
    method: 'method',
    referenceNo: 'referenceNo',
    notes: 'notes',
    createdAt: 'createdAt'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'UnitType'
   */
  export type EnumUnitTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UnitType'>
    


  /**
   * Reference to a field of type 'UnitType[]'
   */
  export type ListEnumUnitTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UnitType[]'>
    


  /**
   * Reference to a field of type 'MeterType'
   */
  export type EnumMeterTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MeterType'>
    


  /**
   * Reference to a field of type 'MeterType[]'
   */
  export type ListEnumMeterTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MeterType[]'>
    


  /**
   * Reference to a field of type 'MeterStatus'
   */
  export type EnumMeterStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MeterStatus'>
    


  /**
   * Reference to a field of type 'MeterStatus[]'
   */
  export type ListEnumMeterStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MeterStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'RentalStatus'
   */
  export type EnumRentalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RentalStatus'>
    


  /**
   * Reference to a field of type 'RentalStatus[]'
   */
  export type ListEnumRentalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RentalStatus[]'>
    


  /**
   * Reference to a field of type 'ChargeType'
   */
  export type EnumChargeTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ChargeType'>
    


  /**
   * Reference to a field of type 'ChargeType[]'
   */
  export type ListEnumChargeTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ChargeType[]'>
    


  /**
   * Reference to a field of type 'ChargeMethod'
   */
  export type EnumChargeMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ChargeMethod'>
    


  /**
   * Reference to a field of type 'ChargeMethod[]'
   */
  export type ListEnumChargeMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ChargeMethod[]'>
    


  /**
   * Reference to a field of type 'BillStatus'
   */
  export type EnumBillStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BillStatus'>
    


  /**
   * Reference to a field of type 'BillStatus[]'
   */
  export type ListEnumBillStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BillStatus[]'>
    


  /**
   * Reference to a field of type 'PaymentMethod'
   */
  export type EnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod'>
    


  /**
   * Reference to a field of type 'PaymentMethod[]'
   */
  export type ListEnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod[]'>
    
  /**
   * Deep Input Types
   */


  export type PropertyWhereInput = {
    AND?: PropertyWhereInput | PropertyWhereInput[]
    OR?: PropertyWhereInput[]
    NOT?: PropertyWhereInput | PropertyWhereInput[]
    id?: StringFilter<"Property"> | string
    name?: StringFilter<"Property"> | string
    address?: StringNullableFilter<"Property"> | string | null
    city?: StringNullableFilter<"Property"> | string | null
    state?: StringNullableFilter<"Property"> | string | null
    pinCode?: StringNullableFilter<"Property"> | string | null
    createdAt?: DateTimeFilter<"Property"> | Date | string
    updatedAt?: DateTimeFilter<"Property"> | Date | string
    units?: RentalUnitListRelationFilter
    meters?: MeterListRelationFilter
  }

  export type PropertyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    pinCode?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    units?: RentalUnitOrderByRelationAggregateInput
    meters?: MeterOrderByRelationAggregateInput
  }

  export type PropertyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PropertyWhereInput | PropertyWhereInput[]
    OR?: PropertyWhereInput[]
    NOT?: PropertyWhereInput | PropertyWhereInput[]
    name?: StringFilter<"Property"> | string
    address?: StringNullableFilter<"Property"> | string | null
    city?: StringNullableFilter<"Property"> | string | null
    state?: StringNullableFilter<"Property"> | string | null
    pinCode?: StringNullableFilter<"Property"> | string | null
    createdAt?: DateTimeFilter<"Property"> | Date | string
    updatedAt?: DateTimeFilter<"Property"> | Date | string
    units?: RentalUnitListRelationFilter
    meters?: MeterListRelationFilter
  }, "id">

  export type PropertyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    pinCode?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PropertyCountOrderByAggregateInput
    _max?: PropertyMaxOrderByAggregateInput
    _min?: PropertyMinOrderByAggregateInput
  }

  export type PropertyScalarWhereWithAggregatesInput = {
    AND?: PropertyScalarWhereWithAggregatesInput | PropertyScalarWhereWithAggregatesInput[]
    OR?: PropertyScalarWhereWithAggregatesInput[]
    NOT?: PropertyScalarWhereWithAggregatesInput | PropertyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Property"> | string
    name?: StringWithAggregatesFilter<"Property"> | string
    address?: StringNullableWithAggregatesFilter<"Property"> | string | null
    city?: StringNullableWithAggregatesFilter<"Property"> | string | null
    state?: StringNullableWithAggregatesFilter<"Property"> | string | null
    pinCode?: StringNullableWithAggregatesFilter<"Property"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Property"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Property"> | Date | string
  }

  export type RentalUnitWhereInput = {
    AND?: RentalUnitWhereInput | RentalUnitWhereInput[]
    OR?: RentalUnitWhereInput[]
    NOT?: RentalUnitWhereInput | RentalUnitWhereInput[]
    id?: StringFilter<"RentalUnit"> | string
    name?: StringFilter<"RentalUnit"> | string
    unitNumber?: StringFilter<"RentalUnit"> | string
    floor?: IntFilter<"RentalUnit"> | number
    type?: EnumUnitTypeFilter<"RentalUnit"> | $Enums.UnitType
    propertyId?: StringFilter<"RentalUnit"> | string
    createdAt?: DateTimeFilter<"RentalUnit"> | Date | string
    updatedAt?: DateTimeFilter<"RentalUnit"> | Date | string
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
    assignments?: MeterAssignmentListRelationFilter
    rentals?: RentalAgreementListRelationFilter
  }

  export type RentalUnitOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    unitNumber?: SortOrder
    floor?: SortOrder
    type?: SortOrder
    propertyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    property?: PropertyOrderByWithRelationInput
    assignments?: MeterAssignmentOrderByRelationAggregateInput
    rentals?: RentalAgreementOrderByRelationAggregateInput
  }

  export type RentalUnitWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    propertyId_unitNumber?: RentalUnitPropertyIdUnitNumberCompoundUniqueInput
    AND?: RentalUnitWhereInput | RentalUnitWhereInput[]
    OR?: RentalUnitWhereInput[]
    NOT?: RentalUnitWhereInput | RentalUnitWhereInput[]
    name?: StringFilter<"RentalUnit"> | string
    unitNumber?: StringFilter<"RentalUnit"> | string
    floor?: IntFilter<"RentalUnit"> | number
    type?: EnumUnitTypeFilter<"RentalUnit"> | $Enums.UnitType
    propertyId?: StringFilter<"RentalUnit"> | string
    createdAt?: DateTimeFilter<"RentalUnit"> | Date | string
    updatedAt?: DateTimeFilter<"RentalUnit"> | Date | string
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
    assignments?: MeterAssignmentListRelationFilter
    rentals?: RentalAgreementListRelationFilter
  }, "id" | "propertyId_unitNumber">

  export type RentalUnitOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    unitNumber?: SortOrder
    floor?: SortOrder
    type?: SortOrder
    propertyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RentalUnitCountOrderByAggregateInput
    _avg?: RentalUnitAvgOrderByAggregateInput
    _max?: RentalUnitMaxOrderByAggregateInput
    _min?: RentalUnitMinOrderByAggregateInput
    _sum?: RentalUnitSumOrderByAggregateInput
  }

  export type RentalUnitScalarWhereWithAggregatesInput = {
    AND?: RentalUnitScalarWhereWithAggregatesInput | RentalUnitScalarWhereWithAggregatesInput[]
    OR?: RentalUnitScalarWhereWithAggregatesInput[]
    NOT?: RentalUnitScalarWhereWithAggregatesInput | RentalUnitScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RentalUnit"> | string
    name?: StringWithAggregatesFilter<"RentalUnit"> | string
    unitNumber?: StringWithAggregatesFilter<"RentalUnit"> | string
    floor?: IntWithAggregatesFilter<"RentalUnit"> | number
    type?: EnumUnitTypeWithAggregatesFilter<"RentalUnit"> | $Enums.UnitType
    propertyId?: StringWithAggregatesFilter<"RentalUnit"> | string
    createdAt?: DateTimeWithAggregatesFilter<"RentalUnit"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RentalUnit"> | Date | string
  }

  export type MeterWhereInput = {
    AND?: MeterWhereInput | MeterWhereInput[]
    OR?: MeterWhereInput[]
    NOT?: MeterWhereInput | MeterWhereInput[]
    id?: StringFilter<"Meter"> | string
    meterNumber?: StringFilter<"Meter"> | string
    type?: EnumMeterTypeFilter<"Meter"> | $Enums.MeterType
    status?: EnumMeterStatusFilter<"Meter"> | $Enums.MeterStatus
    propertyId?: StringFilter<"Meter"> | string
    createdAt?: DateTimeFilter<"Meter"> | Date | string
    updatedAt?: DateTimeFilter<"Meter"> | Date | string
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
    assignments?: MeterAssignmentListRelationFilter
    readings?: MeterReadingListRelationFilter
  }

  export type MeterOrderByWithRelationInput = {
    id?: SortOrder
    meterNumber?: SortOrder
    type?: SortOrder
    status?: SortOrder
    propertyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    property?: PropertyOrderByWithRelationInput
    assignments?: MeterAssignmentOrderByRelationAggregateInput
    readings?: MeterReadingOrderByRelationAggregateInput
  }

  export type MeterWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    propertyId_meterNumber?: MeterPropertyIdMeterNumberCompoundUniqueInput
    AND?: MeterWhereInput | MeterWhereInput[]
    OR?: MeterWhereInput[]
    NOT?: MeterWhereInput | MeterWhereInput[]
    meterNumber?: StringFilter<"Meter"> | string
    type?: EnumMeterTypeFilter<"Meter"> | $Enums.MeterType
    status?: EnumMeterStatusFilter<"Meter"> | $Enums.MeterStatus
    propertyId?: StringFilter<"Meter"> | string
    createdAt?: DateTimeFilter<"Meter"> | Date | string
    updatedAt?: DateTimeFilter<"Meter"> | Date | string
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
    assignments?: MeterAssignmentListRelationFilter
    readings?: MeterReadingListRelationFilter
  }, "id" | "propertyId_meterNumber">

  export type MeterOrderByWithAggregationInput = {
    id?: SortOrder
    meterNumber?: SortOrder
    type?: SortOrder
    status?: SortOrder
    propertyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MeterCountOrderByAggregateInput
    _max?: MeterMaxOrderByAggregateInput
    _min?: MeterMinOrderByAggregateInput
  }

  export type MeterScalarWhereWithAggregatesInput = {
    AND?: MeterScalarWhereWithAggregatesInput | MeterScalarWhereWithAggregatesInput[]
    OR?: MeterScalarWhereWithAggregatesInput[]
    NOT?: MeterScalarWhereWithAggregatesInput | MeterScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Meter"> | string
    meterNumber?: StringWithAggregatesFilter<"Meter"> | string
    type?: EnumMeterTypeWithAggregatesFilter<"Meter"> | $Enums.MeterType
    status?: EnumMeterStatusWithAggregatesFilter<"Meter"> | $Enums.MeterStatus
    propertyId?: StringWithAggregatesFilter<"Meter"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Meter"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Meter"> | Date | string
  }

  export type MeterAssignmentWhereInput = {
    AND?: MeterAssignmentWhereInput | MeterAssignmentWhereInput[]
    OR?: MeterAssignmentWhereInput[]
    NOT?: MeterAssignmentWhereInput | MeterAssignmentWhereInput[]
    id?: StringFilter<"MeterAssignment"> | string
    meterId?: StringFilter<"MeterAssignment"> | string
    rentalUnitId?: StringFilter<"MeterAssignment"> | string
    createdAt?: DateTimeFilter<"MeterAssignment"> | Date | string
    meter?: XOR<MeterScalarRelationFilter, MeterWhereInput>
    rentalUnit?: XOR<RentalUnitScalarRelationFilter, RentalUnitWhereInput>
  }

  export type MeterAssignmentOrderByWithRelationInput = {
    id?: SortOrder
    meterId?: SortOrder
    rentalUnitId?: SortOrder
    createdAt?: SortOrder
    meter?: MeterOrderByWithRelationInput
    rentalUnit?: RentalUnitOrderByWithRelationInput
  }

  export type MeterAssignmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    meterId_rentalUnitId?: MeterAssignmentMeterIdRentalUnitIdCompoundUniqueInput
    AND?: MeterAssignmentWhereInput | MeterAssignmentWhereInput[]
    OR?: MeterAssignmentWhereInput[]
    NOT?: MeterAssignmentWhereInput | MeterAssignmentWhereInput[]
    meterId?: StringFilter<"MeterAssignment"> | string
    rentalUnitId?: StringFilter<"MeterAssignment"> | string
    createdAt?: DateTimeFilter<"MeterAssignment"> | Date | string
    meter?: XOR<MeterScalarRelationFilter, MeterWhereInput>
    rentalUnit?: XOR<RentalUnitScalarRelationFilter, RentalUnitWhereInput>
  }, "id" | "meterId_rentalUnitId">

  export type MeterAssignmentOrderByWithAggregationInput = {
    id?: SortOrder
    meterId?: SortOrder
    rentalUnitId?: SortOrder
    createdAt?: SortOrder
    _count?: MeterAssignmentCountOrderByAggregateInput
    _max?: MeterAssignmentMaxOrderByAggregateInput
    _min?: MeterAssignmentMinOrderByAggregateInput
  }

  export type MeterAssignmentScalarWhereWithAggregatesInput = {
    AND?: MeterAssignmentScalarWhereWithAggregatesInput | MeterAssignmentScalarWhereWithAggregatesInput[]
    OR?: MeterAssignmentScalarWhereWithAggregatesInput[]
    NOT?: MeterAssignmentScalarWhereWithAggregatesInput | MeterAssignmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MeterAssignment"> | string
    meterId?: StringWithAggregatesFilter<"MeterAssignment"> | string
    rentalUnitId?: StringWithAggregatesFilter<"MeterAssignment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"MeterAssignment"> | Date | string
  }

  export type TenantWhereInput = {
    AND?: TenantWhereInput | TenantWhereInput[]
    OR?: TenantWhereInput[]
    NOT?: TenantWhereInput | TenantWhereInput[]
    id?: StringFilter<"Tenant"> | string
    fullName?: StringFilter<"Tenant"> | string
    phone?: StringFilter<"Tenant"> | string
    email?: StringNullableFilter<"Tenant"> | string | null
    governmentId?: StringNullableFilter<"Tenant"> | string | null
    address?: StringNullableFilter<"Tenant"> | string | null
    emergencyContact?: StringNullableFilter<"Tenant"> | string | null
    createdAt?: DateTimeFilter<"Tenant"> | Date | string
    rentals?: RentalAgreementListRelationFilter
  }

  export type TenantOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrder
    phone?: SortOrder
    email?: SortOrderInput | SortOrder
    governmentId?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    emergencyContact?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    rentals?: RentalAgreementOrderByRelationAggregateInput
  }

  export type TenantWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TenantWhereInput | TenantWhereInput[]
    OR?: TenantWhereInput[]
    NOT?: TenantWhereInput | TenantWhereInput[]
    fullName?: StringFilter<"Tenant"> | string
    phone?: StringFilter<"Tenant"> | string
    email?: StringNullableFilter<"Tenant"> | string | null
    governmentId?: StringNullableFilter<"Tenant"> | string | null
    address?: StringNullableFilter<"Tenant"> | string | null
    emergencyContact?: StringNullableFilter<"Tenant"> | string | null
    createdAt?: DateTimeFilter<"Tenant"> | Date | string
    rentals?: RentalAgreementListRelationFilter
  }, "id">

  export type TenantOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrder
    phone?: SortOrder
    email?: SortOrderInput | SortOrder
    governmentId?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    emergencyContact?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: TenantCountOrderByAggregateInput
    _max?: TenantMaxOrderByAggregateInput
    _min?: TenantMinOrderByAggregateInput
  }

  export type TenantScalarWhereWithAggregatesInput = {
    AND?: TenantScalarWhereWithAggregatesInput | TenantScalarWhereWithAggregatesInput[]
    OR?: TenantScalarWhereWithAggregatesInput[]
    NOT?: TenantScalarWhereWithAggregatesInput | TenantScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tenant"> | string
    fullName?: StringWithAggregatesFilter<"Tenant"> | string
    phone?: StringWithAggregatesFilter<"Tenant"> | string
    email?: StringNullableWithAggregatesFilter<"Tenant"> | string | null
    governmentId?: StringNullableWithAggregatesFilter<"Tenant"> | string | null
    address?: StringNullableWithAggregatesFilter<"Tenant"> | string | null
    emergencyContact?: StringNullableWithAggregatesFilter<"Tenant"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Tenant"> | Date | string
  }

  export type RentalAgreementWhereInput = {
    AND?: RentalAgreementWhereInput | RentalAgreementWhereInput[]
    OR?: RentalAgreementWhereInput[]
    NOT?: RentalAgreementWhereInput | RentalAgreementWhereInput[]
    id?: StringFilter<"RentalAgreement"> | string
    tenantId?: StringFilter<"RentalAgreement"> | string
    rentalUnitId?: StringFilter<"RentalAgreement"> | string
    securityDeposit?: FloatFilter<"RentalAgreement"> | number
    startDate?: DateTimeFilter<"RentalAgreement"> | Date | string
    endDate?: DateTimeNullableFilter<"RentalAgreement"> | Date | string | null
    status?: EnumRentalStatusFilter<"RentalAgreement"> | $Enums.RentalStatus
    createdAt?: DateTimeFilter<"RentalAgreement"> | Date | string
    updatedAt?: DateTimeFilter<"RentalAgreement"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    rentalUnit?: XOR<RentalUnitScalarRelationFilter, RentalUnitWhereInput>
    charges?: AgreementChargeListRelationFilter
    bills?: BillListRelationFilter
  }

  export type RentalAgreementOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    rentalUnitId?: SortOrder
    securityDeposit?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tenant?: TenantOrderByWithRelationInput
    rentalUnit?: RentalUnitOrderByWithRelationInput
    charges?: AgreementChargeOrderByRelationAggregateInput
    bills?: BillOrderByRelationAggregateInput
  }

  export type RentalAgreementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RentalAgreementWhereInput | RentalAgreementWhereInput[]
    OR?: RentalAgreementWhereInput[]
    NOT?: RentalAgreementWhereInput | RentalAgreementWhereInput[]
    tenantId?: StringFilter<"RentalAgreement"> | string
    rentalUnitId?: StringFilter<"RentalAgreement"> | string
    securityDeposit?: FloatFilter<"RentalAgreement"> | number
    startDate?: DateTimeFilter<"RentalAgreement"> | Date | string
    endDate?: DateTimeNullableFilter<"RentalAgreement"> | Date | string | null
    status?: EnumRentalStatusFilter<"RentalAgreement"> | $Enums.RentalStatus
    createdAt?: DateTimeFilter<"RentalAgreement"> | Date | string
    updatedAt?: DateTimeFilter<"RentalAgreement"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    rentalUnit?: XOR<RentalUnitScalarRelationFilter, RentalUnitWhereInput>
    charges?: AgreementChargeListRelationFilter
    bills?: BillListRelationFilter
  }, "id">

  export type RentalAgreementOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    rentalUnitId?: SortOrder
    securityDeposit?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RentalAgreementCountOrderByAggregateInput
    _avg?: RentalAgreementAvgOrderByAggregateInput
    _max?: RentalAgreementMaxOrderByAggregateInput
    _min?: RentalAgreementMinOrderByAggregateInput
    _sum?: RentalAgreementSumOrderByAggregateInput
  }

  export type RentalAgreementScalarWhereWithAggregatesInput = {
    AND?: RentalAgreementScalarWhereWithAggregatesInput | RentalAgreementScalarWhereWithAggregatesInput[]
    OR?: RentalAgreementScalarWhereWithAggregatesInput[]
    NOT?: RentalAgreementScalarWhereWithAggregatesInput | RentalAgreementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RentalAgreement"> | string
    tenantId?: StringWithAggregatesFilter<"RentalAgreement"> | string
    rentalUnitId?: StringWithAggregatesFilter<"RentalAgreement"> | string
    securityDeposit?: FloatWithAggregatesFilter<"RentalAgreement"> | number
    startDate?: DateTimeWithAggregatesFilter<"RentalAgreement"> | Date | string
    endDate?: DateTimeNullableWithAggregatesFilter<"RentalAgreement"> | Date | string | null
    status?: EnumRentalStatusWithAggregatesFilter<"RentalAgreement"> | $Enums.RentalStatus
    createdAt?: DateTimeWithAggregatesFilter<"RentalAgreement"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RentalAgreement"> | Date | string
  }

  export type AgreementChargeWhereInput = {
    AND?: AgreementChargeWhereInput | AgreementChargeWhereInput[]
    OR?: AgreementChargeWhereInput[]
    NOT?: AgreementChargeWhereInput | AgreementChargeWhereInput[]
    id?: StringFilter<"AgreementCharge"> | string
    rentalAgreementId?: StringFilter<"AgreementCharge"> | string
    chargeType?: EnumChargeTypeFilter<"AgreementCharge"> | $Enums.ChargeType
    calculation?: EnumChargeMethodFilter<"AgreementCharge"> | $Enums.ChargeMethod
    amount?: FloatFilter<"AgreementCharge"> | number
    createdAt?: DateTimeFilter<"AgreementCharge"> | Date | string
    rentalAgreement?: XOR<RentalAgreementScalarRelationFilter, RentalAgreementWhereInput>
  }

  export type AgreementChargeOrderByWithRelationInput = {
    id?: SortOrder
    rentalAgreementId?: SortOrder
    chargeType?: SortOrder
    calculation?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    rentalAgreement?: RentalAgreementOrderByWithRelationInput
  }

  export type AgreementChargeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AgreementChargeWhereInput | AgreementChargeWhereInput[]
    OR?: AgreementChargeWhereInput[]
    NOT?: AgreementChargeWhereInput | AgreementChargeWhereInput[]
    rentalAgreementId?: StringFilter<"AgreementCharge"> | string
    chargeType?: EnumChargeTypeFilter<"AgreementCharge"> | $Enums.ChargeType
    calculation?: EnumChargeMethodFilter<"AgreementCharge"> | $Enums.ChargeMethod
    amount?: FloatFilter<"AgreementCharge"> | number
    createdAt?: DateTimeFilter<"AgreementCharge"> | Date | string
    rentalAgreement?: XOR<RentalAgreementScalarRelationFilter, RentalAgreementWhereInput>
  }, "id">

  export type AgreementChargeOrderByWithAggregationInput = {
    id?: SortOrder
    rentalAgreementId?: SortOrder
    chargeType?: SortOrder
    calculation?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    _count?: AgreementChargeCountOrderByAggregateInput
    _avg?: AgreementChargeAvgOrderByAggregateInput
    _max?: AgreementChargeMaxOrderByAggregateInput
    _min?: AgreementChargeMinOrderByAggregateInput
    _sum?: AgreementChargeSumOrderByAggregateInput
  }

  export type AgreementChargeScalarWhereWithAggregatesInput = {
    AND?: AgreementChargeScalarWhereWithAggregatesInput | AgreementChargeScalarWhereWithAggregatesInput[]
    OR?: AgreementChargeScalarWhereWithAggregatesInput[]
    NOT?: AgreementChargeScalarWhereWithAggregatesInput | AgreementChargeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AgreementCharge"> | string
    rentalAgreementId?: StringWithAggregatesFilter<"AgreementCharge"> | string
    chargeType?: EnumChargeTypeWithAggregatesFilter<"AgreementCharge"> | $Enums.ChargeType
    calculation?: EnumChargeMethodWithAggregatesFilter<"AgreementCharge"> | $Enums.ChargeMethod
    amount?: FloatWithAggregatesFilter<"AgreementCharge"> | number
    createdAt?: DateTimeWithAggregatesFilter<"AgreementCharge"> | Date | string
  }

  export type MeterReadingWhereInput = {
    AND?: MeterReadingWhereInput | MeterReadingWhereInput[]
    OR?: MeterReadingWhereInput[]
    NOT?: MeterReadingWhereInput | MeterReadingWhereInput[]
    id?: StringFilter<"MeterReading"> | string
    meterId?: StringFilter<"MeterReading"> | string
    readingDate?: DateTimeFilter<"MeterReading"> | Date | string
    previousReading?: FloatFilter<"MeterReading"> | number
    currentReading?: FloatFilter<"MeterReading"> | number
    unitsConsumed?: FloatFilter<"MeterReading"> | number
    createdAt?: DateTimeFilter<"MeterReading"> | Date | string
    meter?: XOR<MeterScalarRelationFilter, MeterWhereInput>
  }

  export type MeterReadingOrderByWithRelationInput = {
    id?: SortOrder
    meterId?: SortOrder
    readingDate?: SortOrder
    previousReading?: SortOrder
    currentReading?: SortOrder
    unitsConsumed?: SortOrder
    createdAt?: SortOrder
    meter?: MeterOrderByWithRelationInput
  }

  export type MeterReadingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    meterId_readingDate?: MeterReadingMeterIdReadingDateCompoundUniqueInput
    AND?: MeterReadingWhereInput | MeterReadingWhereInput[]
    OR?: MeterReadingWhereInput[]
    NOT?: MeterReadingWhereInput | MeterReadingWhereInput[]
    meterId?: StringFilter<"MeterReading"> | string
    readingDate?: DateTimeFilter<"MeterReading"> | Date | string
    previousReading?: FloatFilter<"MeterReading"> | number
    currentReading?: FloatFilter<"MeterReading"> | number
    unitsConsumed?: FloatFilter<"MeterReading"> | number
    createdAt?: DateTimeFilter<"MeterReading"> | Date | string
    meter?: XOR<MeterScalarRelationFilter, MeterWhereInput>
  }, "id" | "meterId_readingDate">

  export type MeterReadingOrderByWithAggregationInput = {
    id?: SortOrder
    meterId?: SortOrder
    readingDate?: SortOrder
    previousReading?: SortOrder
    currentReading?: SortOrder
    unitsConsumed?: SortOrder
    createdAt?: SortOrder
    _count?: MeterReadingCountOrderByAggregateInput
    _avg?: MeterReadingAvgOrderByAggregateInput
    _max?: MeterReadingMaxOrderByAggregateInput
    _min?: MeterReadingMinOrderByAggregateInput
    _sum?: MeterReadingSumOrderByAggregateInput
  }

  export type MeterReadingScalarWhereWithAggregatesInput = {
    AND?: MeterReadingScalarWhereWithAggregatesInput | MeterReadingScalarWhereWithAggregatesInput[]
    OR?: MeterReadingScalarWhereWithAggregatesInput[]
    NOT?: MeterReadingScalarWhereWithAggregatesInput | MeterReadingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MeterReading"> | string
    meterId?: StringWithAggregatesFilter<"MeterReading"> | string
    readingDate?: DateTimeWithAggregatesFilter<"MeterReading"> | Date | string
    previousReading?: FloatWithAggregatesFilter<"MeterReading"> | number
    currentReading?: FloatWithAggregatesFilter<"MeterReading"> | number
    unitsConsumed?: FloatWithAggregatesFilter<"MeterReading"> | number
    createdAt?: DateTimeWithAggregatesFilter<"MeterReading"> | Date | string
  }

  export type BillWhereInput = {
    AND?: BillWhereInput | BillWhereInput[]
    OR?: BillWhereInput[]
    NOT?: BillWhereInput | BillWhereInput[]
    id?: StringFilter<"Bill"> | string
    rentalAgreementId?: StringFilter<"Bill"> | string
    billingMonth?: DateTimeFilter<"Bill"> | Date | string
    totalAmount?: FloatFilter<"Bill"> | number
    status?: EnumBillStatusFilter<"Bill"> | $Enums.BillStatus
    createdAt?: DateTimeFilter<"Bill"> | Date | string
    updatedAt?: DateTimeFilter<"Bill"> | Date | string
    rentalAgreement?: XOR<RentalAgreementScalarRelationFilter, RentalAgreementWhereInput>
    items?: BillItemListRelationFilter
    payments?: PaymentListRelationFilter
  }

  export type BillOrderByWithRelationInput = {
    id?: SortOrder
    rentalAgreementId?: SortOrder
    billingMonth?: SortOrder
    totalAmount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    rentalAgreement?: RentalAgreementOrderByWithRelationInput
    items?: BillItemOrderByRelationAggregateInput
    payments?: PaymentOrderByRelationAggregateInput
  }

  export type BillWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    rentalAgreementId_billingMonth?: BillRentalAgreementIdBillingMonthCompoundUniqueInput
    AND?: BillWhereInput | BillWhereInput[]
    OR?: BillWhereInput[]
    NOT?: BillWhereInput | BillWhereInput[]
    rentalAgreementId?: StringFilter<"Bill"> | string
    billingMonth?: DateTimeFilter<"Bill"> | Date | string
    totalAmount?: FloatFilter<"Bill"> | number
    status?: EnumBillStatusFilter<"Bill"> | $Enums.BillStatus
    createdAt?: DateTimeFilter<"Bill"> | Date | string
    updatedAt?: DateTimeFilter<"Bill"> | Date | string
    rentalAgreement?: XOR<RentalAgreementScalarRelationFilter, RentalAgreementWhereInput>
    items?: BillItemListRelationFilter
    payments?: PaymentListRelationFilter
  }, "id" | "rentalAgreementId_billingMonth">

  export type BillOrderByWithAggregationInput = {
    id?: SortOrder
    rentalAgreementId?: SortOrder
    billingMonth?: SortOrder
    totalAmount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BillCountOrderByAggregateInput
    _avg?: BillAvgOrderByAggregateInput
    _max?: BillMaxOrderByAggregateInput
    _min?: BillMinOrderByAggregateInput
    _sum?: BillSumOrderByAggregateInput
  }

  export type BillScalarWhereWithAggregatesInput = {
    AND?: BillScalarWhereWithAggregatesInput | BillScalarWhereWithAggregatesInput[]
    OR?: BillScalarWhereWithAggregatesInput[]
    NOT?: BillScalarWhereWithAggregatesInput | BillScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Bill"> | string
    rentalAgreementId?: StringWithAggregatesFilter<"Bill"> | string
    billingMonth?: DateTimeWithAggregatesFilter<"Bill"> | Date | string
    totalAmount?: FloatWithAggregatesFilter<"Bill"> | number
    status?: EnumBillStatusWithAggregatesFilter<"Bill"> | $Enums.BillStatus
    createdAt?: DateTimeWithAggregatesFilter<"Bill"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Bill"> | Date | string
  }

  export type BillItemWhereInput = {
    AND?: BillItemWhereInput | BillItemWhereInput[]
    OR?: BillItemWhereInput[]
    NOT?: BillItemWhereInput | BillItemWhereInput[]
    id?: StringFilter<"BillItem"> | string
    billId?: StringFilter<"BillItem"> | string
    description?: StringFilter<"BillItem"> | string
    quantity?: FloatFilter<"BillItem"> | number
    rate?: FloatFilter<"BillItem"> | number
    amount?: FloatFilter<"BillItem"> | number
    bill?: XOR<BillScalarRelationFilter, BillWhereInput>
  }

  export type BillItemOrderByWithRelationInput = {
    id?: SortOrder
    billId?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    rate?: SortOrder
    amount?: SortOrder
    bill?: BillOrderByWithRelationInput
  }

  export type BillItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BillItemWhereInput | BillItemWhereInput[]
    OR?: BillItemWhereInput[]
    NOT?: BillItemWhereInput | BillItemWhereInput[]
    billId?: StringFilter<"BillItem"> | string
    description?: StringFilter<"BillItem"> | string
    quantity?: FloatFilter<"BillItem"> | number
    rate?: FloatFilter<"BillItem"> | number
    amount?: FloatFilter<"BillItem"> | number
    bill?: XOR<BillScalarRelationFilter, BillWhereInput>
  }, "id">

  export type BillItemOrderByWithAggregationInput = {
    id?: SortOrder
    billId?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    rate?: SortOrder
    amount?: SortOrder
    _count?: BillItemCountOrderByAggregateInput
    _avg?: BillItemAvgOrderByAggregateInput
    _max?: BillItemMaxOrderByAggregateInput
    _min?: BillItemMinOrderByAggregateInput
    _sum?: BillItemSumOrderByAggregateInput
  }

  export type BillItemScalarWhereWithAggregatesInput = {
    AND?: BillItemScalarWhereWithAggregatesInput | BillItemScalarWhereWithAggregatesInput[]
    OR?: BillItemScalarWhereWithAggregatesInput[]
    NOT?: BillItemScalarWhereWithAggregatesInput | BillItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BillItem"> | string
    billId?: StringWithAggregatesFilter<"BillItem"> | string
    description?: StringWithAggregatesFilter<"BillItem"> | string
    quantity?: FloatWithAggregatesFilter<"BillItem"> | number
    rate?: FloatWithAggregatesFilter<"BillItem"> | number
    amount?: FloatWithAggregatesFilter<"BillItem"> | number
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: StringFilter<"Payment"> | string
    billId?: StringFilter<"Payment"> | string
    amount?: FloatFilter<"Payment"> | number
    paymentDate?: DateTimeFilter<"Payment"> | Date | string
    method?: EnumPaymentMethodFilter<"Payment"> | $Enums.PaymentMethod
    referenceNo?: StringNullableFilter<"Payment"> | string | null
    notes?: StringNullableFilter<"Payment"> | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    bill?: XOR<BillScalarRelationFilter, BillWhereInput>
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    billId?: SortOrder
    amount?: SortOrder
    paymentDate?: SortOrder
    method?: SortOrder
    referenceNo?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    bill?: BillOrderByWithRelationInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    billId?: StringFilter<"Payment"> | string
    amount?: FloatFilter<"Payment"> | number
    paymentDate?: DateTimeFilter<"Payment"> | Date | string
    method?: EnumPaymentMethodFilter<"Payment"> | $Enums.PaymentMethod
    referenceNo?: StringNullableFilter<"Payment"> | string | null
    notes?: StringNullableFilter<"Payment"> | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    bill?: XOR<BillScalarRelationFilter, BillWhereInput>
  }, "id">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    billId?: SortOrder
    amount?: SortOrder
    paymentDate?: SortOrder
    method?: SortOrder
    referenceNo?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Payment"> | string
    billId?: StringWithAggregatesFilter<"Payment"> | string
    amount?: FloatWithAggregatesFilter<"Payment"> | number
    paymentDate?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    method?: EnumPaymentMethodWithAggregatesFilter<"Payment"> | $Enums.PaymentMethod
    referenceNo?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    notes?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
  }

  export type PropertyCreateInput = {
    id?: string
    name: string
    address?: string | null
    city?: string | null
    state?: string | null
    pinCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    units?: RentalUnitCreateNestedManyWithoutPropertyInput
    meters?: MeterCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateInput = {
    id?: string
    name: string
    address?: string | null
    city?: string | null
    state?: string | null
    pinCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    units?: RentalUnitUncheckedCreateNestedManyWithoutPropertyInput
    meters?: MeterUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    pinCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    units?: RentalUnitUpdateManyWithoutPropertyNestedInput
    meters?: MeterUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    pinCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    units?: RentalUnitUncheckedUpdateManyWithoutPropertyNestedInput
    meters?: MeterUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyCreateManyInput = {
    id?: string
    name: string
    address?: string | null
    city?: string | null
    state?: string | null
    pinCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropertyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    pinCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    pinCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RentalUnitCreateInput = {
    id?: string
    name: string
    unitNumber: string
    floor: number
    type: $Enums.UnitType
    createdAt?: Date | string
    updatedAt?: Date | string
    property: PropertyCreateNestedOneWithoutUnitsInput
    assignments?: MeterAssignmentCreateNestedManyWithoutRentalUnitInput
    rentals?: RentalAgreementCreateNestedManyWithoutRentalUnitInput
  }

  export type RentalUnitUncheckedCreateInput = {
    id?: string
    name: string
    unitNumber: string
    floor: number
    type: $Enums.UnitType
    propertyId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    assignments?: MeterAssignmentUncheckedCreateNestedManyWithoutRentalUnitInput
    rentals?: RentalAgreementUncheckedCreateNestedManyWithoutRentalUnitInput
  }

  export type RentalUnitUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unitNumber?: StringFieldUpdateOperationsInput | string
    floor?: IntFieldUpdateOperationsInput | number
    type?: EnumUnitTypeFieldUpdateOperationsInput | $Enums.UnitType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUpdateOneRequiredWithoutUnitsNestedInput
    assignments?: MeterAssignmentUpdateManyWithoutRentalUnitNestedInput
    rentals?: RentalAgreementUpdateManyWithoutRentalUnitNestedInput
  }

  export type RentalUnitUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unitNumber?: StringFieldUpdateOperationsInput | string
    floor?: IntFieldUpdateOperationsInput | number
    type?: EnumUnitTypeFieldUpdateOperationsInput | $Enums.UnitType
    propertyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignments?: MeterAssignmentUncheckedUpdateManyWithoutRentalUnitNestedInput
    rentals?: RentalAgreementUncheckedUpdateManyWithoutRentalUnitNestedInput
  }

  export type RentalUnitCreateManyInput = {
    id?: string
    name: string
    unitNumber: string
    floor: number
    type: $Enums.UnitType
    propertyId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RentalUnitUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unitNumber?: StringFieldUpdateOperationsInput | string
    floor?: IntFieldUpdateOperationsInput | number
    type?: EnumUnitTypeFieldUpdateOperationsInput | $Enums.UnitType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RentalUnitUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unitNumber?: StringFieldUpdateOperationsInput | string
    floor?: IntFieldUpdateOperationsInput | number
    type?: EnumUnitTypeFieldUpdateOperationsInput | $Enums.UnitType
    propertyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeterCreateInput = {
    id?: string
    meterNumber: string
    type: $Enums.MeterType
    status?: $Enums.MeterStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    property: PropertyCreateNestedOneWithoutMetersInput
    assignments?: MeterAssignmentCreateNestedManyWithoutMeterInput
    readings?: MeterReadingCreateNestedManyWithoutMeterInput
  }

  export type MeterUncheckedCreateInput = {
    id?: string
    meterNumber: string
    type: $Enums.MeterType
    status?: $Enums.MeterStatus
    propertyId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    assignments?: MeterAssignmentUncheckedCreateNestedManyWithoutMeterInput
    readings?: MeterReadingUncheckedCreateNestedManyWithoutMeterInput
  }

  export type MeterUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    meterNumber?: StringFieldUpdateOperationsInput | string
    type?: EnumMeterTypeFieldUpdateOperationsInput | $Enums.MeterType
    status?: EnumMeterStatusFieldUpdateOperationsInput | $Enums.MeterStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUpdateOneRequiredWithoutMetersNestedInput
    assignments?: MeterAssignmentUpdateManyWithoutMeterNestedInput
    readings?: MeterReadingUpdateManyWithoutMeterNestedInput
  }

  export type MeterUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    meterNumber?: StringFieldUpdateOperationsInput | string
    type?: EnumMeterTypeFieldUpdateOperationsInput | $Enums.MeterType
    status?: EnumMeterStatusFieldUpdateOperationsInput | $Enums.MeterStatus
    propertyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignments?: MeterAssignmentUncheckedUpdateManyWithoutMeterNestedInput
    readings?: MeterReadingUncheckedUpdateManyWithoutMeterNestedInput
  }

  export type MeterCreateManyInput = {
    id?: string
    meterNumber: string
    type: $Enums.MeterType
    status?: $Enums.MeterStatus
    propertyId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MeterUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    meterNumber?: StringFieldUpdateOperationsInput | string
    type?: EnumMeterTypeFieldUpdateOperationsInput | $Enums.MeterType
    status?: EnumMeterStatusFieldUpdateOperationsInput | $Enums.MeterStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeterUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    meterNumber?: StringFieldUpdateOperationsInput | string
    type?: EnumMeterTypeFieldUpdateOperationsInput | $Enums.MeterType
    status?: EnumMeterStatusFieldUpdateOperationsInput | $Enums.MeterStatus
    propertyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeterAssignmentCreateInput = {
    id?: string
    createdAt?: Date | string
    meter: MeterCreateNestedOneWithoutAssignmentsInput
    rentalUnit: RentalUnitCreateNestedOneWithoutAssignmentsInput
  }

  export type MeterAssignmentUncheckedCreateInput = {
    id?: string
    meterId: string
    rentalUnitId: string
    createdAt?: Date | string
  }

  export type MeterAssignmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meter?: MeterUpdateOneRequiredWithoutAssignmentsNestedInput
    rentalUnit?: RentalUnitUpdateOneRequiredWithoutAssignmentsNestedInput
  }

  export type MeterAssignmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    meterId?: StringFieldUpdateOperationsInput | string
    rentalUnitId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeterAssignmentCreateManyInput = {
    id?: string
    meterId: string
    rentalUnitId: string
    createdAt?: Date | string
  }

  export type MeterAssignmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeterAssignmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    meterId?: StringFieldUpdateOperationsInput | string
    rentalUnitId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantCreateInput = {
    id?: string
    fullName: string
    phone: string
    email?: string | null
    governmentId?: string | null
    address?: string | null
    emergencyContact?: string | null
    createdAt?: Date | string
    rentals?: RentalAgreementCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateInput = {
    id?: string
    fullName: string
    phone: string
    email?: string | null
    governmentId?: string | null
    address?: string | null
    emergencyContact?: string | null
    createdAt?: Date | string
    rentals?: RentalAgreementUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    governmentId?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rentals?: RentalAgreementUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    governmentId?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rentals?: RentalAgreementUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type TenantCreateManyInput = {
    id?: string
    fullName: string
    phone: string
    email?: string | null
    governmentId?: string | null
    address?: string | null
    emergencyContact?: string | null
    createdAt?: Date | string
  }

  export type TenantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    governmentId?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    governmentId?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RentalAgreementCreateInput = {
    id?: string
    securityDeposit: number
    startDate: Date | string
    endDate?: Date | string | null
    status?: $Enums.RentalStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutRentalsInput
    rentalUnit: RentalUnitCreateNestedOneWithoutRentalsInput
    charges?: AgreementChargeCreateNestedManyWithoutRentalAgreementInput
    bills?: BillCreateNestedManyWithoutRentalAgreementInput
  }

  export type RentalAgreementUncheckedCreateInput = {
    id?: string
    tenantId: string
    rentalUnitId: string
    securityDeposit: number
    startDate: Date | string
    endDate?: Date | string | null
    status?: $Enums.RentalStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    charges?: AgreementChargeUncheckedCreateNestedManyWithoutRentalAgreementInput
    bills?: BillUncheckedCreateNestedManyWithoutRentalAgreementInput
  }

  export type RentalAgreementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    securityDeposit?: FloatFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumRentalStatusFieldUpdateOperationsInput | $Enums.RentalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutRentalsNestedInput
    rentalUnit?: RentalUnitUpdateOneRequiredWithoutRentalsNestedInput
    charges?: AgreementChargeUpdateManyWithoutRentalAgreementNestedInput
    bills?: BillUpdateManyWithoutRentalAgreementNestedInput
  }

  export type RentalAgreementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    rentalUnitId?: StringFieldUpdateOperationsInput | string
    securityDeposit?: FloatFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumRentalStatusFieldUpdateOperationsInput | $Enums.RentalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    charges?: AgreementChargeUncheckedUpdateManyWithoutRentalAgreementNestedInput
    bills?: BillUncheckedUpdateManyWithoutRentalAgreementNestedInput
  }

  export type RentalAgreementCreateManyInput = {
    id?: string
    tenantId: string
    rentalUnitId: string
    securityDeposit: number
    startDate: Date | string
    endDate?: Date | string | null
    status?: $Enums.RentalStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RentalAgreementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    securityDeposit?: FloatFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumRentalStatusFieldUpdateOperationsInput | $Enums.RentalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RentalAgreementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    rentalUnitId?: StringFieldUpdateOperationsInput | string
    securityDeposit?: FloatFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumRentalStatusFieldUpdateOperationsInput | $Enums.RentalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgreementChargeCreateInput = {
    id?: string
    chargeType: $Enums.ChargeType
    calculation: $Enums.ChargeMethod
    amount: number
    createdAt?: Date | string
    rentalAgreement: RentalAgreementCreateNestedOneWithoutChargesInput
  }

  export type AgreementChargeUncheckedCreateInput = {
    id?: string
    rentalAgreementId: string
    chargeType: $Enums.ChargeType
    calculation: $Enums.ChargeMethod
    amount: number
    createdAt?: Date | string
  }

  export type AgreementChargeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    chargeType?: EnumChargeTypeFieldUpdateOperationsInput | $Enums.ChargeType
    calculation?: EnumChargeMethodFieldUpdateOperationsInput | $Enums.ChargeMethod
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rentalAgreement?: RentalAgreementUpdateOneRequiredWithoutChargesNestedInput
  }

  export type AgreementChargeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rentalAgreementId?: StringFieldUpdateOperationsInput | string
    chargeType?: EnumChargeTypeFieldUpdateOperationsInput | $Enums.ChargeType
    calculation?: EnumChargeMethodFieldUpdateOperationsInput | $Enums.ChargeMethod
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgreementChargeCreateManyInput = {
    id?: string
    rentalAgreementId: string
    chargeType: $Enums.ChargeType
    calculation: $Enums.ChargeMethod
    amount: number
    createdAt?: Date | string
  }

  export type AgreementChargeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    chargeType?: EnumChargeTypeFieldUpdateOperationsInput | $Enums.ChargeType
    calculation?: EnumChargeMethodFieldUpdateOperationsInput | $Enums.ChargeMethod
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgreementChargeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    rentalAgreementId?: StringFieldUpdateOperationsInput | string
    chargeType?: EnumChargeTypeFieldUpdateOperationsInput | $Enums.ChargeType
    calculation?: EnumChargeMethodFieldUpdateOperationsInput | $Enums.ChargeMethod
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeterReadingCreateInput = {
    id?: string
    readingDate: Date | string
    previousReading: number
    currentReading: number
    unitsConsumed: number
    createdAt?: Date | string
    meter: MeterCreateNestedOneWithoutReadingsInput
  }

  export type MeterReadingUncheckedCreateInput = {
    id?: string
    meterId: string
    readingDate: Date | string
    previousReading: number
    currentReading: number
    unitsConsumed: number
    createdAt?: Date | string
  }

  export type MeterReadingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    readingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    previousReading?: FloatFieldUpdateOperationsInput | number
    currentReading?: FloatFieldUpdateOperationsInput | number
    unitsConsumed?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meter?: MeterUpdateOneRequiredWithoutReadingsNestedInput
  }

  export type MeterReadingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    meterId?: StringFieldUpdateOperationsInput | string
    readingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    previousReading?: FloatFieldUpdateOperationsInput | number
    currentReading?: FloatFieldUpdateOperationsInput | number
    unitsConsumed?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeterReadingCreateManyInput = {
    id?: string
    meterId: string
    readingDate: Date | string
    previousReading: number
    currentReading: number
    unitsConsumed: number
    createdAt?: Date | string
  }

  export type MeterReadingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    readingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    previousReading?: FloatFieldUpdateOperationsInput | number
    currentReading?: FloatFieldUpdateOperationsInput | number
    unitsConsumed?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeterReadingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    meterId?: StringFieldUpdateOperationsInput | string
    readingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    previousReading?: FloatFieldUpdateOperationsInput | number
    currentReading?: FloatFieldUpdateOperationsInput | number
    unitsConsumed?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillCreateInput = {
    id?: string
    billingMonth: Date | string
    totalAmount: number
    status?: $Enums.BillStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    rentalAgreement: RentalAgreementCreateNestedOneWithoutBillsInput
    items?: BillItemCreateNestedManyWithoutBillInput
    payments?: PaymentCreateNestedManyWithoutBillInput
  }

  export type BillUncheckedCreateInput = {
    id?: string
    rentalAgreementId: string
    billingMonth: Date | string
    totalAmount: number
    status?: $Enums.BillStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: BillItemUncheckedCreateNestedManyWithoutBillInput
    payments?: PaymentUncheckedCreateNestedManyWithoutBillInput
  }

  export type BillUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    billingMonth?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    status?: EnumBillStatusFieldUpdateOperationsInput | $Enums.BillStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rentalAgreement?: RentalAgreementUpdateOneRequiredWithoutBillsNestedInput
    items?: BillItemUpdateManyWithoutBillNestedInput
    payments?: PaymentUpdateManyWithoutBillNestedInput
  }

  export type BillUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rentalAgreementId?: StringFieldUpdateOperationsInput | string
    billingMonth?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    status?: EnumBillStatusFieldUpdateOperationsInput | $Enums.BillStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: BillItemUncheckedUpdateManyWithoutBillNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutBillNestedInput
  }

  export type BillCreateManyInput = {
    id?: string
    rentalAgreementId: string
    billingMonth: Date | string
    totalAmount: number
    status?: $Enums.BillStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BillUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    billingMonth?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    status?: EnumBillStatusFieldUpdateOperationsInput | $Enums.BillStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    rentalAgreementId?: StringFieldUpdateOperationsInput | string
    billingMonth?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    status?: EnumBillStatusFieldUpdateOperationsInput | $Enums.BillStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillItemCreateInput = {
    id?: string
    description: string
    quantity: number
    rate: number
    amount: number
    bill: BillCreateNestedOneWithoutItemsInput
  }

  export type BillItemUncheckedCreateInput = {
    id?: string
    billId: string
    description: string
    quantity: number
    rate: number
    amount: number
  }

  export type BillItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    rate?: FloatFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    bill?: BillUpdateOneRequiredWithoutItemsNestedInput
  }

  export type BillItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    billId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    rate?: FloatFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
  }

  export type BillItemCreateManyInput = {
    id?: string
    billId: string
    description: string
    quantity: number
    rate: number
    amount: number
  }

  export type BillItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    rate?: FloatFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
  }

  export type BillItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    billId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    rate?: FloatFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
  }

  export type PaymentCreateInput = {
    id?: string
    amount: number
    paymentDate: Date | string
    method: $Enums.PaymentMethod
    referenceNo?: string | null
    notes?: string | null
    createdAt?: Date | string
    bill: BillCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: string
    billId: string
    amount: number
    paymentDate: Date | string
    method: $Enums.PaymentMethod
    referenceNo?: string | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type PaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    referenceNo?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bill?: BillUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    billId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    referenceNo?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateManyInput = {
    id?: string
    billId: string
    amount: number
    paymentDate: Date | string
    method: $Enums.PaymentMethod
    referenceNo?: string | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type PaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    referenceNo?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    billId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    referenceNo?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type RentalUnitListRelationFilter = {
    every?: RentalUnitWhereInput
    some?: RentalUnitWhereInput
    none?: RentalUnitWhereInput
  }

  export type MeterListRelationFilter = {
    every?: MeterWhereInput
    some?: MeterWhereInput
    none?: MeterWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RentalUnitOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MeterOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PropertyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    pinCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PropertyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    pinCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PropertyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    pinCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type EnumUnitTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.UnitType | EnumUnitTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UnitType[] | ListEnumUnitTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UnitType[] | ListEnumUnitTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUnitTypeFilter<$PrismaModel> | $Enums.UnitType
  }

  export type PropertyScalarRelationFilter = {
    is?: PropertyWhereInput
    isNot?: PropertyWhereInput
  }

  export type MeterAssignmentListRelationFilter = {
    every?: MeterAssignmentWhereInput
    some?: MeterAssignmentWhereInput
    none?: MeterAssignmentWhereInput
  }

  export type RentalAgreementListRelationFilter = {
    every?: RentalAgreementWhereInput
    some?: RentalAgreementWhereInput
    none?: RentalAgreementWhereInput
  }

  export type MeterAssignmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RentalAgreementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RentalUnitPropertyIdUnitNumberCompoundUniqueInput = {
    propertyId: string
    unitNumber: string
  }

  export type RentalUnitCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    unitNumber?: SortOrder
    floor?: SortOrder
    type?: SortOrder
    propertyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RentalUnitAvgOrderByAggregateInput = {
    floor?: SortOrder
  }

  export type RentalUnitMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    unitNumber?: SortOrder
    floor?: SortOrder
    type?: SortOrder
    propertyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RentalUnitMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    unitNumber?: SortOrder
    floor?: SortOrder
    type?: SortOrder
    propertyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RentalUnitSumOrderByAggregateInput = {
    floor?: SortOrder
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

  export type EnumUnitTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UnitType | EnumUnitTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UnitType[] | ListEnumUnitTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UnitType[] | ListEnumUnitTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUnitTypeWithAggregatesFilter<$PrismaModel> | $Enums.UnitType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUnitTypeFilter<$PrismaModel>
    _max?: NestedEnumUnitTypeFilter<$PrismaModel>
  }

  export type EnumMeterTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MeterType | EnumMeterTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MeterType[] | ListEnumMeterTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MeterType[] | ListEnumMeterTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMeterTypeFilter<$PrismaModel> | $Enums.MeterType
  }

  export type EnumMeterStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MeterStatus | EnumMeterStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MeterStatus[] | ListEnumMeterStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MeterStatus[] | ListEnumMeterStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMeterStatusFilter<$PrismaModel> | $Enums.MeterStatus
  }

  export type MeterReadingListRelationFilter = {
    every?: MeterReadingWhereInput
    some?: MeterReadingWhereInput
    none?: MeterReadingWhereInput
  }

  export type MeterReadingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MeterPropertyIdMeterNumberCompoundUniqueInput = {
    propertyId: string
    meterNumber: string
  }

  export type MeterCountOrderByAggregateInput = {
    id?: SortOrder
    meterNumber?: SortOrder
    type?: SortOrder
    status?: SortOrder
    propertyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MeterMaxOrderByAggregateInput = {
    id?: SortOrder
    meterNumber?: SortOrder
    type?: SortOrder
    status?: SortOrder
    propertyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MeterMinOrderByAggregateInput = {
    id?: SortOrder
    meterNumber?: SortOrder
    type?: SortOrder
    status?: SortOrder
    propertyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumMeterTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MeterType | EnumMeterTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MeterType[] | ListEnumMeterTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MeterType[] | ListEnumMeterTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMeterTypeWithAggregatesFilter<$PrismaModel> | $Enums.MeterType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMeterTypeFilter<$PrismaModel>
    _max?: NestedEnumMeterTypeFilter<$PrismaModel>
  }

  export type EnumMeterStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MeterStatus | EnumMeterStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MeterStatus[] | ListEnumMeterStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MeterStatus[] | ListEnumMeterStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMeterStatusWithAggregatesFilter<$PrismaModel> | $Enums.MeterStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMeterStatusFilter<$PrismaModel>
    _max?: NestedEnumMeterStatusFilter<$PrismaModel>
  }

  export type MeterScalarRelationFilter = {
    is?: MeterWhereInput
    isNot?: MeterWhereInput
  }

  export type RentalUnitScalarRelationFilter = {
    is?: RentalUnitWhereInput
    isNot?: RentalUnitWhereInput
  }

  export type MeterAssignmentMeterIdRentalUnitIdCompoundUniqueInput = {
    meterId: string
    rentalUnitId: string
  }

  export type MeterAssignmentCountOrderByAggregateInput = {
    id?: SortOrder
    meterId?: SortOrder
    rentalUnitId?: SortOrder
    createdAt?: SortOrder
  }

  export type MeterAssignmentMaxOrderByAggregateInput = {
    id?: SortOrder
    meterId?: SortOrder
    rentalUnitId?: SortOrder
    createdAt?: SortOrder
  }

  export type MeterAssignmentMinOrderByAggregateInput = {
    id?: SortOrder
    meterId?: SortOrder
    rentalUnitId?: SortOrder
    createdAt?: SortOrder
  }

  export type TenantCountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    governmentId?: SortOrder
    address?: SortOrder
    emergencyContact?: SortOrder
    createdAt?: SortOrder
  }

  export type TenantMaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    governmentId?: SortOrder
    address?: SortOrder
    emergencyContact?: SortOrder
    createdAt?: SortOrder
  }

  export type TenantMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    governmentId?: SortOrder
    address?: SortOrder
    emergencyContact?: SortOrder
    createdAt?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumRentalStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RentalStatus | EnumRentalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RentalStatus[] | ListEnumRentalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RentalStatus[] | ListEnumRentalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRentalStatusFilter<$PrismaModel> | $Enums.RentalStatus
  }

  export type TenantScalarRelationFilter = {
    is?: TenantWhereInput
    isNot?: TenantWhereInput
  }

  export type AgreementChargeListRelationFilter = {
    every?: AgreementChargeWhereInput
    some?: AgreementChargeWhereInput
    none?: AgreementChargeWhereInput
  }

  export type BillListRelationFilter = {
    every?: BillWhereInput
    some?: BillWhereInput
    none?: BillWhereInput
  }

  export type AgreementChargeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BillOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RentalAgreementCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    rentalUnitId?: SortOrder
    securityDeposit?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RentalAgreementAvgOrderByAggregateInput = {
    securityDeposit?: SortOrder
  }

  export type RentalAgreementMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    rentalUnitId?: SortOrder
    securityDeposit?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RentalAgreementMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    rentalUnitId?: SortOrder
    securityDeposit?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RentalAgreementSumOrderByAggregateInput = {
    securityDeposit?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumRentalStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RentalStatus | EnumRentalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RentalStatus[] | ListEnumRentalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RentalStatus[] | ListEnumRentalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRentalStatusWithAggregatesFilter<$PrismaModel> | $Enums.RentalStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRentalStatusFilter<$PrismaModel>
    _max?: NestedEnumRentalStatusFilter<$PrismaModel>
  }

  export type EnumChargeTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ChargeType | EnumChargeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ChargeType[] | ListEnumChargeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChargeType[] | ListEnumChargeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumChargeTypeFilter<$PrismaModel> | $Enums.ChargeType
  }

  export type EnumChargeMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.ChargeMethod | EnumChargeMethodFieldRefInput<$PrismaModel>
    in?: $Enums.ChargeMethod[] | ListEnumChargeMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChargeMethod[] | ListEnumChargeMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumChargeMethodFilter<$PrismaModel> | $Enums.ChargeMethod
  }

  export type RentalAgreementScalarRelationFilter = {
    is?: RentalAgreementWhereInput
    isNot?: RentalAgreementWhereInput
  }

  export type AgreementChargeCountOrderByAggregateInput = {
    id?: SortOrder
    rentalAgreementId?: SortOrder
    chargeType?: SortOrder
    calculation?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
  }

  export type AgreementChargeAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type AgreementChargeMaxOrderByAggregateInput = {
    id?: SortOrder
    rentalAgreementId?: SortOrder
    chargeType?: SortOrder
    calculation?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
  }

  export type AgreementChargeMinOrderByAggregateInput = {
    id?: SortOrder
    rentalAgreementId?: SortOrder
    chargeType?: SortOrder
    calculation?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
  }

  export type AgreementChargeSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumChargeTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ChargeType | EnumChargeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ChargeType[] | ListEnumChargeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChargeType[] | ListEnumChargeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumChargeTypeWithAggregatesFilter<$PrismaModel> | $Enums.ChargeType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumChargeTypeFilter<$PrismaModel>
    _max?: NestedEnumChargeTypeFilter<$PrismaModel>
  }

  export type EnumChargeMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ChargeMethod | EnumChargeMethodFieldRefInput<$PrismaModel>
    in?: $Enums.ChargeMethod[] | ListEnumChargeMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChargeMethod[] | ListEnumChargeMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumChargeMethodWithAggregatesFilter<$PrismaModel> | $Enums.ChargeMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumChargeMethodFilter<$PrismaModel>
    _max?: NestedEnumChargeMethodFilter<$PrismaModel>
  }

  export type MeterReadingMeterIdReadingDateCompoundUniqueInput = {
    meterId: string
    readingDate: Date | string
  }

  export type MeterReadingCountOrderByAggregateInput = {
    id?: SortOrder
    meterId?: SortOrder
    readingDate?: SortOrder
    previousReading?: SortOrder
    currentReading?: SortOrder
    unitsConsumed?: SortOrder
    createdAt?: SortOrder
  }

  export type MeterReadingAvgOrderByAggregateInput = {
    previousReading?: SortOrder
    currentReading?: SortOrder
    unitsConsumed?: SortOrder
  }

  export type MeterReadingMaxOrderByAggregateInput = {
    id?: SortOrder
    meterId?: SortOrder
    readingDate?: SortOrder
    previousReading?: SortOrder
    currentReading?: SortOrder
    unitsConsumed?: SortOrder
    createdAt?: SortOrder
  }

  export type MeterReadingMinOrderByAggregateInput = {
    id?: SortOrder
    meterId?: SortOrder
    readingDate?: SortOrder
    previousReading?: SortOrder
    currentReading?: SortOrder
    unitsConsumed?: SortOrder
    createdAt?: SortOrder
  }

  export type MeterReadingSumOrderByAggregateInput = {
    previousReading?: SortOrder
    currentReading?: SortOrder
    unitsConsumed?: SortOrder
  }

  export type EnumBillStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BillStatus | EnumBillStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BillStatus[] | ListEnumBillStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BillStatus[] | ListEnumBillStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBillStatusFilter<$PrismaModel> | $Enums.BillStatus
  }

  export type BillItemListRelationFilter = {
    every?: BillItemWhereInput
    some?: BillItemWhereInput
    none?: BillItemWhereInput
  }

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput
    some?: PaymentWhereInput
    none?: PaymentWhereInput
  }

  export type BillItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BillRentalAgreementIdBillingMonthCompoundUniqueInput = {
    rentalAgreementId: string
    billingMonth: Date | string
  }

  export type BillCountOrderByAggregateInput = {
    id?: SortOrder
    rentalAgreementId?: SortOrder
    billingMonth?: SortOrder
    totalAmount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BillAvgOrderByAggregateInput = {
    totalAmount?: SortOrder
  }

  export type BillMaxOrderByAggregateInput = {
    id?: SortOrder
    rentalAgreementId?: SortOrder
    billingMonth?: SortOrder
    totalAmount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BillMinOrderByAggregateInput = {
    id?: SortOrder
    rentalAgreementId?: SortOrder
    billingMonth?: SortOrder
    totalAmount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BillSumOrderByAggregateInput = {
    totalAmount?: SortOrder
  }

  export type EnumBillStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BillStatus | EnumBillStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BillStatus[] | ListEnumBillStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BillStatus[] | ListEnumBillStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBillStatusWithAggregatesFilter<$PrismaModel> | $Enums.BillStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBillStatusFilter<$PrismaModel>
    _max?: NestedEnumBillStatusFilter<$PrismaModel>
  }

  export type BillScalarRelationFilter = {
    is?: BillWhereInput
    isNot?: BillWhereInput
  }

  export type BillItemCountOrderByAggregateInput = {
    id?: SortOrder
    billId?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    rate?: SortOrder
    amount?: SortOrder
  }

  export type BillItemAvgOrderByAggregateInput = {
    quantity?: SortOrder
    rate?: SortOrder
    amount?: SortOrder
  }

  export type BillItemMaxOrderByAggregateInput = {
    id?: SortOrder
    billId?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    rate?: SortOrder
    amount?: SortOrder
  }

  export type BillItemMinOrderByAggregateInput = {
    id?: SortOrder
    billId?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    rate?: SortOrder
    amount?: SortOrder
  }

  export type BillItemSumOrderByAggregateInput = {
    quantity?: SortOrder
    rate?: SortOrder
    amount?: SortOrder
  }

  export type EnumPaymentMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodFilter<$PrismaModel> | $Enums.PaymentMethod
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    billId?: SortOrder
    amount?: SortOrder
    paymentDate?: SortOrder
    method?: SortOrder
    referenceNo?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    billId?: SortOrder
    amount?: SortOrder
    paymentDate?: SortOrder
    method?: SortOrder
    referenceNo?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    billId?: SortOrder
    amount?: SortOrder
    paymentDate?: SortOrder
    method?: SortOrder
    referenceNo?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumPaymentMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodFilter<$PrismaModel>
  }

  export type RentalUnitCreateNestedManyWithoutPropertyInput = {
    create?: XOR<RentalUnitCreateWithoutPropertyInput, RentalUnitUncheckedCreateWithoutPropertyInput> | RentalUnitCreateWithoutPropertyInput[] | RentalUnitUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: RentalUnitCreateOrConnectWithoutPropertyInput | RentalUnitCreateOrConnectWithoutPropertyInput[]
    createMany?: RentalUnitCreateManyPropertyInputEnvelope
    connect?: RentalUnitWhereUniqueInput | RentalUnitWhereUniqueInput[]
  }

  export type MeterCreateNestedManyWithoutPropertyInput = {
    create?: XOR<MeterCreateWithoutPropertyInput, MeterUncheckedCreateWithoutPropertyInput> | MeterCreateWithoutPropertyInput[] | MeterUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: MeterCreateOrConnectWithoutPropertyInput | MeterCreateOrConnectWithoutPropertyInput[]
    createMany?: MeterCreateManyPropertyInputEnvelope
    connect?: MeterWhereUniqueInput | MeterWhereUniqueInput[]
  }

  export type RentalUnitUncheckedCreateNestedManyWithoutPropertyInput = {
    create?: XOR<RentalUnitCreateWithoutPropertyInput, RentalUnitUncheckedCreateWithoutPropertyInput> | RentalUnitCreateWithoutPropertyInput[] | RentalUnitUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: RentalUnitCreateOrConnectWithoutPropertyInput | RentalUnitCreateOrConnectWithoutPropertyInput[]
    createMany?: RentalUnitCreateManyPropertyInputEnvelope
    connect?: RentalUnitWhereUniqueInput | RentalUnitWhereUniqueInput[]
  }

  export type MeterUncheckedCreateNestedManyWithoutPropertyInput = {
    create?: XOR<MeterCreateWithoutPropertyInput, MeterUncheckedCreateWithoutPropertyInput> | MeterCreateWithoutPropertyInput[] | MeterUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: MeterCreateOrConnectWithoutPropertyInput | MeterCreateOrConnectWithoutPropertyInput[]
    createMany?: MeterCreateManyPropertyInputEnvelope
    connect?: MeterWhereUniqueInput | MeterWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RentalUnitUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<RentalUnitCreateWithoutPropertyInput, RentalUnitUncheckedCreateWithoutPropertyInput> | RentalUnitCreateWithoutPropertyInput[] | RentalUnitUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: RentalUnitCreateOrConnectWithoutPropertyInput | RentalUnitCreateOrConnectWithoutPropertyInput[]
    upsert?: RentalUnitUpsertWithWhereUniqueWithoutPropertyInput | RentalUnitUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: RentalUnitCreateManyPropertyInputEnvelope
    set?: RentalUnitWhereUniqueInput | RentalUnitWhereUniqueInput[]
    disconnect?: RentalUnitWhereUniqueInput | RentalUnitWhereUniqueInput[]
    delete?: RentalUnitWhereUniqueInput | RentalUnitWhereUniqueInput[]
    connect?: RentalUnitWhereUniqueInput | RentalUnitWhereUniqueInput[]
    update?: RentalUnitUpdateWithWhereUniqueWithoutPropertyInput | RentalUnitUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: RentalUnitUpdateManyWithWhereWithoutPropertyInput | RentalUnitUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: RentalUnitScalarWhereInput | RentalUnitScalarWhereInput[]
  }

  export type MeterUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<MeterCreateWithoutPropertyInput, MeterUncheckedCreateWithoutPropertyInput> | MeterCreateWithoutPropertyInput[] | MeterUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: MeterCreateOrConnectWithoutPropertyInput | MeterCreateOrConnectWithoutPropertyInput[]
    upsert?: MeterUpsertWithWhereUniqueWithoutPropertyInput | MeterUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: MeterCreateManyPropertyInputEnvelope
    set?: MeterWhereUniqueInput | MeterWhereUniqueInput[]
    disconnect?: MeterWhereUniqueInput | MeterWhereUniqueInput[]
    delete?: MeterWhereUniqueInput | MeterWhereUniqueInput[]
    connect?: MeterWhereUniqueInput | MeterWhereUniqueInput[]
    update?: MeterUpdateWithWhereUniqueWithoutPropertyInput | MeterUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: MeterUpdateManyWithWhereWithoutPropertyInput | MeterUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: MeterScalarWhereInput | MeterScalarWhereInput[]
  }

  export type RentalUnitUncheckedUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<RentalUnitCreateWithoutPropertyInput, RentalUnitUncheckedCreateWithoutPropertyInput> | RentalUnitCreateWithoutPropertyInput[] | RentalUnitUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: RentalUnitCreateOrConnectWithoutPropertyInput | RentalUnitCreateOrConnectWithoutPropertyInput[]
    upsert?: RentalUnitUpsertWithWhereUniqueWithoutPropertyInput | RentalUnitUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: RentalUnitCreateManyPropertyInputEnvelope
    set?: RentalUnitWhereUniqueInput | RentalUnitWhereUniqueInput[]
    disconnect?: RentalUnitWhereUniqueInput | RentalUnitWhereUniqueInput[]
    delete?: RentalUnitWhereUniqueInput | RentalUnitWhereUniqueInput[]
    connect?: RentalUnitWhereUniqueInput | RentalUnitWhereUniqueInput[]
    update?: RentalUnitUpdateWithWhereUniqueWithoutPropertyInput | RentalUnitUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: RentalUnitUpdateManyWithWhereWithoutPropertyInput | RentalUnitUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: RentalUnitScalarWhereInput | RentalUnitScalarWhereInput[]
  }

  export type MeterUncheckedUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<MeterCreateWithoutPropertyInput, MeterUncheckedCreateWithoutPropertyInput> | MeterCreateWithoutPropertyInput[] | MeterUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: MeterCreateOrConnectWithoutPropertyInput | MeterCreateOrConnectWithoutPropertyInput[]
    upsert?: MeterUpsertWithWhereUniqueWithoutPropertyInput | MeterUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: MeterCreateManyPropertyInputEnvelope
    set?: MeterWhereUniqueInput | MeterWhereUniqueInput[]
    disconnect?: MeterWhereUniqueInput | MeterWhereUniqueInput[]
    delete?: MeterWhereUniqueInput | MeterWhereUniqueInput[]
    connect?: MeterWhereUniqueInput | MeterWhereUniqueInput[]
    update?: MeterUpdateWithWhereUniqueWithoutPropertyInput | MeterUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: MeterUpdateManyWithWhereWithoutPropertyInput | MeterUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: MeterScalarWhereInput | MeterScalarWhereInput[]
  }

  export type PropertyCreateNestedOneWithoutUnitsInput = {
    create?: XOR<PropertyCreateWithoutUnitsInput, PropertyUncheckedCreateWithoutUnitsInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutUnitsInput
    connect?: PropertyWhereUniqueInput
  }

  export type MeterAssignmentCreateNestedManyWithoutRentalUnitInput = {
    create?: XOR<MeterAssignmentCreateWithoutRentalUnitInput, MeterAssignmentUncheckedCreateWithoutRentalUnitInput> | MeterAssignmentCreateWithoutRentalUnitInput[] | MeterAssignmentUncheckedCreateWithoutRentalUnitInput[]
    connectOrCreate?: MeterAssignmentCreateOrConnectWithoutRentalUnitInput | MeterAssignmentCreateOrConnectWithoutRentalUnitInput[]
    createMany?: MeterAssignmentCreateManyRentalUnitInputEnvelope
    connect?: MeterAssignmentWhereUniqueInput | MeterAssignmentWhereUniqueInput[]
  }

  export type RentalAgreementCreateNestedManyWithoutRentalUnitInput = {
    create?: XOR<RentalAgreementCreateWithoutRentalUnitInput, RentalAgreementUncheckedCreateWithoutRentalUnitInput> | RentalAgreementCreateWithoutRentalUnitInput[] | RentalAgreementUncheckedCreateWithoutRentalUnitInput[]
    connectOrCreate?: RentalAgreementCreateOrConnectWithoutRentalUnitInput | RentalAgreementCreateOrConnectWithoutRentalUnitInput[]
    createMany?: RentalAgreementCreateManyRentalUnitInputEnvelope
    connect?: RentalAgreementWhereUniqueInput | RentalAgreementWhereUniqueInput[]
  }

  export type MeterAssignmentUncheckedCreateNestedManyWithoutRentalUnitInput = {
    create?: XOR<MeterAssignmentCreateWithoutRentalUnitInput, MeterAssignmentUncheckedCreateWithoutRentalUnitInput> | MeterAssignmentCreateWithoutRentalUnitInput[] | MeterAssignmentUncheckedCreateWithoutRentalUnitInput[]
    connectOrCreate?: MeterAssignmentCreateOrConnectWithoutRentalUnitInput | MeterAssignmentCreateOrConnectWithoutRentalUnitInput[]
    createMany?: MeterAssignmentCreateManyRentalUnitInputEnvelope
    connect?: MeterAssignmentWhereUniqueInput | MeterAssignmentWhereUniqueInput[]
  }

  export type RentalAgreementUncheckedCreateNestedManyWithoutRentalUnitInput = {
    create?: XOR<RentalAgreementCreateWithoutRentalUnitInput, RentalAgreementUncheckedCreateWithoutRentalUnitInput> | RentalAgreementCreateWithoutRentalUnitInput[] | RentalAgreementUncheckedCreateWithoutRentalUnitInput[]
    connectOrCreate?: RentalAgreementCreateOrConnectWithoutRentalUnitInput | RentalAgreementCreateOrConnectWithoutRentalUnitInput[]
    createMany?: RentalAgreementCreateManyRentalUnitInputEnvelope
    connect?: RentalAgreementWhereUniqueInput | RentalAgreementWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumUnitTypeFieldUpdateOperationsInput = {
    set?: $Enums.UnitType
  }

  export type PropertyUpdateOneRequiredWithoutUnitsNestedInput = {
    create?: XOR<PropertyCreateWithoutUnitsInput, PropertyUncheckedCreateWithoutUnitsInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutUnitsInput
    upsert?: PropertyUpsertWithoutUnitsInput
    connect?: PropertyWhereUniqueInput
    update?: XOR<XOR<PropertyUpdateToOneWithWhereWithoutUnitsInput, PropertyUpdateWithoutUnitsInput>, PropertyUncheckedUpdateWithoutUnitsInput>
  }

  export type MeterAssignmentUpdateManyWithoutRentalUnitNestedInput = {
    create?: XOR<MeterAssignmentCreateWithoutRentalUnitInput, MeterAssignmentUncheckedCreateWithoutRentalUnitInput> | MeterAssignmentCreateWithoutRentalUnitInput[] | MeterAssignmentUncheckedCreateWithoutRentalUnitInput[]
    connectOrCreate?: MeterAssignmentCreateOrConnectWithoutRentalUnitInput | MeterAssignmentCreateOrConnectWithoutRentalUnitInput[]
    upsert?: MeterAssignmentUpsertWithWhereUniqueWithoutRentalUnitInput | MeterAssignmentUpsertWithWhereUniqueWithoutRentalUnitInput[]
    createMany?: MeterAssignmentCreateManyRentalUnitInputEnvelope
    set?: MeterAssignmentWhereUniqueInput | MeterAssignmentWhereUniqueInput[]
    disconnect?: MeterAssignmentWhereUniqueInput | MeterAssignmentWhereUniqueInput[]
    delete?: MeterAssignmentWhereUniqueInput | MeterAssignmentWhereUniqueInput[]
    connect?: MeterAssignmentWhereUniqueInput | MeterAssignmentWhereUniqueInput[]
    update?: MeterAssignmentUpdateWithWhereUniqueWithoutRentalUnitInput | MeterAssignmentUpdateWithWhereUniqueWithoutRentalUnitInput[]
    updateMany?: MeterAssignmentUpdateManyWithWhereWithoutRentalUnitInput | MeterAssignmentUpdateManyWithWhereWithoutRentalUnitInput[]
    deleteMany?: MeterAssignmentScalarWhereInput | MeterAssignmentScalarWhereInput[]
  }

  export type RentalAgreementUpdateManyWithoutRentalUnitNestedInput = {
    create?: XOR<RentalAgreementCreateWithoutRentalUnitInput, RentalAgreementUncheckedCreateWithoutRentalUnitInput> | RentalAgreementCreateWithoutRentalUnitInput[] | RentalAgreementUncheckedCreateWithoutRentalUnitInput[]
    connectOrCreate?: RentalAgreementCreateOrConnectWithoutRentalUnitInput | RentalAgreementCreateOrConnectWithoutRentalUnitInput[]
    upsert?: RentalAgreementUpsertWithWhereUniqueWithoutRentalUnitInput | RentalAgreementUpsertWithWhereUniqueWithoutRentalUnitInput[]
    createMany?: RentalAgreementCreateManyRentalUnitInputEnvelope
    set?: RentalAgreementWhereUniqueInput | RentalAgreementWhereUniqueInput[]
    disconnect?: RentalAgreementWhereUniqueInput | RentalAgreementWhereUniqueInput[]
    delete?: RentalAgreementWhereUniqueInput | RentalAgreementWhereUniqueInput[]
    connect?: RentalAgreementWhereUniqueInput | RentalAgreementWhereUniqueInput[]
    update?: RentalAgreementUpdateWithWhereUniqueWithoutRentalUnitInput | RentalAgreementUpdateWithWhereUniqueWithoutRentalUnitInput[]
    updateMany?: RentalAgreementUpdateManyWithWhereWithoutRentalUnitInput | RentalAgreementUpdateManyWithWhereWithoutRentalUnitInput[]
    deleteMany?: RentalAgreementScalarWhereInput | RentalAgreementScalarWhereInput[]
  }

  export type MeterAssignmentUncheckedUpdateManyWithoutRentalUnitNestedInput = {
    create?: XOR<MeterAssignmentCreateWithoutRentalUnitInput, MeterAssignmentUncheckedCreateWithoutRentalUnitInput> | MeterAssignmentCreateWithoutRentalUnitInput[] | MeterAssignmentUncheckedCreateWithoutRentalUnitInput[]
    connectOrCreate?: MeterAssignmentCreateOrConnectWithoutRentalUnitInput | MeterAssignmentCreateOrConnectWithoutRentalUnitInput[]
    upsert?: MeterAssignmentUpsertWithWhereUniqueWithoutRentalUnitInput | MeterAssignmentUpsertWithWhereUniqueWithoutRentalUnitInput[]
    createMany?: MeterAssignmentCreateManyRentalUnitInputEnvelope
    set?: MeterAssignmentWhereUniqueInput | MeterAssignmentWhereUniqueInput[]
    disconnect?: MeterAssignmentWhereUniqueInput | MeterAssignmentWhereUniqueInput[]
    delete?: MeterAssignmentWhereUniqueInput | MeterAssignmentWhereUniqueInput[]
    connect?: MeterAssignmentWhereUniqueInput | MeterAssignmentWhereUniqueInput[]
    update?: MeterAssignmentUpdateWithWhereUniqueWithoutRentalUnitInput | MeterAssignmentUpdateWithWhereUniqueWithoutRentalUnitInput[]
    updateMany?: MeterAssignmentUpdateManyWithWhereWithoutRentalUnitInput | MeterAssignmentUpdateManyWithWhereWithoutRentalUnitInput[]
    deleteMany?: MeterAssignmentScalarWhereInput | MeterAssignmentScalarWhereInput[]
  }

  export type RentalAgreementUncheckedUpdateManyWithoutRentalUnitNestedInput = {
    create?: XOR<RentalAgreementCreateWithoutRentalUnitInput, RentalAgreementUncheckedCreateWithoutRentalUnitInput> | RentalAgreementCreateWithoutRentalUnitInput[] | RentalAgreementUncheckedCreateWithoutRentalUnitInput[]
    connectOrCreate?: RentalAgreementCreateOrConnectWithoutRentalUnitInput | RentalAgreementCreateOrConnectWithoutRentalUnitInput[]
    upsert?: RentalAgreementUpsertWithWhereUniqueWithoutRentalUnitInput | RentalAgreementUpsertWithWhereUniqueWithoutRentalUnitInput[]
    createMany?: RentalAgreementCreateManyRentalUnitInputEnvelope
    set?: RentalAgreementWhereUniqueInput | RentalAgreementWhereUniqueInput[]
    disconnect?: RentalAgreementWhereUniqueInput | RentalAgreementWhereUniqueInput[]
    delete?: RentalAgreementWhereUniqueInput | RentalAgreementWhereUniqueInput[]
    connect?: RentalAgreementWhereUniqueInput | RentalAgreementWhereUniqueInput[]
    update?: RentalAgreementUpdateWithWhereUniqueWithoutRentalUnitInput | RentalAgreementUpdateWithWhereUniqueWithoutRentalUnitInput[]
    updateMany?: RentalAgreementUpdateManyWithWhereWithoutRentalUnitInput | RentalAgreementUpdateManyWithWhereWithoutRentalUnitInput[]
    deleteMany?: RentalAgreementScalarWhereInput | RentalAgreementScalarWhereInput[]
  }

  export type PropertyCreateNestedOneWithoutMetersInput = {
    create?: XOR<PropertyCreateWithoutMetersInput, PropertyUncheckedCreateWithoutMetersInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutMetersInput
    connect?: PropertyWhereUniqueInput
  }

  export type MeterAssignmentCreateNestedManyWithoutMeterInput = {
    create?: XOR<MeterAssignmentCreateWithoutMeterInput, MeterAssignmentUncheckedCreateWithoutMeterInput> | MeterAssignmentCreateWithoutMeterInput[] | MeterAssignmentUncheckedCreateWithoutMeterInput[]
    connectOrCreate?: MeterAssignmentCreateOrConnectWithoutMeterInput | MeterAssignmentCreateOrConnectWithoutMeterInput[]
    createMany?: MeterAssignmentCreateManyMeterInputEnvelope
    connect?: MeterAssignmentWhereUniqueInput | MeterAssignmentWhereUniqueInput[]
  }

  export type MeterReadingCreateNestedManyWithoutMeterInput = {
    create?: XOR<MeterReadingCreateWithoutMeterInput, MeterReadingUncheckedCreateWithoutMeterInput> | MeterReadingCreateWithoutMeterInput[] | MeterReadingUncheckedCreateWithoutMeterInput[]
    connectOrCreate?: MeterReadingCreateOrConnectWithoutMeterInput | MeterReadingCreateOrConnectWithoutMeterInput[]
    createMany?: MeterReadingCreateManyMeterInputEnvelope
    connect?: MeterReadingWhereUniqueInput | MeterReadingWhereUniqueInput[]
  }

  export type MeterAssignmentUncheckedCreateNestedManyWithoutMeterInput = {
    create?: XOR<MeterAssignmentCreateWithoutMeterInput, MeterAssignmentUncheckedCreateWithoutMeterInput> | MeterAssignmentCreateWithoutMeterInput[] | MeterAssignmentUncheckedCreateWithoutMeterInput[]
    connectOrCreate?: MeterAssignmentCreateOrConnectWithoutMeterInput | MeterAssignmentCreateOrConnectWithoutMeterInput[]
    createMany?: MeterAssignmentCreateManyMeterInputEnvelope
    connect?: MeterAssignmentWhereUniqueInput | MeterAssignmentWhereUniqueInput[]
  }

  export type MeterReadingUncheckedCreateNestedManyWithoutMeterInput = {
    create?: XOR<MeterReadingCreateWithoutMeterInput, MeterReadingUncheckedCreateWithoutMeterInput> | MeterReadingCreateWithoutMeterInput[] | MeterReadingUncheckedCreateWithoutMeterInput[]
    connectOrCreate?: MeterReadingCreateOrConnectWithoutMeterInput | MeterReadingCreateOrConnectWithoutMeterInput[]
    createMany?: MeterReadingCreateManyMeterInputEnvelope
    connect?: MeterReadingWhereUniqueInput | MeterReadingWhereUniqueInput[]
  }

  export type EnumMeterTypeFieldUpdateOperationsInput = {
    set?: $Enums.MeterType
  }

  export type EnumMeterStatusFieldUpdateOperationsInput = {
    set?: $Enums.MeterStatus
  }

  export type PropertyUpdateOneRequiredWithoutMetersNestedInput = {
    create?: XOR<PropertyCreateWithoutMetersInput, PropertyUncheckedCreateWithoutMetersInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutMetersInput
    upsert?: PropertyUpsertWithoutMetersInput
    connect?: PropertyWhereUniqueInput
    update?: XOR<XOR<PropertyUpdateToOneWithWhereWithoutMetersInput, PropertyUpdateWithoutMetersInput>, PropertyUncheckedUpdateWithoutMetersInput>
  }

  export type MeterAssignmentUpdateManyWithoutMeterNestedInput = {
    create?: XOR<MeterAssignmentCreateWithoutMeterInput, MeterAssignmentUncheckedCreateWithoutMeterInput> | MeterAssignmentCreateWithoutMeterInput[] | MeterAssignmentUncheckedCreateWithoutMeterInput[]
    connectOrCreate?: MeterAssignmentCreateOrConnectWithoutMeterInput | MeterAssignmentCreateOrConnectWithoutMeterInput[]
    upsert?: MeterAssignmentUpsertWithWhereUniqueWithoutMeterInput | MeterAssignmentUpsertWithWhereUniqueWithoutMeterInput[]
    createMany?: MeterAssignmentCreateManyMeterInputEnvelope
    set?: MeterAssignmentWhereUniqueInput | MeterAssignmentWhereUniqueInput[]
    disconnect?: MeterAssignmentWhereUniqueInput | MeterAssignmentWhereUniqueInput[]
    delete?: MeterAssignmentWhereUniqueInput | MeterAssignmentWhereUniqueInput[]
    connect?: MeterAssignmentWhereUniqueInput | MeterAssignmentWhereUniqueInput[]
    update?: MeterAssignmentUpdateWithWhereUniqueWithoutMeterInput | MeterAssignmentUpdateWithWhereUniqueWithoutMeterInput[]
    updateMany?: MeterAssignmentUpdateManyWithWhereWithoutMeterInput | MeterAssignmentUpdateManyWithWhereWithoutMeterInput[]
    deleteMany?: MeterAssignmentScalarWhereInput | MeterAssignmentScalarWhereInput[]
  }

  export type MeterReadingUpdateManyWithoutMeterNestedInput = {
    create?: XOR<MeterReadingCreateWithoutMeterInput, MeterReadingUncheckedCreateWithoutMeterInput> | MeterReadingCreateWithoutMeterInput[] | MeterReadingUncheckedCreateWithoutMeterInput[]
    connectOrCreate?: MeterReadingCreateOrConnectWithoutMeterInput | MeterReadingCreateOrConnectWithoutMeterInput[]
    upsert?: MeterReadingUpsertWithWhereUniqueWithoutMeterInput | MeterReadingUpsertWithWhereUniqueWithoutMeterInput[]
    createMany?: MeterReadingCreateManyMeterInputEnvelope
    set?: MeterReadingWhereUniqueInput | MeterReadingWhereUniqueInput[]
    disconnect?: MeterReadingWhereUniqueInput | MeterReadingWhereUniqueInput[]
    delete?: MeterReadingWhereUniqueInput | MeterReadingWhereUniqueInput[]
    connect?: MeterReadingWhereUniqueInput | MeterReadingWhereUniqueInput[]
    update?: MeterReadingUpdateWithWhereUniqueWithoutMeterInput | MeterReadingUpdateWithWhereUniqueWithoutMeterInput[]
    updateMany?: MeterReadingUpdateManyWithWhereWithoutMeterInput | MeterReadingUpdateManyWithWhereWithoutMeterInput[]
    deleteMany?: MeterReadingScalarWhereInput | MeterReadingScalarWhereInput[]
  }

  export type MeterAssignmentUncheckedUpdateManyWithoutMeterNestedInput = {
    create?: XOR<MeterAssignmentCreateWithoutMeterInput, MeterAssignmentUncheckedCreateWithoutMeterInput> | MeterAssignmentCreateWithoutMeterInput[] | MeterAssignmentUncheckedCreateWithoutMeterInput[]
    connectOrCreate?: MeterAssignmentCreateOrConnectWithoutMeterInput | MeterAssignmentCreateOrConnectWithoutMeterInput[]
    upsert?: MeterAssignmentUpsertWithWhereUniqueWithoutMeterInput | MeterAssignmentUpsertWithWhereUniqueWithoutMeterInput[]
    createMany?: MeterAssignmentCreateManyMeterInputEnvelope
    set?: MeterAssignmentWhereUniqueInput | MeterAssignmentWhereUniqueInput[]
    disconnect?: MeterAssignmentWhereUniqueInput | MeterAssignmentWhereUniqueInput[]
    delete?: MeterAssignmentWhereUniqueInput | MeterAssignmentWhereUniqueInput[]
    connect?: MeterAssignmentWhereUniqueInput | MeterAssignmentWhereUniqueInput[]
    update?: MeterAssignmentUpdateWithWhereUniqueWithoutMeterInput | MeterAssignmentUpdateWithWhereUniqueWithoutMeterInput[]
    updateMany?: MeterAssignmentUpdateManyWithWhereWithoutMeterInput | MeterAssignmentUpdateManyWithWhereWithoutMeterInput[]
    deleteMany?: MeterAssignmentScalarWhereInput | MeterAssignmentScalarWhereInput[]
  }

  export type MeterReadingUncheckedUpdateManyWithoutMeterNestedInput = {
    create?: XOR<MeterReadingCreateWithoutMeterInput, MeterReadingUncheckedCreateWithoutMeterInput> | MeterReadingCreateWithoutMeterInput[] | MeterReadingUncheckedCreateWithoutMeterInput[]
    connectOrCreate?: MeterReadingCreateOrConnectWithoutMeterInput | MeterReadingCreateOrConnectWithoutMeterInput[]
    upsert?: MeterReadingUpsertWithWhereUniqueWithoutMeterInput | MeterReadingUpsertWithWhereUniqueWithoutMeterInput[]
    createMany?: MeterReadingCreateManyMeterInputEnvelope
    set?: MeterReadingWhereUniqueInput | MeterReadingWhereUniqueInput[]
    disconnect?: MeterReadingWhereUniqueInput | MeterReadingWhereUniqueInput[]
    delete?: MeterReadingWhereUniqueInput | MeterReadingWhereUniqueInput[]
    connect?: MeterReadingWhereUniqueInput | MeterReadingWhereUniqueInput[]
    update?: MeterReadingUpdateWithWhereUniqueWithoutMeterInput | MeterReadingUpdateWithWhereUniqueWithoutMeterInput[]
    updateMany?: MeterReadingUpdateManyWithWhereWithoutMeterInput | MeterReadingUpdateManyWithWhereWithoutMeterInput[]
    deleteMany?: MeterReadingScalarWhereInput | MeterReadingScalarWhereInput[]
  }

  export type MeterCreateNestedOneWithoutAssignmentsInput = {
    create?: XOR<MeterCreateWithoutAssignmentsInput, MeterUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: MeterCreateOrConnectWithoutAssignmentsInput
    connect?: MeterWhereUniqueInput
  }

  export type RentalUnitCreateNestedOneWithoutAssignmentsInput = {
    create?: XOR<RentalUnitCreateWithoutAssignmentsInput, RentalUnitUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: RentalUnitCreateOrConnectWithoutAssignmentsInput
    connect?: RentalUnitWhereUniqueInput
  }

  export type MeterUpdateOneRequiredWithoutAssignmentsNestedInput = {
    create?: XOR<MeterCreateWithoutAssignmentsInput, MeterUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: MeterCreateOrConnectWithoutAssignmentsInput
    upsert?: MeterUpsertWithoutAssignmentsInput
    connect?: MeterWhereUniqueInput
    update?: XOR<XOR<MeterUpdateToOneWithWhereWithoutAssignmentsInput, MeterUpdateWithoutAssignmentsInput>, MeterUncheckedUpdateWithoutAssignmentsInput>
  }

  export type RentalUnitUpdateOneRequiredWithoutAssignmentsNestedInput = {
    create?: XOR<RentalUnitCreateWithoutAssignmentsInput, RentalUnitUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: RentalUnitCreateOrConnectWithoutAssignmentsInput
    upsert?: RentalUnitUpsertWithoutAssignmentsInput
    connect?: RentalUnitWhereUniqueInput
    update?: XOR<XOR<RentalUnitUpdateToOneWithWhereWithoutAssignmentsInput, RentalUnitUpdateWithoutAssignmentsInput>, RentalUnitUncheckedUpdateWithoutAssignmentsInput>
  }

  export type RentalAgreementCreateNestedManyWithoutTenantInput = {
    create?: XOR<RentalAgreementCreateWithoutTenantInput, RentalAgreementUncheckedCreateWithoutTenantInput> | RentalAgreementCreateWithoutTenantInput[] | RentalAgreementUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: RentalAgreementCreateOrConnectWithoutTenantInput | RentalAgreementCreateOrConnectWithoutTenantInput[]
    createMany?: RentalAgreementCreateManyTenantInputEnvelope
    connect?: RentalAgreementWhereUniqueInput | RentalAgreementWhereUniqueInput[]
  }

  export type RentalAgreementUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<RentalAgreementCreateWithoutTenantInput, RentalAgreementUncheckedCreateWithoutTenantInput> | RentalAgreementCreateWithoutTenantInput[] | RentalAgreementUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: RentalAgreementCreateOrConnectWithoutTenantInput | RentalAgreementCreateOrConnectWithoutTenantInput[]
    createMany?: RentalAgreementCreateManyTenantInputEnvelope
    connect?: RentalAgreementWhereUniqueInput | RentalAgreementWhereUniqueInput[]
  }

  export type RentalAgreementUpdateManyWithoutTenantNestedInput = {
    create?: XOR<RentalAgreementCreateWithoutTenantInput, RentalAgreementUncheckedCreateWithoutTenantInput> | RentalAgreementCreateWithoutTenantInput[] | RentalAgreementUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: RentalAgreementCreateOrConnectWithoutTenantInput | RentalAgreementCreateOrConnectWithoutTenantInput[]
    upsert?: RentalAgreementUpsertWithWhereUniqueWithoutTenantInput | RentalAgreementUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: RentalAgreementCreateManyTenantInputEnvelope
    set?: RentalAgreementWhereUniqueInput | RentalAgreementWhereUniqueInput[]
    disconnect?: RentalAgreementWhereUniqueInput | RentalAgreementWhereUniqueInput[]
    delete?: RentalAgreementWhereUniqueInput | RentalAgreementWhereUniqueInput[]
    connect?: RentalAgreementWhereUniqueInput | RentalAgreementWhereUniqueInput[]
    update?: RentalAgreementUpdateWithWhereUniqueWithoutTenantInput | RentalAgreementUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: RentalAgreementUpdateManyWithWhereWithoutTenantInput | RentalAgreementUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: RentalAgreementScalarWhereInput | RentalAgreementScalarWhereInput[]
  }

  export type RentalAgreementUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<RentalAgreementCreateWithoutTenantInput, RentalAgreementUncheckedCreateWithoutTenantInput> | RentalAgreementCreateWithoutTenantInput[] | RentalAgreementUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: RentalAgreementCreateOrConnectWithoutTenantInput | RentalAgreementCreateOrConnectWithoutTenantInput[]
    upsert?: RentalAgreementUpsertWithWhereUniqueWithoutTenantInput | RentalAgreementUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: RentalAgreementCreateManyTenantInputEnvelope
    set?: RentalAgreementWhereUniqueInput | RentalAgreementWhereUniqueInput[]
    disconnect?: RentalAgreementWhereUniqueInput | RentalAgreementWhereUniqueInput[]
    delete?: RentalAgreementWhereUniqueInput | RentalAgreementWhereUniqueInput[]
    connect?: RentalAgreementWhereUniqueInput | RentalAgreementWhereUniqueInput[]
    update?: RentalAgreementUpdateWithWhereUniqueWithoutTenantInput | RentalAgreementUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: RentalAgreementUpdateManyWithWhereWithoutTenantInput | RentalAgreementUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: RentalAgreementScalarWhereInput | RentalAgreementScalarWhereInput[]
  }

  export type TenantCreateNestedOneWithoutRentalsInput = {
    create?: XOR<TenantCreateWithoutRentalsInput, TenantUncheckedCreateWithoutRentalsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutRentalsInput
    connect?: TenantWhereUniqueInput
  }

  export type RentalUnitCreateNestedOneWithoutRentalsInput = {
    create?: XOR<RentalUnitCreateWithoutRentalsInput, RentalUnitUncheckedCreateWithoutRentalsInput>
    connectOrCreate?: RentalUnitCreateOrConnectWithoutRentalsInput
    connect?: RentalUnitWhereUniqueInput
  }

  export type AgreementChargeCreateNestedManyWithoutRentalAgreementInput = {
    create?: XOR<AgreementChargeCreateWithoutRentalAgreementInput, AgreementChargeUncheckedCreateWithoutRentalAgreementInput> | AgreementChargeCreateWithoutRentalAgreementInput[] | AgreementChargeUncheckedCreateWithoutRentalAgreementInput[]
    connectOrCreate?: AgreementChargeCreateOrConnectWithoutRentalAgreementInput | AgreementChargeCreateOrConnectWithoutRentalAgreementInput[]
    createMany?: AgreementChargeCreateManyRentalAgreementInputEnvelope
    connect?: AgreementChargeWhereUniqueInput | AgreementChargeWhereUniqueInput[]
  }

  export type BillCreateNestedManyWithoutRentalAgreementInput = {
    create?: XOR<BillCreateWithoutRentalAgreementInput, BillUncheckedCreateWithoutRentalAgreementInput> | BillCreateWithoutRentalAgreementInput[] | BillUncheckedCreateWithoutRentalAgreementInput[]
    connectOrCreate?: BillCreateOrConnectWithoutRentalAgreementInput | BillCreateOrConnectWithoutRentalAgreementInput[]
    createMany?: BillCreateManyRentalAgreementInputEnvelope
    connect?: BillWhereUniqueInput | BillWhereUniqueInput[]
  }

  export type AgreementChargeUncheckedCreateNestedManyWithoutRentalAgreementInput = {
    create?: XOR<AgreementChargeCreateWithoutRentalAgreementInput, AgreementChargeUncheckedCreateWithoutRentalAgreementInput> | AgreementChargeCreateWithoutRentalAgreementInput[] | AgreementChargeUncheckedCreateWithoutRentalAgreementInput[]
    connectOrCreate?: AgreementChargeCreateOrConnectWithoutRentalAgreementInput | AgreementChargeCreateOrConnectWithoutRentalAgreementInput[]
    createMany?: AgreementChargeCreateManyRentalAgreementInputEnvelope
    connect?: AgreementChargeWhereUniqueInput | AgreementChargeWhereUniqueInput[]
  }

  export type BillUncheckedCreateNestedManyWithoutRentalAgreementInput = {
    create?: XOR<BillCreateWithoutRentalAgreementInput, BillUncheckedCreateWithoutRentalAgreementInput> | BillCreateWithoutRentalAgreementInput[] | BillUncheckedCreateWithoutRentalAgreementInput[]
    connectOrCreate?: BillCreateOrConnectWithoutRentalAgreementInput | BillCreateOrConnectWithoutRentalAgreementInput[]
    createMany?: BillCreateManyRentalAgreementInputEnvelope
    connect?: BillWhereUniqueInput | BillWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumRentalStatusFieldUpdateOperationsInput = {
    set?: $Enums.RentalStatus
  }

  export type TenantUpdateOneRequiredWithoutRentalsNestedInput = {
    create?: XOR<TenantCreateWithoutRentalsInput, TenantUncheckedCreateWithoutRentalsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutRentalsInput
    upsert?: TenantUpsertWithoutRentalsInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutRentalsInput, TenantUpdateWithoutRentalsInput>, TenantUncheckedUpdateWithoutRentalsInput>
  }

  export type RentalUnitUpdateOneRequiredWithoutRentalsNestedInput = {
    create?: XOR<RentalUnitCreateWithoutRentalsInput, RentalUnitUncheckedCreateWithoutRentalsInput>
    connectOrCreate?: RentalUnitCreateOrConnectWithoutRentalsInput
    upsert?: RentalUnitUpsertWithoutRentalsInput
    connect?: RentalUnitWhereUniqueInput
    update?: XOR<XOR<RentalUnitUpdateToOneWithWhereWithoutRentalsInput, RentalUnitUpdateWithoutRentalsInput>, RentalUnitUncheckedUpdateWithoutRentalsInput>
  }

  export type AgreementChargeUpdateManyWithoutRentalAgreementNestedInput = {
    create?: XOR<AgreementChargeCreateWithoutRentalAgreementInput, AgreementChargeUncheckedCreateWithoutRentalAgreementInput> | AgreementChargeCreateWithoutRentalAgreementInput[] | AgreementChargeUncheckedCreateWithoutRentalAgreementInput[]
    connectOrCreate?: AgreementChargeCreateOrConnectWithoutRentalAgreementInput | AgreementChargeCreateOrConnectWithoutRentalAgreementInput[]
    upsert?: AgreementChargeUpsertWithWhereUniqueWithoutRentalAgreementInput | AgreementChargeUpsertWithWhereUniqueWithoutRentalAgreementInput[]
    createMany?: AgreementChargeCreateManyRentalAgreementInputEnvelope
    set?: AgreementChargeWhereUniqueInput | AgreementChargeWhereUniqueInput[]
    disconnect?: AgreementChargeWhereUniqueInput | AgreementChargeWhereUniqueInput[]
    delete?: AgreementChargeWhereUniqueInput | AgreementChargeWhereUniqueInput[]
    connect?: AgreementChargeWhereUniqueInput | AgreementChargeWhereUniqueInput[]
    update?: AgreementChargeUpdateWithWhereUniqueWithoutRentalAgreementInput | AgreementChargeUpdateWithWhereUniqueWithoutRentalAgreementInput[]
    updateMany?: AgreementChargeUpdateManyWithWhereWithoutRentalAgreementInput | AgreementChargeUpdateManyWithWhereWithoutRentalAgreementInput[]
    deleteMany?: AgreementChargeScalarWhereInput | AgreementChargeScalarWhereInput[]
  }

  export type BillUpdateManyWithoutRentalAgreementNestedInput = {
    create?: XOR<BillCreateWithoutRentalAgreementInput, BillUncheckedCreateWithoutRentalAgreementInput> | BillCreateWithoutRentalAgreementInput[] | BillUncheckedCreateWithoutRentalAgreementInput[]
    connectOrCreate?: BillCreateOrConnectWithoutRentalAgreementInput | BillCreateOrConnectWithoutRentalAgreementInput[]
    upsert?: BillUpsertWithWhereUniqueWithoutRentalAgreementInput | BillUpsertWithWhereUniqueWithoutRentalAgreementInput[]
    createMany?: BillCreateManyRentalAgreementInputEnvelope
    set?: BillWhereUniqueInput | BillWhereUniqueInput[]
    disconnect?: BillWhereUniqueInput | BillWhereUniqueInput[]
    delete?: BillWhereUniqueInput | BillWhereUniqueInput[]
    connect?: BillWhereUniqueInput | BillWhereUniqueInput[]
    update?: BillUpdateWithWhereUniqueWithoutRentalAgreementInput | BillUpdateWithWhereUniqueWithoutRentalAgreementInput[]
    updateMany?: BillUpdateManyWithWhereWithoutRentalAgreementInput | BillUpdateManyWithWhereWithoutRentalAgreementInput[]
    deleteMany?: BillScalarWhereInput | BillScalarWhereInput[]
  }

  export type AgreementChargeUncheckedUpdateManyWithoutRentalAgreementNestedInput = {
    create?: XOR<AgreementChargeCreateWithoutRentalAgreementInput, AgreementChargeUncheckedCreateWithoutRentalAgreementInput> | AgreementChargeCreateWithoutRentalAgreementInput[] | AgreementChargeUncheckedCreateWithoutRentalAgreementInput[]
    connectOrCreate?: AgreementChargeCreateOrConnectWithoutRentalAgreementInput | AgreementChargeCreateOrConnectWithoutRentalAgreementInput[]
    upsert?: AgreementChargeUpsertWithWhereUniqueWithoutRentalAgreementInput | AgreementChargeUpsertWithWhereUniqueWithoutRentalAgreementInput[]
    createMany?: AgreementChargeCreateManyRentalAgreementInputEnvelope
    set?: AgreementChargeWhereUniqueInput | AgreementChargeWhereUniqueInput[]
    disconnect?: AgreementChargeWhereUniqueInput | AgreementChargeWhereUniqueInput[]
    delete?: AgreementChargeWhereUniqueInput | AgreementChargeWhereUniqueInput[]
    connect?: AgreementChargeWhereUniqueInput | AgreementChargeWhereUniqueInput[]
    update?: AgreementChargeUpdateWithWhereUniqueWithoutRentalAgreementInput | AgreementChargeUpdateWithWhereUniqueWithoutRentalAgreementInput[]
    updateMany?: AgreementChargeUpdateManyWithWhereWithoutRentalAgreementInput | AgreementChargeUpdateManyWithWhereWithoutRentalAgreementInput[]
    deleteMany?: AgreementChargeScalarWhereInput | AgreementChargeScalarWhereInput[]
  }

  export type BillUncheckedUpdateManyWithoutRentalAgreementNestedInput = {
    create?: XOR<BillCreateWithoutRentalAgreementInput, BillUncheckedCreateWithoutRentalAgreementInput> | BillCreateWithoutRentalAgreementInput[] | BillUncheckedCreateWithoutRentalAgreementInput[]
    connectOrCreate?: BillCreateOrConnectWithoutRentalAgreementInput | BillCreateOrConnectWithoutRentalAgreementInput[]
    upsert?: BillUpsertWithWhereUniqueWithoutRentalAgreementInput | BillUpsertWithWhereUniqueWithoutRentalAgreementInput[]
    createMany?: BillCreateManyRentalAgreementInputEnvelope
    set?: BillWhereUniqueInput | BillWhereUniqueInput[]
    disconnect?: BillWhereUniqueInput | BillWhereUniqueInput[]
    delete?: BillWhereUniqueInput | BillWhereUniqueInput[]
    connect?: BillWhereUniqueInput | BillWhereUniqueInput[]
    update?: BillUpdateWithWhereUniqueWithoutRentalAgreementInput | BillUpdateWithWhereUniqueWithoutRentalAgreementInput[]
    updateMany?: BillUpdateManyWithWhereWithoutRentalAgreementInput | BillUpdateManyWithWhereWithoutRentalAgreementInput[]
    deleteMany?: BillScalarWhereInput | BillScalarWhereInput[]
  }

  export type RentalAgreementCreateNestedOneWithoutChargesInput = {
    create?: XOR<RentalAgreementCreateWithoutChargesInput, RentalAgreementUncheckedCreateWithoutChargesInput>
    connectOrCreate?: RentalAgreementCreateOrConnectWithoutChargesInput
    connect?: RentalAgreementWhereUniqueInput
  }

  export type EnumChargeTypeFieldUpdateOperationsInput = {
    set?: $Enums.ChargeType
  }

  export type EnumChargeMethodFieldUpdateOperationsInput = {
    set?: $Enums.ChargeMethod
  }

  export type RentalAgreementUpdateOneRequiredWithoutChargesNestedInput = {
    create?: XOR<RentalAgreementCreateWithoutChargesInput, RentalAgreementUncheckedCreateWithoutChargesInput>
    connectOrCreate?: RentalAgreementCreateOrConnectWithoutChargesInput
    upsert?: RentalAgreementUpsertWithoutChargesInput
    connect?: RentalAgreementWhereUniqueInput
    update?: XOR<XOR<RentalAgreementUpdateToOneWithWhereWithoutChargesInput, RentalAgreementUpdateWithoutChargesInput>, RentalAgreementUncheckedUpdateWithoutChargesInput>
  }

  export type MeterCreateNestedOneWithoutReadingsInput = {
    create?: XOR<MeterCreateWithoutReadingsInput, MeterUncheckedCreateWithoutReadingsInput>
    connectOrCreate?: MeterCreateOrConnectWithoutReadingsInput
    connect?: MeterWhereUniqueInput
  }

  export type MeterUpdateOneRequiredWithoutReadingsNestedInput = {
    create?: XOR<MeterCreateWithoutReadingsInput, MeterUncheckedCreateWithoutReadingsInput>
    connectOrCreate?: MeterCreateOrConnectWithoutReadingsInput
    upsert?: MeterUpsertWithoutReadingsInput
    connect?: MeterWhereUniqueInput
    update?: XOR<XOR<MeterUpdateToOneWithWhereWithoutReadingsInput, MeterUpdateWithoutReadingsInput>, MeterUncheckedUpdateWithoutReadingsInput>
  }

  export type RentalAgreementCreateNestedOneWithoutBillsInput = {
    create?: XOR<RentalAgreementCreateWithoutBillsInput, RentalAgreementUncheckedCreateWithoutBillsInput>
    connectOrCreate?: RentalAgreementCreateOrConnectWithoutBillsInput
    connect?: RentalAgreementWhereUniqueInput
  }

  export type BillItemCreateNestedManyWithoutBillInput = {
    create?: XOR<BillItemCreateWithoutBillInput, BillItemUncheckedCreateWithoutBillInput> | BillItemCreateWithoutBillInput[] | BillItemUncheckedCreateWithoutBillInput[]
    connectOrCreate?: BillItemCreateOrConnectWithoutBillInput | BillItemCreateOrConnectWithoutBillInput[]
    createMany?: BillItemCreateManyBillInputEnvelope
    connect?: BillItemWhereUniqueInput | BillItemWhereUniqueInput[]
  }

  export type PaymentCreateNestedManyWithoutBillInput = {
    create?: XOR<PaymentCreateWithoutBillInput, PaymentUncheckedCreateWithoutBillInput> | PaymentCreateWithoutBillInput[] | PaymentUncheckedCreateWithoutBillInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutBillInput | PaymentCreateOrConnectWithoutBillInput[]
    createMany?: PaymentCreateManyBillInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type BillItemUncheckedCreateNestedManyWithoutBillInput = {
    create?: XOR<BillItemCreateWithoutBillInput, BillItemUncheckedCreateWithoutBillInput> | BillItemCreateWithoutBillInput[] | BillItemUncheckedCreateWithoutBillInput[]
    connectOrCreate?: BillItemCreateOrConnectWithoutBillInput | BillItemCreateOrConnectWithoutBillInput[]
    createMany?: BillItemCreateManyBillInputEnvelope
    connect?: BillItemWhereUniqueInput | BillItemWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutBillInput = {
    create?: XOR<PaymentCreateWithoutBillInput, PaymentUncheckedCreateWithoutBillInput> | PaymentCreateWithoutBillInput[] | PaymentUncheckedCreateWithoutBillInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutBillInput | PaymentCreateOrConnectWithoutBillInput[]
    createMany?: PaymentCreateManyBillInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type EnumBillStatusFieldUpdateOperationsInput = {
    set?: $Enums.BillStatus
  }

  export type RentalAgreementUpdateOneRequiredWithoutBillsNestedInput = {
    create?: XOR<RentalAgreementCreateWithoutBillsInput, RentalAgreementUncheckedCreateWithoutBillsInput>
    connectOrCreate?: RentalAgreementCreateOrConnectWithoutBillsInput
    upsert?: RentalAgreementUpsertWithoutBillsInput
    connect?: RentalAgreementWhereUniqueInput
    update?: XOR<XOR<RentalAgreementUpdateToOneWithWhereWithoutBillsInput, RentalAgreementUpdateWithoutBillsInput>, RentalAgreementUncheckedUpdateWithoutBillsInput>
  }

  export type BillItemUpdateManyWithoutBillNestedInput = {
    create?: XOR<BillItemCreateWithoutBillInput, BillItemUncheckedCreateWithoutBillInput> | BillItemCreateWithoutBillInput[] | BillItemUncheckedCreateWithoutBillInput[]
    connectOrCreate?: BillItemCreateOrConnectWithoutBillInput | BillItemCreateOrConnectWithoutBillInput[]
    upsert?: BillItemUpsertWithWhereUniqueWithoutBillInput | BillItemUpsertWithWhereUniqueWithoutBillInput[]
    createMany?: BillItemCreateManyBillInputEnvelope
    set?: BillItemWhereUniqueInput | BillItemWhereUniqueInput[]
    disconnect?: BillItemWhereUniqueInput | BillItemWhereUniqueInput[]
    delete?: BillItemWhereUniqueInput | BillItemWhereUniqueInput[]
    connect?: BillItemWhereUniqueInput | BillItemWhereUniqueInput[]
    update?: BillItemUpdateWithWhereUniqueWithoutBillInput | BillItemUpdateWithWhereUniqueWithoutBillInput[]
    updateMany?: BillItemUpdateManyWithWhereWithoutBillInput | BillItemUpdateManyWithWhereWithoutBillInput[]
    deleteMany?: BillItemScalarWhereInput | BillItemScalarWhereInput[]
  }

  export type PaymentUpdateManyWithoutBillNestedInput = {
    create?: XOR<PaymentCreateWithoutBillInput, PaymentUncheckedCreateWithoutBillInput> | PaymentCreateWithoutBillInput[] | PaymentUncheckedCreateWithoutBillInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutBillInput | PaymentCreateOrConnectWithoutBillInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutBillInput | PaymentUpsertWithWhereUniqueWithoutBillInput[]
    createMany?: PaymentCreateManyBillInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutBillInput | PaymentUpdateWithWhereUniqueWithoutBillInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutBillInput | PaymentUpdateManyWithWhereWithoutBillInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type BillItemUncheckedUpdateManyWithoutBillNestedInput = {
    create?: XOR<BillItemCreateWithoutBillInput, BillItemUncheckedCreateWithoutBillInput> | BillItemCreateWithoutBillInput[] | BillItemUncheckedCreateWithoutBillInput[]
    connectOrCreate?: BillItemCreateOrConnectWithoutBillInput | BillItemCreateOrConnectWithoutBillInput[]
    upsert?: BillItemUpsertWithWhereUniqueWithoutBillInput | BillItemUpsertWithWhereUniqueWithoutBillInput[]
    createMany?: BillItemCreateManyBillInputEnvelope
    set?: BillItemWhereUniqueInput | BillItemWhereUniqueInput[]
    disconnect?: BillItemWhereUniqueInput | BillItemWhereUniqueInput[]
    delete?: BillItemWhereUniqueInput | BillItemWhereUniqueInput[]
    connect?: BillItemWhereUniqueInput | BillItemWhereUniqueInput[]
    update?: BillItemUpdateWithWhereUniqueWithoutBillInput | BillItemUpdateWithWhereUniqueWithoutBillInput[]
    updateMany?: BillItemUpdateManyWithWhereWithoutBillInput | BillItemUpdateManyWithWhereWithoutBillInput[]
    deleteMany?: BillItemScalarWhereInput | BillItemScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutBillNestedInput = {
    create?: XOR<PaymentCreateWithoutBillInput, PaymentUncheckedCreateWithoutBillInput> | PaymentCreateWithoutBillInput[] | PaymentUncheckedCreateWithoutBillInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutBillInput | PaymentCreateOrConnectWithoutBillInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutBillInput | PaymentUpsertWithWhereUniqueWithoutBillInput[]
    createMany?: PaymentCreateManyBillInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutBillInput | PaymentUpdateWithWhereUniqueWithoutBillInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutBillInput | PaymentUpdateManyWithWhereWithoutBillInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type BillCreateNestedOneWithoutItemsInput = {
    create?: XOR<BillCreateWithoutItemsInput, BillUncheckedCreateWithoutItemsInput>
    connectOrCreate?: BillCreateOrConnectWithoutItemsInput
    connect?: BillWhereUniqueInput
  }

  export type BillUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<BillCreateWithoutItemsInput, BillUncheckedCreateWithoutItemsInput>
    connectOrCreate?: BillCreateOrConnectWithoutItemsInput
    upsert?: BillUpsertWithoutItemsInput
    connect?: BillWhereUniqueInput
    update?: XOR<XOR<BillUpdateToOneWithWhereWithoutItemsInput, BillUpdateWithoutItemsInput>, BillUncheckedUpdateWithoutItemsInput>
  }

  export type BillCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<BillCreateWithoutPaymentsInput, BillUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: BillCreateOrConnectWithoutPaymentsInput
    connect?: BillWhereUniqueInput
  }

  export type EnumPaymentMethodFieldUpdateOperationsInput = {
    set?: $Enums.PaymentMethod
  }

  export type BillUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<BillCreateWithoutPaymentsInput, BillUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: BillCreateOrConnectWithoutPaymentsInput
    upsert?: BillUpsertWithoutPaymentsInput
    connect?: BillWhereUniqueInput
    update?: XOR<XOR<BillUpdateToOneWithWhereWithoutPaymentsInput, BillUpdateWithoutPaymentsInput>, BillUncheckedUpdateWithoutPaymentsInput>
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

  export type NestedEnumUnitTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.UnitType | EnumUnitTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UnitType[] | ListEnumUnitTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UnitType[] | ListEnumUnitTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUnitTypeFilter<$PrismaModel> | $Enums.UnitType
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

  export type NestedEnumUnitTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UnitType | EnumUnitTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UnitType[] | ListEnumUnitTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UnitType[] | ListEnumUnitTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUnitTypeWithAggregatesFilter<$PrismaModel> | $Enums.UnitType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUnitTypeFilter<$PrismaModel>
    _max?: NestedEnumUnitTypeFilter<$PrismaModel>
  }

  export type NestedEnumMeterTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MeterType | EnumMeterTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MeterType[] | ListEnumMeterTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MeterType[] | ListEnumMeterTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMeterTypeFilter<$PrismaModel> | $Enums.MeterType
  }

  export type NestedEnumMeterStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MeterStatus | EnumMeterStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MeterStatus[] | ListEnumMeterStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MeterStatus[] | ListEnumMeterStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMeterStatusFilter<$PrismaModel> | $Enums.MeterStatus
  }

  export type NestedEnumMeterTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MeterType | EnumMeterTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MeterType[] | ListEnumMeterTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MeterType[] | ListEnumMeterTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMeterTypeWithAggregatesFilter<$PrismaModel> | $Enums.MeterType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMeterTypeFilter<$PrismaModel>
    _max?: NestedEnumMeterTypeFilter<$PrismaModel>
  }

  export type NestedEnumMeterStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MeterStatus | EnumMeterStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MeterStatus[] | ListEnumMeterStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MeterStatus[] | ListEnumMeterStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMeterStatusWithAggregatesFilter<$PrismaModel> | $Enums.MeterStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMeterStatusFilter<$PrismaModel>
    _max?: NestedEnumMeterStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumRentalStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RentalStatus | EnumRentalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RentalStatus[] | ListEnumRentalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RentalStatus[] | ListEnumRentalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRentalStatusFilter<$PrismaModel> | $Enums.RentalStatus
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumRentalStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RentalStatus | EnumRentalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RentalStatus[] | ListEnumRentalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RentalStatus[] | ListEnumRentalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRentalStatusWithAggregatesFilter<$PrismaModel> | $Enums.RentalStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRentalStatusFilter<$PrismaModel>
    _max?: NestedEnumRentalStatusFilter<$PrismaModel>
  }

  export type NestedEnumChargeTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ChargeType | EnumChargeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ChargeType[] | ListEnumChargeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChargeType[] | ListEnumChargeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumChargeTypeFilter<$PrismaModel> | $Enums.ChargeType
  }

  export type NestedEnumChargeMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.ChargeMethod | EnumChargeMethodFieldRefInput<$PrismaModel>
    in?: $Enums.ChargeMethod[] | ListEnumChargeMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChargeMethod[] | ListEnumChargeMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumChargeMethodFilter<$PrismaModel> | $Enums.ChargeMethod
  }

  export type NestedEnumChargeTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ChargeType | EnumChargeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ChargeType[] | ListEnumChargeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChargeType[] | ListEnumChargeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumChargeTypeWithAggregatesFilter<$PrismaModel> | $Enums.ChargeType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumChargeTypeFilter<$PrismaModel>
    _max?: NestedEnumChargeTypeFilter<$PrismaModel>
  }

  export type NestedEnumChargeMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ChargeMethod | EnumChargeMethodFieldRefInput<$PrismaModel>
    in?: $Enums.ChargeMethod[] | ListEnumChargeMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChargeMethod[] | ListEnumChargeMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumChargeMethodWithAggregatesFilter<$PrismaModel> | $Enums.ChargeMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumChargeMethodFilter<$PrismaModel>
    _max?: NestedEnumChargeMethodFilter<$PrismaModel>
  }

  export type NestedEnumBillStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BillStatus | EnumBillStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BillStatus[] | ListEnumBillStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BillStatus[] | ListEnumBillStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBillStatusFilter<$PrismaModel> | $Enums.BillStatus
  }

  export type NestedEnumBillStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BillStatus | EnumBillStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BillStatus[] | ListEnumBillStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BillStatus[] | ListEnumBillStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBillStatusWithAggregatesFilter<$PrismaModel> | $Enums.BillStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBillStatusFilter<$PrismaModel>
    _max?: NestedEnumBillStatusFilter<$PrismaModel>
  }

  export type NestedEnumPaymentMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodFilter<$PrismaModel> | $Enums.PaymentMethod
  }

  export type NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodFilter<$PrismaModel>
  }

  export type RentalUnitCreateWithoutPropertyInput = {
    id?: string
    name: string
    unitNumber: string
    floor: number
    type: $Enums.UnitType
    createdAt?: Date | string
    updatedAt?: Date | string
    assignments?: MeterAssignmentCreateNestedManyWithoutRentalUnitInput
    rentals?: RentalAgreementCreateNestedManyWithoutRentalUnitInput
  }

  export type RentalUnitUncheckedCreateWithoutPropertyInput = {
    id?: string
    name: string
    unitNumber: string
    floor: number
    type: $Enums.UnitType
    createdAt?: Date | string
    updatedAt?: Date | string
    assignments?: MeterAssignmentUncheckedCreateNestedManyWithoutRentalUnitInput
    rentals?: RentalAgreementUncheckedCreateNestedManyWithoutRentalUnitInput
  }

  export type RentalUnitCreateOrConnectWithoutPropertyInput = {
    where: RentalUnitWhereUniqueInput
    create: XOR<RentalUnitCreateWithoutPropertyInput, RentalUnitUncheckedCreateWithoutPropertyInput>
  }

  export type RentalUnitCreateManyPropertyInputEnvelope = {
    data: RentalUnitCreateManyPropertyInput | RentalUnitCreateManyPropertyInput[]
    skipDuplicates?: boolean
  }

  export type MeterCreateWithoutPropertyInput = {
    id?: string
    meterNumber: string
    type: $Enums.MeterType
    status?: $Enums.MeterStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    assignments?: MeterAssignmentCreateNestedManyWithoutMeterInput
    readings?: MeterReadingCreateNestedManyWithoutMeterInput
  }

  export type MeterUncheckedCreateWithoutPropertyInput = {
    id?: string
    meterNumber: string
    type: $Enums.MeterType
    status?: $Enums.MeterStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    assignments?: MeterAssignmentUncheckedCreateNestedManyWithoutMeterInput
    readings?: MeterReadingUncheckedCreateNestedManyWithoutMeterInput
  }

  export type MeterCreateOrConnectWithoutPropertyInput = {
    where: MeterWhereUniqueInput
    create: XOR<MeterCreateWithoutPropertyInput, MeterUncheckedCreateWithoutPropertyInput>
  }

  export type MeterCreateManyPropertyInputEnvelope = {
    data: MeterCreateManyPropertyInput | MeterCreateManyPropertyInput[]
    skipDuplicates?: boolean
  }

  export type RentalUnitUpsertWithWhereUniqueWithoutPropertyInput = {
    where: RentalUnitWhereUniqueInput
    update: XOR<RentalUnitUpdateWithoutPropertyInput, RentalUnitUncheckedUpdateWithoutPropertyInput>
    create: XOR<RentalUnitCreateWithoutPropertyInput, RentalUnitUncheckedCreateWithoutPropertyInput>
  }

  export type RentalUnitUpdateWithWhereUniqueWithoutPropertyInput = {
    where: RentalUnitWhereUniqueInput
    data: XOR<RentalUnitUpdateWithoutPropertyInput, RentalUnitUncheckedUpdateWithoutPropertyInput>
  }

  export type RentalUnitUpdateManyWithWhereWithoutPropertyInput = {
    where: RentalUnitScalarWhereInput
    data: XOR<RentalUnitUpdateManyMutationInput, RentalUnitUncheckedUpdateManyWithoutPropertyInput>
  }

  export type RentalUnitScalarWhereInput = {
    AND?: RentalUnitScalarWhereInput | RentalUnitScalarWhereInput[]
    OR?: RentalUnitScalarWhereInput[]
    NOT?: RentalUnitScalarWhereInput | RentalUnitScalarWhereInput[]
    id?: StringFilter<"RentalUnit"> | string
    name?: StringFilter<"RentalUnit"> | string
    unitNumber?: StringFilter<"RentalUnit"> | string
    floor?: IntFilter<"RentalUnit"> | number
    type?: EnumUnitTypeFilter<"RentalUnit"> | $Enums.UnitType
    propertyId?: StringFilter<"RentalUnit"> | string
    createdAt?: DateTimeFilter<"RentalUnit"> | Date | string
    updatedAt?: DateTimeFilter<"RentalUnit"> | Date | string
  }

  export type MeterUpsertWithWhereUniqueWithoutPropertyInput = {
    where: MeterWhereUniqueInput
    update: XOR<MeterUpdateWithoutPropertyInput, MeterUncheckedUpdateWithoutPropertyInput>
    create: XOR<MeterCreateWithoutPropertyInput, MeterUncheckedCreateWithoutPropertyInput>
  }

  export type MeterUpdateWithWhereUniqueWithoutPropertyInput = {
    where: MeterWhereUniqueInput
    data: XOR<MeterUpdateWithoutPropertyInput, MeterUncheckedUpdateWithoutPropertyInput>
  }

  export type MeterUpdateManyWithWhereWithoutPropertyInput = {
    where: MeterScalarWhereInput
    data: XOR<MeterUpdateManyMutationInput, MeterUncheckedUpdateManyWithoutPropertyInput>
  }

  export type MeterScalarWhereInput = {
    AND?: MeterScalarWhereInput | MeterScalarWhereInput[]
    OR?: MeterScalarWhereInput[]
    NOT?: MeterScalarWhereInput | MeterScalarWhereInput[]
    id?: StringFilter<"Meter"> | string
    meterNumber?: StringFilter<"Meter"> | string
    type?: EnumMeterTypeFilter<"Meter"> | $Enums.MeterType
    status?: EnumMeterStatusFilter<"Meter"> | $Enums.MeterStatus
    propertyId?: StringFilter<"Meter"> | string
    createdAt?: DateTimeFilter<"Meter"> | Date | string
    updatedAt?: DateTimeFilter<"Meter"> | Date | string
  }

  export type PropertyCreateWithoutUnitsInput = {
    id?: string
    name: string
    address?: string | null
    city?: string | null
    state?: string | null
    pinCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    meters?: MeterCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateWithoutUnitsInput = {
    id?: string
    name: string
    address?: string | null
    city?: string | null
    state?: string | null
    pinCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    meters?: MeterUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutUnitsInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutUnitsInput, PropertyUncheckedCreateWithoutUnitsInput>
  }

  export type MeterAssignmentCreateWithoutRentalUnitInput = {
    id?: string
    createdAt?: Date | string
    meter: MeterCreateNestedOneWithoutAssignmentsInput
  }

  export type MeterAssignmentUncheckedCreateWithoutRentalUnitInput = {
    id?: string
    meterId: string
    createdAt?: Date | string
  }

  export type MeterAssignmentCreateOrConnectWithoutRentalUnitInput = {
    where: MeterAssignmentWhereUniqueInput
    create: XOR<MeterAssignmentCreateWithoutRentalUnitInput, MeterAssignmentUncheckedCreateWithoutRentalUnitInput>
  }

  export type MeterAssignmentCreateManyRentalUnitInputEnvelope = {
    data: MeterAssignmentCreateManyRentalUnitInput | MeterAssignmentCreateManyRentalUnitInput[]
    skipDuplicates?: boolean
  }

  export type RentalAgreementCreateWithoutRentalUnitInput = {
    id?: string
    securityDeposit: number
    startDate: Date | string
    endDate?: Date | string | null
    status?: $Enums.RentalStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutRentalsInput
    charges?: AgreementChargeCreateNestedManyWithoutRentalAgreementInput
    bills?: BillCreateNestedManyWithoutRentalAgreementInput
  }

  export type RentalAgreementUncheckedCreateWithoutRentalUnitInput = {
    id?: string
    tenantId: string
    securityDeposit: number
    startDate: Date | string
    endDate?: Date | string | null
    status?: $Enums.RentalStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    charges?: AgreementChargeUncheckedCreateNestedManyWithoutRentalAgreementInput
    bills?: BillUncheckedCreateNestedManyWithoutRentalAgreementInput
  }

  export type RentalAgreementCreateOrConnectWithoutRentalUnitInput = {
    where: RentalAgreementWhereUniqueInput
    create: XOR<RentalAgreementCreateWithoutRentalUnitInput, RentalAgreementUncheckedCreateWithoutRentalUnitInput>
  }

  export type RentalAgreementCreateManyRentalUnitInputEnvelope = {
    data: RentalAgreementCreateManyRentalUnitInput | RentalAgreementCreateManyRentalUnitInput[]
    skipDuplicates?: boolean
  }

  export type PropertyUpsertWithoutUnitsInput = {
    update: XOR<PropertyUpdateWithoutUnitsInput, PropertyUncheckedUpdateWithoutUnitsInput>
    create: XOR<PropertyCreateWithoutUnitsInput, PropertyUncheckedCreateWithoutUnitsInput>
    where?: PropertyWhereInput
  }

  export type PropertyUpdateToOneWithWhereWithoutUnitsInput = {
    where?: PropertyWhereInput
    data: XOR<PropertyUpdateWithoutUnitsInput, PropertyUncheckedUpdateWithoutUnitsInput>
  }

  export type PropertyUpdateWithoutUnitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    pinCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meters?: MeterUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateWithoutUnitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    pinCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meters?: MeterUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type MeterAssignmentUpsertWithWhereUniqueWithoutRentalUnitInput = {
    where: MeterAssignmentWhereUniqueInput
    update: XOR<MeterAssignmentUpdateWithoutRentalUnitInput, MeterAssignmentUncheckedUpdateWithoutRentalUnitInput>
    create: XOR<MeterAssignmentCreateWithoutRentalUnitInput, MeterAssignmentUncheckedCreateWithoutRentalUnitInput>
  }

  export type MeterAssignmentUpdateWithWhereUniqueWithoutRentalUnitInput = {
    where: MeterAssignmentWhereUniqueInput
    data: XOR<MeterAssignmentUpdateWithoutRentalUnitInput, MeterAssignmentUncheckedUpdateWithoutRentalUnitInput>
  }

  export type MeterAssignmentUpdateManyWithWhereWithoutRentalUnitInput = {
    where: MeterAssignmentScalarWhereInput
    data: XOR<MeterAssignmentUpdateManyMutationInput, MeterAssignmentUncheckedUpdateManyWithoutRentalUnitInput>
  }

  export type MeterAssignmentScalarWhereInput = {
    AND?: MeterAssignmentScalarWhereInput | MeterAssignmentScalarWhereInput[]
    OR?: MeterAssignmentScalarWhereInput[]
    NOT?: MeterAssignmentScalarWhereInput | MeterAssignmentScalarWhereInput[]
    id?: StringFilter<"MeterAssignment"> | string
    meterId?: StringFilter<"MeterAssignment"> | string
    rentalUnitId?: StringFilter<"MeterAssignment"> | string
    createdAt?: DateTimeFilter<"MeterAssignment"> | Date | string
  }

  export type RentalAgreementUpsertWithWhereUniqueWithoutRentalUnitInput = {
    where: RentalAgreementWhereUniqueInput
    update: XOR<RentalAgreementUpdateWithoutRentalUnitInput, RentalAgreementUncheckedUpdateWithoutRentalUnitInput>
    create: XOR<RentalAgreementCreateWithoutRentalUnitInput, RentalAgreementUncheckedCreateWithoutRentalUnitInput>
  }

  export type RentalAgreementUpdateWithWhereUniqueWithoutRentalUnitInput = {
    where: RentalAgreementWhereUniqueInput
    data: XOR<RentalAgreementUpdateWithoutRentalUnitInput, RentalAgreementUncheckedUpdateWithoutRentalUnitInput>
  }

  export type RentalAgreementUpdateManyWithWhereWithoutRentalUnitInput = {
    where: RentalAgreementScalarWhereInput
    data: XOR<RentalAgreementUpdateManyMutationInput, RentalAgreementUncheckedUpdateManyWithoutRentalUnitInput>
  }

  export type RentalAgreementScalarWhereInput = {
    AND?: RentalAgreementScalarWhereInput | RentalAgreementScalarWhereInput[]
    OR?: RentalAgreementScalarWhereInput[]
    NOT?: RentalAgreementScalarWhereInput | RentalAgreementScalarWhereInput[]
    id?: StringFilter<"RentalAgreement"> | string
    tenantId?: StringFilter<"RentalAgreement"> | string
    rentalUnitId?: StringFilter<"RentalAgreement"> | string
    securityDeposit?: FloatFilter<"RentalAgreement"> | number
    startDate?: DateTimeFilter<"RentalAgreement"> | Date | string
    endDate?: DateTimeNullableFilter<"RentalAgreement"> | Date | string | null
    status?: EnumRentalStatusFilter<"RentalAgreement"> | $Enums.RentalStatus
    createdAt?: DateTimeFilter<"RentalAgreement"> | Date | string
    updatedAt?: DateTimeFilter<"RentalAgreement"> | Date | string
  }

  export type PropertyCreateWithoutMetersInput = {
    id?: string
    name: string
    address?: string | null
    city?: string | null
    state?: string | null
    pinCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    units?: RentalUnitCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateWithoutMetersInput = {
    id?: string
    name: string
    address?: string | null
    city?: string | null
    state?: string | null
    pinCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    units?: RentalUnitUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutMetersInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutMetersInput, PropertyUncheckedCreateWithoutMetersInput>
  }

  export type MeterAssignmentCreateWithoutMeterInput = {
    id?: string
    createdAt?: Date | string
    rentalUnit: RentalUnitCreateNestedOneWithoutAssignmentsInput
  }

  export type MeterAssignmentUncheckedCreateWithoutMeterInput = {
    id?: string
    rentalUnitId: string
    createdAt?: Date | string
  }

  export type MeterAssignmentCreateOrConnectWithoutMeterInput = {
    where: MeterAssignmentWhereUniqueInput
    create: XOR<MeterAssignmentCreateWithoutMeterInput, MeterAssignmentUncheckedCreateWithoutMeterInput>
  }

  export type MeterAssignmentCreateManyMeterInputEnvelope = {
    data: MeterAssignmentCreateManyMeterInput | MeterAssignmentCreateManyMeterInput[]
    skipDuplicates?: boolean
  }

  export type MeterReadingCreateWithoutMeterInput = {
    id?: string
    readingDate: Date | string
    previousReading: number
    currentReading: number
    unitsConsumed: number
    createdAt?: Date | string
  }

  export type MeterReadingUncheckedCreateWithoutMeterInput = {
    id?: string
    readingDate: Date | string
    previousReading: number
    currentReading: number
    unitsConsumed: number
    createdAt?: Date | string
  }

  export type MeterReadingCreateOrConnectWithoutMeterInput = {
    where: MeterReadingWhereUniqueInput
    create: XOR<MeterReadingCreateWithoutMeterInput, MeterReadingUncheckedCreateWithoutMeterInput>
  }

  export type MeterReadingCreateManyMeterInputEnvelope = {
    data: MeterReadingCreateManyMeterInput | MeterReadingCreateManyMeterInput[]
    skipDuplicates?: boolean
  }

  export type PropertyUpsertWithoutMetersInput = {
    update: XOR<PropertyUpdateWithoutMetersInput, PropertyUncheckedUpdateWithoutMetersInput>
    create: XOR<PropertyCreateWithoutMetersInput, PropertyUncheckedCreateWithoutMetersInput>
    where?: PropertyWhereInput
  }

  export type PropertyUpdateToOneWithWhereWithoutMetersInput = {
    where?: PropertyWhereInput
    data: XOR<PropertyUpdateWithoutMetersInput, PropertyUncheckedUpdateWithoutMetersInput>
  }

  export type PropertyUpdateWithoutMetersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    pinCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    units?: RentalUnitUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateWithoutMetersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    pinCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    units?: RentalUnitUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type MeterAssignmentUpsertWithWhereUniqueWithoutMeterInput = {
    where: MeterAssignmentWhereUniqueInput
    update: XOR<MeterAssignmentUpdateWithoutMeterInput, MeterAssignmentUncheckedUpdateWithoutMeterInput>
    create: XOR<MeterAssignmentCreateWithoutMeterInput, MeterAssignmentUncheckedCreateWithoutMeterInput>
  }

  export type MeterAssignmentUpdateWithWhereUniqueWithoutMeterInput = {
    where: MeterAssignmentWhereUniqueInput
    data: XOR<MeterAssignmentUpdateWithoutMeterInput, MeterAssignmentUncheckedUpdateWithoutMeterInput>
  }

  export type MeterAssignmentUpdateManyWithWhereWithoutMeterInput = {
    where: MeterAssignmentScalarWhereInput
    data: XOR<MeterAssignmentUpdateManyMutationInput, MeterAssignmentUncheckedUpdateManyWithoutMeterInput>
  }

  export type MeterReadingUpsertWithWhereUniqueWithoutMeterInput = {
    where: MeterReadingWhereUniqueInput
    update: XOR<MeterReadingUpdateWithoutMeterInput, MeterReadingUncheckedUpdateWithoutMeterInput>
    create: XOR<MeterReadingCreateWithoutMeterInput, MeterReadingUncheckedCreateWithoutMeterInput>
  }

  export type MeterReadingUpdateWithWhereUniqueWithoutMeterInput = {
    where: MeterReadingWhereUniqueInput
    data: XOR<MeterReadingUpdateWithoutMeterInput, MeterReadingUncheckedUpdateWithoutMeterInput>
  }

  export type MeterReadingUpdateManyWithWhereWithoutMeterInput = {
    where: MeterReadingScalarWhereInput
    data: XOR<MeterReadingUpdateManyMutationInput, MeterReadingUncheckedUpdateManyWithoutMeterInput>
  }

  export type MeterReadingScalarWhereInput = {
    AND?: MeterReadingScalarWhereInput | MeterReadingScalarWhereInput[]
    OR?: MeterReadingScalarWhereInput[]
    NOT?: MeterReadingScalarWhereInput | MeterReadingScalarWhereInput[]
    id?: StringFilter<"MeterReading"> | string
    meterId?: StringFilter<"MeterReading"> | string
    readingDate?: DateTimeFilter<"MeterReading"> | Date | string
    previousReading?: FloatFilter<"MeterReading"> | number
    currentReading?: FloatFilter<"MeterReading"> | number
    unitsConsumed?: FloatFilter<"MeterReading"> | number
    createdAt?: DateTimeFilter<"MeterReading"> | Date | string
  }

  export type MeterCreateWithoutAssignmentsInput = {
    id?: string
    meterNumber: string
    type: $Enums.MeterType
    status?: $Enums.MeterStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    property: PropertyCreateNestedOneWithoutMetersInput
    readings?: MeterReadingCreateNestedManyWithoutMeterInput
  }

  export type MeterUncheckedCreateWithoutAssignmentsInput = {
    id?: string
    meterNumber: string
    type: $Enums.MeterType
    status?: $Enums.MeterStatus
    propertyId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    readings?: MeterReadingUncheckedCreateNestedManyWithoutMeterInput
  }

  export type MeterCreateOrConnectWithoutAssignmentsInput = {
    where: MeterWhereUniqueInput
    create: XOR<MeterCreateWithoutAssignmentsInput, MeterUncheckedCreateWithoutAssignmentsInput>
  }

  export type RentalUnitCreateWithoutAssignmentsInput = {
    id?: string
    name: string
    unitNumber: string
    floor: number
    type: $Enums.UnitType
    createdAt?: Date | string
    updatedAt?: Date | string
    property: PropertyCreateNestedOneWithoutUnitsInput
    rentals?: RentalAgreementCreateNestedManyWithoutRentalUnitInput
  }

  export type RentalUnitUncheckedCreateWithoutAssignmentsInput = {
    id?: string
    name: string
    unitNumber: string
    floor: number
    type: $Enums.UnitType
    propertyId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    rentals?: RentalAgreementUncheckedCreateNestedManyWithoutRentalUnitInput
  }

  export type RentalUnitCreateOrConnectWithoutAssignmentsInput = {
    where: RentalUnitWhereUniqueInput
    create: XOR<RentalUnitCreateWithoutAssignmentsInput, RentalUnitUncheckedCreateWithoutAssignmentsInput>
  }

  export type MeterUpsertWithoutAssignmentsInput = {
    update: XOR<MeterUpdateWithoutAssignmentsInput, MeterUncheckedUpdateWithoutAssignmentsInput>
    create: XOR<MeterCreateWithoutAssignmentsInput, MeterUncheckedCreateWithoutAssignmentsInput>
    where?: MeterWhereInput
  }

  export type MeterUpdateToOneWithWhereWithoutAssignmentsInput = {
    where?: MeterWhereInput
    data: XOR<MeterUpdateWithoutAssignmentsInput, MeterUncheckedUpdateWithoutAssignmentsInput>
  }

  export type MeterUpdateWithoutAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    meterNumber?: StringFieldUpdateOperationsInput | string
    type?: EnumMeterTypeFieldUpdateOperationsInput | $Enums.MeterType
    status?: EnumMeterStatusFieldUpdateOperationsInput | $Enums.MeterStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUpdateOneRequiredWithoutMetersNestedInput
    readings?: MeterReadingUpdateManyWithoutMeterNestedInput
  }

  export type MeterUncheckedUpdateWithoutAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    meterNumber?: StringFieldUpdateOperationsInput | string
    type?: EnumMeterTypeFieldUpdateOperationsInput | $Enums.MeterType
    status?: EnumMeterStatusFieldUpdateOperationsInput | $Enums.MeterStatus
    propertyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readings?: MeterReadingUncheckedUpdateManyWithoutMeterNestedInput
  }

  export type RentalUnitUpsertWithoutAssignmentsInput = {
    update: XOR<RentalUnitUpdateWithoutAssignmentsInput, RentalUnitUncheckedUpdateWithoutAssignmentsInput>
    create: XOR<RentalUnitCreateWithoutAssignmentsInput, RentalUnitUncheckedCreateWithoutAssignmentsInput>
    where?: RentalUnitWhereInput
  }

  export type RentalUnitUpdateToOneWithWhereWithoutAssignmentsInput = {
    where?: RentalUnitWhereInput
    data: XOR<RentalUnitUpdateWithoutAssignmentsInput, RentalUnitUncheckedUpdateWithoutAssignmentsInput>
  }

  export type RentalUnitUpdateWithoutAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unitNumber?: StringFieldUpdateOperationsInput | string
    floor?: IntFieldUpdateOperationsInput | number
    type?: EnumUnitTypeFieldUpdateOperationsInput | $Enums.UnitType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUpdateOneRequiredWithoutUnitsNestedInput
    rentals?: RentalAgreementUpdateManyWithoutRentalUnitNestedInput
  }

  export type RentalUnitUncheckedUpdateWithoutAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unitNumber?: StringFieldUpdateOperationsInput | string
    floor?: IntFieldUpdateOperationsInput | number
    type?: EnumUnitTypeFieldUpdateOperationsInput | $Enums.UnitType
    propertyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rentals?: RentalAgreementUncheckedUpdateManyWithoutRentalUnitNestedInput
  }

  export type RentalAgreementCreateWithoutTenantInput = {
    id?: string
    securityDeposit: number
    startDate: Date | string
    endDate?: Date | string | null
    status?: $Enums.RentalStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    rentalUnit: RentalUnitCreateNestedOneWithoutRentalsInput
    charges?: AgreementChargeCreateNestedManyWithoutRentalAgreementInput
    bills?: BillCreateNestedManyWithoutRentalAgreementInput
  }

  export type RentalAgreementUncheckedCreateWithoutTenantInput = {
    id?: string
    rentalUnitId: string
    securityDeposit: number
    startDate: Date | string
    endDate?: Date | string | null
    status?: $Enums.RentalStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    charges?: AgreementChargeUncheckedCreateNestedManyWithoutRentalAgreementInput
    bills?: BillUncheckedCreateNestedManyWithoutRentalAgreementInput
  }

  export type RentalAgreementCreateOrConnectWithoutTenantInput = {
    where: RentalAgreementWhereUniqueInput
    create: XOR<RentalAgreementCreateWithoutTenantInput, RentalAgreementUncheckedCreateWithoutTenantInput>
  }

  export type RentalAgreementCreateManyTenantInputEnvelope = {
    data: RentalAgreementCreateManyTenantInput | RentalAgreementCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type RentalAgreementUpsertWithWhereUniqueWithoutTenantInput = {
    where: RentalAgreementWhereUniqueInput
    update: XOR<RentalAgreementUpdateWithoutTenantInput, RentalAgreementUncheckedUpdateWithoutTenantInput>
    create: XOR<RentalAgreementCreateWithoutTenantInput, RentalAgreementUncheckedCreateWithoutTenantInput>
  }

  export type RentalAgreementUpdateWithWhereUniqueWithoutTenantInput = {
    where: RentalAgreementWhereUniqueInput
    data: XOR<RentalAgreementUpdateWithoutTenantInput, RentalAgreementUncheckedUpdateWithoutTenantInput>
  }

  export type RentalAgreementUpdateManyWithWhereWithoutTenantInput = {
    where: RentalAgreementScalarWhereInput
    data: XOR<RentalAgreementUpdateManyMutationInput, RentalAgreementUncheckedUpdateManyWithoutTenantInput>
  }

  export type TenantCreateWithoutRentalsInput = {
    id?: string
    fullName: string
    phone: string
    email?: string | null
    governmentId?: string | null
    address?: string | null
    emergencyContact?: string | null
    createdAt?: Date | string
  }

  export type TenantUncheckedCreateWithoutRentalsInput = {
    id?: string
    fullName: string
    phone: string
    email?: string | null
    governmentId?: string | null
    address?: string | null
    emergencyContact?: string | null
    createdAt?: Date | string
  }

  export type TenantCreateOrConnectWithoutRentalsInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutRentalsInput, TenantUncheckedCreateWithoutRentalsInput>
  }

  export type RentalUnitCreateWithoutRentalsInput = {
    id?: string
    name: string
    unitNumber: string
    floor: number
    type: $Enums.UnitType
    createdAt?: Date | string
    updatedAt?: Date | string
    property: PropertyCreateNestedOneWithoutUnitsInput
    assignments?: MeterAssignmentCreateNestedManyWithoutRentalUnitInput
  }

  export type RentalUnitUncheckedCreateWithoutRentalsInput = {
    id?: string
    name: string
    unitNumber: string
    floor: number
    type: $Enums.UnitType
    propertyId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    assignments?: MeterAssignmentUncheckedCreateNestedManyWithoutRentalUnitInput
  }

  export type RentalUnitCreateOrConnectWithoutRentalsInput = {
    where: RentalUnitWhereUniqueInput
    create: XOR<RentalUnitCreateWithoutRentalsInput, RentalUnitUncheckedCreateWithoutRentalsInput>
  }

  export type AgreementChargeCreateWithoutRentalAgreementInput = {
    id?: string
    chargeType: $Enums.ChargeType
    calculation: $Enums.ChargeMethod
    amount: number
    createdAt?: Date | string
  }

  export type AgreementChargeUncheckedCreateWithoutRentalAgreementInput = {
    id?: string
    chargeType: $Enums.ChargeType
    calculation: $Enums.ChargeMethod
    amount: number
    createdAt?: Date | string
  }

  export type AgreementChargeCreateOrConnectWithoutRentalAgreementInput = {
    where: AgreementChargeWhereUniqueInput
    create: XOR<AgreementChargeCreateWithoutRentalAgreementInput, AgreementChargeUncheckedCreateWithoutRentalAgreementInput>
  }

  export type AgreementChargeCreateManyRentalAgreementInputEnvelope = {
    data: AgreementChargeCreateManyRentalAgreementInput | AgreementChargeCreateManyRentalAgreementInput[]
    skipDuplicates?: boolean
  }

  export type BillCreateWithoutRentalAgreementInput = {
    id?: string
    billingMonth: Date | string
    totalAmount: number
    status?: $Enums.BillStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: BillItemCreateNestedManyWithoutBillInput
    payments?: PaymentCreateNestedManyWithoutBillInput
  }

  export type BillUncheckedCreateWithoutRentalAgreementInput = {
    id?: string
    billingMonth: Date | string
    totalAmount: number
    status?: $Enums.BillStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: BillItemUncheckedCreateNestedManyWithoutBillInput
    payments?: PaymentUncheckedCreateNestedManyWithoutBillInput
  }

  export type BillCreateOrConnectWithoutRentalAgreementInput = {
    where: BillWhereUniqueInput
    create: XOR<BillCreateWithoutRentalAgreementInput, BillUncheckedCreateWithoutRentalAgreementInput>
  }

  export type BillCreateManyRentalAgreementInputEnvelope = {
    data: BillCreateManyRentalAgreementInput | BillCreateManyRentalAgreementInput[]
    skipDuplicates?: boolean
  }

  export type TenantUpsertWithoutRentalsInput = {
    update: XOR<TenantUpdateWithoutRentalsInput, TenantUncheckedUpdateWithoutRentalsInput>
    create: XOR<TenantCreateWithoutRentalsInput, TenantUncheckedCreateWithoutRentalsInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutRentalsInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutRentalsInput, TenantUncheckedUpdateWithoutRentalsInput>
  }

  export type TenantUpdateWithoutRentalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    governmentId?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantUncheckedUpdateWithoutRentalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    governmentId?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RentalUnitUpsertWithoutRentalsInput = {
    update: XOR<RentalUnitUpdateWithoutRentalsInput, RentalUnitUncheckedUpdateWithoutRentalsInput>
    create: XOR<RentalUnitCreateWithoutRentalsInput, RentalUnitUncheckedCreateWithoutRentalsInput>
    where?: RentalUnitWhereInput
  }

  export type RentalUnitUpdateToOneWithWhereWithoutRentalsInput = {
    where?: RentalUnitWhereInput
    data: XOR<RentalUnitUpdateWithoutRentalsInput, RentalUnitUncheckedUpdateWithoutRentalsInput>
  }

  export type RentalUnitUpdateWithoutRentalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unitNumber?: StringFieldUpdateOperationsInput | string
    floor?: IntFieldUpdateOperationsInput | number
    type?: EnumUnitTypeFieldUpdateOperationsInput | $Enums.UnitType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUpdateOneRequiredWithoutUnitsNestedInput
    assignments?: MeterAssignmentUpdateManyWithoutRentalUnitNestedInput
  }

  export type RentalUnitUncheckedUpdateWithoutRentalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unitNumber?: StringFieldUpdateOperationsInput | string
    floor?: IntFieldUpdateOperationsInput | number
    type?: EnumUnitTypeFieldUpdateOperationsInput | $Enums.UnitType
    propertyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignments?: MeterAssignmentUncheckedUpdateManyWithoutRentalUnitNestedInput
  }

  export type AgreementChargeUpsertWithWhereUniqueWithoutRentalAgreementInput = {
    where: AgreementChargeWhereUniqueInput
    update: XOR<AgreementChargeUpdateWithoutRentalAgreementInput, AgreementChargeUncheckedUpdateWithoutRentalAgreementInput>
    create: XOR<AgreementChargeCreateWithoutRentalAgreementInput, AgreementChargeUncheckedCreateWithoutRentalAgreementInput>
  }

  export type AgreementChargeUpdateWithWhereUniqueWithoutRentalAgreementInput = {
    where: AgreementChargeWhereUniqueInput
    data: XOR<AgreementChargeUpdateWithoutRentalAgreementInput, AgreementChargeUncheckedUpdateWithoutRentalAgreementInput>
  }

  export type AgreementChargeUpdateManyWithWhereWithoutRentalAgreementInput = {
    where: AgreementChargeScalarWhereInput
    data: XOR<AgreementChargeUpdateManyMutationInput, AgreementChargeUncheckedUpdateManyWithoutRentalAgreementInput>
  }

  export type AgreementChargeScalarWhereInput = {
    AND?: AgreementChargeScalarWhereInput | AgreementChargeScalarWhereInput[]
    OR?: AgreementChargeScalarWhereInput[]
    NOT?: AgreementChargeScalarWhereInput | AgreementChargeScalarWhereInput[]
    id?: StringFilter<"AgreementCharge"> | string
    rentalAgreementId?: StringFilter<"AgreementCharge"> | string
    chargeType?: EnumChargeTypeFilter<"AgreementCharge"> | $Enums.ChargeType
    calculation?: EnumChargeMethodFilter<"AgreementCharge"> | $Enums.ChargeMethod
    amount?: FloatFilter<"AgreementCharge"> | number
    createdAt?: DateTimeFilter<"AgreementCharge"> | Date | string
  }

  export type BillUpsertWithWhereUniqueWithoutRentalAgreementInput = {
    where: BillWhereUniqueInput
    update: XOR<BillUpdateWithoutRentalAgreementInput, BillUncheckedUpdateWithoutRentalAgreementInput>
    create: XOR<BillCreateWithoutRentalAgreementInput, BillUncheckedCreateWithoutRentalAgreementInput>
  }

  export type BillUpdateWithWhereUniqueWithoutRentalAgreementInput = {
    where: BillWhereUniqueInput
    data: XOR<BillUpdateWithoutRentalAgreementInput, BillUncheckedUpdateWithoutRentalAgreementInput>
  }

  export type BillUpdateManyWithWhereWithoutRentalAgreementInput = {
    where: BillScalarWhereInput
    data: XOR<BillUpdateManyMutationInput, BillUncheckedUpdateManyWithoutRentalAgreementInput>
  }

  export type BillScalarWhereInput = {
    AND?: BillScalarWhereInput | BillScalarWhereInput[]
    OR?: BillScalarWhereInput[]
    NOT?: BillScalarWhereInput | BillScalarWhereInput[]
    id?: StringFilter<"Bill"> | string
    rentalAgreementId?: StringFilter<"Bill"> | string
    billingMonth?: DateTimeFilter<"Bill"> | Date | string
    totalAmount?: FloatFilter<"Bill"> | number
    status?: EnumBillStatusFilter<"Bill"> | $Enums.BillStatus
    createdAt?: DateTimeFilter<"Bill"> | Date | string
    updatedAt?: DateTimeFilter<"Bill"> | Date | string
  }

  export type RentalAgreementCreateWithoutChargesInput = {
    id?: string
    securityDeposit: number
    startDate: Date | string
    endDate?: Date | string | null
    status?: $Enums.RentalStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutRentalsInput
    rentalUnit: RentalUnitCreateNestedOneWithoutRentalsInput
    bills?: BillCreateNestedManyWithoutRentalAgreementInput
  }

  export type RentalAgreementUncheckedCreateWithoutChargesInput = {
    id?: string
    tenantId: string
    rentalUnitId: string
    securityDeposit: number
    startDate: Date | string
    endDate?: Date | string | null
    status?: $Enums.RentalStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    bills?: BillUncheckedCreateNestedManyWithoutRentalAgreementInput
  }

  export type RentalAgreementCreateOrConnectWithoutChargesInput = {
    where: RentalAgreementWhereUniqueInput
    create: XOR<RentalAgreementCreateWithoutChargesInput, RentalAgreementUncheckedCreateWithoutChargesInput>
  }

  export type RentalAgreementUpsertWithoutChargesInput = {
    update: XOR<RentalAgreementUpdateWithoutChargesInput, RentalAgreementUncheckedUpdateWithoutChargesInput>
    create: XOR<RentalAgreementCreateWithoutChargesInput, RentalAgreementUncheckedCreateWithoutChargesInput>
    where?: RentalAgreementWhereInput
  }

  export type RentalAgreementUpdateToOneWithWhereWithoutChargesInput = {
    where?: RentalAgreementWhereInput
    data: XOR<RentalAgreementUpdateWithoutChargesInput, RentalAgreementUncheckedUpdateWithoutChargesInput>
  }

  export type RentalAgreementUpdateWithoutChargesInput = {
    id?: StringFieldUpdateOperationsInput | string
    securityDeposit?: FloatFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumRentalStatusFieldUpdateOperationsInput | $Enums.RentalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutRentalsNestedInput
    rentalUnit?: RentalUnitUpdateOneRequiredWithoutRentalsNestedInput
    bills?: BillUpdateManyWithoutRentalAgreementNestedInput
  }

  export type RentalAgreementUncheckedUpdateWithoutChargesInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    rentalUnitId?: StringFieldUpdateOperationsInput | string
    securityDeposit?: FloatFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumRentalStatusFieldUpdateOperationsInput | $Enums.RentalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bills?: BillUncheckedUpdateManyWithoutRentalAgreementNestedInput
  }

  export type MeterCreateWithoutReadingsInput = {
    id?: string
    meterNumber: string
    type: $Enums.MeterType
    status?: $Enums.MeterStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    property: PropertyCreateNestedOneWithoutMetersInput
    assignments?: MeterAssignmentCreateNestedManyWithoutMeterInput
  }

  export type MeterUncheckedCreateWithoutReadingsInput = {
    id?: string
    meterNumber: string
    type: $Enums.MeterType
    status?: $Enums.MeterStatus
    propertyId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    assignments?: MeterAssignmentUncheckedCreateNestedManyWithoutMeterInput
  }

  export type MeterCreateOrConnectWithoutReadingsInput = {
    where: MeterWhereUniqueInput
    create: XOR<MeterCreateWithoutReadingsInput, MeterUncheckedCreateWithoutReadingsInput>
  }

  export type MeterUpsertWithoutReadingsInput = {
    update: XOR<MeterUpdateWithoutReadingsInput, MeterUncheckedUpdateWithoutReadingsInput>
    create: XOR<MeterCreateWithoutReadingsInput, MeterUncheckedCreateWithoutReadingsInput>
    where?: MeterWhereInput
  }

  export type MeterUpdateToOneWithWhereWithoutReadingsInput = {
    where?: MeterWhereInput
    data: XOR<MeterUpdateWithoutReadingsInput, MeterUncheckedUpdateWithoutReadingsInput>
  }

  export type MeterUpdateWithoutReadingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    meterNumber?: StringFieldUpdateOperationsInput | string
    type?: EnumMeterTypeFieldUpdateOperationsInput | $Enums.MeterType
    status?: EnumMeterStatusFieldUpdateOperationsInput | $Enums.MeterStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUpdateOneRequiredWithoutMetersNestedInput
    assignments?: MeterAssignmentUpdateManyWithoutMeterNestedInput
  }

  export type MeterUncheckedUpdateWithoutReadingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    meterNumber?: StringFieldUpdateOperationsInput | string
    type?: EnumMeterTypeFieldUpdateOperationsInput | $Enums.MeterType
    status?: EnumMeterStatusFieldUpdateOperationsInput | $Enums.MeterStatus
    propertyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignments?: MeterAssignmentUncheckedUpdateManyWithoutMeterNestedInput
  }

  export type RentalAgreementCreateWithoutBillsInput = {
    id?: string
    securityDeposit: number
    startDate: Date | string
    endDate?: Date | string | null
    status?: $Enums.RentalStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutRentalsInput
    rentalUnit: RentalUnitCreateNestedOneWithoutRentalsInput
    charges?: AgreementChargeCreateNestedManyWithoutRentalAgreementInput
  }

  export type RentalAgreementUncheckedCreateWithoutBillsInput = {
    id?: string
    tenantId: string
    rentalUnitId: string
    securityDeposit: number
    startDate: Date | string
    endDate?: Date | string | null
    status?: $Enums.RentalStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    charges?: AgreementChargeUncheckedCreateNestedManyWithoutRentalAgreementInput
  }

  export type RentalAgreementCreateOrConnectWithoutBillsInput = {
    where: RentalAgreementWhereUniqueInput
    create: XOR<RentalAgreementCreateWithoutBillsInput, RentalAgreementUncheckedCreateWithoutBillsInput>
  }

  export type BillItemCreateWithoutBillInput = {
    id?: string
    description: string
    quantity: number
    rate: number
    amount: number
  }

  export type BillItemUncheckedCreateWithoutBillInput = {
    id?: string
    description: string
    quantity: number
    rate: number
    amount: number
  }

  export type BillItemCreateOrConnectWithoutBillInput = {
    where: BillItemWhereUniqueInput
    create: XOR<BillItemCreateWithoutBillInput, BillItemUncheckedCreateWithoutBillInput>
  }

  export type BillItemCreateManyBillInputEnvelope = {
    data: BillItemCreateManyBillInput | BillItemCreateManyBillInput[]
    skipDuplicates?: boolean
  }

  export type PaymentCreateWithoutBillInput = {
    id?: string
    amount: number
    paymentDate: Date | string
    method: $Enums.PaymentMethod
    referenceNo?: string | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type PaymentUncheckedCreateWithoutBillInput = {
    id?: string
    amount: number
    paymentDate: Date | string
    method: $Enums.PaymentMethod
    referenceNo?: string | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutBillInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutBillInput, PaymentUncheckedCreateWithoutBillInput>
  }

  export type PaymentCreateManyBillInputEnvelope = {
    data: PaymentCreateManyBillInput | PaymentCreateManyBillInput[]
    skipDuplicates?: boolean
  }

  export type RentalAgreementUpsertWithoutBillsInput = {
    update: XOR<RentalAgreementUpdateWithoutBillsInput, RentalAgreementUncheckedUpdateWithoutBillsInput>
    create: XOR<RentalAgreementCreateWithoutBillsInput, RentalAgreementUncheckedCreateWithoutBillsInput>
    where?: RentalAgreementWhereInput
  }

  export type RentalAgreementUpdateToOneWithWhereWithoutBillsInput = {
    where?: RentalAgreementWhereInput
    data: XOR<RentalAgreementUpdateWithoutBillsInput, RentalAgreementUncheckedUpdateWithoutBillsInput>
  }

  export type RentalAgreementUpdateWithoutBillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    securityDeposit?: FloatFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumRentalStatusFieldUpdateOperationsInput | $Enums.RentalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutRentalsNestedInput
    rentalUnit?: RentalUnitUpdateOneRequiredWithoutRentalsNestedInput
    charges?: AgreementChargeUpdateManyWithoutRentalAgreementNestedInput
  }

  export type RentalAgreementUncheckedUpdateWithoutBillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    rentalUnitId?: StringFieldUpdateOperationsInput | string
    securityDeposit?: FloatFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumRentalStatusFieldUpdateOperationsInput | $Enums.RentalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    charges?: AgreementChargeUncheckedUpdateManyWithoutRentalAgreementNestedInput
  }

  export type BillItemUpsertWithWhereUniqueWithoutBillInput = {
    where: BillItemWhereUniqueInput
    update: XOR<BillItemUpdateWithoutBillInput, BillItemUncheckedUpdateWithoutBillInput>
    create: XOR<BillItemCreateWithoutBillInput, BillItemUncheckedCreateWithoutBillInput>
  }

  export type BillItemUpdateWithWhereUniqueWithoutBillInput = {
    where: BillItemWhereUniqueInput
    data: XOR<BillItemUpdateWithoutBillInput, BillItemUncheckedUpdateWithoutBillInput>
  }

  export type BillItemUpdateManyWithWhereWithoutBillInput = {
    where: BillItemScalarWhereInput
    data: XOR<BillItemUpdateManyMutationInput, BillItemUncheckedUpdateManyWithoutBillInput>
  }

  export type BillItemScalarWhereInput = {
    AND?: BillItemScalarWhereInput | BillItemScalarWhereInput[]
    OR?: BillItemScalarWhereInput[]
    NOT?: BillItemScalarWhereInput | BillItemScalarWhereInput[]
    id?: StringFilter<"BillItem"> | string
    billId?: StringFilter<"BillItem"> | string
    description?: StringFilter<"BillItem"> | string
    quantity?: FloatFilter<"BillItem"> | number
    rate?: FloatFilter<"BillItem"> | number
    amount?: FloatFilter<"BillItem"> | number
  }

  export type PaymentUpsertWithWhereUniqueWithoutBillInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutBillInput, PaymentUncheckedUpdateWithoutBillInput>
    create: XOR<PaymentCreateWithoutBillInput, PaymentUncheckedCreateWithoutBillInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutBillInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutBillInput, PaymentUncheckedUpdateWithoutBillInput>
  }

  export type PaymentUpdateManyWithWhereWithoutBillInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutBillInput>
  }

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    OR?: PaymentScalarWhereInput[]
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    id?: StringFilter<"Payment"> | string
    billId?: StringFilter<"Payment"> | string
    amount?: FloatFilter<"Payment"> | number
    paymentDate?: DateTimeFilter<"Payment"> | Date | string
    method?: EnumPaymentMethodFilter<"Payment"> | $Enums.PaymentMethod
    referenceNo?: StringNullableFilter<"Payment"> | string | null
    notes?: StringNullableFilter<"Payment"> | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
  }

  export type BillCreateWithoutItemsInput = {
    id?: string
    billingMonth: Date | string
    totalAmount: number
    status?: $Enums.BillStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    rentalAgreement: RentalAgreementCreateNestedOneWithoutBillsInput
    payments?: PaymentCreateNestedManyWithoutBillInput
  }

  export type BillUncheckedCreateWithoutItemsInput = {
    id?: string
    rentalAgreementId: string
    billingMonth: Date | string
    totalAmount: number
    status?: $Enums.BillStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutBillInput
  }

  export type BillCreateOrConnectWithoutItemsInput = {
    where: BillWhereUniqueInput
    create: XOR<BillCreateWithoutItemsInput, BillUncheckedCreateWithoutItemsInput>
  }

  export type BillUpsertWithoutItemsInput = {
    update: XOR<BillUpdateWithoutItemsInput, BillUncheckedUpdateWithoutItemsInput>
    create: XOR<BillCreateWithoutItemsInput, BillUncheckedCreateWithoutItemsInput>
    where?: BillWhereInput
  }

  export type BillUpdateToOneWithWhereWithoutItemsInput = {
    where?: BillWhereInput
    data: XOR<BillUpdateWithoutItemsInput, BillUncheckedUpdateWithoutItemsInput>
  }

  export type BillUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    billingMonth?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    status?: EnumBillStatusFieldUpdateOperationsInput | $Enums.BillStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rentalAgreement?: RentalAgreementUpdateOneRequiredWithoutBillsNestedInput
    payments?: PaymentUpdateManyWithoutBillNestedInput
  }

  export type BillUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    rentalAgreementId?: StringFieldUpdateOperationsInput | string
    billingMonth?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    status?: EnumBillStatusFieldUpdateOperationsInput | $Enums.BillStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutBillNestedInput
  }

  export type BillCreateWithoutPaymentsInput = {
    id?: string
    billingMonth: Date | string
    totalAmount: number
    status?: $Enums.BillStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    rentalAgreement: RentalAgreementCreateNestedOneWithoutBillsInput
    items?: BillItemCreateNestedManyWithoutBillInput
  }

  export type BillUncheckedCreateWithoutPaymentsInput = {
    id?: string
    rentalAgreementId: string
    billingMonth: Date | string
    totalAmount: number
    status?: $Enums.BillStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: BillItemUncheckedCreateNestedManyWithoutBillInput
  }

  export type BillCreateOrConnectWithoutPaymentsInput = {
    where: BillWhereUniqueInput
    create: XOR<BillCreateWithoutPaymentsInput, BillUncheckedCreateWithoutPaymentsInput>
  }

  export type BillUpsertWithoutPaymentsInput = {
    update: XOR<BillUpdateWithoutPaymentsInput, BillUncheckedUpdateWithoutPaymentsInput>
    create: XOR<BillCreateWithoutPaymentsInput, BillUncheckedCreateWithoutPaymentsInput>
    where?: BillWhereInput
  }

  export type BillUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: BillWhereInput
    data: XOR<BillUpdateWithoutPaymentsInput, BillUncheckedUpdateWithoutPaymentsInput>
  }

  export type BillUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    billingMonth?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    status?: EnumBillStatusFieldUpdateOperationsInput | $Enums.BillStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rentalAgreement?: RentalAgreementUpdateOneRequiredWithoutBillsNestedInput
    items?: BillItemUpdateManyWithoutBillNestedInput
  }

  export type BillUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    rentalAgreementId?: StringFieldUpdateOperationsInput | string
    billingMonth?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    status?: EnumBillStatusFieldUpdateOperationsInput | $Enums.BillStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: BillItemUncheckedUpdateManyWithoutBillNestedInput
  }

  export type RentalUnitCreateManyPropertyInput = {
    id?: string
    name: string
    unitNumber: string
    floor: number
    type: $Enums.UnitType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MeterCreateManyPropertyInput = {
    id?: string
    meterNumber: string
    type: $Enums.MeterType
    status?: $Enums.MeterStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RentalUnitUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unitNumber?: StringFieldUpdateOperationsInput | string
    floor?: IntFieldUpdateOperationsInput | number
    type?: EnumUnitTypeFieldUpdateOperationsInput | $Enums.UnitType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignments?: MeterAssignmentUpdateManyWithoutRentalUnitNestedInput
    rentals?: RentalAgreementUpdateManyWithoutRentalUnitNestedInput
  }

  export type RentalUnitUncheckedUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unitNumber?: StringFieldUpdateOperationsInput | string
    floor?: IntFieldUpdateOperationsInput | number
    type?: EnumUnitTypeFieldUpdateOperationsInput | $Enums.UnitType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignments?: MeterAssignmentUncheckedUpdateManyWithoutRentalUnitNestedInput
    rentals?: RentalAgreementUncheckedUpdateManyWithoutRentalUnitNestedInput
  }

  export type RentalUnitUncheckedUpdateManyWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unitNumber?: StringFieldUpdateOperationsInput | string
    floor?: IntFieldUpdateOperationsInput | number
    type?: EnumUnitTypeFieldUpdateOperationsInput | $Enums.UnitType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeterUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    meterNumber?: StringFieldUpdateOperationsInput | string
    type?: EnumMeterTypeFieldUpdateOperationsInput | $Enums.MeterType
    status?: EnumMeterStatusFieldUpdateOperationsInput | $Enums.MeterStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignments?: MeterAssignmentUpdateManyWithoutMeterNestedInput
    readings?: MeterReadingUpdateManyWithoutMeterNestedInput
  }

  export type MeterUncheckedUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    meterNumber?: StringFieldUpdateOperationsInput | string
    type?: EnumMeterTypeFieldUpdateOperationsInput | $Enums.MeterType
    status?: EnumMeterStatusFieldUpdateOperationsInput | $Enums.MeterStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignments?: MeterAssignmentUncheckedUpdateManyWithoutMeterNestedInput
    readings?: MeterReadingUncheckedUpdateManyWithoutMeterNestedInput
  }

  export type MeterUncheckedUpdateManyWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    meterNumber?: StringFieldUpdateOperationsInput | string
    type?: EnumMeterTypeFieldUpdateOperationsInput | $Enums.MeterType
    status?: EnumMeterStatusFieldUpdateOperationsInput | $Enums.MeterStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeterAssignmentCreateManyRentalUnitInput = {
    id?: string
    meterId: string
    createdAt?: Date | string
  }

  export type RentalAgreementCreateManyRentalUnitInput = {
    id?: string
    tenantId: string
    securityDeposit: number
    startDate: Date | string
    endDate?: Date | string | null
    status?: $Enums.RentalStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MeterAssignmentUpdateWithoutRentalUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meter?: MeterUpdateOneRequiredWithoutAssignmentsNestedInput
  }

  export type MeterAssignmentUncheckedUpdateWithoutRentalUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    meterId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeterAssignmentUncheckedUpdateManyWithoutRentalUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    meterId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RentalAgreementUpdateWithoutRentalUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    securityDeposit?: FloatFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumRentalStatusFieldUpdateOperationsInput | $Enums.RentalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutRentalsNestedInput
    charges?: AgreementChargeUpdateManyWithoutRentalAgreementNestedInput
    bills?: BillUpdateManyWithoutRentalAgreementNestedInput
  }

  export type RentalAgreementUncheckedUpdateWithoutRentalUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    securityDeposit?: FloatFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumRentalStatusFieldUpdateOperationsInput | $Enums.RentalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    charges?: AgreementChargeUncheckedUpdateManyWithoutRentalAgreementNestedInput
    bills?: BillUncheckedUpdateManyWithoutRentalAgreementNestedInput
  }

  export type RentalAgreementUncheckedUpdateManyWithoutRentalUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    securityDeposit?: FloatFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumRentalStatusFieldUpdateOperationsInput | $Enums.RentalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeterAssignmentCreateManyMeterInput = {
    id?: string
    rentalUnitId: string
    createdAt?: Date | string
  }

  export type MeterReadingCreateManyMeterInput = {
    id?: string
    readingDate: Date | string
    previousReading: number
    currentReading: number
    unitsConsumed: number
    createdAt?: Date | string
  }

  export type MeterAssignmentUpdateWithoutMeterInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rentalUnit?: RentalUnitUpdateOneRequiredWithoutAssignmentsNestedInput
  }

  export type MeterAssignmentUncheckedUpdateWithoutMeterInput = {
    id?: StringFieldUpdateOperationsInput | string
    rentalUnitId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeterAssignmentUncheckedUpdateManyWithoutMeterInput = {
    id?: StringFieldUpdateOperationsInput | string
    rentalUnitId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeterReadingUpdateWithoutMeterInput = {
    id?: StringFieldUpdateOperationsInput | string
    readingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    previousReading?: FloatFieldUpdateOperationsInput | number
    currentReading?: FloatFieldUpdateOperationsInput | number
    unitsConsumed?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeterReadingUncheckedUpdateWithoutMeterInput = {
    id?: StringFieldUpdateOperationsInput | string
    readingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    previousReading?: FloatFieldUpdateOperationsInput | number
    currentReading?: FloatFieldUpdateOperationsInput | number
    unitsConsumed?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeterReadingUncheckedUpdateManyWithoutMeterInput = {
    id?: StringFieldUpdateOperationsInput | string
    readingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    previousReading?: FloatFieldUpdateOperationsInput | number
    currentReading?: FloatFieldUpdateOperationsInput | number
    unitsConsumed?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RentalAgreementCreateManyTenantInput = {
    id?: string
    rentalUnitId: string
    securityDeposit: number
    startDate: Date | string
    endDate?: Date | string | null
    status?: $Enums.RentalStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RentalAgreementUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    securityDeposit?: FloatFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumRentalStatusFieldUpdateOperationsInput | $Enums.RentalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rentalUnit?: RentalUnitUpdateOneRequiredWithoutRentalsNestedInput
    charges?: AgreementChargeUpdateManyWithoutRentalAgreementNestedInput
    bills?: BillUpdateManyWithoutRentalAgreementNestedInput
  }

  export type RentalAgreementUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    rentalUnitId?: StringFieldUpdateOperationsInput | string
    securityDeposit?: FloatFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumRentalStatusFieldUpdateOperationsInput | $Enums.RentalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    charges?: AgreementChargeUncheckedUpdateManyWithoutRentalAgreementNestedInput
    bills?: BillUncheckedUpdateManyWithoutRentalAgreementNestedInput
  }

  export type RentalAgreementUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    rentalUnitId?: StringFieldUpdateOperationsInput | string
    securityDeposit?: FloatFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumRentalStatusFieldUpdateOperationsInput | $Enums.RentalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgreementChargeCreateManyRentalAgreementInput = {
    id?: string
    chargeType: $Enums.ChargeType
    calculation: $Enums.ChargeMethod
    amount: number
    createdAt?: Date | string
  }

  export type BillCreateManyRentalAgreementInput = {
    id?: string
    billingMonth: Date | string
    totalAmount: number
    status?: $Enums.BillStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AgreementChargeUpdateWithoutRentalAgreementInput = {
    id?: StringFieldUpdateOperationsInput | string
    chargeType?: EnumChargeTypeFieldUpdateOperationsInput | $Enums.ChargeType
    calculation?: EnumChargeMethodFieldUpdateOperationsInput | $Enums.ChargeMethod
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgreementChargeUncheckedUpdateWithoutRentalAgreementInput = {
    id?: StringFieldUpdateOperationsInput | string
    chargeType?: EnumChargeTypeFieldUpdateOperationsInput | $Enums.ChargeType
    calculation?: EnumChargeMethodFieldUpdateOperationsInput | $Enums.ChargeMethod
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgreementChargeUncheckedUpdateManyWithoutRentalAgreementInput = {
    id?: StringFieldUpdateOperationsInput | string
    chargeType?: EnumChargeTypeFieldUpdateOperationsInput | $Enums.ChargeType
    calculation?: EnumChargeMethodFieldUpdateOperationsInput | $Enums.ChargeMethod
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillUpdateWithoutRentalAgreementInput = {
    id?: StringFieldUpdateOperationsInput | string
    billingMonth?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    status?: EnumBillStatusFieldUpdateOperationsInput | $Enums.BillStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: BillItemUpdateManyWithoutBillNestedInput
    payments?: PaymentUpdateManyWithoutBillNestedInput
  }

  export type BillUncheckedUpdateWithoutRentalAgreementInput = {
    id?: StringFieldUpdateOperationsInput | string
    billingMonth?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    status?: EnumBillStatusFieldUpdateOperationsInput | $Enums.BillStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: BillItemUncheckedUpdateManyWithoutBillNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutBillNestedInput
  }

  export type BillUncheckedUpdateManyWithoutRentalAgreementInput = {
    id?: StringFieldUpdateOperationsInput | string
    billingMonth?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    status?: EnumBillStatusFieldUpdateOperationsInput | $Enums.BillStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillItemCreateManyBillInput = {
    id?: string
    description: string
    quantity: number
    rate: number
    amount: number
  }

  export type PaymentCreateManyBillInput = {
    id?: string
    amount: number
    paymentDate: Date | string
    method: $Enums.PaymentMethod
    referenceNo?: string | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type BillItemUpdateWithoutBillInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    rate?: FloatFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
  }

  export type BillItemUncheckedUpdateWithoutBillInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    rate?: FloatFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
  }

  export type BillItemUncheckedUpdateManyWithoutBillInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    rate?: FloatFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
  }

  export type PaymentUpdateWithoutBillInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    referenceNo?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateWithoutBillInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    referenceNo?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyWithoutBillInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    referenceNo?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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