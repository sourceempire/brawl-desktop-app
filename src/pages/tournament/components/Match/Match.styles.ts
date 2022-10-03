import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  flex-grow: 1;
  grid-auto-flow: column;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 12px;
`;

export const MiddleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const TeamContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  flex-direction: column;
  ${({ theme }) => css`
    gap: ${theme.spacing.base}px;
  `}
`;

export const PlayerContainer = styled.div<{ reversed?: boolean }>`
  display: grid;

  grid-auto-flow: column;
  grid-template-columns: auto 1fr auto;
  align-items: center;

  padding: 6px;
  ${({ theme, reversed }) => css`
    ${reversed &&
    css`
      direction: rtl;
    `}

    gap: ${theme.spacing.baseX3}px;
    border-radius: ${theme.borderRadius.default};
    background-color: ${theme.colors.lightTint.base};
  `};
`;

export const Action = styled.div``;
