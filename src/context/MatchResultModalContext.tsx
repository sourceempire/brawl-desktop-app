import React, { useCallback, useEffect, useState } from 'react';
import { useServerEvents } from 'api/events';
import { Modal } from 'common/components';
import MatchResultModalContent from 'frames/main/modals/MatchResultModal/MatchResultModalContent';

export const MatchResultModalContext = React.createContext({
  setMatchResultId: (matchId: string) => {},
  hideModal: () => {}
});

type Props = {
  children: React.ReactNode;
};

export const MatchResultModalContextProvider = ({ children }: Props) => {
  const [matchId, setMatchId] = useState<string | null>(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const { addServerEventListener, removeServerEventListener } = useServerEvents();

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

  useEffect(() => {
    const listenerId = addServerEventListener<{ matchId: string }>(
      'match-ended',
      handleMatchEndedEvent
    );

    return () => removeServerEventListener('match-ended', listenerId);
  }, [addServerEventListener, handleMatchEndedEvent, removeServerEventListener]);

  return (
    <MatchResultModalContext.Provider value={{ setMatchResultId, hideModal }}>
      <>
        {children}
        <Modal isOpen={isModalOpen} onRequestClose={hideModal} closeButton={false}>
          {matchId && <MatchResultModalContent matchId={matchId} />}
        </Modal>
      </>
    </MatchResultModalContext.Provider>
  );
};
