import React, { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';
import ReactDOM from 'react-dom';
import { Wrapper } from './ContextMenu.styles';
import type { ArrowPosition, ContextMenuRef, Position } from './ContextMenu.types';

type Props = {
  children: React.ReactNode;
  position: Position;
  arrowPosition?: ArrowPosition;
  ignoredElementOnClickOutside?: HTMLElement | null;
  onClickOutside?: () => void;
};

const ContextMenu = (
  { children, position, arrowPosition, onClickOutside, ignoredElementOnClickOutside }: Props,
  forwardedRef: React.ForwardedRef<ContextMenuRef>
) => {
  const ref = useRef() as React.MutableRefObject<HTMLDivElement>;
  useImperativeHandle(forwardedRef, () => ({ contextMenuContainer: ref.current }));

  useEffect(() => {
    if (!onClickOutside) return;

    const handleMouseClick = (event: MouseEvent) => {
      const isClickOutside = !ref.current.contains(event.target as HTMLDivElement);
      if (isClickOutside) {
        onClickOutside();
        if (
          event.target === ignoredElementOnClickOutside ||
          (event.target && ignoredElementOnClickOutside?.contains(event.target as Node))
        ) {
          event.stopPropagation();
        }
      }
    };

    document.addEventListener('click', handleMouseClick, true);
    document.addEventListener('contextmenu', handleMouseClick, true);
    return () => {
      document.removeEventListener('click', handleMouseClick, true);
      document.removeEventListener('contextmenu', handleMouseClick, true);
    };
  }, [onClickOutside, ignoredElementOnClickOutside]);

  return ReactDOM.createPortal(
    <Wrapper ref={ref} position={position} arrowPosition={arrowPosition}>
      {children}
    </Wrapper>,
    document.getElementById('context-menu-root') as HTMLDivElement
  );
};

export default forwardRef(ContextMenu);
