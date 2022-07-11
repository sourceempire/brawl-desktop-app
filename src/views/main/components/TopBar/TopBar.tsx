import { Link } from 'react-router-dom';
import MainNavLink from '../MainNavLink';
import { PlaceholderLogo, Wrapper } from './TopBar.styles';

type NavigationItem = {
  name: string;
  path?: string;
  isUpcomingFeature?: boolean;
};

const mainNavigationItems: NavigationItem[] = [
  { name: 'Tournaments', path: 'tournamentlist' },
  { name: 'Quick Match', isUpcomingFeature: true }
];

const TopBar = () => {
  return (
    <Wrapper>
      <Link to="">
        <PlaceholderLogo />
      </Link>

      {mainNavigationItems.map((navItem) => (
        <MainNavLink
          to={navItem.path ?? ''}
          isUpcomingFeature={navItem.isUpcomingFeature}
          key={navItem.name}>
          {navItem.name}
        </MainNavLink>
      ))}
    </Wrapper>
  );
};

export default TopBar;
