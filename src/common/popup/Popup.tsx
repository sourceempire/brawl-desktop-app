import { useEffect, useRef, useState } from 'react';
import { CloseIcon, PopupText, Wrapper } from './Popup.styles';
import { PopupLevel } from './types';

type Props = {
  text: string;
  level: PopupLevel;
  top: number;
  timer?: number;
  onRequestClose: () => void;
  onClose: () => void;
};

export const Popup = ({ text, level, onClose, onRequestClose, timer, top }: Props) => {
  const timeout = useRef<NodeJS.Timeout>();
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    onRequestClose();
    setIsClosing(true);
  };

  // the delay is for animation purposes
  useEffect(() => {
    if (!isClosing) return;
    setTimeout(onClose, 400);
  }, [isClosing, onClose]);

  useEffect(() => {
    if (!timer) {
      return;
    }

    if (timeout.current) clearTimeout(timeout.current);

    timeout.current = setTimeout(() => setIsClosing(true), timer);

    return () => {
      if (timeout.current) clearTimeout(timeout.current);
    };
  }, [timer]);

  return (
    <Wrapper level={level} onClick={handleClose} isClosing={isClosing} top={top}>
      <PopupText>{text}</PopupText>
      <CloseIcon />
    </Wrapper>
  );
};
