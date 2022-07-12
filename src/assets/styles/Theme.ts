import { DefaultTheme } from 'styled-components';

enum PlatformName {
  MAC = 'darwin',
  WINDOWS = 'win32'
}

const titleBarHeight = () => {
  switch (process.platform) {
    case PlatformName.MAC:
      return '24px';
    case PlatformName.WINDOWS:
      return '30px';
    default:
      throw 'Platform not supported';
  }
};

enum Colors {
  PRIMARY = '#EF9A00',
  ACCENT = '#94E8B4',
  BACKGROUND = '#232333',
  SECONDARY = '#363750',
  LIGHT_TINT = '#595B83',

  PRIMARY_DARK = 'rgba(0, 0, 0, 0.87)',
  SECONDARY_DARK = 'rgba(0, 0, 0, 0.54)',
  DISABLED_DARK = 'rgba(0, 0, 0, 0.38)',

  SUCCESS = '#65CA57'
}

enum BorderRadius {
  DEFAULT = '3px'
}

export const theme: DefaultTheme = {
  colors: {
    primary: Colors.PRIMARY,
    accent: Colors.ACCENT,
    background: Colors.BACKGROUND,
    secondary: Colors.SECONDARY,
    lightTint: Colors.LIGHT_TINT,

    primaryDark: Colors.PRIMARY_DARK,
    secondaryDark: Colors.SECONDARY_DARK,
    disabledDark: Colors.DISABLED_DARK,

    success: Colors.SUCCESS
  },
  titleBarHeight: titleBarHeight(),
  borderRadius: {
    default: BorderRadius.DEFAULT
  }
};
