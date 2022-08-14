import { Fetcher } from 'api';

export type AuthType = 'password' | 'openid';

export enum LoginResultStatus {
  FAILED = 'failed',
  COMPLETE = 'complete',
  REGISTRATION = 'registration'
}

export type LoginResult = {
  status: LoginResultStatus;
  message: string;
};

export type RegisterForm = {
  username: string;
  usertag: string;
};

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export const loginWithUsernameAndPassword: (
  username: string,
  password: string
) => Promise<{ succeeded: boolean }> = (username, password) =>
  Fetcher.post(SERVER_URL + '/api/public/auth/login', { username, password });

/**
 * Will return auth url for user to auhenicate through
 */
export const getOpenIdAuthUrl: () => Promise<{
  succeeded: boolean;
  authUrl: string;
}> = () => Fetcher.get(SERVER_URL + '/api/public/auth', {});

export const COMPLETE_URL = SERVER_URL + '/api/public/auth/complete';
export const FAILED_URL = SERVER_URL + '/api/public/auth/failed';

export const getAuthType: () => Promise<{ succeeded: boolean; type: 'password' | 'openid' }> = () =>
  Fetcher.get(SERVER_URL + '/api/public/auth/type', {});

export const loginValidate: () => Promise<{ succeeded: boolean }> = () =>
  Fetcher.get(SERVER_URL + '/api/public/auth/login/validate', {});

export const logout = () => Fetcher.post(SERVER_URL + '/api/auth/logout', {});

export const register: (form: RegisterForm) => Promise<{ succeeded: boolean }> = (form) =>
  Fetcher.post(SERVER_URL + '/api/public/auth/register', form);
