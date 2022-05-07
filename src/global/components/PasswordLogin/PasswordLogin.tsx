import { useState } from 'react';
import { IconType } from 'ui/types';
import { useAuth } from 'global/hooks';
import { Input } from 'ui';
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
      <Input
        value={username}
        onChange={(e) => setUserName(e.target.value)}
        label="Email"
        icon={IconType.PROFILE}
      />

      <Input
        value={password}
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        label="Password"
        icon={IconType.KEY}
      />

      <button onClick={() => loginWithUsernameAndPassword(username, password)}>Log in</button>
    </Wrapper>
  );
};
