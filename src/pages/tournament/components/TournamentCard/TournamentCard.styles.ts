import { Image } from 'brawl-image';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const ImageContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;

  transition:
    scale 0.3s,
    filter 0.3s;
`;

export const Wrapper = styled.div<{ isUserInTournament: boolean }>`
  position: relative;
  min-height: 140px;

  ${({ theme }) => css`
    border-radius: ${theme.borderRadius.default};
  `}

  ${({ theme, isUserInTournament }) =>
    isUserInTournament &&
    css`
      border-color: ${theme.colors.accent.base};
      border: 2px solid ${theme.colors.accent.base};
      border-radius: ${theme.borderRadius.default};
    `}

  :hover {
    ${StyledImage} {
      scale: 1.1;
      filter: sepia(0.4);
    }
  }
`;

export const BorderText = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;

  ${({ theme }) => css`
    transform: translate(-50%, calc(100% - ${theme.spacing.baseX4}px));
    background: ${theme.colors.background.base};
    border: 2px solid ${theme.colors.accent.base};
    border-radius: ${theme.borderRadius.default};
    padding: ${theme.spacing.baseX2}px;
  `}
`;

export const TournamentStatus = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;

  ${({ theme }) => css`
    gap: ${theme.spacing.base}px;
    margin: ${theme.spacing.baseX2}px;
  `}
`;

export const StatusIcon = styled.div<{ isFinished: boolean }>`
  width: 15px;
  height: 15px;
  border-radius: 50%;

  ${({ theme, isFinished }) => css`
    background-color: ${isFinished ? theme.colors.statusError : theme.colors.statusSuccess};
  `}
`;

export const InfoWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;

  ${({ theme }) => css`
    padding: ${theme.spacing.baseX2}px;
  `}
`;

export const TournamentName = styled.div`
  font-weight: bold;
  font-size: 20px;
`;

export const RoundInfo = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacing.base}px;
  `}
`;
