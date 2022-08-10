import { useEffect, useRef, useState } from 'react';
import { NotificationLevel } from 'types/Notification';
import { CloseIcon, Wrapper } from './Notification.styles';

type Props = {
  text: string;
  level: NotificationLevel;
  timer?: number;
  onClose: () => void;
};

export const Notification = ({ text, level, onClose, timer }: Props) => {
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
      {text}
      <CloseIcon />
    </Wrapper>
  );
};
