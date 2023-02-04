import { IconEnum, SVGComponent } from './Icon.types';

export function isInternalIcon(icon: IconEnum | SVGComponent | string): icon is IconEnum {
  if (typeof icon !== 'string') {
    return false;
  }

  return (Object.values(IconEnum) as string[]).includes(icon);
}

export function isSVGComponent(icon: IconEnum | SVGComponent | string): icon is SVGComponent {
  return typeof icon !== 'string';
}
