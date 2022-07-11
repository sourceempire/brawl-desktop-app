import { useEffect } from 'react';
import { useAuth } from 'api/requests';
import DragableArea from 'common/components/DragableArea';
import OpenIdRoutes from './components/OpenIdRoutes';
import PasswordLogin from './components/PasswordLogin';
import { Wrapper } from './LoginView.styles';

const LoginView = () => {
  const { authType, loginValidate, getAuthType, error } = useAuth();

  useEffect(() => {
    loginValidate()
      .then((r) => console.log('validate', r))
      .catch((err) => console.log('error', err));
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
