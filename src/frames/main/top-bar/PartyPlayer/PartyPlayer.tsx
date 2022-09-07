import { useState } from 'react';
import { usePartyFeed } from 'api/feeds';
import useUserFeed from 'api/feeds/hooks/useUserFeed';
import useLoggedInUser from 'api/requests/hooks/useLoggedInUser';
import * as PartyRequests from 'api/requests/PartyRequests';
import { ContextMenu } from 'common/components';
import { useContextMenuPosition } from 'common/hooks';
import popup from 'common/popup';
import { LeaderStar, MenuWrapper, PlayerAction, PlayerImage, Wrapper } from './PartyPlayer.styles';
import tempProfileImage from 'assets/images/temporary-profile-image.jpg';

type Props = {
  userId: string;
};

export const PartyPlayer = ({ userId }: Props) => {
  const { user: loggedInUser } = useLoggedInUser();
  const { party } = usePartyFeed();
  const user = useUserFeed({ userId });

  const [isMenuVisible, setMenuVisible] = useState(false);

  const {
    arrowPosition: menuArrowPosition,
    position: menuPosition,
    contextMenuRef,
    relatedElementRef
  } = useContextMenuPosition({
    isVisible: isMenuVisible
  });

  const isLeader = userId === party.leaderId;
  const isLoggedInUser = userId === loggedInUser.id;

  const handleLeaveParty = () => {
    PartyRequests.leaveParty().catch((error) => popup.error(error.error));
  };

  return (
    <>
      <Wrapper ref={relatedElementRef} onClick={() => setMenuVisible(true)}>
        {isLeader && <LeaderStar />}
        <PlayerImage src={tempProfileImage} />
      </Wrapper>
      {isMenuVisible && (
        <ContextMenu
          title={user?.userTag}
          ref={contextMenuRef}
          ignoredElementOnClickOutside={relatedElementRef.current}
          arrowPosition={menuArrowPosition}
          position={menuPosition}
          onClickOutside={() => setMenuVisible(false)}>
          {isLoggedInUser && (
            <MenuWrapper>
              <PlayerAction onClick={handleLeaveParty}>Leave Party</PlayerAction>
            </MenuWrapper>
          )}
        </ContextMenu>
      )}
    </>
  );
};
