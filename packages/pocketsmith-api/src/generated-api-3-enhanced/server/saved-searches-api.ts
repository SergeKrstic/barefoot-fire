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


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, type RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../base';
// @ts-ignore
import type { SavedSearch } from '../model';
/**
 * SavedSearchesApi - axios parameter creator
 * @export
 */
export const SavedSearchesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Lists saved searches belonging to a user by their ID.
         * @summary List saved searches in user
         * @param {number} id The unique identifier of the user.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        usersIdSavedSearchesGet: async (id: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('usersIdSavedSearchesGet', 'id', id)
            const localVarPath = `/users/{id}/saved_searches`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication developerKey required
            await setApiKeyToObject(localVarHeaderParameter, "X-Developer-Key", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * SavedSearchesApi - functional programming interface
 * @export
 */
export const SavedSearchesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SavedSearchesApiAxiosParamCreator(configuration)
    return {
        /**
         * Lists saved searches belonging to a user by their ID.
         * @summary List saved searches in user
         * @param {number} id The unique identifier of the user.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async usersIdSavedSearchesGet(id: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<SavedSearch>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.usersIdSavedSearchesGet(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SavedSearchesApi.usersIdSavedSearchesGet']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * SavedSearchesApi - factory interface
 * @export
 */
export const SavedSearchesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SavedSearchesApiFp(configuration)
    return {
        /**
         * Lists saved searches belonging to a user by their ID.
         * @summary List saved searches in user
         * @param {SavedSearchesApiUsersIdSavedSearchesGetRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        usersIdSavedSearchesGet(requestParameters: SavedSearchesApiUsersIdSavedSearchesGetRequest, options?: RawAxiosRequestConfig): AxiosPromise<Array<SavedSearch>> {
            return localVarFp.usersIdSavedSearchesGet(requestParameters.id, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for usersIdSavedSearchesGet operation in SavedSearchesApi.
 * @export
 * @interface SavedSearchesApiUsersIdSavedSearchesGetRequest
 */
export interface SavedSearchesApiUsersIdSavedSearchesGetRequest {
    /**
     * The unique identifier of the user.
     * @type {number}
     * @memberof SavedSearchesApiUsersIdSavedSearchesGet
     */
    readonly id: number
}

/**
 * SavedSearchesApi - object-oriented interface
 * @export
 * @class SavedSearchesApi
 * @extends {BaseAPI}
 */
export class SavedSearchesApi extends BaseAPI {
    /**
     * Lists saved searches belonging to a user by their ID.
     * @summary List saved searches in user
     * @param {SavedSearchesApiUsersIdSavedSearchesGetRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SavedSearchesApi
     */
    public usersIdSavedSearchesGet(requestParameters: SavedSearchesApiUsersIdSavedSearchesGetRequest, options?: RawAxiosRequestConfig) {
        return SavedSearchesApiFp(this.configuration).usersIdSavedSearchesGet(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }
}

