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
  toPathString,
  createRequestFunction,
} from '../common'
import { BASE_PATH, type RequestArgs, BaseAPI, operationServerMap } from '../base'

/**
 * LabelsApi - axios parameter creator
 * @export
 */
export const LabelsApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     * Lists labels belonging to a user by their ID.
     * @summary List labels in user
     * @param {number} id The unique identifier of the user.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    usersIdLabelsGet: async (id: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists('usersIdLabelsGet', 'id', id)
      const localVarPath = `/users/{id}/labels`.replace(`{${'id'}}`, encodeURIComponent(String(id)))
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
 * LabelsApi - functional programming interface
 * @export
 */
export const LabelsApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = LabelsApiAxiosParamCreator(configuration)
  return {
    /**
     * Lists labels belonging to a user by their ID.
     * @summary List labels in user
     * @param {number} id The unique identifier of the user.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async usersIdLabelsGet(
      id: number,
      options?: RawAxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<string>>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.usersIdLabelsGet(id, options)
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0
      const localVarOperationServerBasePath =
        operationServerMap['LabelsApi.usersIdLabelsGet']?.[localVarOperationServerIndex]?.url
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
 * LabelsApi - factory interface
 * @export
 */
export const LabelsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
  const localVarFp = LabelsApiFp(configuration)
  return {
    /**
     * Lists labels belonging to a user by their ID.
     * @summary List labels in user
     * @param {LabelsApiUsersIdLabelsGetRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    usersIdLabelsGet(
      requestParameters: LabelsApiUsersIdLabelsGetRequest,
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<Array<string>> {
      return localVarFp.usersIdLabelsGet(requestParameters.id, options).then((request) => request(axios, basePath))
    },
  }
}

/**
 * Request parameters for usersIdLabelsGet operation in LabelsApi.
 * @export
 * @interface LabelsApiUsersIdLabelsGetRequest
 */
export interface LabelsApiUsersIdLabelsGetRequest {
  /**
   * The unique identifier of the user.
   * @type {number}
   * @memberof LabelsApiUsersIdLabelsGet
   */
  readonly id: number
}

/**
 * LabelsApi - object-oriented interface
 * @export
 * @class LabelsApi
 * @extends {BaseAPI}
 */
export class LabelsApi extends BaseAPI {
  /**
   * Lists labels belonging to a user by their ID.
   * @summary List labels in user
   * @param {LabelsApiUsersIdLabelsGetRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof LabelsApi
   */
  public usersIdLabelsGet(requestParameters: LabelsApiUsersIdLabelsGetRequest, options?: RawAxiosRequestConfig) {
    return LabelsApiFp(this.configuration)
      .usersIdLabelsGet(requestParameters.id, options)
      .then((request) => request(this.axios, this.basePath))
  }
}
