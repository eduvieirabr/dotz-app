//@ts-ignore
import axios, { AxiosInstance } from 'axios';

export const DEFAULT_TIMEOUT: number = 10000;

export default class Api {
  private static cloudInstance: AxiosInstance;
  private static cerberusInstance: AxiosInstance;

  public static getCloudInstance(
    baseURL: string,
    contentType: string,
  ): AxiosInstance {
    if (!Api.cloudInstance) {
      const api = axios.create({
        baseURL: baseURL,
        timeout: DEFAULT_TIMEOUT,
        withCredentials: true,
        headers: {
          accept: 'application/json, text/plain, */*',
          'cache-control': 'no-store',
          'content-Type': contentType,
        },
      });
      Api.cloudInstance = api;
    }
    return Api.cloudInstance;
  }
}
