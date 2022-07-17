import { Radio } from './RadioButton.styled';

type Props = {
  name?: string;
  value: string;
  checked?: boolean;
  onChange: (value: string) => any;
};

export default function RadioButton({ name, value, onChange, checked }: Props) {
  return (
    <Radio
      type="radio"
      {...(name !== undefined ? { name: name } : {})}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      checked={checked}
    />
  );
}
