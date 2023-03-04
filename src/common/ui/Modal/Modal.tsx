import { ReactNode, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import { Content, CrossButton, Header, Overlay } from './Modal.styles';

const modalRoot = document.getElementById('modal-root');

type Props = {
  children: ReactNode;
  isOpen: boolean;
  onAfterOpen?: () => void;
  onBeforeOpen?: () => void;
  onBeforeClose?: () => void;
  onAfterClose?: () => void;
  onRequestClose?: () => void;
  closeTimeoutMS?: number;
  title?: string;
  header?: boolean;
  closeButton?: boolean;
  closeOnOverlayClick?: boolean;
  hideOverLay?: boolean;
  width?: string;
  height?: string;
  margin?: string;
  noPadding?: boolean;
  className?: string;
};

export function Modal({
  children,
  isOpen,
  onAfterOpen,
  onBeforeOpen,
  onAfterClose,
  onBeforeClose,
  onRequestClose,
  closeTimeoutMS = 300,
  title,
  header = true,
  closeButton = true,
  closeOnOverlayClick = true,
  hideOverLay = false,
  width,
  height,
  margin,
  noPadding = false
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
    <CSSTransition
      in={isOpen}
      timeout={closeTimeoutMS}
      mountOnEnter
      unmountOnExit
      {...(onBeforeOpen !== undefined ? { onEnter: onBeforeOpen } : {})}
      {...(onAfterOpen !== undefined ? { onEntered: onAfterOpen } : {})}
      {...(onBeforeClose !== undefined ? { onExit: onBeforeClose } : {})}
      {...(onAfterClose !== undefined ? { onExiting: onAfterClose } : {})}>
      <Overlay
        {...(closeOnOverlayClick ? { onMouseDown: onRequestClose } : {})}
        hidden={hideOverLay}
        timeout={closeTimeoutMS}>
        <Content
          onMouseDown={(e) => e.stopPropagation()}
          timeout={closeTimeoutMS}
          width={width}
          height={height}
          margin={margin}
          noPadding={noPadding}>
          {header && (
            <Header>
              {closeButton && <CrossButton onClick={onRequestClose} />}
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
