import { useState } from 'react';
import { useAuth } from 'api/requests';
import { InputSize } from 'common/components/Input/Input.types';
import { LoginButton, LoginInput, Wrapper } from './PasswordLogin.styles';
import Icons from 'assets/icons/Icons';

export const PasswordLogin = () => {
  const { loginWithUsernameAndPassword, error } = useAuth();

  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  if (error) {
    console.error(error);
  }

  return (
    <Wrapper>
      <LoginInput
        value={username}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="Enter Email Address"
        label="Email"
        size={InputSize.SMALL}
        icon={<Icons.Profile fill="white" />}
      />

      <LoginInput
        value={password}
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        label="Password"
        placeholder="Enter Password"
        size={InputSize.SMALL}
        icon={<Icons.Key fill="white" />}
      />

      <LoginButton onClick={() => loginWithUsernameAndPassword(username, password)} primary>
        Login
      </LoginButton>
    </Wrapper>
  );
};
