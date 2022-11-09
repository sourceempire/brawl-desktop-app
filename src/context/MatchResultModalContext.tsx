import React, { useState } from 'react';
import { Modal } from 'common/components';
import MatchResultModalContent from 'frames/main/modals/MatchResultModal/MatchResultModalContent';

// TODO -> setup listener for match end event
// TODO -> When match end event is received, set related notification read.

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

  const setMatchResultId = (matchId: string) => {
    setMatchId(matchId);
    setModalOpen(true);
  };

  const hideModal = () => {
    setModalOpen(false);
  };

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
