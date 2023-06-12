import React, { useEffect, useState } from 'react';
import * as RulesRequests from 'api/requests/RulesRequests';
import { Modal } from 'common/ui';
import { ModalButton } from 'pages/tournament-hub/components/TournamentHubPage/TournamentHubModals/ModalButton/ModalButton';
import { Rules } from 'types/rules/Rules';
import { ButtonsWrapper, Content, RulesMarkdown, Wrapper } from './RulesModal.styles';

type Props = {
  isOpen: boolean;
  onRequestClose: () => void;
  tournamentHubId: string;
};

type ActiveText = {
  [key: string]: string;
};

const RulesModal = ({ isOpen, onRequestClose, tournamentHubId }: Props) => {
  const [visibleText, setVisibleText] = useState('general');
  const [rules, setRules] = useState<Rules>({
    cheating: {
      name: '',
      content: ''
    },
    general: {
      name: '',
      content: ''
    },
    participation: {
      name: '',
      content: ''
    }
  });

  useEffect(() => {
    if (!tournamentHubId) return;

    const fetchGameRules = async () => {
      try {
        const res = await RulesRequests.getTournamentHubRules({ tournamentHubId });
        const { cheating, general, participation } = res.content;
        console.log(res);
        setRules({
          cheating: {
            name: cheating.name,
            content: cheating.content
          },
          general: {
            name: general.name,
            content: general.content
          },
          participation: {
            name: participation.name,
            content: participation.content
          }
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchGameRules();
  }, [tournamentHubId]);

  const handleClick = (text: string) => {
    setVisibleText(text);
  };

  const activeText: ActiveText = {
    general: rules.general.content,
    participation: rules.participation.content,
    cheating: rules.cheating.content
  };

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
            active={visibleText === 'general'}
            onClick={() => handleClick('general')}
            text={'General'}
          />
          <ModalButton
            active={visibleText === 'participation'}
            onClick={() => handleClick('participation')}
            text={'Participation'}
          />
          <ModalButton
            active={visibleText === 'cheating'}
            onClick={() => handleClick('cheating')}
            text={'Cheating'}
          />
        </ButtonsWrapper>
        <Content>
          {activeText[visibleText] && (
            <RulesMarkdown key={visibleText}>{activeText[visibleText]}</RulesMarkdown>
          )}
        </Content>
      </Wrapper>
    </Modal>
  );
};

export default RulesModal;
