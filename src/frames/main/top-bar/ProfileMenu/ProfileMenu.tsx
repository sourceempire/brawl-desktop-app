import { useEffect, useRef, useState } from 'react';
import { useUserStatusFeed } from 'api/feeds';
import { UserRequests, useAuth } from 'api/requests';
import useLoggedInUser from 'api/requests/hooks/useLoggedInUser';
import notify from 'common/notifications';
import ContextMenu from 'common/components/ContextMenu';
import UserStatus, { UserStatusEnum } from '../../../../common/components/UserStatus';
import { statusTexts } from '../../../../common/components/UserStatus/UserStatus';
import { StatusText } from '../../../../common/components/UserStatus/UserStatus.styles';
import {
  ArrowIcon,
  HorizontalRule,
  MenuItem,
  MyUserStatus,
  ProfileImage,
  ProfileImageContainer,
  UserTag,
  Wrapper
} from './ProfileMenu.styles';
import tempProfileImage from 'assets/images/temporary-profile-image.jpg';

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
  const element = useRef() as React.MutableRefObject<HTMLDivElement>;

  const { user } = useLoggedInUser();
  const { status } = useUserStatusFeed({ userId: user.id });
  const { logout } = useAuth();

  const [isMenuShown, setIsMenuShown] = useState<boolean>(false);
  const [localStatus, setLocalStatus] = useState(UserStatusEnum.OFFLINE);

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
    setIsMenuShown(false);
  };

  const showMenu = () => {
    setIsMenuShown(true);
  };

  const handleStatusChange = (status: UserStatusEnum) => {
    hideMenu();
    setStatus(status);
  };

  return (
    <>
      <Wrapper onClick={showMenu} ref={element}>
        <ArrowIcon />
        <ProfileImageContainer>
          <ProfileImage src={tempProfileImage} />
          <MyUserStatus status={localStatus} hideText />
        </ProfileImageContainer>
      </Wrapper>
      {isMenuShown && (
        <ContextMenu
          position={{ right: 24, top: 83 }}
          arrowPosition={{ left: 144 }}
          onClickOutside={hideMenu}
          ignoredElementOnClickOutside={element.current}>
          <UserTag>{user.userTag}</UserTag>
          <HorizontalRule />
          {orderedStatusItems.map((status) => (
            <MenuItem key={status} onClick={() => handleStatusChange(status)}>
              <UserStatus status={status} />
              <StatusText>{statusTexts[status]}</StatusText>
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
