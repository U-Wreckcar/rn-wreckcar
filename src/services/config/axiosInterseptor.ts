'use client';
import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosRequestHeaders,
  AxiosResponse,
  AxiosError,
} from 'axios';
import { Cookies } from 'react-cookie';

const cookies = new Cookies();

interface AdaptAxiosRequestConfig extends AxiosRequestConfig {
  headers: AxiosRequestHeaders;
}

const instance: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACK_API,
  timeout: 5000,
});

instance.interceptors.request.use(
  (config: AdaptAxiosRequestConfig) => {
    const refresh_token = cookies.get('refresh_token');
    if (refresh_token) {
      config.headers['X-Refresh-Token'] = `Bearer ${refresh_token}`;
      // config.withCredentials = true;
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);
interface ErrorResponse {
  // 에러 응답 데이터의 타입을 정의합니다
  error: string;
}
instance.interceptors.response.use(
  (response) => {
    if (response.status !== 200) {
      console.error(`[INTERCEPTOR] Description: ${response.status}`);
    }
    return response;
  },
  (error: AxiosError) => {
    const handleErrorResponse = (error: AxiosError<ErrorResponse, any>) => {
      console.error(error);
      return Promise.reject(error);
    };
  }
);

export default instance;
