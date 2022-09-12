enum NotificationType {
  PARTY_INVITE = 'partyInvite'
}

interface NotificationInfo {
  type: NotificationType;
}

interface PartyInviteNotificationInfo extends NotificationInfo {
  type: NotificationType.PARTY_INVITE;
  partyId: string;
  inviterId: string;
  isActive: string;
}

export interface Notification {
  id: string;
  userId: string;
  info: NotificationInfo;
  isRead: boolean;
  created_at: string;
}

const isPartyInviteNotification = (
  notificationInfo: NotificationInfo
): notificationInfo is PartyInviteNotificationInfo => {
  return notificationInfo.type === NotificationType.PARTY_INVITE;
};

export const typeGuard = {
  isPartyInviteNotification
};
