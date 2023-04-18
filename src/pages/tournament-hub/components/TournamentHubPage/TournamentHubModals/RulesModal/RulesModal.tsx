import React, { useState } from 'react';
import { Link, Navigate, Route, Routes, useParams } from 'react-router-dom';
import { Button, Modal } from 'common/ui';
import Rules from 'pages/tournament/components/Rules';
import { ButtonsWrapper, Content, Wrapper } from './RulesModal.styles';
import Cheating from './Views/Cheating';
import Participation from './Views/Participation';
type Props = {
  isOpen: boolean;
  onRequestClose: () => void;
};

const RulesModal = ({ isOpen, onRequestClose }: Props) => {
  //TODO -> Replace type with gameId from matchSettings
  const [visibleText, setVisibleText] = useState('general');

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
          <Button onClick={() => setVisibleText('general')}>General</Button>
          <Button onClick={() => setVisibleText('participation')}>Participation</Button>
          <Button onClick={() => setVisibleText('cheating')}>Cheating</Button>
        </ButtonsWrapper>
        <Content>
          {visibleText === 'general' && <Rules />}
          {visibleText === 'participation' && <Participation />}
          {visibleText === 'cheating' && <Cheating />}
        </Content>
      </Wrapper>
    </Modal>
  );
};

export default RulesModal;
