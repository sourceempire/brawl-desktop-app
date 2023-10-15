import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { hsla } from 'utils/styledUtils';

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  flex-direction: column;
  ${({ theme }) => css`
    gap: ${theme.spacing.base}px;
  `}
`;

type PlayerContainerProps = {
  reversed?: boolean;
  transparent?: boolean;
};

export const PlayerContainer = styled.div<PlayerContainerProps>`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: auto 1fr auto;
  align-items: center;

  ${({ theme, reversed, transparent }) => css`
    ${reversed &&
    css`
      direction: rtl;
    `}

    padding: ${theme.spacing.base}px;
    gap: ${theme.spacing.baseX3}px;
    border-radius: ${theme.borderRadius.default};
    background-color: ${transparent
      ? hsla(theme.colors.surfaceElement.base, 0.5)
      : theme.colors.surfaceElement.base};
  `};
`;

export const CurrentState = styled.div`
  padding: 0 12px;
`;
