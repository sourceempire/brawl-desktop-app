import { useState } from 'react';
import { Modal } from 'common/ui';
import { Rules } from 'types/Rules';
import { ButtonsWrapper, Content, RulesMarkdown, Wrapper, ModalButton } from './RulesModal.styles';
import { useTournamentHubRulesRequest } from 'api/requests/tournamenthub';

type Props = {
  isOpen: boolean;
  onRequestClose: () => void;
  tournamentHubId: string;
};

export function RulesModal({ isOpen, onRequestClose, tournamentHubId }: Props) {
  const [visibleText, setVisibleText] = useState<keyof Rules>('general');

  const state = useTournamentHubRulesRequest({ tournamentHubId });

  const handleClick = (text: keyof Rules) => {
    setVisibleText(text);
  };

  if (state.status === 'loading') return null;
  if (state.status === 'error') return null;

  return (
    <Modal title="Rules" isOpen={isOpen} onRequestClose={onRequestClose} width="100%" margin="50px">
      <Wrapper>
        <ButtonsWrapper>
          <ModalButton active={visibleText === 'general'} onClick={() => handleClick('general')}>
            General
          </ModalButton>
          <ModalButton
            active={visibleText === 'participation'}
            onClick={() => handleClick('participation')}>
            Participation
          </ModalButton>
          <ModalButton active={visibleText === 'cheating'} onClick={() => handleClick('cheating')}>
            Cheating
          </ModalButton>
        </ButtonsWrapper>
        <Content>
          <RulesMarkdown key={visibleText} text={state.data[visibleText].content}></RulesMarkdown>
        </Content>
      </Wrapper>
    </Modal>
  );
}
