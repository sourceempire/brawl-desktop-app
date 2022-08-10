import { useEffect, useState } from 'react';
import { useUserStatusFeed } from 'api/feeds';
import { UserRequests, useAuth } from 'api/requests';
import useLoggedInUser from 'api/requests/hooks/useLoggedInUser';
import notify from 'common/notifications';
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
  const [localStatus, setLocalStatus] = useState(status);

  const setStatus = (newStatus: UserStatusEnum) => {
    // setLocalStatus allows an optimistic update of the status before it
    // is set in the backend. If the status update fails, the actual status
    // will be shown again
    setLocalStatus(newStatus);
    UserRequests.setUserStatus(newStatus).catch((error) => {
      console.error(error);
      notify.error(`Could not set status, please try again later.`);
      setLocalStatus(status);
    });
  };

  useEffect(() => {
    // updates the local status whenever an update of the actual status is
    // noticed on the backend
    setLocalStatus(status);
  }, [status]);

  const hideMenu = () => {
    // setTimeout is needed to prevent a race condition
    // when clicking the Wraper which opens the menu again
    setTimeout(() => setIsMenuShown(false), 20);
  };

  const showMenu = () => {
    setIsMenuShown(true);
  };

  return (
    <>
      <Wrapper onClick={showMenu}>
        <ArrowIcon />
        <ProfileImagePlaceholder>
          <MyUserStatus status={localStatus} hideText />
        </ProfileImagePlaceholder>
      </Wrapper>
      {isMenuShown && (
        <ContextMenu
          position={{ right: 24, top: 83 }}
          arrowPosition={{ right: 20 }}
          onClickOutside={hideMenu}>
          <Username>{user.usertag}</Username>
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
