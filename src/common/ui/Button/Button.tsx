import { IconEnum, SVGComponent } from 'common/ui';
import { ButtonIcon, Wrapper } from './Button.styles';

type Props = {
  children: React.ReactNode;
  className?: string;
  primary?: boolean;
  accent?: boolean;
  alert?: boolean;
  small?: boolean;
  icon?: IconEnum | SVGComponent | string;
  tabIndex?: number;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const Button = ({
  children,
  className,
  primary,
  accent,
  alert,
  small,
  icon,
  onClick,
  tabIndex = 0,
  disabled
}: Props) => {
  return (
    <Wrapper
      onClick={onClick}
      className={className}
      primary={primary}
      accent={accent}
      alert={alert}
      small={small}
      hasIcon={icon !== undefined}
      tabIndex={tabIndex}
      disabled={disabled}>
      {icon && <ButtonIcon icon={icon} />}
      {children}
    </Wrapper>
  );
};
