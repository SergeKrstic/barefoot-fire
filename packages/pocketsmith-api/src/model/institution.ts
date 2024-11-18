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
 * @interface Institution
 */
export interface Institution {
  /**
   * The currency code of the institution.
   * @type {string}
   * @memberof Institution
   */
  currency_code?: string
  /**
   * The title of the institution.
   * @type {string}
   * @memberof Institution
   */
  title?: string
  /**
   * When the institution was last updated.
   * @type {string}
   * @memberof Institution
   */
  updated_at?: string
  /**
   * When the institution was created.
   * @type {string}
   * @memberof Institution
   */
  created_at?: string
  /**
   * The unique identifier of the institution.
   * @type {number}
   * @memberof Institution
   */
  id?: number
}
