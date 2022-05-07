import { DefaultTheme } from 'styled-components';
import { PlatformName } from 'global/types';

const titleBarHeight = () => {
  switch (process.platform) {
    case PlatformName.MAC:
      return '23.5px';
    case PlatformName.WINDOWS:
      return '30px';
    default:
      throw 'Platform not supported';
  }
};

export enum Colors {
  PRIMARY = '#EF9A00',
  ACCENT = '#94E8B4',
  BACKGROUND = '#232333',
  SECONDARY = '#363750',
  LIGHT_TINT = '#595B83'
}

export enum BorderRadius {
  DEFAULT = '6px'
}

export const theme: DefaultTheme = {
  colors: {
    primary: Colors.PRIMARY,
    accent: Colors.ACCENT,
    background: Colors.BACKGROUND,
    secondary: Colors.SECONDARY,
    lightTint: Colors.LIGHT_TINT
  },
  titleBarHeight: titleBarHeight(),
  borderRadius: {
    default: BorderRadius.DEFAULT
  }
};
