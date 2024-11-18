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
 * @interface UsersIdAccountsPostRequest
 */
export interface UsersIdAccountsPostRequest {
  /**
   * The ID of the institution to create this account in.
   * @type {number}
   * @memberof UsersIdAccountsPostRequest
   */
  institution_id: number
  /**
   * A title for the account.
   * @type {string}
   * @memberof UsersIdAccountsPostRequest
   */
  title: string
  /**
   * A currency code for the account.
   * @type {string}
   * @memberof UsersIdAccountsPostRequest
   */
  currency_code: string
  /**
   * The type of the account.
   * @type {string}
   * @memberof UsersIdAccountsPostRequest
   */
  type: Type
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
