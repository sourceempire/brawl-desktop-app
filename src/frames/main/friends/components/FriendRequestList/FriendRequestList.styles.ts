import styled, { css } from 'styled-components';
import { Icons } from 'common/components/Icon';

export const ArrowDown = styled(Icons.SelectArrow)`
  width: 12px;
  height: 12px;
  ${({ theme }) => css`
    margin-left: ${theme.spacing.base}px;
    fill: ${theme.colors.icon.base};
  `}
`;

export const Wrapper = styled.div<{ isExpanded: boolean }>`
  ${({ theme, isExpanded }) => css`
    height: ${isExpanded ? 'auto' : `${theme.spacing.baseX3}px`};
    overflow: ${isExpanded ? 'visible' : 'hidden'};
    margin-top: ${theme.spacing.base}px;

    ${ArrowDown} {
      transition: transform 0.2s;
      transform: ${isExpanded ? 'scaleY(-1)' : 'scaleY(1)'};
    }
  `}
`;

export const FriendRequestContainer = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacing.baseX2}px;
  `}
`;
