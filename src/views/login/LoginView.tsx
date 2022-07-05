import { useEffect } from 'react';
import { useAuth } from 'api/requests';
import DragableArea from 'common/components/DragableArea';
import OpenIdLogin from './components/OpenIdLogin';
import OpenIdRoutes from './components/OpenIdRoutes';
import PasswordLogin from './components/PasswordLogin';
import { Wrapper } from './LoginView.styles';

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
      {authType === 'password' ? <PasswordLogin /> : <OpenIdRoutes />}
    </Wrapper>
  );
};

export default LoginView;
