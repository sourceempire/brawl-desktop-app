import { forwardRef, useCallback, useEffect, useImperativeHandle, useRef } from 'react';
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

  const handleClickOutside = useCallback(() => {
    if (!onClickOutside) return;
    onClickOutside();
  }, [onClickOutside]);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [handleClickOutside]);

  return ReactDOM.createPortal(
    <Wrapper ref={ref} position={position} arrowPosition={arrowPosition}>
      {children}
    </Wrapper>,
    document.getElementById('context-menu-root') as HTMLDivElement
  );
};

export default forwardRef(ContextMenu);
