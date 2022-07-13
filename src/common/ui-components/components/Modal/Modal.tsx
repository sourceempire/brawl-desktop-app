import { ReactNode, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import { Content, CrossButton, Header, Overlay } from './Modal.styles';
import Cross from 'assets/icons/Cross.svg';

const modalRoot = document.getElementById('modal-root');

type Props = {
  children: ReactNode;
  isOpen: boolean;
  onAfterOpen?: () => void;
  onRequestClose?: () => void;
  closeTimeoutMS: number;
  title?: string;
  header?: boolean;
  closeButton?: boolean;
  closeOnOverlayClick?: boolean;
};

export default function Modal({
  children,
  isOpen,
  onAfterOpen,
  onRequestClose,
  closeTimeoutMS,
  title,
  header = true,
  closeButton = true,
  closeOnOverlayClick = true
}: Props) {
  const element = useRef(document.createElement('div'));

  useEffect(() => {
    const el = element.current;
    modalRoot?.appendChild(el);
    return () => {
      modalRoot?.removeChild(el);
    };
  }, []);

  const render = (
    <CSSTransition in={isOpen} timeout={300} mountOnEnter unmountOnExit>
      <Overlay {...(closeOnOverlayClick ? { onClick: onRequestClose } : {})}>
        <Content onClick={(e) => e.stopPropagation()}>
          {header && (
            <Header>
              {closeButton && <CrossButton src={Cross} onClick={onRequestClose} />}
              {title !== undefined && title}
            </Header>
          )}
          {children}
        </Content>
      </Overlay>
    </CSSTransition>
  );

  return createPortal(render, element.current);
}
