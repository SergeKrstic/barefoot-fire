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

// May contain unused imports in some cases
// @ts-ignore
import type { Scenario } from './scenario'
// May contain unused imports in some cases
// @ts-ignore
import type { TransactionAccount } from './transaction-account'

/**
 *
 * @export
 * @interface Account
 */
export interface Account {
  /**
   * The unique identifier of the account.
   * @type {number}
   * @memberof Account
   */
  id?: number
  /**
   * The title of the account.
   * @type {string}
   * @memberof Account
   */
  title?: string
  /**
   * The currency code for the account.
   * @type {string}
   * @memberof Account
   */
  currency_code?: string
  /**
   * The type of the account.
   * @type {string}
   * @memberof Account
   */
  type?: AccountType
  /**
   * Whether the account is a net worth asset.
   * @type {boolean}
   * @memberof Account
   */
  is_net_worth?: boolean
  /**
   *
   * @type {TransactionAccount}
   * @memberof Account
   */
  primary_transaction_account?: TransactionAccount
  /**
   *
   * @type {Scenario}
   * @memberof Account
   */
  primary_scenario?: Scenario
  /**
   * All transaction accounts that compose the account, including the primary.
   * @type {Array<TransactionAccount>}
   * @memberof Account
   */
  transaction_accounts?: Array<TransactionAccount>
  /**
   * All scenarios that compose the account, including the primary.
   * @type {Array<Scenario>}
   * @memberof Account
   */
  scenarios?: Array<Scenario>
  /**
   * When the account was created.
   * @type {string}
   * @memberof Account
   */
  created_at?: string
  /**
   * When the account was last updated.
   * @type {string}
   * @memberof Account
   */
  updated_at?: string
  /**
   * The current balance of the account.
   * @type {number}
   * @memberof Account
   */
  current_balance?: number
  /**
   * The date of the current balance.
   * @type {string}
   * @memberof Account
   */
  current_balance_date?: string
  /**
   * The current balance of the account in the user\'s base currency.
   * @type {number}
   * @memberof Account
   */
  current_balance_in_base_currency?: number
  /**
   * The exchange rate between the account\'s currency and the user\'s base currency, when different. If the currencies are the same, null is returned.
   * @type {number}
   * @memberof Account
   */
  current_balance_exchange_rate?: number
  /**
   * The current safe balance, if safe balance is activated on the account. If safe balance is not activated, then null is returned.
   * @type {number}
   * @memberof Account
   */
  safe_balance?: number
  /**
   * The current safe balance in the user\'s base currency, if safe balance is activated on the account. If safe balance is not activated, then null is returned.
   * @type {number}
   * @memberof Account
   */
  safe_balance_in_base_currency?: number
}

export const AccountType = {
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

export type AccountType = (typeof AccountType)[keyof typeof AccountType]
