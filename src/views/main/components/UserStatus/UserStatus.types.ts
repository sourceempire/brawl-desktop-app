import { FlattenSimpleInterpolation, css } from 'styled-components';
import { theme } from 'assets/styles/Theme';

export type Props = {
  status: UserStatusEnum;
  className?: string;
  hideText?: boolean;
};

export enum UserStatusEnum {
  ONLINE = 'ONLINE',
  AWAY = 'AWAY',
  BUSY = 'BUSY',
  OFFLINE = 'OFFLINE'
}

export const StatusStyle: { [key in UserStatusEnum]: FlattenSimpleInterpolation } = {
  [UserStatusEnum.ONLINE]: css`
    background-color: ${theme.colors.statusSuccess};
  `,
  [UserStatusEnum.AWAY]: css`
    background-color: ${theme.colors.statusWarning};
  `,
  [UserStatusEnum.BUSY]: css`
    background-color: ${theme.colors.statusError};
  `,
  [UserStatusEnum.OFFLINE]: css`
    border: 2px solid rgb(155, 155, 166);
  `
};
