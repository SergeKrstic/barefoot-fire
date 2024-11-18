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
 * @interface TransactionAccountsIdTransactionsPostRequest
 */
export interface TransactionAccountsIdTransactionsPostRequest {
  /**
   * The payee/merchant of the transaction.
   * @type {string}
   * @memberof TransactionAccountsIdTransactionsPostRequest
   */
  payee: string
  /**
   * The amount of the transaction. A positive amount is a credit, and a negative amount is a debit.
   * @type {number}
   * @memberof TransactionAccountsIdTransactionsPostRequest
   */
  amount: number
  /**
   * The date when the transaction occurred.
   * @type {string}
   * @memberof TransactionAccountsIdTransactionsPostRequest
   */
  date: string
  /**
   * Whether the transaction should be indicated as a transfer.
   * @type {boolean}
   * @memberof TransactionAccountsIdTransactionsPostRequest
   */
  is_transfer?: boolean
  /**
   * A set of comma-separated labels for the transaction.
   * @type {string}
   * @memberof TransactionAccountsIdTransactionsPostRequest
   */
  labels?: string
  /**
   * The unique identifier of a category for the transaction.
   * @type {number}
   * @memberof TransactionAccountsIdTransactionsPostRequest
   */
  category_id?: number
  /**
   * A note for the transaction.
   * @type {string}
   * @memberof TransactionAccountsIdTransactionsPostRequest
   */
  note?: string
  /**
   * A memo for the transaction.
   * @type {string}
   * @memberof TransactionAccountsIdTransactionsPostRequest
   */
  memo?: string
  /**
   * A cheque number for the transaction.
   * @type {string}
   * @memberof TransactionAccountsIdTransactionsPostRequest
   */
  cheque_number?: string
  /**
   * Whether the transaction needs to be reviewed or not.
   * @type {boolean}
   * @memberof TransactionAccountsIdTransactionsPostRequest
   */
  needs_review?: boolean
}
