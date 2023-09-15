import { IconEnum, SVGComponent } from 'common/ui';

export type Props = {
  children: React.ReactNode;
  className?: string;
  primary?: boolean;
  accent?: boolean;
  alert?: boolean;
  small?: boolean;
  icon?: IconEnum | SVGComponent | string;
  tabIndex?: number;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};
