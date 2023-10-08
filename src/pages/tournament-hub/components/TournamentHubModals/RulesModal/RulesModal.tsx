import { useEffect, useState } from 'react';
import * as RulesRequests from 'api/requests/RulesRequests';
import { Modal } from 'common/ui';
import { Rules } from 'types/Rules';
import {
  ButtonsWrapper,
  Content,
  RulesMarkdown,
  Wrapper,
  ModalButton,
  ErrorMessage
} from './RulesModal.styles';
import { ErrorCode } from 'types/ErrorCode';

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
  const [errorTest, setError] = useState(null);
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
    if (!isOpen) return;
    const fetchGameRules = async () => {
      try {
        const res = await RulesRequests.getTournamentHubRules({ tournamentHubId });
        const { cheating, general, participation } = res.content;
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
      } catch (error: any) {
        if (error.errorCode === ErrorCode.TournamentHubRulesNotFound) {
          //Add generic rules?
          setError(error.message);
        }
      }
    };

    fetchGameRules();
  }, [isOpen]);

  const handleClick = (text: string) => {
    setVisibleText(text);
  };

  const activeText: ActiveText = {
    general: rules.general.content,
    participation: rules.participation.content,
    cheating: rules.cheating.content
  };

  return (
    <Modal title="Rules" isOpen={isOpen} onRequestClose={onRequestClose} width="100%" margin="50px">
      <Wrapper>
        {errorTest ? null : (
          <ButtonsWrapper>
            <ModalButton active={visibleText === 'general'} onClick={() => handleClick('general')}>
              General
            </ModalButton>
            <ModalButton
              active={visibleText === 'participation'}
              onClick={() => handleClick('participation')}>
              Participation
            </ModalButton>
            <ModalButton
              active={visibleText === 'cheating'}
              onClick={() => handleClick('cheating')}>
              Cheating
            </ModalButton>
          </ButtonsWrapper>
        )}

        <Content>
          {errorTest ? (
            <ErrorMessage>{errorTest}</ErrorMessage>
          ) : activeText[visibleText] ? (
            <RulesMarkdown key={visibleText}>{activeText[visibleText]}</RulesMarkdown>
          ) : null}
        </Content>
      </Wrapper>
    </Modal>
  );
};

export default RulesModal;
