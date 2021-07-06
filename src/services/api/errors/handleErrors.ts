import { AxiosError } from 'axios';

import { ApiError, RequestError } from './Errors';

export default function handleErrors(
  e: AxiosError,
): ApiError | RequestError | Error {
  const msg = parseMessage(e.message);
  if (e.response) {
    return new ApiError(msg, e.response.status);
  }

  if (e.request) {
    return new RequestError(msg, e.request.status);
  }

  return new Error(msg);
}

const parseMessage = (msg: string): string => {
  if (msg.includes('timeout')) {
    return 'Tempo da requisição expirou';
  }
  return msg;
};
