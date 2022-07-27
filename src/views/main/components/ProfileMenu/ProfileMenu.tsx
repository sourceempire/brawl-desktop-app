import { useEffect, useState } from 'react';
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

const orderedStatusItems = [
  UserStatusEnum.ONLINE,
  UserStatusEnum.AWAY,
  UserStatusEnum.BUSY,
  UserStatusEnum.OFFLINE
];

/**
 * TODO -> Make the position of the context menu dynamic
 */
const ProfileMenu = () => {
  const { user } = useLoggedInUser();
  const { status } = useUserStatusFeed({ userId: user.id });
  const { logout } = useAuth();

  const [isMenuShown, setIsMenuShown] = useState<boolean>(false);

  const setStatus = (status: UserStatusEnum) => {
    UserRequests.setUserStatus(status);
  };

  useEffect(() => {
    console.log(isMenuShown);
  }, [isMenuShown]);

  const showMenu = () => {
    if (!isMenuShown) {
      setIsMenuShown(true);
    }
  };

  const hideMenu = () => {
    // setTimeout is needed to prevent a race condition
    // when clicking the Wraper which opens the menu again
    setTimeout(() => setIsMenuShown(false), 20);
  };

  return (
    <>
      <Wrapper onClick={showMenu}>
        <ArrowIcon />
        <ProfileImagePlaceholder>
          <MyUserStatus status={status} hideText />
        </ProfileImagePlaceholder>
      </Wrapper>
      {isMenuShown && (
        <ContextMenu
          position={{ right: 24, top: 83 }}
          arrowPosition={{ right: 20 }}
          onClickOutside={hideMenu}>
          <Username>Ottomaskinen</Username>
          <HorizontalRule />
          {orderedStatusItems.map((status) => (
            <MenuItem key={status} onClick={() => setStatus(status)}>
              <UserStatus status={status} />
            </MenuItem>
          ))}
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
