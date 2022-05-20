import { useEffect } from 'react';
import { useAuth } from 'api/requests';
import DragableArea from 'common/components/DragableArea';
import OpenIdLogin from './components/OpenIdLogin';
import PasswordLogin from './components/PasswordLogin';
import { AsideImage, AsideWrapper, LoginWrapper, Version, Wrapper } from './LoginView.styles';
import spaceImage from 'assets/images/temporary-space.webp';

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
      <AsideWrapper>
        <AsideImage src={spaceImage} />
      </AsideWrapper>
      <LoginWrapper>
        {authType === 'password' ? <PasswordLogin /> : <OpenIdLogin />}
        <Version>Version: {process.env.REACT_APP_VERSION}</Version>
      </LoginWrapper>
    </Wrapper>
  );
};

export default LoginView;
