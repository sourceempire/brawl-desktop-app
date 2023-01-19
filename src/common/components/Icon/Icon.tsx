import { isInternalIcon, isSVGComponent } from './Icon.model';
import { IconEnum, SVGComponent } from './Icon.types';
import Icons from './Icons';

type IconProps = {
  icon: IconEnum | SVGComponent | string;
} & React.SVGProps<SVGSVGElement>;

export function Icon({ icon, ...rest }: IconProps) {
  if (isInternalIcon(icon)) {
    const IconComponent = Icons[icon];
    return <IconComponent {...rest} />;
  } else if (isSVGComponent(icon)) {
    const IconComponent = icon;
    return <IconComponent className={rest.className} />;
  } else {
    return <img src={icon} className={rest.className} />;
  }
}
