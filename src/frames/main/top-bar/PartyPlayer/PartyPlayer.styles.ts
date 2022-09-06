import styled, { css } from 'styled-components';
import Icons from 'assets/icons/Icons';

export const Wrapper = styled.div`
  position: relative;
  ${({ theme }) => css`
    margin-right: ${theme.spacing.baseX2}px;
    height: ${theme.spacing.baseX5}px;
    width: ${theme.spacing.baseX5}px;
    border-radius: ${theme.borderRadius.default};
  `}
`;

export const PlayerImage = styled.img`
  height: 100%;
  width: 100%;
  ${({ theme }) => css`
    border-radius: ${theme.borderRadius.default};
  `}
`;

export const LeaderStar = styled(Icons.Star)`
  position: absolute;
  fill: yellow;
  top: 0;
  right: 0;
  transform: translate(40%, -40%);
  ${({ theme }) => css`
    height: ${theme.spacing.baseX2}px;
    width: ${theme.spacing.baseX2}px;
  `}
`;

export const PlayerAction = styled.div`
  ${({ theme }) => css`
    margin-left: -${theme.spacing.base}px;
    margin-right: -${theme.spacing.base}px;
    border-radius: ${theme.borderRadius.default};
    padding: calc(${theme.spacing.base}px) ${theme.spacing.base}px;
    :hover {
      background-color: ${theme.colors.lightTint};
    }
  `}
`;

export const MenuWrapper = styled.div`
  width: 150px;
`;
