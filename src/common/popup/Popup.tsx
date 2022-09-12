import { useEffect, useRef, useState } from 'react';
import { PopupLevel } from 'types/Popup';
import { CloseIcon, PopupText, Wrapper } from './Popup.styles';

type Props = {
  text: string;
  level: PopupLevel;
  timer?: number;
  onClose: () => void;
};

export const Popup = ({ text, level, onClose, timer }: Props) => {
  const timeout = useRef<NodeJS.Timeout>();
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
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
    <Wrapper level={level} onClick={handleClose} isClosing={isClosing}>
      <PopupText>{text}</PopupText>
      <CloseIcon />
    </Wrapper>
  );
};
