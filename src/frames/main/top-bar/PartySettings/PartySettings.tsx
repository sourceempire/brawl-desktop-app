import React, { useRef, useState } from 'react';
import { usePartyFeed } from 'api/feeds';
import useLoggedInUser from 'api/requests/hooks/useLoggedInUser';
import * as PartyRequests from 'api/requests/PartyRequests';
import { ActionButton, ContextMenu, Input } from 'common/components';
import { InputSize } from 'common/components/Input/Input.types';
import { useContextMenuPosition } from 'common/hooks';
import popup from 'common/popup';
import { useDebounce, usePrevious, useUpdateEffect } from 'utils/hooks';
import {
  Label,
  PartySettingsInput,
  PartySizes,
  Settings,
  SettingsDisplay,
  SettingsDisplayDisabled
} from './PartySettings.styles';
import Icons from 'assets/icons/Icons';

const PARTY_NAME_MAX_LENGTH = 20;

const PartySettings = () => {
  const { user: loggedInUser } = useLoggedInUser();
  const { party } = usePartyFeed();
  const { current: initialTeamName } = useRef(party.teamName);
  const { current: initialPartySize } = useRef(party.partySize);

  const [isMenuVisible, setMenuVisible] = useState(false);
  const [teamName, setTeamName] = useState<string | null>(initialTeamName);
  const [partySize, setPartySize] = useState<number>(initialPartySize);
  const settingsRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const { contextMenuRef, position, arrowPosition } = useContextMenuPosition({
    isVisible: isMenuVisible,
    offsetX: -50,
    relatedElementRef: settingsRef
  });

  const debouncedTeamName = useDebounce(teamName, 250);
  const previousDebouncedTeamName = usePrevious(debouncedTeamName);

  const handleOpenMenu = () => {
    setMenuVisible(true);
  };

  const handleTeamNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTeamName(event.target.value);
  };

  const handlePartySizeChange = (newPartySize: number) => {
    setPartySize(newPartySize);
    PartyRequests.updatePartySize(newPartySize).catch((error) => {
      popup.error(error.error);
      setPartySize(party.partySize);
    });
  };

  useUpdateEffect(() => {
    // No need to update a team name that is not changed
    // also, this might triggered when you are not the leader
    // which will throw an error.
    if (previousDebouncedTeamName === debouncedTeamName) return;

    PartyRequests.updatePartyTeamName(debouncedTeamName).catch((error) => {
      popup.error(error.error);
      setTeamName(party.teamName);
    });
  }, [debouncedTeamName]);

  return (
    <>
      <ActionButton
        ref={settingsRef}
        icon={<Icons.Cog />}
        onClick={handleOpenMenu}
        hint={isMenuVisible ? undefined : 'Party settings'}
      />
      {isMenuVisible && (
        <ContextMenu
          title="SETTINGS"
          position={position}
          arrowPosition={arrowPosition}
          ref={contextMenuRef}
          onClickOutside={() => setMenuVisible(false)}
          ignoredElementOnClickOutside={settingsRef.current}>
          <Settings>
            <Label>Party Team Name</Label>
            {party.leaderId === loggedInUser.id ? (
              <PartySettingsInput
                maxLength={PARTY_NAME_MAX_LENGTH}
                value={teamName ?? ''}
                onChange={handleTeamNameChange}
                placeholder="Enter a team name"
                size={InputSize.MEDIUM}
              />
            ) : party.teamName ? (
              <SettingsDisplay>{party.teamName}</SettingsDisplay>
            ) : (
              <SettingsDisplayDisabled>No name yet</SettingsDisplayDisabled>
            )}

            <Label>Party Size</Label>
            {party.leaderId === loggedInUser.id ? (
              <PartySizes>
                {Array(5)
                  .fill('')
                  .map((_, index) => {
                    const size = index + 1;
                    const isActive = partySize === size;
                    return (
                      <ActionButton
                        disabled={party.players.length > size}
                        key={size}
                        icon={size}
                        onClick={() => !isActive && handlePartySizeChange(size)}
                        active={isActive}
                      />
                    );
                  })}
              </PartySizes>
            ) : (
              <SettingsDisplay>{party.partySize}</SettingsDisplay>
            )}
          </Settings>
        </ContextMenu>
      )}
    </>
  );
};

export default PartySettings;
