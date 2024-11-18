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
// Some imports not used depending on template conditions
// @ts-ignore
import {
  DUMMY_BASE_URL,
  assertParamExists,
  setApiKeyToObject,
  setBasicAuthToObject,
  setBearerAuthToObject,
  setOAuthToObject,
  setSearchParams,
  serializeDataIfNeeded,
  toPathString,
  createRequestFunction,
} from '../common'
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, type RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../base'
// @ts-ignore
import type { CategoriesIdPutRequest } from '../../model'
// @ts-ignore
import type { Category } from '../../model'
// @ts-ignore
import type { UsersIdCategoriesPostRequest } from '../../model'
/**
 * CategoriesApi - axios parameter creator
 * @export
 */
export const CategoriesApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     * Deletes a particular category by its ID. This will delete all budgets within the category, and uncategorize all transactions assigned to the category.
     * @summary Delete category
     * @param {number} id The unique identifier of the category.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    categoriesIdDelete: async (id: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists('categoriesIdDelete', 'id', id)
      const localVarPath = `/categories/{id}`.replace(`{${'id'}}`, encodeURIComponent(String(id)))
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options }
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
    /**
     * Gets a particular category by its ID.
     * @summary Get category
     * @param {number} id The unique identifier of the category.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    categoriesIdGet: async (id: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists('categoriesIdGet', 'id', id)
      const localVarPath = `/categories/{id}`.replace(`{${'id'}}`, encodeURIComponent(String(id)))
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
    /**
     * Updates a category by its ID.
     * @summary Update category
     * @param {number} id The unique identifier of the category.
     * @param {CategoriesIdPutRequest} [categoriesIdPutRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    categoriesIdPut: async (
      id: number,
      categoriesIdPutRequest?: CategoriesIdPutRequest,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists('categoriesIdPut', 'id', id)
      const localVarPath = `/categories/{id}`.replace(`{${'id'}}`, encodeURIComponent(String(id)))
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      // authentication developerKey required
      await setApiKeyToObject(localVarHeaderParameter, 'X-Developer-Key', configuration)

      localVarHeaderParameter['Content-Type'] = 'application/json'

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers }
      localVarRequestOptions.data = serializeDataIfNeeded(categoriesIdPutRequest, localVarRequestOptions, configuration)

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
    /**
     * Lists all categories belonging to a user by their ID.
     * @summary List categories in user
     * @param {number} id The unique identifier of the user.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    usersIdCategoriesGet: async (id: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists('usersIdCategoriesGet', 'id', id)
      const localVarPath = `/users/{id}/categories`.replace(`{${'id'}}`, encodeURIComponent(String(id)))
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
    /**
     * Creates a category belonging to the user by their ID.
     * @summary Create category in user
     * @param {number} id The unique identifier of the user.
     * @param {UsersIdCategoriesPostRequest} [usersIdCategoriesPostRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    usersIdCategoriesPost: async (
      id: number,
      usersIdCategoriesPostRequest?: UsersIdCategoriesPostRequest,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists('usersIdCategoriesPost', 'id', id)
      const localVarPath = `/users/{id}/categories`.replace(`{${'id'}}`, encodeURIComponent(String(id)))
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
        usersIdCategoriesPostRequest,
        localVarRequestOptions,
        configuration,
      )

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
  }
}

/**
 * CategoriesApi - functional programming interface
 * @export
 */
export const CategoriesApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = CategoriesApiAxiosParamCreator(configuration)
  return {
    /**
     * Deletes a particular category by its ID. This will delete all budgets within the category, and uncategorize all transactions assigned to the category.
     * @summary Delete category
     * @param {number} id The unique identifier of the category.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async categoriesIdDelete(
      id: number,
      options?: RawAxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.categoriesIdDelete(id, options)
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0
      const localVarOperationServerBasePath =
        operationServerMap['CategoriesApi.categoriesIdDelete']?.[localVarOperationServerIndex]?.url
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath)
    },
    /**
     * Gets a particular category by its ID.
     * @summary Get category
     * @param {number} id The unique identifier of the category.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async categoriesIdGet(
      id: number,
      options?: RawAxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Category>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.categoriesIdGet(id, options)
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0
      const localVarOperationServerBasePath =
        operationServerMap['CategoriesApi.categoriesIdGet']?.[localVarOperationServerIndex]?.url
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath)
    },
    /**
     * Updates a category by its ID.
     * @summary Update category
     * @param {number} id The unique identifier of the category.
     * @param {CategoriesIdPutRequest} [categoriesIdPutRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async categoriesIdPut(
      id: number,
      categoriesIdPutRequest?: CategoriesIdPutRequest,
      options?: RawAxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Category>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.categoriesIdPut(id, categoriesIdPutRequest, options)
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0
      const localVarOperationServerBasePath =
        operationServerMap['CategoriesApi.categoriesIdPut']?.[localVarOperationServerIndex]?.url
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath)
    },
    /**
     * Lists all categories belonging to a user by their ID.
     * @summary List categories in user
     * @param {number} id The unique identifier of the user.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async usersIdCategoriesGet(
      id: number,
      options?: RawAxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Category>>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.usersIdCategoriesGet(id, options)
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0
      const localVarOperationServerBasePath =
        operationServerMap['CategoriesApi.usersIdCategoriesGet']?.[localVarOperationServerIndex]?.url
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath)
    },
    /**
     * Creates a category belonging to the user by their ID.
     * @summary Create category in user
     * @param {number} id The unique identifier of the user.
     * @param {UsersIdCategoriesPostRequest} [usersIdCategoriesPostRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async usersIdCategoriesPost(
      id: number,
      usersIdCategoriesPostRequest?: UsersIdCategoriesPostRequest,
      options?: RawAxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Category>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.usersIdCategoriesPost(
        id,
        usersIdCategoriesPostRequest,
        options,
      )
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0
      const localVarOperationServerBasePath =
        operationServerMap['CategoriesApi.usersIdCategoriesPost']?.[localVarOperationServerIndex]?.url
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
 * CategoriesApi - factory interface
 * @export
 */
export const CategoriesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
  const localVarFp = CategoriesApiFp(configuration)
  return {
    /**
     * Deletes a particular category by its ID. This will delete all budgets within the category, and uncategorize all transactions assigned to the category.
     * @summary Delete category
     * @param {CategoriesApiCategoriesIdDeleteRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    categoriesIdDelete(
      requestParameters: CategoriesApiCategoriesIdDeleteRequest,
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<void> {
      return localVarFp.categoriesIdDelete(requestParameters.id, options).then((request) => request(axios, basePath))
    },
    /**
     * Gets a particular category by its ID.
     * @summary Get category
     * @param {CategoriesApiCategoriesIdGetRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    categoriesIdGet(
      requestParameters: CategoriesApiCategoriesIdGetRequest,
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<Category> {
      return localVarFp.categoriesIdGet(requestParameters.id, options).then((request) => request(axios, basePath))
    },
    /**
     * Updates a category by its ID.
     * @summary Update category
     * @param {CategoriesApiCategoriesIdPutRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    categoriesIdPut(
      requestParameters: CategoriesApiCategoriesIdPutRequest,
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<Category> {
      return localVarFp
        .categoriesIdPut(requestParameters.id, requestParameters.categoriesIdPutRequest, options)
        .then((request) => request(axios, basePath))
    },
    /**
     * Lists all categories belonging to a user by their ID.
     * @summary List categories in user
     * @param {CategoriesApiUsersIdCategoriesGetRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    usersIdCategoriesGet(
      requestParameters: CategoriesApiUsersIdCategoriesGetRequest,
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<Array<Category>> {
      return localVarFp.usersIdCategoriesGet(requestParameters.id, options).then((request) => request(axios, basePath))
    },
    /**
     * Creates a category belonging to the user by their ID.
     * @summary Create category in user
     * @param {CategoriesApiUsersIdCategoriesPostRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    usersIdCategoriesPost(
      requestParameters: CategoriesApiUsersIdCategoriesPostRequest,
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<Category> {
      return localVarFp
        .usersIdCategoriesPost(requestParameters.id, requestParameters.usersIdCategoriesPostRequest, options)
        .then((request) => request(axios, basePath))
    },
  }
}

/**
 * Request parameters for categoriesIdDelete operation in CategoriesApi.
 * @export
 * @interface CategoriesApiCategoriesIdDeleteRequest
 */
export interface CategoriesApiCategoriesIdDeleteRequest {
  /**
   * The unique identifier of the category.
   * @type {number}
   * @memberof CategoriesApiCategoriesIdDelete
   */
  readonly id: number
}

/**
 * Request parameters for categoriesIdGet operation in CategoriesApi.
 * @export
 * @interface CategoriesApiCategoriesIdGetRequest
 */
export interface CategoriesApiCategoriesIdGetRequest {
  /**
   * The unique identifier of the category.
   * @type {number}
   * @memberof CategoriesApiCategoriesIdGet
   */
  readonly id: number
}

/**
 * Request parameters for categoriesIdPut operation in CategoriesApi.
 * @export
 * @interface CategoriesApiCategoriesIdPutRequest
 */
export interface CategoriesApiCategoriesIdPutRequest {
  /**
   * The unique identifier of the category.
   * @type {number}
   * @memberof CategoriesApiCategoriesIdPut
   */
  readonly id: number

  /**
   *
   * @type {CategoriesIdPutRequest}
   * @memberof CategoriesApiCategoriesIdPut
   */
  readonly categoriesIdPutRequest?: CategoriesIdPutRequest
}

/**
 * Request parameters for usersIdCategoriesGet operation in CategoriesApi.
 * @export
 * @interface CategoriesApiUsersIdCategoriesGetRequest
 */
export interface CategoriesApiUsersIdCategoriesGetRequest {
  /**
   * The unique identifier of the user.
   * @type {number}
   * @memberof CategoriesApiUsersIdCategoriesGet
   */
  readonly id: number
}

/**
 * Request parameters for usersIdCategoriesPost operation in CategoriesApi.
 * @export
 * @interface CategoriesApiUsersIdCategoriesPostRequest
 */
export interface CategoriesApiUsersIdCategoriesPostRequest {
  /**
   * The unique identifier of the user.
   * @type {number}
   * @memberof CategoriesApiUsersIdCategoriesPost
   */
  readonly id: number

  /**
   *
   * @type {UsersIdCategoriesPostRequest}
   * @memberof CategoriesApiUsersIdCategoriesPost
   */
  readonly usersIdCategoriesPostRequest?: UsersIdCategoriesPostRequest
}

/**
 * CategoriesApi - object-oriented interface
 * @export
 * @class CategoriesApi
 * @extends {BaseAPI}
 */
export class CategoriesApi extends BaseAPI {
  /**
   * Deletes a particular category by its ID. This will delete all budgets within the category, and uncategorize all transactions assigned to the category.
   * @summary Delete category
   * @param {CategoriesApiCategoriesIdDeleteRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CategoriesApi
   */
  public categoriesIdDelete(
    requestParameters: CategoriesApiCategoriesIdDeleteRequest,
    options?: RawAxiosRequestConfig,
  ) {
    return CategoriesApiFp(this.configuration)
      .categoriesIdDelete(requestParameters.id, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * Gets a particular category by its ID.
   * @summary Get category
   * @param {CategoriesApiCategoriesIdGetRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CategoriesApi
   */
  public categoriesIdGet(requestParameters: CategoriesApiCategoriesIdGetRequest, options?: RawAxiosRequestConfig) {
    return CategoriesApiFp(this.configuration)
      .categoriesIdGet(requestParameters.id, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * Updates a category by its ID.
   * @summary Update category
   * @param {CategoriesApiCategoriesIdPutRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CategoriesApi
   */
  public categoriesIdPut(requestParameters: CategoriesApiCategoriesIdPutRequest, options?: RawAxiosRequestConfig) {
    return CategoriesApiFp(this.configuration)
      .categoriesIdPut(requestParameters.id, requestParameters.categoriesIdPutRequest, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * Lists all categories belonging to a user by their ID.
   * @summary List categories in user
   * @param {CategoriesApiUsersIdCategoriesGetRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CategoriesApi
   */
  public usersIdCategoriesGet(
    requestParameters: CategoriesApiUsersIdCategoriesGetRequest,
    options?: RawAxiosRequestConfig,
  ) {
    return CategoriesApiFp(this.configuration)
      .usersIdCategoriesGet(requestParameters.id, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * Creates a category belonging to the user by their ID.
   * @summary Create category in user
   * @param {CategoriesApiUsersIdCategoriesPostRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CategoriesApi
   */
  public usersIdCategoriesPost(
    requestParameters: CategoriesApiUsersIdCategoriesPostRequest,
    options?: RawAxiosRequestConfig,
  ) {
    return CategoriesApiFp(this.configuration)
      .usersIdCategoriesPost(requestParameters.id, requestParameters.usersIdCategoriesPostRequest, options)
      .then((request) => request(this.axios, this.basePath))
  }
}
