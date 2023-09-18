import { useState } from 'react';
import { Button } from '../Button';
import { Props as ButtonProps } from '../Button/Button.types';
import { PromptText, PromptContent, ButtonsWrapper } from './PromptButton.styles';
import { Modal } from '../Modal';

type Props = ButtonProps & {
  promptText: string;
};

export const PromptButton = (props: Props) => {
  const [isPromptOpen, setPromptOpen] = useState(false);

  const togglePrompt = () => {
    setPromptOpen((isOpen) => !isOpen);
  };

  const { promptText, ...buttonProps } = props;

  return (
    <>
      <Button {...buttonProps} onClick={togglePrompt} />
      <Modal
        isOpen={isPromptOpen}
        onRequestClose={togglePrompt}
        width="300px"
        title="Are you sure?">
        <PromptText>{promptText}</PromptText>
        <PromptContent>
          <ButtonsWrapper>
            <Button onClick={props.onClick}>Yes</Button>
            <Button onClick={togglePrompt}>No</Button>
          </ButtonsWrapper>
        </PromptContent>
      </Modal>
    </>
  );
};
