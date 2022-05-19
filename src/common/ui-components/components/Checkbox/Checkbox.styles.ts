import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 14px;
`;

export const Box = styled.div`
  height: 18px;
  width: 18px;
  margin-right: 6px;

  ${({ theme }) => css`
    border: 2px solid ${theme.colors.accent};
    border-radius: ${(props) => props.theme.borderRadius.default};
  `}
`;

export const Check = styled.div`
  height: 100%;
  width: 100%;

  ${({ theme }) => css`
    background-color: ${theme.colors.accent};
  `}
`;

export const Label = styled.div``;
