import React, { useMemo, useRef, useState } from 'react';
import { usePartyFeed } from 'api/feeds';
import * as PartyRequests from 'api/requests/PartyRequests';
import { useContextMenuPosition } from 'common/hooks';
import popup from 'common/popup';
import { ContextMenu, ContextMenuTitle, Icons } from 'common/ui';
import { InputSize } from 'common/ui/Input/Input.types';
import { ProfileImage } from 'frames/main/friends/components/Shared.styles';
import { useFriendList } from 'frames/main/friends/hooks/useFriendList';
import {
  CancelInviteAction,
  FriendSearchInput,
  InvitePlayerAction,
  InvitePlayerCard,
  PendingText,
  Players,
  UserInfoContainer,
  UserTag,
  Wrapper
} from './PartyInvite.styles';
import tempProfileImage from 'assets/images/temporary-profile-image.jpg';
import { theme } from 'assets/styles/Theme';
import { useInvitePlayerRequest } from 'api/requests/party';

const PartyInvite = () => {
  const { party } = usePartyFeed();

  const [isMenuVisible, setMenuVisible] = useState(false);
  const [searchString, setSearchString] = useState('');

  const { friendItems } = useFriendList({ searchString });
  const { invitePlayer } = useInvitePlayerRequest();

  const invitePlayerActionRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const { contextMenuRef, position, arrowPosition } = useContextMenuPosition({
    isVisible: isMenuVisible,
    offsetX: -70,
    relatedElementRef: invitePlayerActionRef
  });

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchString(event.target.value);
  };

  const handleInvite = (userId: string) => {
    invitePlayer({
      invitedUserId: userId
    });
  };

  const handleRevokeInvite = (userId: string) => {
    PartyRequests.revokeInvite(userId).catch((error) => popup.error(error.error));
  };

  const playerList = useMemo(
    () =>
      friendItems
        ?.filter(({ friend }) => friend.userTag.toLowerCase().includes(searchString.toLowerCase()))
        ?.filter(({ friend }) => !party.players.includes(friend.id)),
    [friendItems, party.players, searchString]
  );

  return (
    <>
      <InvitePlayerAction
        ref={invitePlayerActionRef}
        icon={<Icons.Plus />}
        onClick={() => setMenuVisible(true)}
        hint={!isMenuVisible ? 'Invite Player' : undefined}
      />
      {isMenuVisible && (
        <ContextMenu
          position={position}
          arrowPosition={arrowPosition}
          ref={contextMenuRef}
          onClickOutside={() => setMenuVisible(false)}
          ignoredElementOnClickOutside={invitePlayerActionRef.current}>
          <Wrapper>
            <ContextMenuTitle>INVITE MEMBER</ContextMenuTitle>
            <FriendSearchInput
              onChange={handleSearchChange}
              value={searchString}
              placeholder="Search for friend to invite"
              size={InputSize.SMALL}
            />

            <Players>
              {playerList.map(({ friend }) => {
                const hasInvite = party.invites.includes(friend.id);

                return (
                  <InvitePlayerCard
                    hasInvite={hasInvite}
                    key={friend.id}
                    {...(!hasInvite && { onClick: () => handleInvite(friend.id) })}>
                    <ProfileImage src={tempProfileImage} />
                    <UserInfoContainer>
                      <UserTag>{friend.userTag}</UserTag>
                      {hasInvite && <PendingText>Invite pending</PendingText>}
                    </UserInfoContainer>

                    {hasInvite && (
                      <CancelInviteAction
                        icon={<Icons.Cross fill={theme.colors.white} height={14} />}
                        onClick={() => handleRevokeInvite(friend.id)}
                        hint="Revoke Invite"
                      />
                    )}
                  </InvitePlayerCard>
                );
              })}
            </Players>
          </Wrapper>
        </ContextMenu>
      )}
    </>
  );
};

export default PartyInvite;
