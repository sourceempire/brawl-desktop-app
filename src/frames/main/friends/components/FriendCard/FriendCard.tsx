import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { useUserStatusFeed } from 'api/feeds';
import * as friendApi from 'api/requests/FriendRequests';
import { PublicUser } from 'api/requests/UserRequests';
import { ContextMenu } from 'common/components';
import { ContextMenuRef, Position } from 'common/components/ContextMenu/ContextMenu.types';
import { UserStatusEnum } from 'common/components/UserStatus';
import notify from 'common/notifications';
import { useUpdateEffect } from 'utils/hooks';
import RemoveFriendConfirmationModal from '../RemoveFriendModal';
import { ProfileImage, UserTag } from '../Shared.styles';
import {
  FriendContextMenu,
  FriendOption,
  FriendOptions,
  FriendUserCard,
  FriendUserStatus,
  ProfileImageWrapper
} from './FriendCard.styles';
import tempProfileImage from 'assets/images/temporary-profile-image.jpg';
import { theme } from 'assets/styles/Theme';

type FriendCardRef = {
  status: UserStatusEnum;
};

type Props = {
  user: PublicUser;
  isHidden: boolean;
  onStatusChange: () => void;
};
// TODO:
// When toggeling the context menu, the position is first set to the mouse position, and
// a useEffect then checks that position to see if the context menu is outside the screen, if it is, it
// is moved inside again. Sometimes, this causes the contextmenu to flicker from the first position to
// the second. Can we find a better solution?
const FriendCard = (
  { user, onStatusChange, isHidden }: Props,
  ref: React.ForwardedRef<FriendCardRef>
) => {
  const friendCardRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const contextMenuRef = useRef<ContextMenuRef>(null);
  const { isLoading: isLoadingStatus, status } = useUserStatusFeed({ userId: user.id });
  const [isContextMenuVisible, setContextMenuVisible] = useState(false);
  const [contextMenuPosition, setContextMenuPosition] = useState<Position>({ top: 0, left: 0 });
  const [isRemoveFriendModalOpen, setRemoveFriendModalOpen] = useState(false);

  useImperativeHandle(ref, () => ({ userId: user.id, status, isLoadingStatus }));

  useEffect(() => {
    if (!isContextMenuVisible) return;
    if (!contextMenuRef.current) return;

    const contextRect = contextMenuRef.current.contextMenuContainer.getBoundingClientRect();
    const { innerWidth: windowWidth, innerHeight: windowHeight } = window;

    const isContextMenuOutsideVertically = contextRect.bottom > windowHeight - theme.spacing.base;
    const isContextMenuOutsideHorizontally = contextRect.right > windowWidth - theme.spacing.base;

    if (!isContextMenuOutsideVertically && !isContextMenuOutsideHorizontally) return;

    const verticalPosition = isContextMenuOutsideVertically
      ? { bottom: theme.spacing.base }
      : { top: contextRect.top };

    const horizontalPosition = isContextMenuOutsideHorizontally
      ? { right: theme.spacing.base }
      : { left: contextRect.left };

    setContextMenuPosition({ ...verticalPosition, ...horizontalPosition });
  }, [isContextMenuVisible]);

  useEffect(() => {
    onStatusChange();
  }, [status, onStatusChange]);

  useUpdateEffect(() => {
    if (!isRemoveFriendModalOpen) return;
    setContextMenuVisible(false);
  }, [isRemoveFriendModalOpen]);

  const showContextMenu = (event: React.PointerEvent<HTMLDivElement>) => {
    setContextMenuVisible(true);
    setContextMenuPosition({ left: event.clientX, top: event.clientY });
  };

  const hideContextMenu = () => {
    setContextMenuVisible(false);
  };

  const removeFriend = () => {
    setRemoveFriendModalOpen(false);
    friendApi.removeFriend(user.id).catch((error) => {
      notify.error(`Something went wrong trying to remove friend: ${user.userTag}`);
      console.error(error);
    });
  };

  return (
    <>
      <FriendUserCard
        isHidden={isHidden}
        onContextMenu={showContextMenu}
        onClick={showContextMenu}
        ref={friendCardRef}>
        <ProfileImageWrapper>
          <ProfileImage src={tempProfileImage} />
          <FriendUserStatus status={status} />
        </ProfileImageWrapper>
        <UserTag>{user.userTag}</UserTag>
      </FriendUserCard>

      {isContextMenuVisible && (
        <ContextMenu
          position={contextMenuPosition}
          onClickOutside={hideContextMenu}
          ref={contextMenuRef}
          ignoredElementOnClickOutside={friendCardRef.current}>
          <FriendContextMenu>
            <FriendOptions>
              <FriendOption onClick={() => setRemoveFriendModalOpen(true)}>
                Remove Friend
              </FriendOption>
            </FriendOptions>
          </FriendContextMenu>
        </ContextMenu>
      )}

      <RemoveFriendConfirmationModal
        userTag={user.userTag}
        isOpen={isRemoveFriendModalOpen}
        removeFriend={removeFriend}
        onClose={() => setRemoveFriendModalOpen(false)}
      />
    </>
  );
};

export default forwardRef(FriendCard);
