import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  width: 1100px;
  height: 500px;
  display: flex;
  flex-direction: column;
  ${({ theme }) => css`
    margin-top: -${theme.spacing.base * 9}px;
    margin-left: -${theme.spacing.base * 3}px;
    margin-right: -${theme.spacing.base * 3}px;
  `}
`;

export const MatchResult = styled.div`
  flex-grow: 1;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  ${({ theme }) => css`
    gap: ${theme.spacing.base}px;
    margin: 0 ${theme.spacing.base * 3}px;
  `}
`;
