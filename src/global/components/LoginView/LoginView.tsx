import { useEffect } from 'react';
import { useAuth } from 'global/hooks';
import DragableArea from '../DragableArea';
import { OpenIdLogin } from '../OpenIdLogin/OpenIdLogin';
import { PasswordLogin } from '../PasswordLogin/PasswordLogin';
import { Version, Wrapper } from './LoginView.styles';

const LoginView = () => {
  const { authType, loginValidate, getAuthType, error } = useAuth();

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
      {authType === 'password' ? <PasswordLogin /> : <OpenIdLogin />}
      <Version>Version: {process.env.REACT_APP_VERSION}</Version>
    </Wrapper>
  );
};

export default LoginView;
