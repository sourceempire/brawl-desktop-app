/* eslint-disable @typescript-eslint/no-explicit-any */

import { useMemo, useRef, useState } from 'react';
import { AuthRequests } from 'api/requests';
import {
  type AuthType,
  type LoginResult,
  LoginResultStatus,
  type RegisterForm,
  endpoints
} from 'api/requests/AuthRequests';
import { useGet, usePost } from 'brawl-fetch';
import Window from 'electron-window';
import { useNavigate } from 'react-router-dom';

const useAuth = () => {
  const [authType, setAuthType] = useState<AuthType>('openid');
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<any>();

  const navigate = useNavigate();

  const [loginValidate, { loading: loadingValidate, error: validateError }] = useGet(
    endpoints.LOGIN_VALIDATE,
    {
      onComplete: () => {
        closeLoginWindowAndOpenMain();
      },
      onError: (err: any) => {
        // TODO -> fix this, no idea why the 200 status code is checked bit not returning anything
        if (err.status !== 200) {
          console.log('');
        }
        console.log(err);
        closeMainWindowAndOpenLogin();
      }
    }
  );

  const { current: getAuthType } = useRef(async () => {
    setLoading(true);
    try {
      const result = await AuthRequests.getAuthType();
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
        await AuthRequests.loginWithUsernameAndPassword(username, password);
        closeLoginWindowAndOpenMain();
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    }
  );

  const { current: loginWithOpenId } = useRef(async (identityProvider: string) => {
    const result = await AuthRequests.getOpenIdAuthUrl();
    Window.openAuthWindow(`${result.authUrl}&identity_provider=${identityProvider}`);

    Window.addLoginResultListener((result: LoginResult) => {
      Window.focus();
      switch (result.status) {
        case LoginResultStatus.COMPLETE: {
          closeLoginWindowAndOpenMain();
          break;
        }
        case LoginResultStatus.REGISTRATION: {
          navigate('/login/registration');
          break;
        }
        case LoginResultStatus.FAILED: {
          console.error('failed');
          // TODO -> Handle failed login attempt
          break;
        }
      }
      Window.removeLoginResultListener();
    });
  });

  const { current: register } = useRef(async (form: RegisterForm) => {
    await AuthRequests.register(form);
    closeLoginWindowAndOpenMain();

    // TODO -> Handle failed register attempt
  });

  const { current: logout } = useRef(async () => {
    try {
      await AuthRequests.logout();
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
    loginWithOpenId,
    register,
    logout,
    isLoading: isLoading || loadingValidate,
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
