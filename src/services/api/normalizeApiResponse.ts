import { AxiosResponse } from 'axios';
import { IApiResponse, NormalizedResponse } from './types.services';

export default function normalizeApiResponse(
  response: AxiosResponse<IApiResponse>,
): NormalizedResponse {
  const normalizedResponseData = response.data;
  const status = response.status;
  const message = normalizedResponseData.msg;
  const request = response.request;
  if (normalizedResponseData.data) {
    return { data: normalizedResponseData.data, status, message, request };
  }

  return { data: normalizedResponseData, status, message, request };
}
