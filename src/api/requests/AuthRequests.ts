import brawlFetch from 'brawl-fetch';

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
  username: string; // email
  usertag: string;
};

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export const endpoints = {
  LOGIN_CREDENTIALS: SERVER_URL + '/api/public/auth/login',
  OPEN_ID_AUTH_TYPE: SERVER_URL + '/api/public/auth/type',
  OPEN_ID_AUTH_URL: SERVER_URL + '/api/public/auth',
  LOGIN_VALIDATE: SERVER_URL + '/api/public/auth/login/validate',
  LOGOUT: SERVER_URL + '/api/auth/logout',
  REGISTER: SERVER_URL + '/api/public/auth/register'
};

export const loginWithUsernameAndPassword = (username: string, password: string) =>
  brawlFetch(endpoints.LOGIN_CREDENTIALS, {
    method: 'POST',
    body: { username, password }
  });

/**
 * Will return auth url for user to auhenicate through
 */
export const getOpenIdAuthUrl = () => brawlFetch<{ authUrl: string }>(endpoints.OPEN_ID_AUTH_URL);
export const getAuthType = () => brawlFetch<{ type: AuthType }>(endpoints.OPEN_ID_AUTH_TYPE);
export const loginValidate = () => brawlFetch(endpoints.LOGIN_VALIDATE);
export const logout = () => brawlFetch(endpoints.LOGOUT, { method: 'POST' });
export const register = (form: RegisterForm) =>
  brawlFetch(endpoints.REGISTER, { method: 'POST', body: form });
