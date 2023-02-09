import { useCallback, useEffect, useRef, useState } from 'react';
import { CloseIcon, PopupText, TimerAnimation, Wrapper } from './Popup.styles';
import { PopupLevel } from './types';
import countdownCircle from 'assets/animations/countdown-circle.json';

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

  // Refs to prevent re-renders, this makes it unsafe to use state in
  // onClose and onRequestClose when callbacks are fired in parent components
  const requestClose = useRef(onRequestClose);
  const close = useRef(onClose);

  const handleClose = useCallback(() => {
    requestClose.current();
    setIsClosing(true);
  }, []);

  // the delay is for animation purposes
  useEffect(() => {
    if (!isClosing) return;
    setTimeout(close.current, 400);
  }, [isClosing]);

  useEffect(() => {
    if (!timer) return;
    if (timeout.current) clearTimeout(timeout.current);

    timeout.current = setTimeout(handleClose, timer);

    return () => {
      if (timeout.current) clearTimeout(timeout.current);
    };
  }, [handleClose, timer]);

  return (
    <Wrapper level={level} onClick={handleClose} isClosing={isClosing} top={top}>
      <PopupText>{text}</PopupText>
      <CloseIcon />
      {timer && (
        // The default duration of this animation is 10 seconds (10000 miliseconds),
        // therefore, timer in this case will be the new duration of the animation
        <TimerAnimation src={countdownCircle} level={level} speed={10000 / timer} loop={false} />
      )}
    </Wrapper>
  );
};
