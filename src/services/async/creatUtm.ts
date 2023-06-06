import instance from '../config/axiosInterseptor';
import { POST_UTMS_API } from './api';
import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export const POST_UTMS = async (data: {}) => {
  try {
    const response = await instance.post(POST_UTMS_API, data);
    const isSuccess = response.data.result.success;
    const isToken = cookies.get('refresh_token');
    if (isSuccess !== true) {
      console.error(
        `[POST_UTMS] Description: Object Empty isSuccess: ${isSuccess} 서버와 연결이 어렵습니다.`
      );
    } else if (isToken === 'undefined') {
      console.error(`[POST_UTMS] Description: Object Empty Token: undefined`);
    }
    return response;
  } catch (error) {
    throw new Error(`[POST_UTMS]: Description: ${error}`);
  }
};
