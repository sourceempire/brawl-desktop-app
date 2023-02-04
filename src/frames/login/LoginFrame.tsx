import { useEffect } from 'react';
import { useAuth } from 'api/requests';
import { DragableArea } from 'common/ui';
import OpenIdRoutes from './components/OpenIdRoutes';
import PasswordLogin from './components/PasswordLogin';
import { Wrapper } from './LoginFrame.styles';

const LoginView = () => {
  const { authType, loginValidate, getAuthType, error } = useAuth();

  useEffect(() => {
    loginValidate();
    getAuthType();
  }, [loginValidate, getAuthType]);

  if (error) {
    console.error(error);
  }

  return (
    <Wrapper>
      <DragableArea />
      {authType === 'password' ? <PasswordLogin /> : <OpenIdRoutes />}
    </Wrapper>
  );
};

export default LoginView;
