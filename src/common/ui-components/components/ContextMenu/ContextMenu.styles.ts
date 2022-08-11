import styled, { css } from 'styled-components';

/**
 * In pixels
 */
export type Position = { top?: number; right?: number; bottom?: number; left?: number };
/**
 * Unit: pixels
 *
 * Left will override right
 */
export type ArrowPosition = { left?: number; right?: number };

export const Wrapper = styled.div<{ position: Position; arrowPosition?: ArrowPosition }>`
  position: absolute;
  padding: 6px;
  filter: drop-shadow(0 0 3px rgba(0, 0, 0, 0.5));

  ::before {
    content: '';
    position: absolute;
    top: 0px;
    height: 8px;
    width: 8px;
    transform: translateY(-50%) rotate(45deg);

    ${({ arrowPosition, theme }) => css`
      background-color: ${theme.colors.secondary};
      left: ${arrowPosition?.left}px;
      right: ${arrowPosition?.right}px;
    `}
  }

  ${({ position, theme }) => css`
    top: ${position.top}px;
    right: ${position.right}px;
    bottom: ${position.bottom}px;
    left: ${position.left}px;

    background-color: ${theme.colors.secondary};

    border-radius: ${theme.borderRadius.default};
  `}
`;
