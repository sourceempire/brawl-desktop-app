import { useLayoutEffect, useRef, useState } from 'react';
import ContextMenu from 'common/components/ContextMenu';
import type {
  ArrowPosition,
  ContextMenuRef,
  Position
} from 'common/components/ContextMenu/ContextMenu.types';
import { Hint, Wrapper } from './TopBarItem.styles';
import { theme } from 'assets/styles/Theme';

type Props = {
  onClick: () => void;
  icon: React.ReactNode;
  hint?: string;
  className?: string;
};

const TopBarItem = ({ onClick, icon, hint, className }: Props) => {
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

    const { width: contextMenuWidth } = getHintRect();

    const hintLeft = actionLeft - contextMenuWidth / 2 + actionWidth / 2;
    const hintTop = actionTop + actionHeight + theme.spacing.base * 1.5;

    setContextArrowPosition({ left: contextMenuWidth / 2 });
    setHintPosition({ left: hintLeft, top: hintTop });
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

export default TopBarItem;
