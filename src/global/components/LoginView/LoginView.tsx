import { useEffect, useState } from 'react';
import { useAuth } from 'global/hooks';
import DragableArea from '../DragableArea';
import { Wrapper } from './LoginView.styles';

const LoginView = () => {
  const { authType, loginValidate, getAuthType, loginWithUsernameAndPassword, error } = useAuth();

  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    loginValidate();
    getAuthType();
  }, [loginValidate, getAuthType]);

  if (error) {
    console.log(error);
  }

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
          <button onClick={() => loginWithUsernameAndPassword(username, password)}>Log in</button>
        </>
      ) : (
        <>Implement openid here</>
      )}
    </Wrapper>
  );
};

export default LoginView;
