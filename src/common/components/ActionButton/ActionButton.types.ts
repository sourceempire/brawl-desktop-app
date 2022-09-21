export type WrapperProps = {
  iconColor?: string;
  isCircle?: boolean;
  size: ActionButtonSize;
  active?: boolean;
  disabled?: boolean;
};

export enum ActionButtonSize {
  SMALL,
  MEDIUM,
  LARGE
}
