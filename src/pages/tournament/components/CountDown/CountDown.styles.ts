import styled, { css } from 'styled-components/macro';

export const Wrapper = styled.div`
  display: flex;
  gap: 24px;
`;

export const Unit = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
`;

export const NumberGroup = styled.div`
  display: flex;
  gap: 6px;
`;

export const Number = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 35px;
  ${({ theme }) => css`
    ${theme.textStyles.stylizedHeader}
    border-radius: ${theme.borderRadius.default};
    background-color: ${theme.colors.lightTint.base};
  `}
`;

export const Days = styled(NumberGroup)``;
export const Hours = styled(NumberGroup)``;
export const Minutes = styled(NumberGroup)``;
export const Seconds = styled(NumberGroup)``;
