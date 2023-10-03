import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { UserStatusEnum } from './UserStatus.types';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const StatusText = styled.div`
  margin-left: 6px;
  text-transform: capitalize;
`;

export const StatusCircle = styled.div<{ status: UserStatusEnum }>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  box-sizing: border-box;
  height: 9px;
  width: 9px;

  ${({ status, theme }) => css`
    ${status === UserStatusEnum.ONLINE &&
    css`
      background-color: ${theme.colors.statusSuccess};
    `}

    ${status === UserStatusEnum.AWAY &&
    css`
      background-color: ${theme.colors.statusWarning};
    `}

    ${status === UserStatusEnum.BUSY &&
    css`
      background-color: ${theme.colors.statusError};
    `}

    ${status === UserStatusEnum.OFFLINE &&
    css`
      border: 2px solid rgb(155, 155, 166);
    `}
  `}
`;

export const StatusIcon = styled.img`
  width: 70%;
`;
