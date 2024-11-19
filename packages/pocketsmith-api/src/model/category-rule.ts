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

import type { Category } from './category'

/**
 *
 * @export
 * @interface CategoryRule
 */
export interface CategoryRule {
  /**
   *
   * @type {Category}
   * @memberof CategoryRule
   */
  category?: Category
  /**
   * The unique identifier of the category rule.
   * @type {number}
   * @memberof CategoryRule
   */
  id?: number
  /**
   * The keyword/s to match the transactions payees.
   * @type {string}
   * @memberof CategoryRule
   */
  payee_matches?: string
  /**
   * When the category rule was created.
   * @type {string}
   * @memberof CategoryRule
   */
  created_at?: string
  /**
   * When the category rule was last updated.
   * @type {string}
   * @memberof CategoryRule
   */
  updated_at?: string
}
