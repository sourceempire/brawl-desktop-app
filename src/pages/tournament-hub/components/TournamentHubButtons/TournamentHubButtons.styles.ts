import styled, { css } from 'styled-components';

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  ${({ theme }) => css`
    margin-bottom: ${theme.spacing.baseX2}px;
  `}
`;

export const LeftButtons = styled.div`
  display: flex;
  align-items: center;
  ${({ theme }) => css`
    column-gap: ${theme.spacing.base}px;
  `}
`;

export const RightButtons = styled.div`
  display: flex;
  align-items: center;
`;
