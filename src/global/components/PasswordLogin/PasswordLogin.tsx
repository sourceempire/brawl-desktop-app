import { useState } from 'react';
import { IconType, InputSize } from 'ui/types';
import { LoginButton, LoginInput } from 'global/components/LoginView/LoginView.styles';
import { useAuth } from 'global/hooks';
import { Wrapper } from './PasswordLogin.styles';

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
        icon={IconType.PROFILE}
      />

      <LoginInput
        value={password}
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        label="Password"
        placeholder="Enter Password"
        size={InputSize.SMALL}
        icon={IconType.KEY}
      />

      <LoginButton onClick={() => loginWithUsernameAndPassword(username, password)} primary>
        Login
      </LoginButton>
    </Wrapper>
  );
};
