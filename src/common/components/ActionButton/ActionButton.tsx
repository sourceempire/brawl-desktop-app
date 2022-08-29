import { useRef, useState } from 'react';
import useHint from 'common/hooks/useHint';
import { Wrapper } from './ActionButton.styles';
import { ActionButtonSize } from './ActionButton.types';

type Props = {
  onClick: () => void;
  icon: React.ReactNode;
  iconColor?: string;
  hint?: string;
  isCircle?: boolean;
  size?: ActionButtonSize;
  className?: string;
};

const ActionButton = ({
  onClick,
  icon,
  hint,
  iconColor,
  isCircle,
  size = ActionButtonSize.MEDIUM,
  className
}: Props) => {
  const itemRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const [isHintVisible, setHintVisible] = useState(false);

  const { Hint } = useHint({ parentElementRef: itemRef, hintText: hint, isVisible: isHintVisible });

  return (
    <>
      <Wrapper
        ref={itemRef}
        onClick={onClick}
        onMouseEnter={() => setHintVisible(true)}
        onMouseLeave={() => setHintVisible(false)}
        iconColor={iconColor}
        isCircle={isCircle}
        size={size}
        className={className}>
        {icon}
      </Wrapper>
      {Hint}
    </>
  );
};

export default ActionButton;
