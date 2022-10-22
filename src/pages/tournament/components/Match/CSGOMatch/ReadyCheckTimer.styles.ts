import styled, { css } from 'styled-components';

export const Text = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.textDisabledLight};
  `}
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  margin-top: 60px;
`;
