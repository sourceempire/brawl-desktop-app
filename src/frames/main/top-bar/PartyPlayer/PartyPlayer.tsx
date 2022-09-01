import { useState } from 'react';
import { usePartyFeed } from 'api/feeds';
import useLoggedInUser from 'api/requests/hooks/useLoggedInUser';
import { ContextMenu } from 'common/components';
import { useContextMenuPosition } from 'common/hooks';
import { LeaderStar, PlayerAction, PlayerImage, Wrapper } from './PartyPlayer.styles';
import tempProfileImage from 'assets/images/temporary-profile-image.jpg';

type Props = {
  userId: string;
};

export const PartyPlayer = ({ userId }: Props) => {
  const { user } = useLoggedInUser();
  const { party } = usePartyFeed();

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
  const isLoggedInUser = userId === user.id;

  return (
    <>
      <Wrapper ref={relatedElementRef} onClick={() => setMenuVisible(true)}>
        {isLeader && <LeaderStar />}
        <PlayerImage src={tempProfileImage} />
      </Wrapper>
      {isMenuVisible && (
        <ContextMenu
          ref={contextMenuRef}
          ignoredElementOnClickOutside={relatedElementRef.current}
          arrowPosition={menuArrowPosition}
          position={menuPosition}
          onClickOutside={() => setMenuVisible(false)}>
          {isLoggedInUser && (
            <>
              <PlayerAction onClick={() => console.log('Leave party')}>Leave Party</PlayerAction>
            </>
          )}
        </ContextMenu>
      )}
    </>
  );
};
