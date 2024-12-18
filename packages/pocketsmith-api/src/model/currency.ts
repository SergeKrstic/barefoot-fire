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

import type { CurrencySeparators } from './currency-separators'

/**
 *
 * @export
 * @interface Currency
 */
export interface Currency {
  /**
   * The ISO 4217 or unofficial currency code.
   * @type {string}
   * @memberof Currency
   */
  id?: string
  /**
   * The name of the currency.
   * @type {string}
   * @memberof Currency
   */
  name?: string
  /**
   * The number of digits after the minor unit separator.
   * @type {number}
   * @memberof Currency
   */
  minor_unit?: number
  /**
   *
   * @type {CurrencySeparators}
   * @memberof Currency
   */
  separators?: CurrencySeparators
  /**
   * The symbol of the currency.
   * @type {string}
   * @memberof Currency
   */
  symbol?: string
}
