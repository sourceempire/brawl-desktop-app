import styled, { css } from 'styled-components';

export const Settings = styled.div`
  width: 170px;
`;

export const Label = styled.div`
  font-size: 13px;
  ${({ theme }) => css`
    margin-bottom: ${theme.spacing.base}px;
    margin-top: ${theme.spacing.baseX2}px;
    :first-of-type {
      margin-top: 0;
    }
  `}
`;

export const PartySizes = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SettingsDisplay = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 15px;
  ${({ theme }) => css`
    height: ${theme.spacing.baseX6}px;
  `}
`;
