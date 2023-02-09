import { theme } from 'assets/styles/Theme';

export type PopupOptions = {
  timer?: number;
  onClose?: () => void;
};

export type PopupListChangeListener = (updatedPopupList: HTMLDivElement[]) => void;

export enum PopupLevel {
  INFO,
  WARNING,
  ERROR
}

export const PopupBackgroundColors = {
  [PopupLevel.INFO]: theme.colors.accent.base,
  [PopupLevel.WARNING]: theme.colors.statusWarning,
  [PopupLevel.ERROR]: theme.colors.statusError
};

export const PopupColors = {
  [PopupLevel.INFO]: theme.colors.textPrimaryDark,
  [PopupLevel.WARNING]: theme.colors.textPrimaryLight,
  [PopupLevel.ERROR]: theme.colors.textPrimaryLight
};

export const TimingAnimationFilters = {
  [PopupLevel.INFO]: theme.colors.textPrimaryDark,
  [PopupLevel.WARNING]: theme.colors.textPrimaryLight,
  [PopupLevel.ERROR]: theme.colors.textPrimaryLight
};
