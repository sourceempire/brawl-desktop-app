import styled, { css } from 'styled-components';
import Icons from 'assets/icons/Icons';

export const ArrowDown = styled(Icons.SelectArrow)`
  fill: white;
  ${({ theme }) => css`
    margin-left: ${theme.spacing.base}px;
  `}
`;

export const Wrapper = styled.div<{ isExpanded: boolean }>`
  ${({ theme, isExpanded }) => css`
    height: ${isExpanded ? 'auto' : `${theme.spacing.baseX3}px`};
    overflow: ${isExpanded ? 'visible' : 'hidden'};
    margin-top: ${theme.spacing.baseX2}px;

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
