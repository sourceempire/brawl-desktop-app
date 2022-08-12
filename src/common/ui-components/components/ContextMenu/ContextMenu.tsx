import React, { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';
import ReactDOM from 'react-dom';
import { Wrapper } from './ContextMenu.styles';
import type { ArrowPosition, ContextMenuRef, Position } from './ContextMenu.types';

type Props = {
  children: React.ReactNode;
  position: Position;
  arrowPosition?: ArrowPosition;
  onClickOutside?: () => void;
};

const ContextMenu = (
  { children, position, arrowPosition, onClickOutside }: Props,
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
      }
    };

    document.addEventListener('click', handleMouseClick, true);
    return () => {
      document.removeEventListener('click', handleMouseClick, true);
    };
  }, [onClickOutside]);

  return ReactDOM.createPortal(
    <Wrapper ref={ref} position={position} arrowPosition={arrowPosition}>
      {children}
    </Wrapper>,
    document.getElementById('context-menu-root') as HTMLDivElement
  );
};

export default forwardRef(ContextMenu);
