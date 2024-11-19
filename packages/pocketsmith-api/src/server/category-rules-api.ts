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

import type { Configuration } from '../configuration'
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios'
import globalAxios from 'axios'
import {
  DUMMY_BASE_URL,
  assertParamExists,
  setApiKeyToObject,
  setSearchParams,
  serializeDataIfNeeded,
  toPathString,
  createRequestFunction,
} from '../common'
import { BASE_PATH, type RequestArgs, BaseAPI, operationServerMap } from '../base'
import type { CategoriesIdCategoryRulesPostRequest, CategoryRule } from '../model'

/**
 * CategoryRulesApi - axios parameter creator
 * @export
 */
export const CategoryRulesApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     * Creates a rule to allocate a category to transactions.
     * @summary Create category rule in category
     * @param {number} id The unique identifier of the category.
     * @param {CategoriesIdCategoryRulesPostRequest} [categoriesIdCategoryRulesPostRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    categoriesIdCategoryRulesPost: async (
      id: number,
      categoriesIdCategoryRulesPostRequest?: CategoriesIdCategoryRulesPostRequest,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists('categoriesIdCategoryRulesPost', 'id', id)
      const localVarPath = `/categories/{id}/category_rules`.replace(`{${'id'}}`, encodeURIComponent(String(id)))
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      // authentication developerKey required
      await setApiKeyToObject(localVarHeaderParameter, 'X-Developer-Key', configuration)

      localVarHeaderParameter['Content-Type'] = 'application/json'

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers }
      localVarRequestOptions.data = serializeDataIfNeeded(
        categoriesIdCategoryRulesPostRequest,
        localVarRequestOptions,
        configuration,
      )

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
    /**
     * Lists all category rules belonging to a user by their ID.
     * @summary List category rules in user
     * @param {number} id The unique identifier of the user.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    usersIdCategoryRulesGet: async (id: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists('usersIdCategoryRulesGet', 'id', id)
      const localVarPath = `/users/{id}/category_rules`.replace(`{${'id'}}`, encodeURIComponent(String(id)))
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      // authentication developerKey required
      await setApiKeyToObject(localVarHeaderParameter, 'X-Developer-Key', configuration)

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers }

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
  }
}

/**
 * CategoryRulesApi - functional programming interface
 * @export
 */
export const CategoryRulesApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = CategoryRulesApiAxiosParamCreator(configuration)
  return {
    /**
     * Creates a rule to allocate a category to transactions.
     * @summary Create category rule in category
     * @param {number} id The unique identifier of the category.
     * @param {CategoriesIdCategoryRulesPostRequest} [categoriesIdCategoryRulesPostRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async categoriesIdCategoryRulesPost(
      id: number,
      categoriesIdCategoryRulesPostRequest?: CategoriesIdCategoryRulesPostRequest,
      options?: RawAxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CategoryRule>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.categoriesIdCategoryRulesPost(
        id,
        categoriesIdCategoryRulesPostRequest,
        options,
      )
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0
      const localVarOperationServerBasePath =
        operationServerMap['CategoryRulesApi.categoriesIdCategoryRulesPost']?.[localVarOperationServerIndex]?.url
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath)
    },
    /**
     * Lists all category rules belonging to a user by their ID.
     * @summary List category rules in user
     * @param {number} id The unique identifier of the user.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async usersIdCategoryRulesGet(
      id: number,
      options?: RawAxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<CategoryRule>>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.usersIdCategoryRulesGet(id, options)
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0
      const localVarOperationServerBasePath =
        operationServerMap['CategoryRulesApi.usersIdCategoryRulesGet']?.[localVarOperationServerIndex]?.url
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath)
    },
  }
}

/**
 * CategoryRulesApi - factory interface
 * @export
 */
export const CategoryRulesApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance,
) {
  const localVarFp = CategoryRulesApiFp(configuration)
  return {
    /**
     * Creates a rule to allocate a category to transactions.
     * @summary Create category rule in category
     * @param {CategoryRulesApiCategoriesIdCategoryRulesPostRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    categoriesIdCategoryRulesPost(
      requestParameters: CategoryRulesApiCategoriesIdCategoryRulesPostRequest,
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<CategoryRule> {
      return localVarFp
        .categoriesIdCategoryRulesPost(
          requestParameters.id,
          requestParameters.categoriesIdCategoryRulesPostRequest,
          options,
        )
        .then((request) => request(axios, basePath))
    },
    /**
     * Lists all category rules belonging to a user by their ID.
     * @summary List category rules in user
     * @param {CategoryRulesApiUsersIdCategoryRulesGetRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    usersIdCategoryRulesGet(
      requestParameters: CategoryRulesApiUsersIdCategoryRulesGetRequest,
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<Array<CategoryRule>> {
      return localVarFp
        .usersIdCategoryRulesGet(requestParameters.id, options)
        .then((request) => request(axios, basePath))
    },
  }
}

/**
 * Request parameters for categoriesIdCategoryRulesPost operation in CategoryRulesApi.
 * @export
 * @interface CategoryRulesApiCategoriesIdCategoryRulesPostRequest
 */
export interface CategoryRulesApiCategoriesIdCategoryRulesPostRequest {
  /**
   * The unique identifier of the category.
   * @type {number}
   * @memberof CategoryRulesApiCategoriesIdCategoryRulesPost
   */
  readonly id: number

  /**
   *
   * @type {CategoriesIdCategoryRulesPostRequest}
   * @memberof CategoryRulesApiCategoriesIdCategoryRulesPost
   */
  readonly categoriesIdCategoryRulesPostRequest?: CategoriesIdCategoryRulesPostRequest
}

/**
 * Request parameters for usersIdCategoryRulesGet operation in CategoryRulesApi.
 * @export
 * @interface CategoryRulesApiUsersIdCategoryRulesGetRequest
 */
export interface CategoryRulesApiUsersIdCategoryRulesGetRequest {
  /**
   * The unique identifier of the user.
   * @type {number}
   * @memberof CategoryRulesApiUsersIdCategoryRulesGet
   */
  readonly id: number
}

/**
 * CategoryRulesApi - object-oriented interface
 * @export
 * @class CategoryRulesApi
 * @extends {BaseAPI}
 */
export class CategoryRulesApi extends BaseAPI {
  /**
   * Creates a rule to allocate a category to transactions.
   * @summary Create category rule in category
   * @param {CategoryRulesApiCategoriesIdCategoryRulesPostRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CategoryRulesApi
   */
  public categoriesIdCategoryRulesPost(
    requestParameters: CategoryRulesApiCategoriesIdCategoryRulesPostRequest,
    options?: RawAxiosRequestConfig,
  ) {
    return CategoryRulesApiFp(this.configuration)
      .categoriesIdCategoryRulesPost(
        requestParameters.id,
        requestParameters.categoriesIdCategoryRulesPostRequest,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * Lists all category rules belonging to a user by their ID.
   * @summary List category rules in user
   * @param {CategoryRulesApiUsersIdCategoryRulesGetRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CategoryRulesApi
   */
  public usersIdCategoryRulesGet(
    requestParameters: CategoryRulesApiUsersIdCategoryRulesGetRequest,
    options?: RawAxiosRequestConfig,
  ) {
    return CategoryRulesApiFp(this.configuration)
      .usersIdCategoryRulesGet(requestParameters.id, options)
      .then((request) => request(this.axios, this.basePath))
  }
}
