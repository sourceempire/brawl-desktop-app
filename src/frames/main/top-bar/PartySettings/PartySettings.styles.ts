import styled, { css } from 'styled-components';
import { Input } from 'common/ui';

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

export const PartySettingsInput = styled(Input)`
  ${({ theme }) => css`
    input {
      font-weight: bold;
      padding-left: 4px;
      ::placeholder {
        font-weight: normal;
      }
      background-color: ${theme.colors.surfaceSecondary.base};
    }
  `}
`;

export const PartySizes = styled.div`
  display: flex;
  justify-content: space-between;
  ${({ theme }) => css`
    margin-left: -${theme.spacing.base}px;
    margin-right: -${theme.spacing.base}px;
  `}
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

export const SettingsDisplayDisabled = styled(SettingsDisplay)`
  ${({ theme }) => css`
    color: ${theme.colors.textDisabledLight};
  `}
`;
