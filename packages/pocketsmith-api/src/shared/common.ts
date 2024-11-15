import { AxiosInstance, AxiosResponse } from "axios";

import { RequiredError, RequestArgs } from "./base";
import { Configuration } from "./configuration";

export const DUMMY_BASE_URL = "https://example.com";

export function assertParamExists(
	functionName: string,
	paramName: string,
	paramValue: unknown
) {
	if (paramValue === null || paramValue === undefined) {
		throw new RequiredError(
			paramName,
			`Required parameter ${paramName} was null or undefined when calling ${functionName}.`
		);
	}
}

export const setApiKeyToObject = async function (
	object: any,
	keyParamName: string,
	configuration?: Configuration
) {
	if (configuration && configuration.apiKey) {
		const localVarApiKeyValue =
			typeof configuration.apiKey === "function"
				? await configuration.apiKey(keyParamName)
				: await configuration.apiKey;
		object[keyParamName] = localVarApiKeyValue;
	}
};

export function setBasicAuthToObject(
	object: any,
	configuration?: Configuration
) {
	if (configuration && (configuration.username || configuration.password)) {
		object["auth"] = {
			username: configuration.username,
			password: configuration.password,
		};
	}
}

export const setBearerAuthToObject = async function (
	object: any,
	configuration?: Configuration
) {
	if (configuration && configuration.accessToken) {
		const accessToken =
			typeof configuration.accessToken === "function"
				? await configuration.accessToken()
				: await configuration.accessToken;
		object["Authorization"] = "Bearer " + accessToken;
	}
};

export const setOAuthToObject = async function (
	object: any,
	name: string,
	scopes: string[],
	configuration?: Configuration
) {
	if (configuration && configuration.accessToken) {
		const localVarAccessTokenValue =
			typeof configuration.accessToken === "function"
				? await configuration.accessToken(name, scopes)
				: await configuration.accessToken;
		object["Authorization"] = "Bearer " + localVarAccessTokenValue;
	}
};

export function setSearchParams(url: URL, ...objects: any[]) {
	const searchParams = new URLSearchParams(url.search);
	for (const object of objects) {
		for (const key in object) {
			if (Array.isArray(object[key])) {
				searchParams.delete(key);
				for (const item of object[key]) {
					searchParams.append(key, item);
				}
			} else {
				searchParams.set(key, object[key]);
			}
		}
	}
	url.search = searchParams.toString();
}

export function serializeDataIfNeeded(
	value: any,
	requestOptions: any,
	configuration?: Configuration
) {
	const nonString = typeof value !== "string";
	const needsSerialization =
		nonString && configuration && configuration.isJsonMime
			? configuration.isJsonMime(requestOptions.headers["Content-Type"])
			: nonString;
	return needsSerialization
		? JSON.stringify(value !== undefined ? value : {})
		: value || "";
}

export function toPathString(url: URL) {
	return url.pathname + url.search + url.hash;
}

export function createRequestFunction(
	axiosArgs: RequestArgs,
	globalAxios: AxiosInstance,
	BASE_PATH: string,
	configuration?: Configuration
) {
	return <T = unknown, R = AxiosResponse<T>>(
		axios: AxiosInstance = globalAxios,
		basePath: string = BASE_PATH
	) => {
		const axiosRequestArgs = {
			...axiosArgs.options,
			url: (configuration?.basePath || basePath) + axiosArgs.url,
		};
		return axios.request<T, R>(axiosRequestArgs);
	};
}
