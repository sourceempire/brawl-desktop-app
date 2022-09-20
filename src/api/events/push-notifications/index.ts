import { Notification, isPartyInviteNotification } from 'types/notifications/Notifications';
import { PushNotificationInfo } from 'types/notifications/PushNotification';
import { getPartyInvitePushNotification } from './partyInvite';

type FunctionType = (notification: Notification) => Promise<PushNotificationInfo>;

export const getPushNotificationMessage: FunctionType = (notification: Notification) => {
  if (isPartyInviteNotification(notification.info)) {
    return getPartyInvitePushNotification(notification.info);
  }
  return Promise.reject('No such push notification');
};
