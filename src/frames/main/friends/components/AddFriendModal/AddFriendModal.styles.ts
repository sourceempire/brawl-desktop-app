import styled, { css } from 'styled-components';

export const maxNumberOfUsers = 7;

export const Players = styled.div`
  display: grid;
  grid-template-columns: 100%;

  ${({ theme: { spacing } }) => css`
    // height of 7 users + gap * 6, hardcoded, because appearance
    height: calc((${spacing.baseX7}px * ${maxNumberOfUsers}) + ${spacing.base}px * 6);
    grid-auto-rows: ${spacing.baseX7}px;
    grid-gap: ${spacing.base}px;
    margin-top: ${spacing.baseX2}px;
  `}
`;
