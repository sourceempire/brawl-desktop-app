import styled, { css } from 'styled-components';
import { Button, Input } from 'common/ui';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Settings = styled.div`
  width: 360px;
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

export const PlayersWrapper = styled.div`
  display: flex;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  ${({ theme }) => css`
    margin-top: ${theme.spacing.baseX2}px;
  `}
`;

export const ModalButton = styled(Button)`
  width: fit-content;
`;

export const ButtonWithMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
`;

export const ErrorMessage = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacing.base}px;
    color: ${theme.colors.statusError};
  `}
`;
