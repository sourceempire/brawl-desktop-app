import { useEffect, useState } from 'react';
import { useAuth } from 'api/requests';
import { Icons } from 'common/ui';
import { InputSize } from 'common/ui/Input/Input.types';
import { ErrorMessage, LoginButton, LoginInput, Wrapper } from './PasswordLogin.styles';
import { theme } from 'assets/styles/Theme';

export const PasswordLogin = () => {
  const { loginWithUsernameAndPassword, error } = useAuth();

  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [userError, setUserError] = useState('');

  if (error) {
    console.error(error);
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      loginWithUsernameAndPassword(username, password);
    }
  };

  useEffect(() => {
    if (error && error.statusText === 'Unauthorized') {
      setUserError('Invalid username or password');
    }
  }, [error]);

  return (
    <Wrapper>
      <LoginInput
        value={username}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="Enter Email Address"
        label="Email"
        size={InputSize.SMALL}
        icon={<Icons.Profile fill={theme.colors.white} />}
      />

      <LoginInput
        value={password}
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        label="Password"
        placeholder="Enter Password"
        size={InputSize.SMALL}
        icon={<Icons.Key fill={theme.colors.white} />}
        onKeyDown={handleKeyDown}
      />

      {error ? <ErrorMessage>{userError}</ErrorMessage> : null}

      <LoginButton onClick={() => loginWithUsernameAndPassword(username, password)} primary>
        Login
      </LoginButton>
    </Wrapper>
  );
};
