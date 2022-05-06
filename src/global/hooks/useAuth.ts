/* eslint-disable @typescript-eslint/no-explicit-any */

import { useRef, useState } from 'react';
import * as authRequests from 'api/requests/AuthRequests';
import { AuthType } from 'global/types';
import Window from 'window';

const useAuth = () => {
  // TODO -> Fix typesafe way of doing this
  const [authType, setAuthType] = useState<AuthType>('openid');
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<any>();

  const { current: loginValidate } = useRef(async () => {
    setLoading(true);
    try {
      await authRequests.loginValidate();
      closeLoginWindowAndOpenMain();
    } catch (err: any) {
      console.log(error);
      if (err.status !== 200) {
        setError(err);
      }
      closeMainWindowAndOpenLogin();
    }
    setLoading(false);
  });

  const { current: getAuthType } = useRef(async () => {
    setLoading(true);
    try {
      const result = await authRequests.getAuthType();
      setAuthType(result.type);
    } catch (err: any) {
      setError(err);
    }
    setLoading(false);
  });

  const { current: loginWithUsernameAndPassword } = useRef(
    async (username: string, password: string) => {
      setLoading(true);
      try {
        await authRequests.loginWithUsernameAndPassword(username, password);
        closeLoginWindowAndOpenMain();
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    }
  );

  const { current: logout } = useRef(async () => {
    try {
      await authRequests.logout();
      closeMainWindowAndOpenLogin();
    } catch (err) {
      setError(err);
    }
  });

  return {
    authType,
    loginValidate,
    getAuthType,
    loginWithUsernameAndPassword,
    logout,
    isLoading,
    error
  };
};

// The timer set on these functions is a fix for multipe windows opening
// in development if trying to reload many times in a row. Feel free to
// find a better solution.
const closeMainWindowAndOpenLogin = () => {
  setTimeout(() => {
    Window.closeMainWindow();
    Window.openLoginWindow();
  }, 20);
};

const closeLoginWindowAndOpenMain = () => {
  setTimeout(() => {
    Window.openMainWindow();
    Window.closeLoginWindow();
  }, 20);
};

export default useAuth;
