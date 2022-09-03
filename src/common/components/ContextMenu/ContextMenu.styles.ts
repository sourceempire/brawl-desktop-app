import styled, { css } from 'styled-components/macro';
import type { ArrowPosition, Position } from './ContextMenu.types';

type WrapperProps = {
  position: Position;
  arrowPosition?: ArrowPosition;
  disableInteraction?: boolean;
};

export const Wrapper = styled.div<WrapperProps>`
  position: absolute;

  filter: drop-shadow(0 0 3px rgba(0, 0, 0, 0.75));

  ${({ position, theme }) => css`
    top: ${position.top}px;
    right: ${position.right}px;
    bottom: ${position.bottom}px;
    left: ${position.left}px;
    padding: calc(${theme.spacing.base}px * 1.5) ${theme.spacing.baseX2}px;
    background-color: ${theme.colors.secondary};
    border-radius: ${theme.borderRadius.default};
  `}

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
`;

export const Title = styled.div`
  ${({ theme }) =>
    css`
      ${theme.textStyles.title}
      padding-bottom: ${theme.spacing.base}px;
      border-bottom: 2px solid ${theme.colors.textPrimaryLight};
      margin-bottom: ${theme.spacing.base}px;
    `}
`;
