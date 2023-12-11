import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Button, Input } from 'common/ui';
import { InputElement } from 'common/ui/Input/Input.styles';

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
    margin-bottom: ${theme.spacing.baseX2}px;
    margin-top: ${theme.spacing.baseX2}px;
    :first-of-type {
      margin-top: 0;
    }
  `}
`;

export const TeamSettingsInput = styled(Input)`
  ${({ theme }) => css`
    ${InputElement} {
      padding-left: 4px;
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
