import { theme } from 'assets/styles/Theme';

export enum NotificationLevel {
  INFO,
  WARNING,
  ERROR
}

export const NotificationLevelBackgroundColors = {
  [NotificationLevel.INFO]: theme.colors.accent,
  [NotificationLevel.WARNING]: theme.colors.statusWarning,
  [NotificationLevel.ERROR]: theme.colors.statusError
};

export const NotificationLevelColors = {
  [NotificationLevel.INFO]: theme.colors.textPrimaryDark,
  [NotificationLevel.WARNING]: theme.colors.textPrimaryLight,
  [NotificationLevel.ERROR]: theme.colors.textPrimaryLight
};
