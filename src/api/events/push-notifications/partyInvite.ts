import * as UserRequests from 'api/requests/UserRequests';
import { PartyInviteNotificationInfo } from 'types/notifications/Notifications';
import { PushNotificationInfo } from 'types/notifications/PushNotification';

type FunctionType = (info: PartyInviteNotificationInfo) => Promise<PushNotificationInfo>;

export const getPartyInvitePushNotification: FunctionType = async (info) => {
  const res = await UserRequests.getPublicUser(info.inviterId);
  return {
    title: `Party invite from ${res.user.userTag}`
  };
};
