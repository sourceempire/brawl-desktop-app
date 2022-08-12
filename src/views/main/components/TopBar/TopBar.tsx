import { Link } from 'react-router-dom';
import MainNavLink from '../MainNavLink';
import ProfileMenu from '../ProfileMenu';
import TopBarItem from '../TopBarItem';
import { PlaceholderLogo, TopBarActions, Wrapper } from './TopBar.styles';
import Icons from 'assets/icons/Icons';

type Props = {
  toggleFriends: () => void;
};

type NavigationItem = {
  name: string;
  path?: string;
  isUpcomingFeature?: boolean;
};

const mainNavigationItems: NavigationItem[] = [
  { name: 'Tournaments', path: 'tournamentlist' },
  { name: 'Quick Match', isUpcomingFeature: true }
];

const TopBar = ({ toggleFriends }: Props) => {
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
        <TopBarItem icon={<Icons.Friends />} onClick={toggleFriends} hint="Toggle Friends" />
        <ProfileMenu />
      </TopBarActions>
    </Wrapper>
  );
};

export default TopBar;
