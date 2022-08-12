import { useLayoutEffect, useRef, useState } from 'react';
import ContextMenu from '../ContextMenu';
import { ArrowPosition, ContextMenuRef, Position } from '../ContextMenu/ContextMenu.types';
import { Hint, Wrapper } from './ActionButton.styles';
import { theme } from 'assets/styles/Theme';

type Props = {
  onClick: () => void;
  icon: React.ReactNode;
  hint?: string;
  className?: string;
};

const Action = ({ onClick, icon, hint, className }: Props) => {
  const itemRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const contextRef = useRef() as React.MutableRefObject<ContextMenuRef>;

  const [hintPosition, setHintPosition] = useState<Position>({ top: 0, left: 0 });
  const [contextArrowPosition, setContextArrowPosition] = useState<ArrowPosition>();

  const [isHintVisible, setHintVisible] = useState(false);

  const showHint = () => {
    setHintVisible(true);
  };

  const hideHint = () => {
    setHintVisible(false);
  };

  useLayoutEffect(() => {
    if (!hint) return;
    if (!isHintVisible) return;

    const { current: actionContainer } = itemRef;
    const { contextMenuContainer } = contextRef.current;

    // It is not possible to call getBoundingClientRect directly in an effect
    const getActionRect = () => actionContainer.getBoundingClientRect();
    const getHintRect = () => contextMenuContainer.getBoundingClientRect();

    const {
      left: actionLeft,
      top: actionTop,
      height: actionHeight,
      width: actionWidth
    } = getActionRect();

    const { width: hintWidth } = getHintRect();

    const hintLeft = actionLeft - hintWidth / 2 + actionWidth / 2;
    const hintTop = actionTop + actionHeight + theme.spacing.base * 1.5;

    const { innerWidth: windowWidth } = window;

    const hintIsTooFarRight = windowWidth < hintWidth + hintLeft;

    if (hintIsTooFarRight) {
      setContextArrowPosition({ right: actionWidth / 2 });
      setHintPosition({ right: theme.spacing.baseX2, top: hintTop });
    } else {
      setContextArrowPosition({ left: hintWidth / 2 });
      setHintPosition({ left: hintLeft, top: hintTop });
    }
  }, [hint, isHintVisible]);

  return (
    <>
      <Wrapper
        ref={itemRef}
        onClick={onClick}
        onMouseEnter={showHint}
        onMouseLeave={hideHint}
        className={className}>
        {icon}
      </Wrapper>
      {hint && isHintVisible && (
        <ContextMenu ref={contextRef} position={hintPosition} arrowPosition={contextArrowPosition}>
          <Hint>{hint}</Hint>
        </ContextMenu>
      )}
    </>
  );
};

export default Action;
