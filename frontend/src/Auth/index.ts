import {
  IAuthTokens,
  TokenRefreshRequest,
  applyAuthTokenInterceptor,
} from 'axios-jwt';
import axios from 'axios';

const BASE_URL = 'http://localhost:8080';

export const axiosInstance = axios.create({ baseURL: BASE_URL });

const requestRefresh: TokenRefreshRequest = async (
  refreshToken: string
): Promise<IAuthTokens | string> => {
  const response = await axios.post(`${BASE_URL}/oauth/token`, {
    auth: { usename: 'arsis-web', password: 'arsis2010' },
  });

  return response.data.access_token;
};

applyAuthTokenInterceptor(axiosInstance, { requestRefresh });
