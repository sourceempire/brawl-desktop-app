import { useEffect, useState } from 'react';
import { NotificationLevel } from 'types/Notification';
import { CloseIcon, Wrapper } from './Notification.styles';

type Props = {
  text: string;
  level: NotificationLevel;
  onClose: () => void;
};

export const Notification = ({ text, level, onClose }: Props) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
  };

  // the delay is for animation purposes
  useEffect(() => {
    if (!isClosing) return;
    setTimeout(onClose, 400);
  }, [isClosing, onClose]);

  return (
    <Wrapper level={level} onClick={handleClose} isClosing={isClosing}>
      {text}
      <CloseIcon />
    </Wrapper>
  );
};
