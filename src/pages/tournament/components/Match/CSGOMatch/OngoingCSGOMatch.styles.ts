import styled, { css } from 'styled-components';
import { Button } from 'common/components';
import EllipsisText from 'common/components/EllipsisText';
import Icons from 'common/components/Icon/Icons';
import { hsla } from 'utils/styledUtils';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${({ theme }) => css`
    gap: ${theme.spacing.baseX2}px;
  `}
`;

export const MapImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
  ${({ theme }) => css`
    border-radius: ${theme.borderRadius.default};
  `}
`;

export const MapImage = styled.div<{ src: string }>`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  background-size: cover;
  background-position: 50%;
  ${({ src }) => css`
    background-image: url(${src});
  `}
`;

export const MapName = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  right: 0;
  bottom: 0;
  height: 50px;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7));
  font-size: 18px;
`;

export const Score = styled.div`
  position: relative;
  font-size: 50px;
  text-shadow: 0 0 10px black;
`;

export const JoinServerWrapper = styled.div`
  display: flex;
  width: 100%;
  ${({ theme }) => css`
    gap: ${theme.spacing.base}px;
  `}
`;

export const JoinServerButton = styled(Button)``;

export const ServerUrl = styled(EllipsisText)`
  flex-grow: 1;
  text-align: center;

  ${({ theme }) => css`
    padding: 0 ${theme.spacing.baseX2}px;
  `};
`;

export const ClipBoard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 30px;
  ${({ theme }) => css`
    background-color: ${theme.colors.surface.hover};
    margin-right: ${theme.spacing.base}px;
  `}
`;

export const CopyIcon = styled(Icons.Copy)`
  height: 60%;
  ${({ theme }) => css`
    fill: ${theme.colors.textPrimaryLight};
  `}
`;

export const ServerUrlWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  overflow: hidden;
  flex-grow: 1;
  ${({ theme }) => css`
    background-color: ${theme.colors.surface.base};
    border-radius: ${theme.borderRadius.default};
    :hover {
      background-color: ${theme.colors.surface.hover};
      ${ClipBoard} {
        background-color: ${theme.colors.surface.active};
      }
    }
    :active {
      background-color: ${hsla(theme.colors.surface.active, 0.8)};
    }
  `}
`;
