import { InputSize } from 'common/components/Input/Input.types';
import { InputElement, Label, Wrapper } from './Input.styles';
import { getIcon } from 'assets/icons/Icons.model';
import { SVGComponent } from 'assets/icons/Icons.types';

type Props = {
  value: string;
  name?: string;
  type?: string;
  withBorder?: boolean;
  size?: InputSize;
  label?: string;
  icon?: SVGComponent | string;
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
      {getIcon(icon, 'input-icon')}
      <InputElement
        value={value}
        name={name}
        type={type}
        onChange={onChange}
        withBorder={withBorder}
        inputSize={size}
        hasLabel={Boolean(label)}
        hasIcon={icon !== undefined}
        placeholder={placeholder}
        tabIndex={tabIndex}
      />
    </Wrapper>
  );
};

export default Input;
