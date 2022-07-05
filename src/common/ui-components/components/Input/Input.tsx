import { Icon } from 'common/ui-components';
import { IconType, InputSize } from 'common/ui-components/types';
import { InputElement, Label, Wrapper } from './Input.styles';

type Props = {
  value: string;
  name?: string;
  type?: string;
  withBorder?: boolean;
  size?: InputSize;
  label?: string;
  icon?: IconType;
  className?: string;
  placeholder?: string;
  tabIndex?: number;
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
  onChange
}: Props) => {
  return (
    <Wrapper inputSize={size} className={className}>
      <Label>{label}</Label>
      {icon && <Icon type={icon} />}
      <InputElement
        value={value}
        name={name}
        type={type}
        onChange={onChange}
        withBorder={withBorder}
        inputSize={size}
        hasLabel={Boolean(label)}
        hasIcon={Boolean(icon)}
        placeholder={placeholder}
        tabIndex={tabIndex}
      />
    </Wrapper>
  );
};

export default Input;
