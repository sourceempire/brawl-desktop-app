import styled, { css } from 'styled-components';

export const PromptText = styled.div`
  text-align: center;
`;

export const PromptContent = styled.div`
  display: flex;
  justify-content: center;
`;

export const ButtonsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 150px;
    justify-content: space-between;
    margin-top: ${theme.spacing.baseX3}px;
  `}
`;
