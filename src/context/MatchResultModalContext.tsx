import React, { useEffect, useState } from 'react';
import { Modal } from 'common/components';

export const MatchResultModalContext = React.createContext({
  setMatchResultId: (matchId: string) => {},
  hideModal: () => {}
});

type Props = {
  children: React.ReactNode;
};

export const MatchResultModalContextProvider = ({ children }: Props) => {
  const [matchId, setMatchId] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const setMatchResultId = (matchId: string) => {
    setIsModalOpen(true);
    setMatchId(matchId);
  };

  const hideModal = () => {
    setIsModalOpen(false);
  };

  return (
    <MatchResultModalContext.Provider value={{ setMatchResultId, hideModal }}>
      <>
        {children}
        <Modal isOpen={isModalOpen} onRequestClose={hideModal}>
          <div>{matchId}</div>
        </Modal>
      </>
    </MatchResultModalContext.Provider>
  );
};
