import { useLayoutEffect, useRef, useState } from 'react';
import ContextMenu from 'common/ui-components/components/ContextMenu';
import type {
  ArrowPosition,
  ContextMenuRef,
  Position
} from 'common/ui-components/components/ContextMenu/ContextMenu.types';
import { Hint, Wrapper } from './TopBarItem.styles';
import { theme } from 'assets/styles/Theme';

type Props = {
  onClick: () => void;
  icon: React.ReactNode;
  hint?: string;
};

const TopBarItem = ({ onClick, icon, hint }: Props) => {
  const itemRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const contextRef = useRef() as React.MutableRefObject<ContextMenuRef>;

  const [contextPosition, setContextPosition] = useState<Position>({ top: 0, left: 0 });
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

    const { offsetLeft, offsetTop, offsetHeight, offsetWidth } = itemRef.current;
    const { offsetWidth: contextMenuWidth } = contextRef.current.contextMenuContainer;

    setContextArrowPosition({ left: contextMenuWidth / 2 });
    setContextPosition({
      left: offsetLeft - contextMenuWidth / 2 + offsetWidth / 2,
      top: offsetTop + offsetHeight + theme.spacing.base * 1.5
    });
  }, [hint, isHintVisible]);

  return (
    <>
      <Wrapper ref={itemRef} onClick={onClick} onMouseEnter={showHint} onMouseLeave={hideHint}>
        {icon}
      </Wrapper>
      {hint && isHintVisible && (
        <ContextMenu
          ref={contextRef}
          position={contextPosition}
          arrowPosition={contextArrowPosition}>
          <Hint>{hint}</Hint>
        </ContextMenu>
      )}
    </>
  );
};

export default TopBarItem;
