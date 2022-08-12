import styled, { css } from 'styled-components/macro';
import type { ArrowPosition, Position } from './ContextMenu.types';

export const Wrapper = styled.div<{
  position: Position;
  arrowPosition?: ArrowPosition;
  disableInteraction?: boolean;
}>`
  position: absolute;
  padding: 6px;
  filter: drop-shadow(0 0 3px rgba(0, 0, 0, 0.5));

  ${({ arrowPosition, theme }) =>
    arrowPosition &&
    css`
      ::before {
        content: '';
        position: absolute;
        top: 0px;
        height: 8px;
        width: 8px;
        transform: translate(${arrowPosition?.left ? '-50%' : '50%'}, -50%) rotate(45deg);

        background-color: ${theme.colors.secondary};
        left: ${arrowPosition?.left}px;
        right: ${arrowPosition?.right}px;
      }
    `}

  ${({ position, theme }) => css`
    top: ${position.top}px;
    right: ${position.right}px;
    bottom: ${position.bottom}px;
    left: ${position.left}px;

    background-color: ${theme.colors.secondary};

    border-radius: ${theme.borderRadius.default};
  `}
`;
