import React, { useCallback, useRef, useState } from 'react';
import { usePartyFeed } from 'api/feeds';
import { useContextMenuPosition, useLoggedInUser } from 'common/hooks';
import popup from 'common/popup';
import { ActionButton, ContextMenu } from 'common/ui';
import { Icons } from 'common/ui/Icon';
import { Label, PartySizes, Settings, SettingsDisplay } from './PartySettings.styles';
import { ErrorResponse } from 'brawl-fetch';
import { useUpdatePartySizeRequest } from 'api/requests/party';

const PartySettings = () => {
  const loggedInUser = useLoggedInUser();
  const { party } = usePartyFeed();
  const { current: initialPartySize } = useRef(party.partySize);

  const [isMenuVisible, setMenuVisible] = useState(false);
  const [partySize, setPartySize] = useState<number>(initialPartySize);
  const settingsRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const { contextMenuRef, position, arrowPosition } = useContextMenuPosition({
    isVisible: isMenuVisible,
    offsetX: -50,
    relatedElementRef: settingsRef
  });

  const onUpdatePartySizeError = useCallback((error: ErrorResponse) => {
    popup.error(error.message);
    setPartySize(party.partySize);
  }, []);

  const { updatePartySize } = useUpdatePartySizeRequest({ onError: onUpdatePartySizeError });

  const handleOpenMenu = () => {
    setMenuVisible(true);
  };

  const handlePartySizeChange = (newPartySize: number) => {
    setPartySize(newPartySize);
    updatePartySize({
      body: {
        partySize: newPartySize
      }
    });
  };

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
