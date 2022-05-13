import { Fetcher } from 'api';

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export const loginWithUsernameAndPassword: (
  username: string,
  password: string
) => Promise<{ succeeded: boolean }> = (username, password) =>
  Fetcher.post(SERVER_URL + '/login', { username: username, password: password });

/**
 * Will return auth url for user to auhenication through
 */
export const loginWithOpenID = (username: string) =>
  Fetcher.get(SERVER_URL + '/api/public/auth', { username: username });

export const COMPLETE_URL = SERVER_URL + '/api/public/auth/complete';
export const FAILED_URL = SERVER_URL + '/api/public/auth/failed';

export const getAuthType: () => Promise<{ succeeded: boolean; type: 'password' | 'openid' }> = () =>
  Fetcher.get(SERVER_URL + '/api/public/auth/type', {});

export const loginValidate = () => Fetcher.get(SERVER_URL + '/login/validate', {});

export const logout = () => Fetcher.post(SERVER_URL + '/api/logout', {});
