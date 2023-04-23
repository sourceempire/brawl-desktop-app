import React, { useState } from 'react';
import { Button, Modal } from 'common/ui';
import Rules from 'pages/tournament/components/Rules';
import { ModalButton } from '/Users/martinwillman/Documents/desktop-app/src/pages/tournament-hub/components/TournamentHubPage/TournamentHubModals/ModalButton/ModalButton';
import { ButtonsWrapper, Content, Wrapper } from './RulesModal.styles';
import Cheating from './Views/Cheating/Cheating';
import Participation from './Views/Participation/Participation';
type Props = {
  isOpen: boolean;
  onRequestClose: () => void;
};

const RulesModal = ({ isOpen, onRequestClose }: Props) => {
  //TODO -> Replace type with gameId from matchSettings
  const [visibleText, setVisibleText] = useState('general');
  const isGeneralActive = visibleText === 'general';
  const isParActive = visibleText === 'participation';
  const isCheatingActive = visibleText === 'cheating';
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
          {isParActive && <Participation />}
          {isCheatingActive && <Cheating />}
        </Content>
      </Wrapper>
    </Modal>
  );
};

export default RulesModal;
