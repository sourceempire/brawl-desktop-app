import { SVGComponent } from './Icons.types';

export function isSVGComponent(icon: SVGComponent | string): icon is SVGComponent {
  return typeof icon !== 'string';
}

export function getIcon(icon: SVGComponent | string | undefined, className = '') {
  if (icon !== undefined) {
    if (isSVGComponent(icon)) {
      const Icon = icon;
      return <Icon className={className} />;
    } else {
      return <img src={icon} className={className} />;
    }
  } else {
    return undefined;
  }
}
