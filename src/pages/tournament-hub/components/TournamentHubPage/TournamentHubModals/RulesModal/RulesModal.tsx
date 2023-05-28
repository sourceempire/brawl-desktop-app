import React, { useEffect, useState } from 'react';
import * as RulesRequests from 'api/requests/RulesRequests';
import { Button, Modal } from 'common/ui';
import Rules from 'pages/tournament/components/Rules';
import { ModalButton } from '/Users/martinwillman/Documents/desktop-app/src/pages/tournament-hub/components/TournamentHubPage/TournamentHubModals/ModalButton/ModalButton';
import { ButtonsWrapper, Cheating, Content, Participation, Wrapper } from './RulesModal.styles';

type Props = {
  isOpen: boolean;
  onRequestClose: () => void;
  tournamentHubId: string;
};

const RulesModal = ({ isOpen, onRequestClose, tournamentHubId }: Props) => {
  const [visibleText, setVisibleText] = useState('general');
  const isGeneralActive = visibleText === 'general';
  const isParActive = visibleText === 'participation';
  const isCheatingActive = visibleText === 'cheating';

  const [generalMD, setGeneralMD] = useState('');
  const [participationMD, setParticipationMD] = useState('');
  const [cheatingMD, setCheatingMD] = useState('');

  const fetchGameRules = async () => {
    try {
      const res = await RulesRequests.GetTournamentHubContent({
        tournamentHubId: tournamentHubId
      });
      const data = res.content;
      setCheatingMD(data.cheating.content);
      setGeneralMD(data.general.content);
      setParticipationMD(data.participation.content);
    } catch (error) {
      console.error(error); // Log any errors
    }
  };

  useEffect(() => {
    console.log(tournamentHubId);
    tournamentHubId && fetchGameRules();
  });

  return (
    <Modal
      title="Rules"
      isOpen={isOpen}
      onRequestClose={() => {
        onRequestClose();
      }}
      width="100%"
      margin="50px">
      <Wrapper>
        <ButtonsWrapper>
          <ModalButton
            active={isGeneralActive}
            onClick={() => setVisibleText('general')}
            text={'General'}
          />
          <ModalButton
            active={isParActive}
            onClick={() => setVisibleText('participation')}
            text={'Participation'}
          />
          <ModalButton
            active={isCheatingActive}
            onClick={() => setVisibleText('cheating')}
            text={'Cheating'}
          />
        </ButtonsWrapper>
        <Content>
          {isGeneralActive && <Rules />}
          {isParActive && <Participation className="">{participationMD}</Participation>}
          {isCheatingActive && <Cheating className="">{cheatingMD}</Cheating>}
        </Content>
      </Wrapper>
    </Modal>
  );
};

export default RulesModal;
