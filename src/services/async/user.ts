import instance from '../config/axiosInterseptor';
import { GET_USER_API, POST_SIGN_IN_API } from './api';
import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export const GET_USER = async () => {
  try {
    const response = await instance.get(GET_USER_API);
    const isSuccess = response.data.result.success;
    const isToken = cookies.get('refresh_token');
    if (isSuccess !== true) {
      console.error(
        `[GET_USER] Description: Object Empty isSuccess: ${isSuccess} 서버와 연결이 어렵습니다.`
      );
    } else if (isToken === 'undefined') {
      console.error(`[GET_USER] Description: Object Empty Token: undefined`);
    }
    return response;
  } catch (error) {
    throw new Error(`[GET_USER]: Description: ${error}`);
  }
};

export const SIGN_IN = async (data: {}) => {
  try {
    const response = await instance.post(POST_SIGN_IN_API, data);
    console.log(response);
    const isSuccess = response.data.result.success;
    const token = response.data.data.token;
    console.log(token);
    if (isSuccess === true) {
      cookies.set('refresh_token', token, {
        path: '/',
        secure: true,
        sameSite: 'none',
      });
    } else {
      console.error(
        `[SIGN_IN] Description: Object Empty isSuccess: ${isSuccess} 서버와 연결이 어렵습니다.`
      );
    }
    return response;
  } catch (error) {
    throw new Error(`SIGN_IN: ${error} `);
  }
};
