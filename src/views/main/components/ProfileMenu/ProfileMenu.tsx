import { useState } from 'react';
import { useUserStatusFeed } from 'api/feeds';
import { UserRequests, useAuth } from 'api/requests';
import useLoggedInUser from 'api/requests/hooks/useLoggedInUser';
import ContextMenu from 'common/ui-components/components/ContextMenu';
import UserStatus, { UserStatusEnum } from '../UserStatus';
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
 */
const ProfileMenu = () => {
  const { user } = useLoggedInUser();
  const { status } = useUserStatusFeed({ userId: user.id });
  const { logout } = useAuth();

  const [showMenu, setShowMenu] = useState<boolean>(false);

  const setStatus = (status: UserStatusEnum) => {
    UserRequests.setUserStatus(status);
  };

  return (
    <>
      <Wrapper onClick={() => setShowMenu(true)}>
        <ArrowIcon />
        <ProfileImagePlaceholder>
          <MyUserStatus status={status} hideText />
        </ProfileImagePlaceholder>
      </Wrapper>
      {showMenu && (
        <ContextMenu
          position={{ right: 24, top: 80 }}
          arrowPosition={{ right: 20 }}
          onClickOutside={() => setShowMenu(false)}>
          <Username>Ottomaskinen</Username>
          <HorizontalRule />
          <MenuItem onClick={() => setStatus(UserStatusEnum.ONLINE)}>
            <UserStatus status={UserStatusEnum.ONLINE} />
          </MenuItem>
          <MenuItem onClick={() => setStatus(UserStatusEnum.AWAY)}>
            <UserStatus status={UserStatusEnum.AWAY} />
          </MenuItem>
          <MenuItem onClick={() => setStatus(UserStatusEnum.BUSY)}>
            <UserStatus status={UserStatusEnum.BUSY} />
          </MenuItem>
          <MenuItem onClick={() => setStatus(UserStatusEnum.OFFLINE)}>
            <UserStatus status={UserStatusEnum.OFFLINE} />
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
