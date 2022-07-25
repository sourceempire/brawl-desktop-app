import { useState } from 'react';
import { useAuth } from 'api/requests';
import ContextMenu from 'common/ui-components/components/ContextMenu';
import UserStatus from '../UserStatus/UserStatus';
import { UserStatuses } from '../UserStatus/UserStatus.types';
import {
  ArrowIcon,
  HorizontalRule,
  MenuItem,
  MyUserStatus,
  ProfileImagePlaceholder,
  Username,
  Wrapper
} from './ProfileMenu.styles';

/**
 * TODO -> Make the position of the context menu dynamic
 *
 * TODO -> Make the context menu hide when clicking the profile image if the context menu is shown
 *
 */
const ProfileMenu = () => {
  const { logout } = useAuth();
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <>
      <Wrapper onClick={() => setShowMenu(true)}>
        <ArrowIcon />
        <ProfileImagePlaceholder>
          <MyUserStatus status={UserStatuses.OFFLINE} hideText />
        </ProfileImagePlaceholder>
      </Wrapper>
      {showMenu && (
        <ContextMenu
          position={{ right: 24, top: 80 }}
          arrowPosition={{ right: 20 }}
          onClickOutside={() => setShowMenu(false)}>
          <Username>Ottomaskinen</Username>
          <HorizontalRule />
          <MenuItem>
            <UserStatus status={UserStatuses.ONLINE} />
          </MenuItem>
          <MenuItem>
            <UserStatus status={UserStatuses.AWAY} />
          </MenuItem>
          <MenuItem>
            <UserStatus status={UserStatuses.BUSY} />
          </MenuItem>
          <MenuItem>
            <UserStatus status={UserStatuses.OFFLINE} />
          </MenuItem>
          <HorizontalRule />
          <MenuItem>Change Avatar</MenuItem>
          <HorizontalRule />
          <MenuItem>Account Settings</MenuItem>
          <HorizontalRule />
          <MenuItem onClick={logout}>Log out</MenuItem>
        </ContextMenu>
      )}
    </>
  );
};

export default ProfileMenu;
