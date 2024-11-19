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

import { AccountType } from './account'
import type { Institution } from './institution'

/**
 *
 * @export
 * @interface TransactionAccount
 */
export interface TransactionAccount {
  /**
   *
   * @type {number}
   * @memberof TransactionAccount
   */
  id?: number
  /**
   *
   * @type {string}
   * @memberof TransactionAccount
   */
  name?: string
  /**
   *
   * @type {string}
   * @memberof TransactionAccount
   */
  number?: string
  /**
   *
   * @type {number}
   * @memberof TransactionAccount
   */
  current_balance?: number
  /**
   *
   * @type {string}
   * @memberof TransactionAccount
   */
  current_balance_date?: string
  /**
   * The current balance of the transaction account in the user\'s base currency.
   * @type {number}
   * @memberof TransactionAccount
   */
  current_balance_in_base_currency?: number
  /**
   * The exchange rate between the transaction account\'s currency and the user\'s base currency, when different. If the currencies are the same, null is returned.
   * @type {number}
   * @memberof TransactionAccount
   */
  current_balance_exchange_rate?: number
  /**
   * The current safe balance, if safe balance is activated and available for the transaction account. If safe balance is not available, then null is returned.
   * @type {number}
   * @memberof TransactionAccount
   */
  safe_balance?: number
  /**
   * The current safe balance in the user\'s base currency, if safe balance is activated and available for the transaction account. If safe balance is not available, then null is returned.
   * @type {number}
   * @memberof TransactionAccount
   */
  safe_balance_in_base_currency?: number
  /**
   *
   * @type {number}
   * @memberof TransactionAccount
   */
  starting_balance?: number
  /**
   *
   * @type {string}
   * @memberof TransactionAccount
   */
  starting_balance_date?: string
  /**
   *
   * @type {string}
   * @memberof TransactionAccount
   */
  created_at?: string
  /**
   *
   * @type {string}
   * @memberof TransactionAccount
   */
  updated_at?: string
  /**
   *
   * @type {Institution}
   * @memberof TransactionAccount
   */
  institution?: Institution
  /**
   * The currency that the account is in. This is determined by the account that the transaction account belongs to.
   * @type {string}
   * @memberof TransactionAccount
   */
  currency_code?: string
  /**
   * The type of the transaction account.
   * @type {string}
   * @memberof TransactionAccount
   */
  type?: AccountType
}
