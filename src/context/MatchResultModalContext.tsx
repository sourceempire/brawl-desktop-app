import React, { useCallback, useState } from 'react';
import { useEvent } from '@sourceempire/brawl-websocket';
import { Modal } from 'common/ui';
import MatchResultModalContent from 'frames/main/modals/MatchResultModal/MatchResultModalContent';

type ContextValue = {
  setMatchResultId: (matchId: string) => void;
  hideModal: () => void;
};

export const MatchResultModalContext = React.createContext<ContextValue>({
  setMatchResultId: () => undefined,
  hideModal: () => undefined
});

type Props = {
  children: React.ReactNode;
};

export const MatchResultModalContextProvider = ({ children }: Props) => {
  const [matchId, setMatchId] = useState<string | null>(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const hideModal = () => {
    setModalOpen(false);
  };

  const setMatchResultId = useCallback((matchId: string) => {
    setMatchId(matchId);
    setModalOpen(true);
  }, []);

  const handleMatchEndedEvent = useCallback(
    ({ matchId }: { matchId: string }) => {
      setMatchResultId(matchId);
    },
    [setMatchResultId]
  );

  useEvent('match-ended', handleMatchEndedEvent);

  return (
    <MatchResultModalContext.Provider value={{ setMatchResultId, hideModal }}>
      <>
        {children}
        <Modal isOpen={isModalOpen} onRequestClose={hideModal} closeButton={false} header={false}>
          {matchId && <MatchResultModalContent matchId={matchId} />}
        </Modal>
      </>
    </MatchResultModalContext.Provider>
  );
};
