import React, { useCallback, useRef, useState } from 'react';
import { usePartyFeed } from 'api/feeds';
import * as PartyRequests from 'api/requests/PartyRequests';
import {
  useContextMenuPosition,
  useDebounce,
  useLoggedInUser,
  usePrevious,
  useUpdateEffect
} from 'common/hooks';
import popup from 'common/popup';
import { ActionButton, ContextMenu } from 'common/ui';
import { Icons } from 'common/ui/Icon';
import { InputSize } from 'common/ui/Input/Input.types';
import {
  Label,
  PartySettingsInput,
  PartySizes,
  Settings,
  SettingsDisplay,
  SettingsDisplayDisabled
} from './PartySettings.styles';
import { useUpdatePartySizeRequest, useUpdatePartyTeamNameRequest } from 'api/requests/party';

const PARTY_NAME_MAX_LENGTH = 20;

const PartySettings = () => {
  const loggedInUser = useLoggedInUser();
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

  const onUpdatePartySizeError = useCallback(() => {
    // HOW TO MAKE A POPUP HERE WITH ERROR?
    // popup.error(error.error);
    setPartySize(party.partySize);
  }, []);

  const onUpdatePartyTeamNameError = useCallback(() => {
    // HOW TO MAKE A POPUP HERE WITH ERROR?
    // popup.error(error.error);
    setTeamName(party.teamName);
  }, []);

  const { updatePartySize } = useUpdatePartySizeRequest({ onError: onUpdatePartySizeError });
  const { updatePartyTeamName } = useUpdatePartyTeamNameRequest({
    onError: onUpdatePartyTeamNameError
  });

  const handleOpenMenu = () => {
    setMenuVisible(true);
  };

  const handleTeamNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTeamName(event.target.value);
  };

  const handlePartySizeChange = (newPartySize: number) => {
    setPartySize(newPartySize);
    updatePartySize({
      partySize: newPartySize
    });
  };

  useUpdateEffect(() => {
    // No need to update a team name that is not changed
    // also, this might triggered when you are not the leader
    // which will throw an error.
    if (previousDebouncedTeamName === debouncedTeamName) return;

    updatePartyTeamName({
      teamName: debouncedTeamName
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
