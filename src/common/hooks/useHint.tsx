import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Hint } from 'common/ui';
import { ArrowPosition, ContextMenuRef, Position } from 'common/ui/ContextMenu/ContextMenu.types';
import { theme } from 'assets/styles/Theme';

type Options = {
  hintText?: string;
  isVisible: boolean;
  timeToVisibility?: number; // in miliseconds
  relatedElementRef: React.MutableRefObject<HTMLDivElement>;
};

const useHint = ({ hintText, isVisible, timeToVisibility = 0, relatedElementRef }: Options) => {
  const timeoutRef = useRef<NodeJS.Timeout>();
  const contextRef = useRef() as React.MutableRefObject<ContextMenuRef>;

  const [hintPosition, setHintPosition] = useState<Position>({ top: 0, left: 0 });
  const [contextArrowPosition, setContextArrowPosition] = useState<ArrowPosition>();
  const [isVisibleLocal, setVisibleLocal] = useState(false);

  useLayoutEffect(() => {
    if (!hintText) return;
    if (!isVisible) return;
    if (!isVisibleLocal) return;

    const { current: relatedContainer } = relatedElementRef;
    const { contextMenuContainer } = contextRef.current;

    // It is not possible to call getBoundingClientRect directly in a layout effect
    const getParentRect = () => relatedContainer.getBoundingClientRect();
    const getHintRect = () => contextMenuContainer.getBoundingClientRect();

    const {
      left: actionLeft,
      top: actionTop,
      height: actionHeight,
      width: actionWidth
    } = getParentRect();

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
  }, [hintText, isVisible, isVisibleLocal, relatedElementRef]);

  useEffect(() => {
    if (timeoutRef.current) {
      setVisibleLocal(false);
      clearTimeout(timeoutRef.current);
    }
    if (!isVisible) return;

    timeoutRef.current = setTimeout(() => setVisibleLocal(true), timeToVisibility);
  }, [isVisible, timeToVisibility]);

  return {
    Hint: (
      <Hint
        hintText={hintText}
        contextRef={contextRef}
        hintPosition={hintPosition}
        contextArrowPosition={contextArrowPosition}
        isVisible={isVisibleLocal}
      />
    )
  };
};

export default useHint;
