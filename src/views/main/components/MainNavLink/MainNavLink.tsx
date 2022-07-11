import { To } from 'react-router-dom';
import { LinkText, UpcomingFeatureBanner, Wrapper } from './MainNavLink.styles';

type Props = {
  to: To;
  children: React.ReactNode;
  isUpcomingFeature?: boolean;
};

const MainNavLink = ({ to, children, isUpcomingFeature }: Props) => {
  return (
    <Wrapper to={to} isUpcomingFeature={isUpcomingFeature}>
      <LinkText>{children}</LinkText>
      {isUpcomingFeature && <UpcomingFeatureBanner>Coming soon</UpcomingFeatureBanner>}
    </Wrapper>
  );
};

export default MainNavLink;
