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
 * @interface Scenario
 */
export interface Scenario {
    /**
     * The unique identifier of the scenario.
     * @type {number}
     * @memberof Scenario
     */
    'id'?: number;
    /**
     * The title of the scenario.
     * @type {string}
     * @memberof Scenario
     */
    'title'?: string;
    /**
     * A short description of what the scenario is modelling.
     * @type {string}
     * @memberof Scenario
     */
    'description'?: string;
    /**
     * The amount of interest to apply to the balance. Will apply periodically depending on what `interest_rate_repeat_id` is set to.
     * @type {number}
     * @memberof Scenario
     */
    'interest_rate'?: number;
    /**
     * A number representing how often the interest should be applied. 0 is used for no interest, 2 is weekly, 3 is fortnightly, 4 is monthly, 5 is yearly and 7 for quarterly.
     * @type {number}
     * @memberof Scenario
     */
    'interest_rate_repeat_id'?: number;
    /**
     * The type of the scenario.
     * @type {string}
     * @memberof Scenario
     */
    'type'?: Type;
    /**
     * 
     * @type {number}
     * @memberof Scenario
     */
    'minimum-value'?: number;
    /**
     * 
     * @type {number}
     * @memberof Scenario
     */
    'maximum-value'?: number;
    /**
     * For goals, the date that they should be achieved by.
     * @type {string}
     * @memberof Scenario
     */
    'achieve_date'?: string;
    /**
     * The starting balance of the scenario.
     * @type {number}
     * @memberof Scenario
     */
    'starting_balance'?: number;
    /**
     * The date of the starting balance.
     * @type {string}
     * @memberof Scenario
     */
    'starting_balance_date'?: string;
    /**
     * The closing balance of the scenario.
     * @type {number}
     * @memberof Scenario
     */
    'closing_balance'?: number;
    /**
     * The date of the closing balance.
     * @type {string}
     * @memberof Scenario
     */
    'closing_balance_date'?: string;
    /**
     * The current balance of the scenario.
     * @type {number}
     * @memberof Scenario
     */
    'current_balance'?: number;
    /**
     * The date of the current balance.
     * @type {string}
     * @memberof Scenario
     */
    'current_balance_date'?: string;
    /**
     * The current balance of the scenario in the user\'s base currency.
     * @type {number}
     * @memberof Scenario
     */
    'current_balance_in_base_currency'?: number;
    /**
     * The exchange rate between the scenario\'s currency and the user\'s base currency, when different. If the currencies are the same, null is returned.
     * @type {number}
     * @memberof Scenario
     */
    'current_balance_exchange_rate'?: number;
    /**
     * The current safe balance in the user\'s base currency, if safe balance is activated on the account associated with the scenario. If safe balance is not activated, then null is returned.
     * @type {number}
     * @memberof Scenario
     */
    'safe_balance'?: number;
    /**
     * The current safe balance in the user\'s base currency, if safe balance is activated on the account associated with the scenario. If safe balance is not available, then null is returned.
     * @type {number}
     * @memberof Scenario
     */
    'safe_balance_in_base_currency'?: number;
    /**
     * When the scenario was created.
     * @type {string}
     * @memberof Scenario
     */
    'created_at'?: string;
    /**
     * When the scenario was last updated.
     * @type {string}
     * @memberof Scenario
     */
    'updated_at'?: string;
}

export const Type = {
    NoInterest: 'no-interest',
    Savings: 'savings',
    Debt: 'debt'
} as const;

export type Type = typeof Type[keyof typeof Type];


