import styled, { css } from 'styled-components';
import temporaryBackdrop from 'assets/images/temporary-csgo-backdrop.jpg';

export const Tournament = styled.div<{ image: string; isUserInTournament: boolean }>`
  /* ${({ image }) => css`
    background-image: url(${image});
    background-size: cover;
  `} */
  ${({ theme, isUserInTournament }) => css`
    background-image: url('${temporaryBackdrop}');
    background-size: cover;
    background-position: center;
    flex-grow: 1;
    width: calc((100% - (n - 1) * 1rem) / n);
    position: relative;
    margin-right: ${theme.spacing.baseX2}px;
    border-radius: ${theme.borderRadius.default};

    ${isUserInTournament &&
    `
    border-color: ${theme.colors.accent.base};

    fieldset {
      position: absolute;
      height: calc(100% + 16px);
      width: calc(100% + 8px);
      top: -4px;
      left: -4px;
      border: 2px solid;
      border-radius: ${theme.borderRadius.default};
      border-color: ${theme.colors.accent.base};
      text-align: center;
      transform: rotate(180deg);
    }

    legend {
      transform: scale(-1, -1);
    }
  `}
  `}

  :before {
    content: '';
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.3);
  }

  :last-child {
    margin-right: 0px;
  }

  :hover {
    background-color: ${({ theme }) => theme.colors.surfaceElement.base};
    :before {
      background-color: rgba(0, 0, 0, 0.2);
    }
  }
`;

export const InfoWrapper = styled.div`
  ${({ theme }) => css`
    height: 100%;
    width: 100%;
    padding: ${theme.spacing.baseX2}px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
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
