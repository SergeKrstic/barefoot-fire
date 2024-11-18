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
import type { Category } from './category';
// May contain unused imports in some cases
// @ts-ignore
import type { Scenario } from './scenario';

/**
 * 
 * @export
 * @interface Event
 */
export interface Event {
    /**
     * The unique identifier of the event.
     * @type {string}
     * @memberof Event
     */
    'id'?: string;
    /**
     * 
     * @type {Category}
     * @memberof Event
     */
    'category'?: Category;
    /**
     * 
     * @type {Scenario}
     * @memberof Event
     */
    'scenario'?: Scenario;
    /**
     * The amount of the event.
     * @type {number}
     * @memberof Event
     */
    'amount'?: number;
    /**
     * The amount of the event in the user\'s base currency.
     * @type {number}
     * @memberof Event
     */
    'amount_in_base_currency'?: number;
    /**
     * The currency code of the event.
     * @type {string}
     * @memberof Event
     */
    'currency_code'?: string;
    /**
     * The date of the event.
     * @type {string}
     * @memberof Event
     */
    'date'?: string;
    /**
     * The CSS hex-style colour of the event.
     * @type {string}
     * @memberof Event
     */
    'colour'?: string;
    /**
     * The note of the event.
     * @type {string}
     * @memberof Event
     */
    'note'?: string;
    /**
     * The repeat type of the event.
     * @type {string}
     * @memberof Event
     */
    'repeat_type'?: RepeatType;
    /**
     * The repeat interval of how often the event takes place.
     * @type {number}
     * @memberof Event
     */
    'repeat_interval'?: number;
    /**
     * The unique identifier of the series that the event belongs to.
     * @type {number}
     * @memberof Event
     */
    'series_id'?: number;
    /**
     * The unique identifier of the series followed by the series\'s start date.
     * @type {string}
     * @memberof Event
     */
    'series_start_id'?: string;
    /**
     * Whether the event repeats and does not have an end date.
     * @type {boolean}
     * @memberof Event
     */
    'infinite_series'?: boolean;
}

export const RepeatType = {
    Once: 'once',
    Daily: 'daily',
    Weekly: 'weekly',
    Fortnightly: 'fortnightly',
    Monthly: 'monthly',
    Yearly: 'yearly',
    EachWeekday: 'each weekday'
} as const;

export type RepeatType = typeof RepeatType[keyof typeof RepeatType];

