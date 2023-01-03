import styled, { css } from 'styled-components/macro';
import EllipsisText from '../EllipsisText';
import type { ArrowPosition, Position } from './ContextMenu.types';

type WrapperProps = {
  position: Position;
  arrowPosition?: ArrowPosition;
  disableInteraction?: boolean;
};

export const Wrapper = styled.div<WrapperProps>`
  position: absolute;

  filter: drop-shadow(0 0 3px rgba(0, 0, 0, 0.2));

  ${({ position, theme }) => css`
    border: 1px solid ${theme.colors.surface.base};
    top: ${position.top}px;
    right: ${position.right}px;
    bottom: ${position.bottom}px;
    left: ${position.left}px;
    padding: calc(${theme.spacing.base}px * 1.5) ${theme.spacing.baseX2}px;
    background-color: ${theme.colors.secondary.base};
    border-radius: ${theme.borderRadius.default};
  `}

  ${({ arrowPosition, theme }) =>
    arrowPosition &&
    css`
      ::before {
        content: '';
        position: absolute;
        top: 0px;
        height: 10px;
        width: 10px;
        border-left: 1px solid ${theme.colors.surface.base};
        border-top: 1px solid ${theme.colors.surface.base};
        transform: translate(${arrowPosition?.left ? '-50%' : '50%'}, -50%) rotate(45deg);
        background-color: ${theme.colors.secondary.base};
        left: ${arrowPosition?.left}px;
        right: ${arrowPosition?.right}px;
      }
    `}
`;

export const Title = styled(EllipsisText)`
  ${({ theme }) => css`
    ${theme.textStyles.title}
    height: ${theme.spacing.baseX4}px;
    margin-bottom: ${theme.spacing.base}px;
  `}
`;
