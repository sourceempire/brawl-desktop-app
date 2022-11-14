import styled, { css } from 'styled-components';
import { Wrapper as MatchResultWrapper } from 'pages/shared/components/MatchResult/MatchResult.styles';

export const Wrapper = styled.div`
  width: 1100px;
  height: 500px;
  display: flex;
  flex-direction: column;
  ${({ theme }) => css`
    margin-top: -${theme.spacing.base * 9}px;
    margin-left: -${theme.spacing.base * 3}px;
    margin-right: -${theme.spacing.base * 3}px;

    ${MatchResultWrapper} {
      padding-top: ${theme.spacing.base * 15}px;
    }
  `}
`;

export const Header = styled.div`
  position: absolute;
  z-index: 1;
  padding: 12px;
  font-size: 20px;

  ${({ theme }) => css`
    color: ${theme.colors.textPrimaryLight};
  `}
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  ${({ theme }) => css`
    gap: ${theme.spacing.base}px;
    margin: 0 ${theme.spacing.base * 3}px;
  `}
`;
