import { forwardRef, useImperativeHandle, useRef, useState } from 'react';
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
  active?: boolean;
};

const ActionButton = (
  {
    onClick,
    icon,
    hint,
    iconColor,
    isCircle,
    size = ActionButtonSize.MEDIUM,
    className,
    active
  }: Props,
  forwardedRef: React.ForwardedRef<HTMLDivElement>
) => {
  const itemRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  useImperativeHandle(forwardedRef, () => itemRef.current);
  const [isHintVisible, setHintVisible] = useState(false);

  const { Hint } = useHint({
    parentElementRef: itemRef,
    hintText: hint,
    isVisible: isHintVisible,
    timeToVisibility: 500
  });

  const handleClick = () => {
    setHintVisible(false);
    onClick();
  };

  return (
    <>
      <Wrapper
        ref={itemRef}
        onClick={handleClick}
        onMouseEnter={() => setHintVisible(true)}
        onMouseLeave={() => setHintVisible(false)}
        iconColor={iconColor}
        isCircle={isCircle}
        size={size}
        className={className}
        active={active}>
        {icon}
      </Wrapper>
      {Hint}
    </>
  );
};

export default forwardRef(ActionButton);
