import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
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
  const [isHintVisible, setHintVisible] = useState(false);
  const actionRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const { Hint } = useHint({
    hintText: hint,
    isVisible: isHintVisible,
    timeToVisibility: 300,
    relatedElementRef: actionRef
  });

  useImperativeHandle(forwardedRef, () => actionRef.current);

  useEffect(() => {
    if (!hint) {
      setHintVisible(false);
    }
  }, [hint]);

  const handleMouseEnter = () => {
    if (hint) {
      setHintVisible(true);
    }
  };

  const handleClick = () => {
    setHintVisible(false);
    onClick();
  };

  return (
    <>
      <Wrapper
        ref={actionRef}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
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
