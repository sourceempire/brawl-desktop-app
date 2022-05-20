import { useEffect, useState } from 'react';
import { loginWithOpenID } from 'api/requests';
import { Checkbox } from 'common/ui-components';
import { Header, OpenIdButton, SignUpLink, SignUpText } from './OpenIdLogin.styles';
import { BankIDLogo, YotiLogo } from 'assets/icons';
import { theme } from 'assets/styles/Theme';

export const OpenIdLogin = () => {
  const [rememberUser, setRememberUser] = useState(false);

  useEffect(() => {
    // Handle remember user
  }, [rememberUser]);

  // onClick={() => loginWithOpenID('jonas@mail.com').then(console.log)}
  return (
    <>
      <Header>Sign in</Header>
      <OpenIdButton>
        <p>Sign in with BankID</p>
        <img src={BankIDLogo} />
      </OpenIdButton>
      <OpenIdButton>
        <p>Sign in with Yoti</p>
        <img src={YotiLogo} />
      </OpenIdButton>
      <Checkbox
        label="Remember me"
        checked={rememberUser}
        onChange={() => setRememberUser(!rememberUser)}
      />
      <SignUpText>
        No account? <p>You{`'`}ll be onboarded</p> the first time you sign in.
      </SignUpText>
    </>
  );
};
