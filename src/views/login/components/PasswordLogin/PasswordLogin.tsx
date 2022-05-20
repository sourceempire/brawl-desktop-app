import { useState } from 'react';
import { useAuth } from 'api/requests';
import { IconType, InputSize } from 'common/ui-components/types';
import { LoginButton, LoginInput } from './PasswordLogin.styles';

export const PasswordLogin = () => {
  const { loginWithUsernameAndPassword, error } = useAuth();

  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  if (error) {
    console.error(error);
  }

  return (
    <>
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
    </>
  );
};
