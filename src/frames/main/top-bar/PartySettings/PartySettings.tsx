import React, { useEffect, useRef, useState } from 'react';
import { usePartyFeed } from 'api/feeds';
import * as PartyRequests from 'api/requests/PartyRequests';
import { ActionButton, ContextMenu, Input } from 'common/components';
import { useContextMenuPosition } from 'common/hooks';
import popup from 'common/popup';
import { useDebounce, useUpdateEffect } from 'utils/hooks';
import { Label, PartySizes, Settings } from './PartySettings.styles';
import Icons from 'assets/icons/Icons';

const PartySettings = () => {
  const { party } = usePartyFeed();
  const { current: initialTeamName } = useRef(party.teamName);
  const { current: initialPartySize } = useRef(party.partySize);

  const [isMenuVisible, setMenuVisible] = useState(false);
  const [teamName, setTeamName] = useState<string | null>(initialTeamName);
  const [partySize, setPartySize] = useState<number>(initialPartySize);
  const { contextMenuRef, relatedElementRef, position, arrowPosition } = useContextMenuPosition({
    isVisible: isMenuVisible
  });

  const debouncedTeamName = useDebounce(teamName, 250);

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
    if (!debouncedTeamName) return;
    PartyRequests.updatePartyTeamName(debouncedTeamName).catch((error) => {
      popup.error(error.error);
      setTeamName(party.teamName);
    });
  }, [debouncedTeamName]);

  return (
    <>
      <ActionButton
        ref={relatedElementRef}
        icon={<Icons.Cog />}
        onClick={handleOpenMenu}
        hint="Party settings"
      />
      {isMenuVisible && (
        <ContextMenu
          title="SETTINGS"
          position={position}
          arrowPosition={arrowPosition}
          ref={contextMenuRef}
          onClickOutside={() => setMenuVisible(false)}
          ignoredElementOnClickOutside={relatedElementRef.current}>
          <Settings>
            <Label>Party Team Name</Label>
            <Input
              value={teamName ?? ''}
              onChange={handleTeamNameChange}
              placeholder="Enter a team name"
            />

            <Label>Party Size</Label>
            <PartySizes>
              {Array(5)
                .fill('')
                .map((_, index) => {
                  const size = index + 1;
                  const isActive = partySize === size;
                  return (
                    <ActionButton
                      key={size}
                      icon={size}
                      onClick={() => !isActive && handlePartySizeChange(size)}
                      active={isActive}
                    />
                  );
                })}
            </PartySizes>
          </Settings>
        </ContextMenu>
      )}
    </>
  );
};

export default PartySettings;
