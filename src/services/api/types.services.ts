import { Method } from 'axios';

export interface ItemsResponse {
  canLoadMore: boolean;
  items: any[];
}
export interface IApiResponse {
  status: number;
  msg: string;
  data?: any;
  cacheDate?: Date;
  session: string;
  json?: () => void;
}

type ParamsType = Record<string, any>;
export interface IMakeRequest {
  action?: string;
  url?: string;
  method?: Method;
  params?: ParamsType;
  headers?: any;
  isIgnoreCache?: boolean;
  contentType: string;
}

export interface NormalizedResponse {
  data: any;
  status?: number;
  cacheDate?: Date;
  message?: string;
  request?: any;
}

export interface IGetUrl {
  action: string;
  method?: Method;
  params?: ParamsType;
  withAccessToken?: boolean;
}

export interface Params {
  [key: string]: any;
}
