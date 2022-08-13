import styled, { css } from 'styled-components/macro';

export const maxNumberOfUserHits = 7;

export const Players = styled.div`
  display: grid;
  grid-template-columns: 100%;

  ${({ theme: { spacing } }) => css`
    // height of modal with 7 friends, hardcoded because, appearance
    height: calc(
      (${spacing.baseX6}px * ${maxNumberOfUserHits}) + (${spacing.base}px * 6) +
        (${spacing.baseX2}px * 3)
    );
    margin-top: ${spacing.baseX2}px;
    grid-gap: ${spacing.base}px;
  `}
`;
