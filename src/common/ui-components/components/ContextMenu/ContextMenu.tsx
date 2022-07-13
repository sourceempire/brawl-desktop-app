import { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { type ArrowPosition, type Position, Wrapper } from './ContextMenu.styles';

type Props = {
  children: React.ReactNode;
  position: Position;
  arrowPosition?: ArrowPosition;
  onClickOutside: () => void;
};

const ContextMenu = ({ children, position, arrowPosition, onClickOutside }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as HTMLDivElement)) {
        onClickOutside && onClickOutside();
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [onClickOutside]);

  return ReactDOM.createPortal(
    <Wrapper ref={ref} position={position} arrowPosition={arrowPosition}>
      {children}
    </Wrapper>,
    document.getElementById('context-menu-root') as HTMLDivElement
  );
};

export default ContextMenu;
