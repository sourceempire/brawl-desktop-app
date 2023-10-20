import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 60%;
`;

export const Section = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacing.baseX4}px;
  `};
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    font: ${theme.textStyles.header};
    margin-bottom: ${theme.spacing.baseX2}px;
  `}
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  ${({ theme }) => css`
    margin-bottom: ${theme.spacing.baseX3}px;
  `};
`;

export const Text = styled.p``;

export const HighLight = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.accent.base};
  `};
`;
