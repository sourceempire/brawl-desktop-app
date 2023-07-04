import styled, { css } from 'styled-components';
import { Icons } from 'common/ui';

export const Wrapper = styled.div`
  position: relative;
  height: 100%;
  width: calc(20% - (48px / 5));
  ${({ theme }) => css`
    margin-right: ${theme.spacing.baseX2}px;
  `}
  &:last-child {
    margin-right: 0px;
  }
`;

export const LeaderStar = styled(Icons.Star)`
  position: absolute;
  fill: yellow;
  top: 0;
  right: 0;
  transform: translate(40%, -40%);
  filter: drop-shadow(0 0 2px black);
  ${({ theme }) => css`
    height: ${theme.spacing.baseX3}px;
    width: ${theme.spacing.baseX3}px;
  `}
`;

export const ProfileImage = styled.img`
  height: 100%;
  width: 100%;
  ${({ theme }) => css`
    border-radius: ${theme.borderRadius.default};
  `}
`;
