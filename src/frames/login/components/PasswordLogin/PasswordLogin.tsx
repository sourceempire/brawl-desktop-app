import { useState } from 'react';
import { useAuth } from 'api/requests';
import { Icons } from 'common/components/Icon';
import { InputSize } from 'common/components/Input/Input.types';
import { LoginButton, LoginInput, Wrapper } from './PasswordLogin.styles';
import { theme } from 'assets/styles/Theme';

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
        icon={<Icons.Profile fill={theme.colors.icon.base} />}
      />

      <LoginInput
        value={password}
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        label="Password"
        placeholder="Enter Password"
        size={InputSize.SMALL}
        icon={<Icons.Key fill={theme.colors.icon.base} />}
      />

      <LoginButton onClick={() => loginWithUsernameAndPassword(username, password)} primary>
        Login
      </LoginButton>
    </Wrapper>
  );
};
