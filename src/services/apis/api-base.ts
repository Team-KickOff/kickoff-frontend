import { useMemo } from 'react';
import axios, { AxiosResponse } from 'axios';

import { API_SERVER } from '@/config/config';

// type import
import { IApiRes } from '@/types/apiType';

export function ApiService<T>(
  url: string,
  body?: any,
): {
  get: Promise<AxiosResponse<IApiRes<T>, any>>;
  post: Promise<AxiosResponse<IApiRes<T>, any>>;
  delete: Promise<AxiosResponse<IApiRes<T>, any>>;
  put: Promise<AxiosResponse<IApiRes<T>, any>>;
} {
  return {
    get: useMemo(() => baseApi().get(url, body), [url, body]),
    post: useMemo(() => baseApi().post(url, body), [url, body]),
    delete: useMemo(() => baseApi().delete(url, body), [url, body]),
    put: useMemo(() => baseApi().put(url, body), [url, body]),
  };
}

export const baseApi = () => {
  const api = axios.create({
    // config 만들어 놓을 것
    baseURL: API_SERVER,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization: '',
    },
  });

  api.interceptors.request.use(
    (req) => {
      // async-storage에서 가져올 것
      const accessToken = '';

      if (accessToken) {
        req.headers.Authorization = `Bearer ${accessToken}`;
      }

      console.log('ApiService::Request URL >', (req.baseURL || '') + req.url);
      return req;
    },
    (err) => {
      console.log(err);
    },
  );

  api.interceptors.response.use(
    (res) => {
      return res.data;
    },
    (err) => {
      if (err.response.status === 401) {
        TokenRefresher();
      }
      console.log(err);
    },
  );
  return api;
};

export const TokenRefresher = async () => {
  try {
    const res = await axios({
      url: `${API_SERVER}/토근 재발급 받는 주소`,
      method: 'post',
    });
  } catch (e) {
    // 로그인 해주세요~
  }
};
