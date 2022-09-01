import { useLayoutEffect, useRef, useState } from 'react';
import {
  ArrowPosition,
  ContextMenuRef,
  Position
} from 'common/components/ContextMenu/ContextMenu.types';
import { theme } from 'assets/styles/Theme';

type Options = {
  isVisible?: boolean;
};

function useContextMenuPosition({ isVisible = true }: Options) {
  const relatedElementRef = useRef<HTMLDivElement>(null);
  const contextMenuRef = useRef<ContextMenuRef>(null);
  const [position, setPosition] = useState<Position>({ left: 100, top: 100 });
  const [arrowPosition, setArrowPosition] = useState<ArrowPosition>({ left: 0 });

  // Set position of contextMenu
  useLayoutEffect(() => {
    if (!isVisible) return;
    if (!relatedElementRef.current) return;
    if (!contextMenuRef.current) return;
    const { contextMenuContainer } = contextMenuRef.current;
    const { current: relatedElementContainer } = relatedElementRef;

    const { width: contextMenuWidth } = contextMenuContainer.getBoundingClientRect();

    const {
      top: relatedElementTop,
      left: relatedElementLeft,
      width: relatedElementWidth,
      height: relatedElementHeight
    } = relatedElementContainer.getBoundingClientRect();

    const left = relatedElementLeft - contextMenuWidth / 2 + relatedElementWidth / 2;
    const top = relatedElementTop + relatedElementHeight + theme.spacing.base * 1.5;

    setPosition({ left, top });
    setArrowPosition({ left: contextMenuContainer.offsetWidth / 2 });
  }, [isVisible]);

  // TODO -> calculate arrowPosition if position outside bottom
  // TODO -> calculate arrowPosition if position outside top
  // TODO -> calculate arrowPosition if position outside to the left
  // TODO -> calculate position if outside to the left
  // TODO -> calculate position if outside top of screen
  // Check position of contextMenu and move it inside window if outside
  useLayoutEffect(() => {
    if (!isVisible) return;
    if (!relatedElementRef.current) return;
    if (!contextMenuRef.current) return;
    const { contextMenuContainer } = contextMenuRef.current;

    const {
      right: contextMenuRight,
      bottom: contextMenuBottom,
      top: contextMenuTop,
      left: contextMenuLeft
    } = contextMenuContainer.getBoundingClientRect();

    const { innerWidth: windowWidth, innerHeight: windowHeight } = window;

    const isContextMenuOutsideVertically = contextMenuBottom > windowHeight - theme.spacing.baseX2;
    const isContextMenuOutsideHorizontally = contextMenuRight > windowWidth - theme.spacing.baseX2;

    if (!isContextMenuOutsideVertically && !isContextMenuOutsideHorizontally) return;

    const { current: relatedElementContainer } = relatedElementRef;

    const { left: relatedElementLeft, width: relatedElementWidth } =
      relatedElementContainer.getBoundingClientRect();

    const verticalPosition = isContextMenuOutsideVertically
      ? { bottom: theme.spacing.baseX2 }
      : { top: contextMenuTop };

    const horizontalPosition = isContextMenuOutsideHorizontally
      ? { right: theme.spacing.baseX2 }
      : { left: contextMenuLeft };

    const newArrowPosition = isContextMenuOutsideHorizontally
      ? { right: windowWidth - relatedElementLeft - relatedElementWidth / 2 - theme.spacing.baseX2 }
      : { left: 0 };

    setPosition({ ...verticalPosition, ...horizontalPosition });
    setArrowPosition(newArrowPosition);
  }, [position, isVisible]);

  return { position, arrowPosition, contextMenuRef, relatedElementRef };
}

export default useContextMenuPosition;
