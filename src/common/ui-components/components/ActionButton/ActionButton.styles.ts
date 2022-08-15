import styled, { css } from 'styled-components/macro';
import { theme } from 'assets/styles/Theme';

export type Size = 'small' | 'medium' | 'large';

const getButtonSize = (size: Size) => {
  switch (size) {
    case 'small':
      return '20px';
    case 'medium':
      return theme.spacing.baseX5 + 'px';
    case 'large':
      return theme.spacing.baseX6 + 'px';
  }
};

export const Wrapper = styled.div<{
  iconColor?: string;
  isCircle?: boolean;
  size?: Size;
}>`
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ theme, iconColor, isCircle, size = 'medium' }) => css`
    width: ${getButtonSize(size)};
    height: ${getButtonSize(size)};
    padding: ${size === 'small' ? `5px` : `${theme.spacing.base}px`};
    background-color: ${theme.colors.secondary};
    border-radius: ${isCircle ? '50%' : theme.borderRadius.default};
    > *:first-child {
      fill: ${iconColor ? iconColor : theme.colors.textPrimaryLight};
    }
    :hover {
      background-color: ${theme.colors.lightTint};
    }
  `}
`;

export const Hint = styled.div`
  white-space: nowrap;
  ${({ theme }) => css`
    padding: calc(${theme.spacing.base}px / 2);
  `}
`;
