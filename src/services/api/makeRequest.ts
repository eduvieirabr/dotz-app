import { AxiosRequestConfig } from 'axios';

import Api from '.';

import {
  IApiResponse,
  IMakeRequest,
  NormalizedResponse,
  IGetUrl,
  Params,
} from './types.services';

import handleErrors from './errors/handleErrors';
import Environment from '@utils/environments';
import normalizeApiResponse from './normalizeApiResponse';

const makeRequest = async ({
  method = 'GET',
  url,
  action,
  headers,
  params,
  isIgnoreCache = false,
  contentType,
}: IMakeRequest): Promise<NormalizedResponse | null> => {
  try {
    let baseUrl = url ? '' : `${Environment.apiUrl}`;
    let urlFull = `${action ?? url}${buildQueryString(params)}`;

    if (contentType === 'application/x-www-form-urlencoded') {
      baseUrl = url ? '' : `${Environment.apiUrl}`;
      urlFull = `${action ?? url}`;
    }

    const requestConfig: AxiosRequestConfig = {
      url: urlFull,
      params: params,
      headers: {
        isIgnoreCache: isIgnoreCache,
        ...headers,
      },
      method,
    };

    if (method.toUpperCase() !== 'GET') {
      requestConfig.data = params;
    }

    const apiInstance = Api.getCloudInstance(baseUrl, contentType);
    const response = await apiInstance.request<IApiResponse>(requestConfig);

    if (response.data.status && Number(response.data.status) >= 300) {
      const message = response?.data?.msg ?? 'Erro desconhecido';
      throw new Error(message);
    }
    const normalizeResponse = normalizeApiResponse(response);
    return normalizeResponse;
  } catch (error) {
    throw handleErrors(error);
  }
};

const buildQueryString = (params?: Record<string, any>): string => {
  if (params) {
    const queryString = Object.keys(params)
      .sort()
      .map((key: string) => `${key}=${params[key]}`)
      .join('&');

    return `?${queryString}`;
  }

  return '';
};

export type GetUrlStringType = {
  customHeaders: Params;
  uri: string;
};

export const getUrlString = async ({
  action,
  params,
}: IGetUrl): Promise<GetUrlStringType | null> => {
  const baseUrl = `${Environment.apiUrl}`;
  const customHeaders = {};
  return {
    customHeaders,
    uri: `${baseUrl}${action}${buildQueryString(params)}`,
  };
};

export default makeRequest;
