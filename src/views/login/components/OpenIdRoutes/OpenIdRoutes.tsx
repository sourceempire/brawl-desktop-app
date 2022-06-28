import { useLocation } from 'react-router-dom';
import OpenIdLogin from '../OpenIdLogin';
import Registration from '../Registration';
import { AsideImage, AsideWrapper } from './OpenIdRoutes.styles';
import spaceImage from 'assets/images/temporary-space.webp';

const OpenIdRoutes = () => {
  const location = useLocation();

  const registrationActive = location.pathname.endsWith('registration');

  return (
    <>
      <OpenIdLogin inactive={registrationActive} />
      <Registration active={registrationActive} />
      <AsideWrapper
        style={{ transform: registrationActive ? 'translateX(0)' : 'translateX(100%)' }}>
        <AsideImage src={spaceImage} />
      </AsideWrapper>
    </>
  );
};
export default OpenIdRoutes;
