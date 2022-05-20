import { IconProps } from 'common/ui-components/types';
import { Svg } from './icons.styles';

const CheckIcon = ({ className }: IconProps) => {
  return (
    <Svg viewBox="0 0 30 21.53" className={className}>
      <path d="M29.1.9h0a3.1,3.1,0,0,0-4.37,0L11.56,14.08,5.27,7.79a3.08,3.08,0,0,0-4.37,0h0a3.09,3.09,0,0,0,0,4.36l8.47,8.48a3.1,3.1,0,0,0,4.37,0L29.1,5.27A3.1,3.1,0,0,0,29.1.9Z" />
    </Svg>
  );
};

export default CheckIcon;
