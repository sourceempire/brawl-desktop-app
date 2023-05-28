import styled, { css } from 'styled-components';

export const Tournament = styled.div<{ image: string; isUserInTournament: boolean }>`
  ${({ theme, isUserInTournament, image }) => css`
    background-image: url('${image}');
    background-size: cover;
    background-position: center;
    position: relative;
    border-radius: ${theme.borderRadius.default};
    min-height: 140px;

    ${isUserInTournament &&
    css`
      border-color: ${theme.colors.accent.base};
      border: 2px solid ${theme.colors.accent.base};
      border-radius: ${theme.borderRadius.default};
    `}
  `}

  :before {
    content: '';
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.3);
  }

  :hover {
    background-color: ${({ theme }) => theme.colors.surfaceElement.base};
    :before {
      background-color: rgba(0, 0, 0, 0.2);
    }
  }
`;

export const BorderText = styled.div`
  ${({ theme }) => css`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, calc(100% - ${theme.spacing.baseX4}px));
    background: ${theme.colors.background.base};
    border: 2px solid ${theme.colors.accent.base};
    border-radius: ${theme.borderRadius.default};
    padding: ${theme.spacing.baseX2}px;
  `}
`;

export const TournamentStatus = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    gap: ${theme.spacing.base}px;
    margin: ${theme.spacing.baseX2}px;
  `}
`;

export const StatusIcon = styled.div<{ isFinished: boolean }>`
  ${({ theme, isFinished }) => css`
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: ${isFinished ? theme.colors.statusError : theme.colors.statusSuccess};
  `}
`;

export const InfoWrapper = styled.div`
  ${({ theme }) => css`
    height: 100%;
    width: 100%;
    padding: ${theme.spacing.baseX2}px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: absolute;
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
