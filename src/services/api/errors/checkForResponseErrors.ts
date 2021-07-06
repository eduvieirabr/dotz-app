import { AxiosResponse } from 'axios';
import { IApiResponse } from '../types.services';
import { ApiError } from './Errors';

import { range } from '../../../utils/range';
import expressions from '../../../utils/regularExpressions';

const statusCodes = range(400, 505);
const WITH_ERROR = /(COM\sERRO)/gi;

export default async function checkResponseErrors(
  response: AxiosResponse<IApiResponse>,
) {
  if (typeof response !== 'object') {
    throw new ApiError('Response error', 500);
  }

  checkHasApiError(response);
  checkHasResponseError(response);

  return response;
}

function checkHasApiError(response: AxiosResponse<IApiResponse>): void {
  const { status: statusApi, statusText } = response;
  const apiError = statusApi && statusCodes.includes(Number(statusApi));

  if (apiError) {
    throw new ApiError(statusText, statusApi);
  }
}

function checkHasResponseError(response: AxiosResponse<IApiResponse>): void {
  const { status: statusResponse, msg, data } = response.data;
  const responseError = statusResponse && statusCodes.includes(+statusResponse);

  if (responseError) {
    throw new ApiError(msg, statusResponse);
  }

  if (msg) {
    const withMultipleResponseError = msg.match(WITH_ERROR);

    if (withMultipleResponseError) {
      const message = data[0].msg || msg;
      throw new ApiError(message, 500);
    }
  }
}

export function checkHasApiErrorWhenUploadFile(response: any): void {
  const { status: statusApi, msg: message } = response;
  const apiError = statusApi && statusCodes.includes(Number(statusApi));

  if (apiError) {
    const newMessage = expressions.handleUploadError(message);
    throw new ApiError(newMessage, statusApi);
  }
}
