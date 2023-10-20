import { Link } from 'react-router-dom';
import { ActionButton } from 'common/ui';
import Notifications from '../../notifications/components/NotificationList';
import MainNavLink from '../MainNavLink';
import Party from '../Party';
import ProfileMenu from '../ProfileMenu';
import Wallet from '../Wallet';
import { PlaceholderLogo, TopBarActions, Wrapper } from './TopBar.styles';
import { Icons } from 'brawl-ui';

type Props = {
  toggleFriends: () => void;
  isFriendBarVisible: boolean;
};

type NavigationItem = {
  name: string;
  path?: string;
  isUpcomingFeature?: boolean;
};

const mainNavigationItems: NavigationItem[] = [
  { name: 'Tournaments', path: 'tournaments' },
  { name: 'Quick Match', isUpcomingFeature: true }
];

const TopBar = ({ toggleFriends, isFriendBarVisible }: Props) => {
  return (
    <Wrapper isFriendBarVisible={isFriendBarVisible}>
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
        <Party />
        <ActionButton icon={<Icons.Users />} onClick={toggleFriends} hint="Toggle Friends" />
        <Notifications />
        <Wallet />
        <ProfileMenu />
      </TopBarActions>
    </Wrapper>
  );
};

export default TopBar;
