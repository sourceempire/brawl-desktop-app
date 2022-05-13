import { useEffect } from 'react';
import { useAuth } from 'api/requests';
import DragableArea from 'common/components/DragableArea';
import OpenIdLogin from './components/OpenIdLogin';
import PasswordLogin from './components/PasswordLogin';
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
