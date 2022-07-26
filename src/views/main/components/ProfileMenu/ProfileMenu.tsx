import { useState } from 'react';
import { useUserStatusFeed } from 'api/feeds';
import { setUserStatus, useAuth } from 'api/requests';
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
 *
 * TODO -> create a hook that gets logged in users information and use it here to retrieve userId
 */
const ProfileMenu = () => {
  const { logout } = useAuth();
  const { status } = useUserStatusFeed({ userId: '60ecd9cd-cb20-489f-93a3-215424f6d972' });

  const [showMenu, setShowMenu] = useState<boolean>(false);

  const setStatus = (status: UserStatusEnum) => {
    setUserStatus(status);
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
