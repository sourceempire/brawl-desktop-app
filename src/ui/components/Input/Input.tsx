import { IconType, InputSize } from 'ui/types';
import { Icon } from 'ui';
import { InputElement, Label, Wrapper } from './Input.styles';

type Props = {
  value: string;
  type?: string;
  withBorder?: boolean;
  size?: InputSize;
  label?: string;
  icon?: IconType;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({
  value,
  type,
  withBorder = false,
  size = InputSize.MEDIUM,
  label,
  icon,
  onChange
}: Props) => {
  return (
    <Wrapper inputSize={size}>
      <Label>{label}</Label>
      {icon && <Icon type={icon} />}
      <InputElement
        value={value}
        type={type}
        onChange={onChange}
        withBorder={withBorder}
        inputSize={size}
        hasLabel={Boolean(label)}
        hasIcon={Boolean(Icon)}
      />
    </Wrapper>
  );
};

export default Input;
