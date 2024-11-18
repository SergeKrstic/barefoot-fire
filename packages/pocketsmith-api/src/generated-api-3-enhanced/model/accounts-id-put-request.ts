/* tslint:disable */
/* eslint-disable */
/**
 * PocketSmith
 * The PocketSmith API
 *
 * The version of the OpenAPI document: 2.0
 * Contact: api@pocketsmith.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 *
 * @export
 * @interface AccountsIdPutRequest
 */
export interface AccountsIdPutRequest {
  /**
   * A new title for the account.
   * @type {string}
   * @memberof AccountsIdPutRequest
   */
  title?: string
  /**
   * A new currency code for the account.
   * @type {string}
   * @memberof AccountsIdPutRequest
   */
  currency_code?: string
  /**
   * The type of the account.
   * @type {string}
   * @memberof AccountsIdPutRequest
   */
  type?: Type
  /**
   * Whether the account is a net worth account.
   * @type {boolean}
   * @memberof AccountsIdPutRequest
   */
  is_net_worth?: boolean
}

export const Type = {
  Bank: 'bank',
  Credits: 'credits',
  Cash: 'cash',
  Loans: 'loans',
  Mortgage: 'mortgage',
  Stocks: 'stocks',
  Vehicle: 'vehicle',
  Property: 'property',
  Insurance: 'insurance',
  OtherAsset: 'other_asset',
  OtherLiability: 'other_liability',
} as const

export type Type = (typeof Type)[keyof typeof Type]
