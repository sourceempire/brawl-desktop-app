enum NotificationType {
  PARTY_INVITE = 'partyInvite',
  MATCH_END = 'matchEnd'
}

export interface NotificationInfo {
  type: NotificationType;
}

export interface PartyInviteNotificationInfo extends NotificationInfo {
  type: NotificationType.PARTY_INVITE;
  partyId: string;
  inviterId: string;
  isActive: boolean;
}

export interface MatchEndNotificationInfo extends NotificationInfo {
  type: NotificationType.MATCH_END;
  matchId: string;
}

export interface Notification {
  id: string;
  userId: string;
  info: NotificationInfo;
  isRead: boolean;
  createdAt: Date;
}

type NotificationFeedFormat = Omit<Notification, 'createdAt'> & { createdAt: string };

export type NotificationFeed = {
  totalCount: number;
  unreadNotificationsCount: number;
  notifications: NotificationFeedFormat[];
};

export const isPartyInviteNotification = (
  notificationInfo: NotificationInfo
): notificationInfo is PartyInviteNotificationInfo => {
  return notificationInfo.type === NotificationType.PARTY_INVITE;
};

export const isMatchEndNotification = (
  notificationInfo: NotificationInfo
): notificationInfo is MatchEndNotificationInfo => {
  return notificationInfo.type === NotificationType.MATCH_END;
};
