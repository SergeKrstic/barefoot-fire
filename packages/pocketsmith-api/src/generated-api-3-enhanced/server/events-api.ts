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
import type { Event } from '../model';
// @ts-ignore
import type { EventsIdPutRequest } from '../model';
// @ts-ignore
import type { ScenariosIdEventsPostRequest } from '../model';
/**
 * EventsApi - axios parameter creator
 * @export
 */
export const EventsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Deletes an event by its ID.
         * @summary Delete event
         * @param {string} id The unique identifier of the event.
         * @param {EventsIdDeleteBehaviour} behaviour Whether the delete applies only to this event, to all events within the series from this event or to all events within the series.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        eventsIdDelete: async (id: string, behaviour: EventsIdDeleteBehaviour, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('eventsIdDelete', 'id', id)
            // verify required parameter 'behaviour' is not null or undefined
            assertParamExists('eventsIdDelete', 'behaviour', behaviour)
            const localVarPath = `/events/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication developerKey required
            await setApiKeyToObject(localVarHeaderParameter, "X-Developer-Key", configuration)

            if (behaviour !== undefined) {
                localVarQueryParameter['behaviour'] = behaviour;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Gets a particular event by its ID.
         * @summary Get event
         * @param {string} id The unique identifier of the event.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        eventsIdGet: async (id: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('eventsIdGet', 'id', id)
            const localVarPath = `/events/{id}`
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
        /**
         * Updates an event by its ID.
         * @summary Update event
         * @param {string} id The unique identifier of the event.
         * @param {EventsIdPutRequest} [eventsIdPutRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        eventsIdPut: async (id: string, eventsIdPutRequest?: EventsIdPutRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('eventsIdPut', 'id', id)
            const localVarPath = `/events/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication developerKey required
            await setApiKeyToObject(localVarHeaderParameter, "X-Developer-Key", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(eventsIdPutRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Lists events belonging to a scenario by their ID.
         * @summary List events in scenario.
         * @param {number} id The unique identifier of the scenario.
         * @param {string} startDate Return the events from and including this date.
         * @param {string} endDate Return the events until and including this date.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        scenariosIdEventsGet: async (id: number, startDate: string, endDate: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('scenariosIdEventsGet', 'id', id)
            // verify required parameter 'startDate' is not null or undefined
            assertParamExists('scenariosIdEventsGet', 'startDate', startDate)
            // verify required parameter 'endDate' is not null or undefined
            assertParamExists('scenariosIdEventsGet', 'endDate', endDate)
            const localVarPath = `/scenarios/{id}/events`
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

            if (startDate !== undefined) {
                localVarQueryParameter['start_date'] = startDate;
            }

            if (endDate !== undefined) {
                localVarQueryParameter['end_date'] = endDate;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Creates an event in a scenario by its ID.
         * @summary Create event in scenario
         * @param {number} id The unique identifier of the scenario.
         * @param {ScenariosIdEventsPostRequest} [scenariosIdEventsPostRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        scenariosIdEventsPost: async (id: number, scenariosIdEventsPostRequest?: ScenariosIdEventsPostRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('scenariosIdEventsPost', 'id', id)
            const localVarPath = `/scenarios/{id}/events`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication developerKey required
            await setApiKeyToObject(localVarHeaderParameter, "X-Developer-Key", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(scenariosIdEventsPostRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Lists events belonging to a user by their ID.
         * @summary List events in user.
         * @param {number} id The unique identifier of the user.
         * @param {string} startDate Return the events from and including this date.
         * @param {string} endDate Return the events until and including this date.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        usersIdEventsGet: async (id: number, startDate: string, endDate: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('usersIdEventsGet', 'id', id)
            // verify required parameter 'startDate' is not null or undefined
            assertParamExists('usersIdEventsGet', 'startDate', startDate)
            // verify required parameter 'endDate' is not null or undefined
            assertParamExists('usersIdEventsGet', 'endDate', endDate)
            const localVarPath = `/users/{id}/events`
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

            if (startDate !== undefined) {
                localVarQueryParameter['start_date'] = startDate;
            }

            if (endDate !== undefined) {
                localVarQueryParameter['end_date'] = endDate;
            }


    
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
 * EventsApi - functional programming interface
 * @export
 */
export const EventsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = EventsApiAxiosParamCreator(configuration)
    return {
        /**
         * Deletes an event by its ID.
         * @summary Delete event
         * @param {string} id The unique identifier of the event.
         * @param {EventsIdDeleteBehaviour} behaviour Whether the delete applies only to this event, to all events within the series from this event or to all events within the series.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async eventsIdDelete(id: string, behaviour: EventsIdDeleteBehaviour, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.eventsIdDelete(id, behaviour, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['EventsApi.eventsIdDelete']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Gets a particular event by its ID.
         * @summary Get event
         * @param {string} id The unique identifier of the event.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async eventsIdGet(id: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Event>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.eventsIdGet(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['EventsApi.eventsIdGet']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Updates an event by its ID.
         * @summary Update event
         * @param {string} id The unique identifier of the event.
         * @param {EventsIdPutRequest} [eventsIdPutRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async eventsIdPut(id: string, eventsIdPutRequest?: EventsIdPutRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Event>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.eventsIdPut(id, eventsIdPutRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['EventsApi.eventsIdPut']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Lists events belonging to a scenario by their ID.
         * @summary List events in scenario.
         * @param {number} id The unique identifier of the scenario.
         * @param {string} startDate Return the events from and including this date.
         * @param {string} endDate Return the events until and including this date.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async scenariosIdEventsGet(id: number, startDate: string, endDate: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Event>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.scenariosIdEventsGet(id, startDate, endDate, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['EventsApi.scenariosIdEventsGet']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Creates an event in a scenario by its ID.
         * @summary Create event in scenario
         * @param {number} id The unique identifier of the scenario.
         * @param {ScenariosIdEventsPostRequest} [scenariosIdEventsPostRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async scenariosIdEventsPost(id: number, scenariosIdEventsPostRequest?: ScenariosIdEventsPostRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Event>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.scenariosIdEventsPost(id, scenariosIdEventsPostRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['EventsApi.scenariosIdEventsPost']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Lists events belonging to a user by their ID.
         * @summary List events in user.
         * @param {number} id The unique identifier of the user.
         * @param {string} startDate Return the events from and including this date.
         * @param {string} endDate Return the events until and including this date.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async usersIdEventsGet(id: number, startDate: string, endDate: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Event>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.usersIdEventsGet(id, startDate, endDate, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['EventsApi.usersIdEventsGet']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * EventsApi - factory interface
 * @export
 */
export const EventsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = EventsApiFp(configuration)
    return {
        /**
         * Deletes an event by its ID.
         * @summary Delete event
         * @param {EventsApiEventsIdDeleteRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        eventsIdDelete(requestParameters: EventsApiEventsIdDeleteRequest, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.eventsIdDelete(requestParameters.id, requestParameters.behaviour, options).then((request) => request(axios, basePath));
        },
        /**
         * Gets a particular event by its ID.
         * @summary Get event
         * @param {EventsApiEventsIdGetRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        eventsIdGet(requestParameters: EventsApiEventsIdGetRequest, options?: RawAxiosRequestConfig): AxiosPromise<Event> {
            return localVarFp.eventsIdGet(requestParameters.id, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates an event by its ID.
         * @summary Update event
         * @param {EventsApiEventsIdPutRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        eventsIdPut(requestParameters: EventsApiEventsIdPutRequest, options?: RawAxiosRequestConfig): AxiosPromise<Event> {
            return localVarFp.eventsIdPut(requestParameters.id, requestParameters.eventsIdPutRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Lists events belonging to a scenario by their ID.
         * @summary List events in scenario.
         * @param {EventsApiScenariosIdEventsGetRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        scenariosIdEventsGet(requestParameters: EventsApiScenariosIdEventsGetRequest, options?: RawAxiosRequestConfig): AxiosPromise<Array<Event>> {
            return localVarFp.scenariosIdEventsGet(requestParameters.id, requestParameters.startDate, requestParameters.endDate, options).then((request) => request(axios, basePath));
        },
        /**
         * Creates an event in a scenario by its ID.
         * @summary Create event in scenario
         * @param {EventsApiScenariosIdEventsPostRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        scenariosIdEventsPost(requestParameters: EventsApiScenariosIdEventsPostRequest, options?: RawAxiosRequestConfig): AxiosPromise<Event> {
            return localVarFp.scenariosIdEventsPost(requestParameters.id, requestParameters.scenariosIdEventsPostRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Lists events belonging to a user by their ID.
         * @summary List events in user.
         * @param {EventsApiUsersIdEventsGetRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        usersIdEventsGet(requestParameters: EventsApiUsersIdEventsGetRequest, options?: RawAxiosRequestConfig): AxiosPromise<Array<Event>> {
            return localVarFp.usersIdEventsGet(requestParameters.id, requestParameters.startDate, requestParameters.endDate, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for eventsIdDelete operation in EventsApi.
 * @export
 * @interface EventsApiEventsIdDeleteRequest
 */
export interface EventsApiEventsIdDeleteRequest {
    /**
     * The unique identifier of the event.
     * @type {string}
     * @memberof EventsApiEventsIdDelete
     */
    readonly id: string

    /**
     * Whether the delete applies only to this event, to all events within the series from this event or to all events within the series.
     * @type {'one' | 'forward' | 'all'}
     * @memberof EventsApiEventsIdDelete
     */
    readonly behaviour: EventsIdDeleteBehaviour
}

/**
 * Request parameters for eventsIdGet operation in EventsApi.
 * @export
 * @interface EventsApiEventsIdGetRequest
 */
export interface EventsApiEventsIdGetRequest {
    /**
     * The unique identifier of the event.
     * @type {string}
     * @memberof EventsApiEventsIdGet
     */
    readonly id: string
}

/**
 * Request parameters for eventsIdPut operation in EventsApi.
 * @export
 * @interface EventsApiEventsIdPutRequest
 */
export interface EventsApiEventsIdPutRequest {
    /**
     * The unique identifier of the event.
     * @type {string}
     * @memberof EventsApiEventsIdPut
     */
    readonly id: string

    /**
     * 
     * @type {EventsIdPutRequest}
     * @memberof EventsApiEventsIdPut
     */
    readonly eventsIdPutRequest?: EventsIdPutRequest
}

/**
 * Request parameters for scenariosIdEventsGet operation in EventsApi.
 * @export
 * @interface EventsApiScenariosIdEventsGetRequest
 */
export interface EventsApiScenariosIdEventsGetRequest {
    /**
     * The unique identifier of the scenario.
     * @type {number}
     * @memberof EventsApiScenariosIdEventsGet
     */
    readonly id: number

    /**
     * Return the events from and including this date.
     * @type {string}
     * @memberof EventsApiScenariosIdEventsGet
     */
    readonly startDate: string

    /**
     * Return the events until and including this date.
     * @type {string}
     * @memberof EventsApiScenariosIdEventsGet
     */
    readonly endDate: string
}

/**
 * Request parameters for scenariosIdEventsPost operation in EventsApi.
 * @export
 * @interface EventsApiScenariosIdEventsPostRequest
 */
export interface EventsApiScenariosIdEventsPostRequest {
    /**
     * The unique identifier of the scenario.
     * @type {number}
     * @memberof EventsApiScenariosIdEventsPost
     */
    readonly id: number

    /**
     * 
     * @type {ScenariosIdEventsPostRequest}
     * @memberof EventsApiScenariosIdEventsPost
     */
    readonly scenariosIdEventsPostRequest?: ScenariosIdEventsPostRequest
}

/**
 * Request parameters for usersIdEventsGet operation in EventsApi.
 * @export
 * @interface EventsApiUsersIdEventsGetRequest
 */
export interface EventsApiUsersIdEventsGetRequest {
    /**
     * The unique identifier of the user.
     * @type {number}
     * @memberof EventsApiUsersIdEventsGet
     */
    readonly id: number

    /**
     * Return the events from and including this date.
     * @type {string}
     * @memberof EventsApiUsersIdEventsGet
     */
    readonly startDate: string

    /**
     * Return the events until and including this date.
     * @type {string}
     * @memberof EventsApiUsersIdEventsGet
     */
    readonly endDate: string
}

/**
 * EventsApi - object-oriented interface
 * @export
 * @class EventsApi
 * @extends {BaseAPI}
 */
export class EventsApi extends BaseAPI {
    /**
     * Deletes an event by its ID.
     * @summary Delete event
     * @param {EventsApiEventsIdDeleteRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EventsApi
     */
    public eventsIdDelete(requestParameters: EventsApiEventsIdDeleteRequest, options?: RawAxiosRequestConfig) {
        return EventsApiFp(this.configuration).eventsIdDelete(requestParameters.id, requestParameters.behaviour, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Gets a particular event by its ID.
     * @summary Get event
     * @param {EventsApiEventsIdGetRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EventsApi
     */
    public eventsIdGet(requestParameters: EventsApiEventsIdGetRequest, options?: RawAxiosRequestConfig) {
        return EventsApiFp(this.configuration).eventsIdGet(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates an event by its ID.
     * @summary Update event
     * @param {EventsApiEventsIdPutRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EventsApi
     */
    public eventsIdPut(requestParameters: EventsApiEventsIdPutRequest, options?: RawAxiosRequestConfig) {
        return EventsApiFp(this.configuration).eventsIdPut(requestParameters.id, requestParameters.eventsIdPutRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists events belonging to a scenario by their ID.
     * @summary List events in scenario.
     * @param {EventsApiScenariosIdEventsGetRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EventsApi
     */
    public scenariosIdEventsGet(requestParameters: EventsApiScenariosIdEventsGetRequest, options?: RawAxiosRequestConfig) {
        return EventsApiFp(this.configuration).scenariosIdEventsGet(requestParameters.id, requestParameters.startDate, requestParameters.endDate, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Creates an event in a scenario by its ID.
     * @summary Create event in scenario
     * @param {EventsApiScenariosIdEventsPostRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EventsApi
     */
    public scenariosIdEventsPost(requestParameters: EventsApiScenariosIdEventsPostRequest, options?: RawAxiosRequestConfig) {
        return EventsApiFp(this.configuration).scenariosIdEventsPost(requestParameters.id, requestParameters.scenariosIdEventsPostRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists events belonging to a user by their ID.
     * @summary List events in user.
     * @param {EventsApiUsersIdEventsGetRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EventsApi
     */
    public usersIdEventsGet(requestParameters: EventsApiUsersIdEventsGetRequest, options?: RawAxiosRequestConfig) {
        return EventsApiFp(this.configuration).usersIdEventsGet(requestParameters.id, requestParameters.startDate, requestParameters.endDate, options).then((request) => request(this.axios, this.basePath));
    }
}

/**
 * @export
 */
export const EventsIdDeleteBehaviour = {
    One: 'one',
    Forward: 'forward',
    All: 'all'
} as const;
export type EventsIdDeleteBehaviour = typeof EventsIdDeleteBehaviour[keyof typeof EventsIdDeleteBehaviour];
