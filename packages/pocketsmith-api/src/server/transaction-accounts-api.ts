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
import type { TransactionAccount } from '../../model'
// @ts-ignore
import type { TransactionAccountsIdPutRequest } from '../../model'
/**
 * TransactionAccountsApi - axios parameter creator
 * @export
 */
export const TransactionAccountsApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     * Gets a transaction account by its ID.
     * @summary Get transaction account
     * @param {number} id The unique identifier of the transaction account.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    transactionAccountsIdGet: async (id: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists('transactionAccountsIdGet', 'id', id)
      const localVarPath = `/transaction_accounts/{id}`.replace(`{${'id'}}`, encodeURIComponent(String(id)))
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
     * Updates the transaction account by its ID.
     * @summary Update transaction account
     * @param {number} id The unique identifier of the transaction account.
     * @param {TransactionAccountsIdPutRequest} [transactionAccountsIdPutRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    transactionAccountsIdPut: async (
      id: number,
      transactionAccountsIdPutRequest?: TransactionAccountsIdPutRequest,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists('transactionAccountsIdPut', 'id', id)
      const localVarPath = `/transaction_accounts/{id}`.replace(`{${'id'}}`, encodeURIComponent(String(id)))
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
      localVarRequestOptions.data = serializeDataIfNeeded(
        transactionAccountsIdPutRequest,
        localVarRequestOptions,
        configuration,
      )

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
    /**
     * List all transaction accounts belonging to a user.
     * @summary List transaction accounts in user
     * @param {number} id The unique identifier of the user.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    usersIdTransactionAccountsGet: async (id: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists('usersIdTransactionAccountsGet', 'id', id)
      const localVarPath = `/users/{id}/transaction_accounts`.replace(`{${'id'}}`, encodeURIComponent(String(id)))
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
 * TransactionAccountsApi - functional programming interface
 * @export
 */
export const TransactionAccountsApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = TransactionAccountsApiAxiosParamCreator(configuration)
  return {
    /**
     * Gets a transaction account by its ID.
     * @summary Get transaction account
     * @param {number} id The unique identifier of the transaction account.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async transactionAccountsIdGet(
      id: number,
      options?: RawAxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TransactionAccount>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.transactionAccountsIdGet(id, options)
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0
      const localVarOperationServerBasePath =
        operationServerMap['TransactionAccountsApi.transactionAccountsIdGet']?.[localVarOperationServerIndex]?.url
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath)
    },
    /**
     * Updates the transaction account by its ID.
     * @summary Update transaction account
     * @param {number} id The unique identifier of the transaction account.
     * @param {TransactionAccountsIdPutRequest} [transactionAccountsIdPutRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async transactionAccountsIdPut(
      id: number,
      transactionAccountsIdPutRequest?: TransactionAccountsIdPutRequest,
      options?: RawAxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TransactionAccount>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.transactionAccountsIdPut(
        id,
        transactionAccountsIdPutRequest,
        options,
      )
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0
      const localVarOperationServerBasePath =
        operationServerMap['TransactionAccountsApi.transactionAccountsIdPut']?.[localVarOperationServerIndex]?.url
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath)
    },
    /**
     * List all transaction accounts belonging to a user.
     * @summary List transaction accounts in user
     * @param {number} id The unique identifier of the user.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async usersIdTransactionAccountsGet(
      id: number,
      options?: RawAxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<TransactionAccount>>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.usersIdTransactionAccountsGet(id, options)
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0
      const localVarOperationServerBasePath =
        operationServerMap['TransactionAccountsApi.usersIdTransactionAccountsGet']?.[localVarOperationServerIndex]?.url
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
 * TransactionAccountsApi - factory interface
 * @export
 */
export const TransactionAccountsApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance,
) {
  const localVarFp = TransactionAccountsApiFp(configuration)
  return {
    /**
     * Gets a transaction account by its ID.
     * @summary Get transaction account
     * @param {TransactionAccountsApiTransactionAccountsIdGetRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    transactionAccountsIdGet(
      requestParameters: TransactionAccountsApiTransactionAccountsIdGetRequest,
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<TransactionAccount> {
      return localVarFp
        .transactionAccountsIdGet(requestParameters.id, options)
        .then((request) => request(axios, basePath))
    },
    /**
     * Updates the transaction account by its ID.
     * @summary Update transaction account
     * @param {TransactionAccountsApiTransactionAccountsIdPutRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    transactionAccountsIdPut(
      requestParameters: TransactionAccountsApiTransactionAccountsIdPutRequest,
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<TransactionAccount> {
      return localVarFp
        .transactionAccountsIdPut(requestParameters.id, requestParameters.transactionAccountsIdPutRequest, options)
        .then((request) => request(axios, basePath))
    },
    /**
     * List all transaction accounts belonging to a user.
     * @summary List transaction accounts in user
     * @param {TransactionAccountsApiUsersIdTransactionAccountsGetRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    usersIdTransactionAccountsGet(
      requestParameters: TransactionAccountsApiUsersIdTransactionAccountsGetRequest,
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<Array<TransactionAccount>> {
      return localVarFp
        .usersIdTransactionAccountsGet(requestParameters.id, options)
        .then((request) => request(axios, basePath))
    },
  }
}

/**
 * Request parameters for transactionAccountsIdGet operation in TransactionAccountsApi.
 * @export
 * @interface TransactionAccountsApiTransactionAccountsIdGetRequest
 */
export interface TransactionAccountsApiTransactionAccountsIdGetRequest {
  /**
   * The unique identifier of the transaction account.
   * @type {number}
   * @memberof TransactionAccountsApiTransactionAccountsIdGet
   */
  readonly id: number
}

/**
 * Request parameters for transactionAccountsIdPut operation in TransactionAccountsApi.
 * @export
 * @interface TransactionAccountsApiTransactionAccountsIdPutRequest
 */
export interface TransactionAccountsApiTransactionAccountsIdPutRequest {
  /**
   * The unique identifier of the transaction account.
   * @type {number}
   * @memberof TransactionAccountsApiTransactionAccountsIdPut
   */
  readonly id: number

  /**
   *
   * @type {TransactionAccountsIdPutRequest}
   * @memberof TransactionAccountsApiTransactionAccountsIdPut
   */
  readonly transactionAccountsIdPutRequest?: TransactionAccountsIdPutRequest
}

/**
 * Request parameters for usersIdTransactionAccountsGet operation in TransactionAccountsApi.
 * @export
 * @interface TransactionAccountsApiUsersIdTransactionAccountsGetRequest
 */
export interface TransactionAccountsApiUsersIdTransactionAccountsGetRequest {
  /**
   * The unique identifier of the user.
   * @type {number}
   * @memberof TransactionAccountsApiUsersIdTransactionAccountsGet
   */
  readonly id: number
}

/**
 * TransactionAccountsApi - object-oriented interface
 * @export
 * @class TransactionAccountsApi
 * @extends {BaseAPI}
 */
export class TransactionAccountsApi extends BaseAPI {
  /**
   * Gets a transaction account by its ID.
   * @summary Get transaction account
   * @param {TransactionAccountsApiTransactionAccountsIdGetRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TransactionAccountsApi
   */
  public transactionAccountsIdGet(
    requestParameters: TransactionAccountsApiTransactionAccountsIdGetRequest,
    options?: RawAxiosRequestConfig,
  ) {
    return TransactionAccountsApiFp(this.configuration)
      .transactionAccountsIdGet(requestParameters.id, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * Updates the transaction account by its ID.
   * @summary Update transaction account
   * @param {TransactionAccountsApiTransactionAccountsIdPutRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TransactionAccountsApi
   */
  public transactionAccountsIdPut(
    requestParameters: TransactionAccountsApiTransactionAccountsIdPutRequest,
    options?: RawAxiosRequestConfig,
  ) {
    return TransactionAccountsApiFp(this.configuration)
      .transactionAccountsIdPut(requestParameters.id, requestParameters.transactionAccountsIdPutRequest, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * List all transaction accounts belonging to a user.
   * @summary List transaction accounts in user
   * @param {TransactionAccountsApiUsersIdTransactionAccountsGetRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TransactionAccountsApi
   */
  public usersIdTransactionAccountsGet(
    requestParameters: TransactionAccountsApiUsersIdTransactionAccountsGetRequest,
    options?: RawAxiosRequestConfig,
  ) {
    return TransactionAccountsApiFp(this.configuration)
      .usersIdTransactionAccountsGet(requestParameters.id, options)
      .then((request) => request(this.axios, this.basePath))
  }
}
