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
    isVisible: isMenuVisible,
    offsetX: -50
  });

  const isLeader = userId === party.leaderId;
  const isLoggedInUser = userId === loggedInUser.id;
  const isLoggedInUserLeader = party.leaderId === loggedInUser.id;

  const giveLeader = () => {
    PartyRequests.giveLeader(userId).catch((error) => popup.error(error.error));
  };

  const kickPlayer = () => {
    PartyRequests.kickPlayer(userId).catch((error) => popup.error(error));
  };

  const leaveParty = () => {
    PartyRequests.leaveParty().catch((error) => popup.error(error.error));
  };

  const makeRequest = (request: () => void) => {
    setMenuVisible(false);
    request();
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
          <MenuWrapper>
            {!isLoggedInUser && (
              <>
                {isLoggedInUserLeader && (
                  <>
                    <PlayerAction onClick={() => makeRequest(giveLeader)}>Give leader</PlayerAction>
                    <PlayerAction onClick={() => makeRequest(kickPlayer)}>Kick player</PlayerAction>
                  </>
                )}
              </>
            )}

            {isLoggedInUser && (
              <>
                <PlayerAction onClick={() => makeRequest(leaveParty)}>Leave party</PlayerAction>
              </>
            )}
          </MenuWrapper>
        </ContextMenu>
      )}
    </>
  );
};
