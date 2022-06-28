import { useEffect, useState } from 'react';
import { useAuth } from 'api/requests';
import { Checkbox, Header } from 'common/ui-components';
import { AppVersion, LoginWrapper, OpenIdButton, SignUpText } from './OpenIdLogin.styles';
import { BankIDLogo, YotiLogo } from 'assets/icons';

type Props = {
  inactive: boolean;
};

export const OpenIdLogin = ({ inactive = false }: Props) => {
  const { loginWithOpenId } = useAuth();
  const [rememberUser, setRememberUser] = useState(false);

  useEffect(() => {
    // Handle remember user
  }, [rememberUser]);

  const login = async (identityProvider: string) => {
    await loginWithOpenId(identityProvider);
  };

  const tabIndex = inactive ? -1 : 0;

  return (
    <LoginWrapper inactive={inactive}>
      <Header>Sign in</Header>
      <OpenIdButton onClick={() => login('bankid-se')} tabIndex={tabIndex}>
        <p>Sign in with BankID</p>
        <img src={BankIDLogo} />
      </OpenIdButton>
      <OpenIdButton onClick={() => login('yoti')} tabIndex={tabIndex}>
        <p>Sign in with Yoti</p>
        <img src={YotiLogo} />
      </OpenIdButton>
      <Checkbox
        label="Remember me"
        checked={rememberUser}
        tabIndex={tabIndex}
        onChange={() => setRememberUser(!rememberUser)}
      />
      <SignUpText>
        No account? <p>You{`'`}ll be onboarded</p> the first time you sign in.
      </SignUpText>
      <AppVersion>Version: {process.env.REACT_APP_VERSION}</AppVersion>
    </LoginWrapper>
  );
};
