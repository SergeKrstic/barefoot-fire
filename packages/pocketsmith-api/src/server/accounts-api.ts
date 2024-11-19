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
import type { Account, AccountsIdPutRequest, UsersIdAccountsPostRequest, UsersIdAccountsPutRequest } from '../model'

/**
 * AccountsApi - axios parameter creator
 * @export
 */
export const AccountsApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     * Deletes an account and all its data by ID, optionally merge scenarios into another account.
     * @summary Delete account
     * @param {number} id The unique identifier of the account.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    accountsIdDelete: async (id: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists('accountsIdDelete', 'id', id)
      const localVarPath = `/accounts/{id}`.replace(`{${'id'}}`, encodeURIComponent(String(id)))
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
     * Gets an account by its ID.
     * @summary Get account
     * @param {number} id The unique identifier of the account.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    accountsIdGet: async (id: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists('accountsIdGet', 'id', id)
      const localVarPath = `/accounts/{id}`.replace(`{${'id'}}`, encodeURIComponent(String(id)))
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
     * Updates and returns an account by its ID.
     * @summary Update account
     * @param {number} id The unique identifier of the account.
     * @param {AccountsIdPutRequest} [accountsIdPutRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    accountsIdPut: async (
      id: number,
      accountsIdPutRequest?: AccountsIdPutRequest,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists('accountsIdPut', 'id', id)
      const localVarPath = `/accounts/{id}`.replace(`{${'id'}}`, encodeURIComponent(String(id)))
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
      localVarRequestOptions.data = serializeDataIfNeeded(accountsIdPutRequest, localVarRequestOptions, configuration)

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
    /**
     * Lists accounts belonging to an institution by its ID.
     * @summary List accounts in institution
     * @param {number} id The unique identifier of the institution.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    institutionsIdAccountsGet: async (id: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists('institutionsIdAccountsGet', 'id', id)
      const localVarPath = `/institutions/{id}/accounts`.replace(`{${'id'}}`, encodeURIComponent(String(id)))
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
     * Lists all accounts belonging to the user by their ID.
     * @summary List accounts in user
     * @param {number} id The unique identifier of the user.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    usersIdAccountsGet: async (id: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists('usersIdAccountsGet', 'id', id)
      const localVarPath = `/users/{id}/accounts`.replace(`{${'id'}}`, encodeURIComponent(String(id)))
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
     * Creates and returns an account belonging to the user by their ID.
     * @summary Create an account in user
     * @param {number} id The unique identifier of the user.
     * @param {UsersIdAccountsPostRequest} [usersIdAccountsPostRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    usersIdAccountsPost: async (
      id: number,
      usersIdAccountsPostRequest?: UsersIdAccountsPostRequest,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists('usersIdAccountsPost', 'id', id)
      const localVarPath = `/users/{id}/accounts`.replace(`{${'id'}}`, encodeURIComponent(String(id)))
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
        usersIdAccountsPostRequest,
        localVarRequestOptions,
        configuration,
      )

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
    /**
     * Updates the display order of accounts belonging to the user, by accepting an array of accounts in their new display order.
     * @summary Update the display order of accounts in user
     * @param {number} id The unique identifier of the user.
     * @param {UsersIdAccountsPutRequest} [usersIdAccountsPutRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    usersIdAccountsPut: async (
      id: number,
      usersIdAccountsPutRequest?: UsersIdAccountsPutRequest,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists('usersIdAccountsPut', 'id', id)
      const localVarPath = `/users/{id}/accounts`.replace(`{${'id'}}`, encodeURIComponent(String(id)))
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
        usersIdAccountsPutRequest,
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
 * AccountsApi - functional programming interface
 * @export
 */
export const AccountsApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = AccountsApiAxiosParamCreator(configuration)
  return {
    /**
     * Deletes an account and all its data by ID, optionally merge scenarios into another account.
     * @summary Delete account
     * @param {number} id The unique identifier of the account.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async accountsIdDelete(
      id: number,
      options?: RawAxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.accountsIdDelete(id, options)
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0
      const localVarOperationServerBasePath =
        operationServerMap['AccountsApi.accountsIdDelete']?.[localVarOperationServerIndex]?.url
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath)
    },
    /**
     * Gets an account by its ID.
     * @summary Get account
     * @param {number} id The unique identifier of the account.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async accountsIdGet(
      id: number,
      options?: RawAxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Account>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.accountsIdGet(id, options)
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0
      const localVarOperationServerBasePath =
        operationServerMap['AccountsApi.accountsIdGet']?.[localVarOperationServerIndex]?.url
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath)
    },
    /**
     * Updates and returns an account by its ID.
     * @summary Update account
     * @param {number} id The unique identifier of the account.
     * @param {AccountsIdPutRequest} [accountsIdPutRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async accountsIdPut(
      id: number,
      accountsIdPutRequest?: AccountsIdPutRequest,
      options?: RawAxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Account>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.accountsIdPut(id, accountsIdPutRequest, options)
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0
      const localVarOperationServerBasePath =
        operationServerMap['AccountsApi.accountsIdPut']?.[localVarOperationServerIndex]?.url
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath)
    },
    /**
     * Lists accounts belonging to an institution by its ID.
     * @summary List accounts in institution
     * @param {number} id The unique identifier of the institution.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async institutionsIdAccountsGet(
      id: number,
      options?: RawAxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Account>>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.institutionsIdAccountsGet(id, options)
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0
      const localVarOperationServerBasePath =
        operationServerMap['AccountsApi.institutionsIdAccountsGet']?.[localVarOperationServerIndex]?.url
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath)
    },
    /**
     * Lists all accounts belonging to the user by their ID.
     * @summary List accounts in user
     * @param {number} id The unique identifier of the user.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async usersIdAccountsGet(
      id: number,
      options?: RawAxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Account>>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.usersIdAccountsGet(id, options)
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0
      const localVarOperationServerBasePath =
        operationServerMap['AccountsApi.usersIdAccountsGet']?.[localVarOperationServerIndex]?.url
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath)
    },
    /**
     * Creates and returns an account belonging to the user by their ID.
     * @summary Create an account in user
     * @param {number} id The unique identifier of the user.
     * @param {UsersIdAccountsPostRequest} [usersIdAccountsPostRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async usersIdAccountsPost(
      id: number,
      usersIdAccountsPostRequest?: UsersIdAccountsPostRequest,
      options?: RawAxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Account>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.usersIdAccountsPost(
        id,
        usersIdAccountsPostRequest,
        options,
      )
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0
      const localVarOperationServerBasePath =
        operationServerMap['AccountsApi.usersIdAccountsPost']?.[localVarOperationServerIndex]?.url
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath)
    },
    /**
     * Updates the display order of accounts belonging to the user, by accepting an array of accounts in their new display order.
     * @summary Update the display order of accounts in user
     * @param {number} id The unique identifier of the user.
     * @param {UsersIdAccountsPutRequest} [usersIdAccountsPutRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async usersIdAccountsPut(
      id: number,
      usersIdAccountsPutRequest?: UsersIdAccountsPutRequest,
      options?: RawAxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Account>>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.usersIdAccountsPut(
        id,
        usersIdAccountsPutRequest,
        options,
      )
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0
      const localVarOperationServerBasePath =
        operationServerMap['AccountsApi.usersIdAccountsPut']?.[localVarOperationServerIndex]?.url
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
 * AccountsApi - factory interface
 * @export
 */
export const AccountsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
  const localVarFp = AccountsApiFp(configuration)
  return {
    /**
     * Deletes an account and all its data by ID, optionally merge scenarios into another account.
     * @summary Delete account
     * @param {AccountsApiAccountsIdDeleteRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    accountsIdDelete(
      requestParameters: AccountsApiAccountsIdDeleteRequest,
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<void> {
      return localVarFp.accountsIdDelete(requestParameters.id, options).then((request) => request(axios, basePath))
    },
    /**
     * Gets an account by its ID.
     * @summary Get account
     * @param {AccountsApiAccountsIdGetRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    accountsIdGet(
      requestParameters: AccountsApiAccountsIdGetRequest,
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<Account> {
      return localVarFp.accountsIdGet(requestParameters.id, options).then((request) => request(axios, basePath))
    },
    /**
     * Updates and returns an account by its ID.
     * @summary Update account
     * @param {AccountsApiAccountsIdPutRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    accountsIdPut(
      requestParameters: AccountsApiAccountsIdPutRequest,
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<Account> {
      return localVarFp
        .accountsIdPut(requestParameters.id, requestParameters.accountsIdPutRequest, options)
        .then((request) => request(axios, basePath))
    },
    /**
     * Lists accounts belonging to an institution by its ID.
     * @summary List accounts in institution
     * @param {AccountsApiInstitutionsIdAccountsGetRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    institutionsIdAccountsGet(
      requestParameters: AccountsApiInstitutionsIdAccountsGetRequest,
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<Array<Account>> {
      return localVarFp
        .institutionsIdAccountsGet(requestParameters.id, options)
        .then((request) => request(axios, basePath))
    },
    /**
     * Lists all accounts belonging to the user by their ID.
     * @summary List accounts in user
     * @param {AccountsApiUsersIdAccountsGetRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    usersIdAccountsGet(
      requestParameters: AccountsApiUsersIdAccountsGetRequest,
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<Array<Account>> {
      return localVarFp.usersIdAccountsGet(requestParameters.id, options).then((request) => request(axios, basePath))
    },
    /**
     * Creates and returns an account belonging to the user by their ID.
     * @summary Create an account in user
     * @param {AccountsApiUsersIdAccountsPostRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    usersIdAccountsPost(
      requestParameters: AccountsApiUsersIdAccountsPostRequest,
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<Account> {
      return localVarFp
        .usersIdAccountsPost(requestParameters.id, requestParameters.usersIdAccountsPostRequest, options)
        .then((request) => request(axios, basePath))
    },
    /**
     * Updates the display order of accounts belonging to the user, by accepting an array of accounts in their new display order.
     * @summary Update the display order of accounts in user
     * @param {AccountsApiUsersIdAccountsPutRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    usersIdAccountsPut(
      requestParameters: AccountsApiUsersIdAccountsPutRequest,
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<Array<Account>> {
      return localVarFp
        .usersIdAccountsPut(requestParameters.id, requestParameters.usersIdAccountsPutRequest, options)
        .then((request) => request(axios, basePath))
    },
  }
}

/**
 * Request parameters for accountsIdDelete operation in AccountsApi.
 * @export
 * @interface AccountsApiAccountsIdDeleteRequest
 */
export interface AccountsApiAccountsIdDeleteRequest {
  /**
   * The unique identifier of the account.
   * @type {number}
   * @memberof AccountsApiAccountsIdDelete
   */
  readonly id: number
}

/**
 * Request parameters for accountsIdGet operation in AccountsApi.
 * @export
 * @interface AccountsApiAccountsIdGetRequest
 */
export interface AccountsApiAccountsIdGetRequest {
  /**
   * The unique identifier of the account.
   * @type {number}
   * @memberof AccountsApiAccountsIdGet
   */
  readonly id: number
}

/**
 * Request parameters for accountsIdPut operation in AccountsApi.
 * @export
 * @interface AccountsApiAccountsIdPutRequest
 */
export interface AccountsApiAccountsIdPutRequest {
  /**
   * The unique identifier of the account.
   * @type {number}
   * @memberof AccountsApiAccountsIdPut
   */
  readonly id: number

  /**
   *
   * @type {AccountsIdPutRequest}
   * @memberof AccountsApiAccountsIdPut
   */
  readonly accountsIdPutRequest?: AccountsIdPutRequest
}

/**
 * Request parameters for institutionsIdAccountsGet operation in AccountsApi.
 * @export
 * @interface AccountsApiInstitutionsIdAccountsGetRequest
 */
export interface AccountsApiInstitutionsIdAccountsGetRequest {
  /**
   * The unique identifier of the institution.
   * @type {number}
   * @memberof AccountsApiInstitutionsIdAccountsGet
   */
  readonly id: number
}

/**
 * Request parameters for usersIdAccountsGet operation in AccountsApi.
 * @export
 * @interface AccountsApiUsersIdAccountsGetRequest
 */
export interface AccountsApiUsersIdAccountsGetRequest {
  /**
   * The unique identifier of the user.
   * @type {number}
   * @memberof AccountsApiUsersIdAccountsGet
   */
  readonly id: number
}

/**
 * Request parameters for usersIdAccountsPost operation in AccountsApi.
 * @export
 * @interface AccountsApiUsersIdAccountsPostRequest
 */
export interface AccountsApiUsersIdAccountsPostRequest {
  /**
   * The unique identifier of the user.
   * @type {number}
   * @memberof AccountsApiUsersIdAccountsPost
   */
  readonly id: number

  /**
   *
   * @type {UsersIdAccountsPostRequest}
   * @memberof AccountsApiUsersIdAccountsPost
   */
  readonly usersIdAccountsPostRequest?: UsersIdAccountsPostRequest
}

/**
 * Request parameters for usersIdAccountsPut operation in AccountsApi.
 * @export
 * @interface AccountsApiUsersIdAccountsPutRequest
 */
export interface AccountsApiUsersIdAccountsPutRequest {
  /**
   * The unique identifier of the user.
   * @type {number}
   * @memberof AccountsApiUsersIdAccountsPut
   */
  readonly id: number

  /**
   *
   * @type {UsersIdAccountsPutRequest}
   * @memberof AccountsApiUsersIdAccountsPut
   */
  readonly usersIdAccountsPutRequest?: UsersIdAccountsPutRequest
}

/**
 * AccountsApi - object-oriented interface
 * @export
 * @class AccountsApi
 * @extends {BaseAPI}
 */
export class AccountsApi extends BaseAPI {
  /**
   * Deletes an account and all its data by ID, optionally merge scenarios into another account.
   * @summary Delete account
   * @param {AccountsApiAccountsIdDeleteRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AccountsApi
   */
  public accountsIdDelete(requestParameters: AccountsApiAccountsIdDeleteRequest, options?: RawAxiosRequestConfig) {
    return AccountsApiFp(this.configuration)
      .accountsIdDelete(requestParameters.id, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * Gets an account by its ID.
   * @summary Get account
   * @param {AccountsApiAccountsIdGetRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AccountsApi
   */
  public accountsIdGet(requestParameters: AccountsApiAccountsIdGetRequest, options?: RawAxiosRequestConfig) {
    return AccountsApiFp(this.configuration)
      .accountsIdGet(requestParameters.id, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * Updates and returns an account by its ID.
   * @summary Update account
   * @param {AccountsApiAccountsIdPutRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AccountsApi
   */
  public accountsIdPut(requestParameters: AccountsApiAccountsIdPutRequest, options?: RawAxiosRequestConfig) {
    return AccountsApiFp(this.configuration)
      .accountsIdPut(requestParameters.id, requestParameters.accountsIdPutRequest, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * Lists accounts belonging to an institution by its ID.
   * @summary List accounts in institution
   * @param {AccountsApiInstitutionsIdAccountsGetRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AccountsApi
   */
  public institutionsIdAccountsGet(
    requestParameters: AccountsApiInstitutionsIdAccountsGetRequest,
    options?: RawAxiosRequestConfig,
  ) {
    return AccountsApiFp(this.configuration)
      .institutionsIdAccountsGet(requestParameters.id, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * Lists all accounts belonging to the user by their ID.
   * @summary List accounts in user
   * @param {AccountsApiUsersIdAccountsGetRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AccountsApi
   */
  public usersIdAccountsGet(requestParameters: AccountsApiUsersIdAccountsGetRequest, options?: RawAxiosRequestConfig) {
    return AccountsApiFp(this.configuration)
      .usersIdAccountsGet(requestParameters.id, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * Creates and returns an account belonging to the user by their ID.
   * @summary Create an account in user
   * @param {AccountsApiUsersIdAccountsPostRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AccountsApi
   */
  public usersIdAccountsPost(
    requestParameters: AccountsApiUsersIdAccountsPostRequest,
    options?: RawAxiosRequestConfig,
  ) {
    return AccountsApiFp(this.configuration)
      .usersIdAccountsPost(requestParameters.id, requestParameters.usersIdAccountsPostRequest, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * Updates the display order of accounts belonging to the user, by accepting an array of accounts in their new display order.
   * @summary Update the display order of accounts in user
   * @param {AccountsApiUsersIdAccountsPutRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AccountsApi
   */
  public usersIdAccountsPut(requestParameters: AccountsApiUsersIdAccountsPutRequest, options?: RawAxiosRequestConfig) {
    return AccountsApiFp(this.configuration)
      .usersIdAccountsPut(requestParameters.id, requestParameters.usersIdAccountsPutRequest, options)
      .then((request) => request(this.axios, this.basePath))
  }
}
