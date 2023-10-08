export type Props = {
  status?: UserStatusEnum;
  className?: string;
  hideText?: boolean;
};

export enum UserStatusEnum {
  ONLINE = 'ONLINE',
  AWAY = 'AWAY',
  BUSY = 'BUSY',
  OFFLINE = 'OFFLINE'
}
