import { IconContainer, Wrapper } from './Button.styles';
import { Props } from './Button.types';

export const Button = ({
  children,
  className,
  primary,
  accent,
  alert,
  small,
  icon,
  onClick,
  tabIndex = 0
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
      tabIndex={tabIndex}>
      {icon && <IconContainer>{icon}</IconContainer>}
      {children}
    </Wrapper>
  );
};
