import styled, { css } from 'styled-components';
import { Icons } from 'common/components/Icon';

export const Wrapper = styled.div`
  position: relative;

  ${({ theme }) => css`
    margin-right: ${theme.spacing.baseX2}px;
    height: ${theme.spacing.baseX5}px;
    width: ${theme.spacing.baseX5}px;
    border-radius: ${theme.borderRadius.default};
    :hover {
      outline: 2px solid ${theme.colors.secondary.hover};
    }
    :active {
      outline: 2px solid ${theme.colors.secondary.active};
    }
  `}
`;

export const PlayerImage = styled.img`
  height: 100%;
  width: 100%;
  ${({ theme }) => css`
    border-radius: ${theme.borderRadius.default};
    background-color: ${theme.colors.secondary.base};
  `}
`;

export const LeaderStar = styled(Icons.Star)`
  position: absolute;
  fill: yellow;
  top: 0;
  right: 0;
  transform: translate(40%, -40%);
  filter: drop-shadow(0 0 2px black);
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
      background-color: ${theme.colors.secondary.hover};
    }
  `}
`;

export const MenuWrapper = styled.div`
  width: 150px;
`;
