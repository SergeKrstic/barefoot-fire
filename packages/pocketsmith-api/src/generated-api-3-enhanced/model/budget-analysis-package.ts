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
import type { BudgetAnalysis } from './budget-analysis';
// May contain unused imports in some cases
// @ts-ignore
import type { Category } from './category';

/**
 * 
 * @export
 * @interface BudgetAnalysisPackage
 */
export interface BudgetAnalysisPackage {
    /**
     * 
     * @type {Category}
     * @memberof BudgetAnalysisPackage
     */
    'category'?: Category;
    /**
     * Whether the expense budget analysis looks like a transfer to the income budget analysis, based on a number of heuristics.
     * @type {boolean}
     * @memberof BudgetAnalysisPackage
     */
    'is_transfer'?: boolean;
    /**
     * 
     * @type {BudgetAnalysis}
     * @memberof BudgetAnalysisPackage
     */
    'expense'?: BudgetAnalysis;
    /**
     * 
     * @type {BudgetAnalysis}
     * @memberof BudgetAnalysisPackage
     */
    'income'?: BudgetAnalysis;
}

