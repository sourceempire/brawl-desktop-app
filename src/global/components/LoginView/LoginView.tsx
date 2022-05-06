import { useEffect, useState } from 'react';
import * as authRequests from 'api/requests/AuthRequests';
import { AuthType } from 'global/types/AuthType';
import Window from 'window';
import DragableArea from '../DragableArea';
import { Wrapper } from './LoginView.styles';

const LoginView = () => {
  const [authType, setAuthType] = useState<AuthType>('openid');
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const openMainWindow = () => {
    Window.openMainWindow();
    Window.closeLoginWindow();
  };

  const getAuthType = async () => {
    const result = await authRequests.getAuthType();

    if (result.succeeded) {
      setAuthType(result.type);
    } else {
      throw 'Something went wrong';
    }
  };

  const loginWithUserNameAndPassword = async () => {
    const result = await authRequests.loginWithUsernameAndPassword(username, password);

    if (result.succeeded) {
      openMainWindow();
    }
  };

  useEffect(() => {
    getAuthType();

    authRequests.loginValidate().then(() => {
      openMainWindow();
    });
  }, []);

  return (
    <Wrapper>
      <DragableArea />

      <p>Login view</p>
      <p>Version: {process.env.REACT_APP_VERSION}</p>

      {authType === 'password' ? (
        <>
          <div>
            <input value={username} onChange={(e) => setUserName(e.target.value)} />
          </div>
          <div>
            <input value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button onClick={loginWithUserNameAndPassword}>Log in</button>
        </>
      ) : (
        <></>
      )}
    </Wrapper>
  );
};

export default LoginView;
