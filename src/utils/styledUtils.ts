import { keyframes } from '@emotion/react';

function hexToRgb(hex: string) {
  // http://stackoverflow.com/a/5624139
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      }
    : {
        r: 0,
        g: 0,
        b: 0
      };
}

export function rgba(hex: string, alpha: number) {
  const color = hexToRgb(hex);
  return `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha})`;
}

// TODO -> validate that the string is correct?
export function hsla(hsl: string, alpha: number) {
  const hslParams = hsl.split('(')[1].split(')')[0].split(',');
  return `hsla(${hslParams[0]}, ${hslParams[1]}, ${hslParams[2]}, ${alpha})`;
}

export const bounceAnimation = (start: number, middle: number, end: number) =>
  keyframes`
    0% {
      transform: scale(${start});
    }
    50% {
      transform: scale(${middle});
    }
    100% {
      transform: scale(${end});
    }
`;
