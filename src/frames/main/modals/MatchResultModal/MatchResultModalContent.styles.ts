import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Wrapper as MatchResultWrapper } from 'common/components/MatchResult/MatchResult.styles';

export const Wrapper = styled.div`
  width: 1100px;
  height: 500px;
  display: flex;
  flex-direction: column;
  ${({ theme }) => css`
    ${MatchResultWrapper} {
      padding-top: ${theme.spacing.base * 15}px;
    }
  `}
`;

export const TopWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${({ theme }) => css`
    margin-bottom: ${theme.spacing.baseX3}px;
  `}
`;

export const Header = styled.div`
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
  `}
`;
