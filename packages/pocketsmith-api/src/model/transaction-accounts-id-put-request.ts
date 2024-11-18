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
 * @interface TransactionAccountsIdPutRequest
 */
export interface TransactionAccountsIdPutRequest {
  /**
   * The unique identifier of a new institution for the transaction account.
   * @type {number}
   * @memberof TransactionAccountsIdPutRequest
   */
  institution_id?: number
  /**
   * The starting balance amount of the transaction account.
   * @type {number}
   * @memberof TransactionAccountsIdPutRequest
   */
  starting_balance?: number
  /**
   * The starting balance date of the transaction account.
   * @type {string}
   * @memberof TransactionAccountsIdPutRequest
   */
  starting_balance_date?: string
}
