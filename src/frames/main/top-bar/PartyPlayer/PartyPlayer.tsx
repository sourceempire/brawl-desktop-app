import { MutableRefObject, useRef, useState } from 'react';
import { usePartyFeed } from 'api/feeds';
import useLoggedInUser from 'api/requests/hooks/useLoggedInUser';
import { ContextMenu } from 'common/components';
import { LeaderStar, PlayerAction, PlayerImage, Wrapper } from './PartyPlayer.styles';
import tempProfileImage from 'assets/images/temporary-profile-image.jpg';

type Props = {
  userId: string;
};

export const PartyPlayer = ({ userId }: Props) => {
  const ref = useRef() as React.MutableRefObject<HTMLDivElement>;
  const [menuShown, setMenuShown] = useState(false);
  const { user } = useLoggedInUser();
  const { party } = usePartyFeed();

  const isLeader = userId === party.leaderId;
  const isLoggedInUser = userId === user.id;
  return (
    <>
      <Wrapper ref={ref} onClick={() => setMenuShown(true)}>
        {isLeader && <LeaderStar />}
        <PlayerImage src={tempProfileImage} />
      </Wrapper>
      {menuShown && (
        <ContextMenu
          ignoredElementOnClickOutside={ref.current}
          position={{ left: 100, top: 0 }}
          onClickOutside={() => setMenuShown(false)}>
          {' '}
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
