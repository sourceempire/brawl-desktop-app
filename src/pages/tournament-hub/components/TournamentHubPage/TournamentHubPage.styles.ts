import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const TournamentsWrapper = styled.div<{ listLength: number }>`
  flex: 1;
  display: grid;
  overflow: scroll;
  ${({ listLength }) => {
    if (listLength === 1) {
      return css`
        grid-template-columns: repeat(1, 1fr);
      `;
    }

    if (!(listLength % 2) && listLength % 3) {
      return css`
        grid-template-columns: repeat(2, 1fr);
      `;
    }

    return css`
      grid-template-columns: repeat(3, 1fr);
    `;
  }}

  ${({ theme }) => css`
    grid-gap: ${theme.spacing.baseX4}px;
    margin-bottom: ${theme.spacing.baseX2}px;
    padding-bottom: ${theme.spacing.baseX4}px;
  `}
`;

export const TournamentName = styled.div`
  width: 100%;
  text-align: center;
  text-transform: uppercase;
  ${({ theme }) => css`
    font: ${theme.textStyles.stylizedHeader};
    padding: ${theme.spacing.baseX4}px 0 ${theme.spacing.baseX2}px;
  `}
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const InfoWrapper = styled.div``;
