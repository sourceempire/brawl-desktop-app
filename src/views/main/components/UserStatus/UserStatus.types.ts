import { FlattenSimpleInterpolation, css } from 'styled-components';
import { theme } from 'assets/styles/Theme';

export type Props = {
  status: UserStatuses;
  className?: string;
  hideText?: boolean;
};

export enum UserStatuses {
  ONLINE = 'online',
  AWAY = 'away',
  BUSY = 'busy',
  OFFLINE = 'offline'
}

export const StatusStyle: { [key in UserStatuses]: FlattenSimpleInterpolation } = {
  online: css`
    background-color: ${theme.colors.statusSuccess};
  `,
  away: css`
    background-color: ${theme.colors.statusWarning};
  `,
  busy: css`
    background-color: ${theme.colors.statusError};
  `,
  offline: css`
    border: 2px solid rgb(155, 155, 166);
  `
};
