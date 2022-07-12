import { Link } from 'react-router-dom';
import MainNavLink from '../MainNavLink';
import ProfileMenu from '../ProfileMenu';
import { PlaceholderLogo, TopBarActions, Wrapper } from './TopBar.styles';

type NavigationItem = {
  name: string;
  path?: string;
  isUpcomingFeature?: boolean;
};

const mainNavigationItems: NavigationItem[] = [
  { name: 'Tournaments', path: 'tournaments' },
  { name: 'Quick Match', isUpcomingFeature: true }
];

const TopBar = () => {
  return (
    <Wrapper>
      <TopBarActions>
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
      </TopBarActions>

      <TopBarActions>
        <ProfileMenu />
      </TopBarActions>
    </Wrapper>
  );
};

export default TopBar;
