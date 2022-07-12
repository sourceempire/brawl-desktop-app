import { IconProps } from 'common/ui-components/types';
import { Svg } from './icons.styles';

const ArrowDownIcon = ({ className }: IconProps) => {
  return (
    <Svg className={className} viewBox="0 0 25 15.15">
      <path d="M12.5,15.15c-.7,0-1.38-.28-1.88-.78L.78,4.53c-1.04-1.04-1.04-2.71,0-3.75h0c1.04-1.04,2.71-1.04,3.75,0l7.97,7.97L20.47,.78c1.04-1.04,2.71-1.04,3.75,0h0c1.04,1.04,1.04,2.71,0,3.75L14.37,14.37c-.5,.5-1.17,.78-1.88,.78Z" />
    </Svg>
  );
};

export default ArrowDownIcon;
