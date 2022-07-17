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
  icon?: IconType | string;
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
      {getIcon(icon)}
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

function isIconType(icon: IconType | string): icon is IconType {
  return icon in IconType;
}

function getIcon(icon: IconType | string | undefined) {
  if (icon !== undefined) {
    if (isIconType(icon)) {
      return <Icon type={icon} />;
    } else {
      return <img src={icon} />;
    }
  }
}

export default Input;
