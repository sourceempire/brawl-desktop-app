import { Button, Icons, Modal } from 'common/ui';
import {
  HighLight,
  Row,
  Section,
  StyledIcon,
  Text,
  Title,
  Wrapper
} from './HowItWorksModal.styles';

type Props = {
  isOpen: boolean;
  onRequestClose: () => void;
};

export function HowItWorksModal({ isOpen, onRequestClose }: Props) {
  const sections = {
    upperSection: {
      title: 'Before a tournament starts',
      items: [
        {
          icon: '',
          text: 'A tournament have <HighLights>no team limit.</HighLights> Instead, the tournament will be split into <HighLights>multiple smaller tournaments</HighLights> whenever there are too many teams for the bracket to fit.'
        },
        {
          icon: Icons.Trophy,
          text: 'The <HighLights>prize pool</HighLights> is determined based on how many teams have joined the tournament.'
        }
      ]
    },
    lowerSection: {
      title: 'During a tournament',
      items: [
        {
          icon: '',
          text: '<HighLights>Depending on the game mode.</HighLights> As long as you <HighLights>win your game</HighLights>, your team stays in the tournament and advances to the next round.'
        },
        {
          icon: '',
          text: 'At the end of the tournament, the <HighLights>prize money will be distributed.</HighLights>'
        }
      ]
    }
  };

  return (
    <Modal
      title="How it works"
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      width="100%"
      margin="50px">
      <Wrapper>
        <Section>
          {Object.values(sections).map((section, index) => (
            <div key={index}>
              <Title>{section.title}</Title>
              {section.items.map((item, itemIndex) => (
                <Row key={itemIndex}>
                  {item.icon !== '' && (
                    <StyledIcon icon={item.icon} reversed={itemIndex % 2 === 0} />
                  )}
                  <Text>
                    {item.text.split(/<HighLights>(.*?)<\/HighLights>/g).map((part, partIndex) => {
                      if (partIndex % 2 === 1) {
                        return <HighLight key={partIndex}>{part}</HighLight>;
                      } else {
                        return part;
                      }
                    })}
                  </Text>
                  {item.icon !== '' && (
                    <StyledIcon icon={item.icon} reversed={itemIndex % 2 === 1} />
                  )}
                </Row>
              ))}
            </div>
          ))}
          <Button onClick={onRequestClose}>I understand</Button>
        </Section>
      </Wrapper>
    </Modal>
  );
}
