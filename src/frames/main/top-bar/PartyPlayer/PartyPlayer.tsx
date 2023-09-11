import { useRef, useState } from 'react';
import { usePartyFeed } from 'api/feeds';
import useUserFeed from 'api/feeds/hooks/useUserFeed';
import { useContextMenuPosition, useHint, useLoggedInUser } from 'common/hooks';
import { ContextMenu } from 'common/ui';
import { LeaderStar, MenuWrapper, PlayerAction, PlayerImage, Wrapper } from './PartyPlayer.styles';
import tempProfileImage from 'assets/images/temporary-profile-image.jpg';
import {
  useLeavePartyRequest,
  useKickPlayerRequest,
  useGiveLeaderRequest
} from 'api/requests/party';

type Props = {
  userId: string;
};

export const PartyPlayer = ({ userId }: Props) => {
  const loggedInUser = useLoggedInUser();
  const { party } = usePartyFeed();
  const { user, isLoading: isLoadingPartyPlayer } = useUserFeed({ userId });
  const { kickPlayer } = useKickPlayerRequest();
  const { giveLeader } = useGiveLeaderRequest();
  const { leaveParty } = useLeavePartyRequest();

  const [isMenuVisible, setMenuVisible] = useState(false);
  const [isHintVisible, setHintVisible] = useState(false);

  const partyPlayerRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const {
    arrowPosition: menuArrowPosition,
    position: menuPosition,
    contextMenuRef
  } = useContextMenuPosition({
    isVisible: isMenuVisible,
    offsetX: -50,
    relatedElementRef: partyPlayerRef
  });

  const isLeader = userId === party.leaderId;
  const isLoggedInUser = userId === loggedInUser.id;
  const isLoggedInUserLeader = party.leaderId === loggedInUser.id;

  const { Hint } = useHint({
    hintText: isLoggedInUser ? 'You' : user?.userTag,
    isVisible: isHintVisible,
    timeToVisibility: 300,
    relatedElementRef: partyPlayerRef
  });

  const givePartyLeader = () => {
    giveLeader({
      body: {
        newLeaderUserId: userId
      }
    });
  };

  const kickPartyPlayer = () => {
    kickPlayer({
      body: {
        kickedUserId: userId
      }
    });
  };

  const makeRequest = (request: () => void) => {
    setMenuVisible(false);
    request();
  };

  const onMouseEnter = () => {
    if (!isMenuVisible) {
      setHintVisible(true);
    }
  };

  const openMenu = () => {
    setMenuVisible(true);
    setHintVisible(false);
  };

  // TODO -> Im not liking the solution with two refs here but cant figure out a better way at the moment;

  if (isLoadingPartyPlayer) {
    return <Wrapper />;
  }

  return (
    <>
      <Wrapper
        ref={partyPlayerRef}
        onClick={openMenu}
        onMouseEnter={onMouseEnter}
        onMouseLeave={() => setHintVisible(false)}>
        {isLeader && <LeaderStar />}
        <PlayerImage src={user.imageUrl ? user.imageUrl : tempProfileImage} />
      </Wrapper>
      {isMenuVisible && (
        <ContextMenu
          title={user?.userTag}
          ref={contextMenuRef}
          ignoredElementOnClickOutside={partyPlayerRef.current}
          arrowPosition={menuArrowPosition}
          position={menuPosition}
          onClickOutside={() => setMenuVisible(false)}>
          <MenuWrapper>
            {!isLoggedInUser && (
              <>
                {isLoggedInUserLeader && (
                  <>
                    <PlayerAction onClick={() => makeRequest(givePartyLeader)}>
                      Give leader
                    </PlayerAction>
                    <PlayerAction onClick={() => makeRequest(kickPartyPlayer)}>
                      Kick player
                    </PlayerAction>
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
      {Hint}
    </>
  );
};
