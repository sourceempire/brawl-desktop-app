import { InputSize } from 'common/components/Input/Input.types';
import { IconWrapper, InputElement, InputWrapper, Label, Wrapper } from './Input.styles';

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
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({
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
        />
      </InputWrapper>
    </Wrapper>
  );
};

export default Input;
