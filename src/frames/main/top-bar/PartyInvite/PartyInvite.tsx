import React, { useMemo, useState } from 'react';
import { useFriendsFeed, usePartyFeed } from 'api/feeds';
import useLoggedInUser from 'api/requests/hooks/useLoggedInUser';
import * as PartyRequests from 'api/requests/PartyRequests';
import { ContextMenu } from 'common/components';
import { Title as ContextMenuTitle } from 'common/components/ContextMenu/ContextMenu.styles';
import { InputSize } from 'common/components/Input/Input.types';
import { useContextMenuPosition } from 'common/hooks';
import popup from 'common/popup';
import { ProfileImage } from 'frames/main/friends/components/Shared.styles';
import { useFriendList } from 'frames/main/friends/hooks/useFriendList';
import { HorizontalRule } from '../ProfileMenu/ProfileMenu.styles';
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
import Icons from 'assets/icons/Icons';
import tempProfileImage from 'assets/images/temporary-profile-image.jpg';

const PartyInvite = () => {
  const { party } = usePartyFeed();

  const [isMenuVisible, setMenuVisible] = useState(false);
  const [searchString, setSearchString] = useState('');

  const { friendItems } = useFriendList({ searchString });

  const { relatedElementRef, contextMenuRef, position, arrowPosition } = useContextMenuPosition({
    isVisible: isMenuVisible,
    offsetX: -70
  });

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchString(event.target.value);
  };

  const handleInvite = (userId: string) => {
    PartyRequests.invitePlayer(userId).catch((error) => popup.error(error.error));
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
        ref={relatedElementRef}
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
          ignoredElementOnClickOutside={relatedElementRef.current}>
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
                        icon={<Icons.Cross />}
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
