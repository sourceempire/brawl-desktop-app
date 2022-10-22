import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { useUserFeed, useUserStatusFeed } from 'api/feeds';
import { UserRequests, useAuth } from 'api/requests';
import useLoggedInUser from 'api/requests/hooks/useLoggedInUser';
import ContextMenu from 'common/components/ContextMenu';
import UserStatus, { UserStatusEnum } from 'common/components/UserStatus';
import { statusTexts } from 'common/components/UserStatus/UserStatus';
import { StatusText } from 'common/components/UserStatus/UserStatus.styles';
import { useContextMenuPosition } from 'common/hooks';
import popup from 'common/popup';
import ChangeAvatarModal from '../ChangeAvatarModal/ChangeAvatarModal';
import {
  HorizontalRule,
  MenuItem,
  MenuWrapper,
  MyUserStatus,
  ProfileImage,
  ProfileImageContainer,
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
  const loggedInUser = useLoggedInUser();
  const { user } = useUserFeed({ userId: loggedInUser.user.id });
  const { status } = useUserStatusFeed({ userId: loggedInUser.user.id });
  const { logout } = useAuth();

  const [isMenuShown, setIsMenuShown] = useState<boolean>(false);
  const [localStatus, setLocalStatus] = useState(UserStatusEnum.OFFLINE);

  const [showAvatarModal, setShowAvatarModal] = useState(false);

  const profileMenuRef = useRef() as MutableRefObject<HTMLDivElement>;

  const { contextMenuRef, position, arrowPosition } = useContextMenuPosition({
    isVisible: isMenuShown,
    relatedElementRef: profileMenuRef,
    offsetX: -60
  });

  const setStatus = (newStatus: UserStatusEnum) => {
    // setLocalStatus allows for an optimistic update of the status before it
    // is set in the backend. If the status update fails, the actual status
    // will be shown again
    setLocalStatus(newStatus);
    UserRequests.setUserStatus(newStatus).catch((error) => {
      console.error(error);
      popup.error(`Could not set status, please try again later.`);
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

  const handleShowAvatarModal = () => {
    hideMenu();
    setShowAvatarModal(true);
  };

  return (
    <>
      <Wrapper onClick={showMenu} ref={profileMenuRef}>
        {/* <ArrowIcon /> */}
        <ProfileImageContainer>
          <ProfileImage src={user.imageUrl ? user.imageUrl : tempProfileImage} />
          <MyUserStatus status={localStatus} hideText />
        </ProfileImageContainer>
      </Wrapper>
      {isMenuShown && (
        <ContextMenu
          ref={contextMenuRef}
          title={user.userTag}
          position={position}
          arrowPosition={arrowPosition}
          onClickOutside={hideMenu}
          ignoredElementOnClickOutside={profileMenuRef.current}>
          <MenuWrapper>
            {orderedStatusItems.map((status) => (
              <MenuItem key={status} onClick={() => handleStatusChange(status)}>
                <UserStatus status={status} />
                <StatusText>{statusTexts[status]}</StatusText>
              </MenuItem>
            ))}
            <HorizontalRule />
            <MenuItem onClick={handleShowAvatarModal}>Change Avatar</MenuItem>
            <MenuItem>Account Settings</MenuItem>
            <HorizontalRule />
            <MenuItem onClick={logout}>Log out</MenuItem>
          </MenuWrapper>
        </ContextMenu>
      )}

      <ChangeAvatarModal isOpen={showAvatarModal} onClose={() => setShowAvatarModal(false)} />
    </>
  );
};

export default ProfileMenu;
