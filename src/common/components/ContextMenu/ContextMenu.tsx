import React, { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';
import ReactDOM from 'react-dom';
import { HorizontalRule } from 'frames/main/top-bar/ProfileMenu/ProfileMenu.styles';
import EllipsisText from '../EllipsisText';
import { Title, Wrapper } from './ContextMenu.styles';
import type { ArrowPosition, ContextMenuRef, Position } from './ContextMenu.types';

type Props = {
  children: React.ReactNode;
  title?: string;
  position: Position;
  arrowPosition?: ArrowPosition;
  ignoredElementOnClickOutside?: HTMLElement | null;
  onClickOutside?: () => void;
};

const ContextMenu = (
  { children, title, position, arrowPosition, onClickOutside, ignoredElementOnClickOutside }: Props,
  forwardedRef: React.ForwardedRef<ContextMenuRef>
) => {
  const ref = useRef() as React.MutableRefObject<HTMLDivElement>;
  useImperativeHandle(forwardedRef, () => ({ contextMenuContainer: ref.current }));

  useEffect(() => {
    if (!onClickOutside) return;
    let mouseDownElement: HTMLElement;

    const onClick = (event: MouseEvent) => {
      // Menu should not close when mouse down is inside menu
      const isMouseDownInsideMenu = ref.current.contains(mouseDownElement);
      if (isMouseDownInsideMenu) return;

      // Menu should not close when clicking inside menu
      const isClickInsideMenu = ref.current.contains(event.target as HTMLDivElement);
      if (isClickInsideMenu) return;

      // Menu should close when clicking ignored item, this prevents it from opening it again
      const isClickOnIgnoredElement =
        event.target === ignoredElementOnClickOutside ||
        (event.target && ignoredElementOnClickOutside?.contains(event.target as Node));
      if (isClickOnIgnoredElement) {
        event.stopPropagation();
      }

      onClickOutside();
    };

    const onMouseDown = (event: MouseEvent) => {
      mouseDownElement = event.target as HTMLElement;
    };

    document.addEventListener('click', onClick, true);
    document.addEventListener('contextmenu', onClick, true);
    document.addEventListener('mousedown', onMouseDown);
    return () => {
      document.removeEventListener('click', onClick, true);
      document.removeEventListener('contextmenu', onClick, true);
      document.removeEventListener('mousedown', onMouseDown);
    };
  }, [onClickOutside, ignoredElementOnClickOutside]);

  return ReactDOM.createPortal(
    <Wrapper ref={ref} position={position} arrowPosition={arrowPosition}>
      {title && <Title>{title}</Title>}
      {title && <HorizontalRule />}
      {children}
    </Wrapper>,
    document.getElementById('context-menu-root') as HTMLDivElement
  );
};

export default forwardRef(ContextMenu);
