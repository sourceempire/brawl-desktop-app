import { theme } from 'assets/styles/Theme';

export enum PopupLevel {
  INFO,
  WARNING,
  ERROR
}

export const PopupBackgroundColors = {
  [PopupLevel.INFO]: theme.colors.accent,
  [PopupLevel.WARNING]: theme.colors.statusWarning,
  [PopupLevel.ERROR]: theme.colors.statusError
};

export const PopupColors = {
  [PopupLevel.INFO]: theme.colors.textPrimaryDark,
  [PopupLevel.WARNING]: theme.colors.textPrimaryDark,
  [PopupLevel.ERROR]: theme.colors.textPrimaryLight
};
