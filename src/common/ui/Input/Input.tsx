import { IconWrapper, InputElement, InputWrapper, Label, Wrapper } from './Input.styles';
import { InputSize } from './Input.types';

type Props = {
  value: string;
  name?: string;
  type?: string;
  withBorder?: boolean;
  size?: InputSize;
  label?: string;
  icon?: React.ReactElement;
  className?: string;
  placeholder?: string;
  tabIndex?: number;
  maxLength?: number;
  disabled?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input = ({
  value,
  name,
  type,
  withBorder = false,
  size = InputSize.MEDIUM,
  label,
  icon,
  className,
  placeholder,
  tabIndex = 0,
  maxLength,
  disabled,
  onChange
}: Props) => {
  const hasIcon = Boolean(icon);

  return (
    <Wrapper className={className}>
      <Label>{label}</Label>
      <InputWrapper inputSize={size} hasLabel={Boolean(label)} hasIcon={hasIcon}>
        <IconWrapper inputSize={size}>{icon}</IconWrapper>
        <InputElement
          maxLength={maxLength}
          value={value}
          name={name}
          type={type}
          onChange={onChange}
          withBorder={withBorder}
          inputSize={size}
          hasIcon={hasIcon}
          placeholder={placeholder}
          tabIndex={tabIndex}
          disabled={disabled}
        />
      </InputWrapper>
    </Wrapper>
  );
};
