import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
`;

export const TournamentHubInfoWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  ${({ theme }) => css`
    column-gap: ${theme.spacing.base}px;
    row-gap: ${theme.spacing.base}px;
  `}
`;

export const TournamentHubInfoHeader = styled.h2`
  display: block;
  ${({ theme }) => css`
    ${theme.textStyles.title}
    margin-bottom: ${theme.spacing.baseX2}px;
  `}
`;
