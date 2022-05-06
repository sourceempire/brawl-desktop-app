import { useEffect, useState } from 'react';
import * as authRequests from 'api/requests/AuthRequests';
import { LoginType } from 'global/types/LoginType';
import Window from 'window';
import DragableArea from '../DragableArea';
import { Wrapper } from './LoginView.styles';

const LoginView = () => {
  const [loginType, setLoginType] = useState<LoginType>('openid');
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const getAuthType = async () => {
    try {
      const result = await authRequests.getAuthType();
      if (result.succeeded) {
        setLoginType(result.type);
      } else {
        console.error('Something went wrong');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const loginWithUserNameAndPassword = async () => {
    const result = await authRequests.loginWithUsernameAndPassword(username, password);
    console.log(result);
  };

  useEffect(() => {
    getAuthType();

    authRequests.loginValidate().then(() => {
      Window.openMainWindow();
      Window.closeLoginWindow();
    });
  }, []);

  return (
    <Wrapper>
      <DragableArea />

      <p>Login view</p>
      <p>Version: {process.env.REACT_APP_VERSION}</p>

      {loginType === 'password' ? (
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
