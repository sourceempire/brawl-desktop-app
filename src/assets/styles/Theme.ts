import { DefaultTheme } from 'styled-components';

enum PlatformName {
  MAC = 'darwin',
  WINDOWS = 'win32'
}

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

enum Colors {
  PRIMARY = '#EF9A00',
  ACCENT = '#94E8B4',
  BACKGROUND = '#232333',
  SECONDARY = '#363750',
  LIGHT_TINT = '#595B83',

  TEXT_PRIMARY_LIGHT = 'rgba(255, 255, 255, 1)',
  TEXT_SECONDARY_LIGHT = 'rgba(255, 255, 255, .67)',
  TEXT_DISABLED_LIGHT = 'rgba(255, 255, 255, .50)',
  TEXT_PRIMARY_DARK = 'rgba(0, 0, 0, .87)',
  TEXT_SECONDARY_DARK = 'rgba(0, 0, 0, .54)',
  TEXT_DISABLED_DARK = 'rgba(0, 0, 0, .38)',

  STATUS_ERROR = '#DD3A3A',
  STATUS_SUCCESS = '#65CA57',
  STATUS_WARNING = '#F4A52F'
}

enum BorderRadius {
  DEFAULT = '3px'
}

enum Spacing {
  BASE = '6',
  BASEx2 = '12',
  BASEx3 = '18',
  BASEx4 = '24',
  BASEx5 = '30'
}

enum Fonts {
  DEFAULT = "'DM Sans', sans-serif",
  STYLIZED = "'Orbitron', sans-serif"
}

enum TextStyles {
  HEADER = `
    font-size: 20px;
    font-weight: 500;
  `,
  STYLIZED_HEADER = `
    font-family: 'Orbitron', sans-serif;
    font-size: 18px;
    font-weight: bold;
  `,
  TITLE = `
    font-size: 13px;
    font-weight: bold;
  `,
  BODY = `
    font-size: 13px;
    font-weight: normal;
  `,
  MENU = `
    font-size: 13px;
    font-weight: normal;
    text-transform: uppercase;
  `,
  BUTTON = `
    font-size: 12px;
    font-weight: normal;
  `,
  NOTE = `
    font-size: 11px;
    font-weight: normal;
  `
}

export const theme: DefaultTheme = {
  colors: {
    primary: Colors.PRIMARY,
    accent: Colors.ACCENT,
    background: Colors.BACKGROUND,
    secondary: Colors.SECONDARY,
    lightTint: Colors.LIGHT_TINT,

    textPrimaryLight: Colors.TEXT_PRIMARY_LIGHT,
    textSecondaryLight: Colors.TEXT_SECONDARY_LIGHT,
    textDisabledLight: Colors.TEXT_DISABLED_LIGHT,
    textPrimaryDark: Colors.TEXT_PRIMARY_DARK,
    textSecondaryDark: Colors.TEXT_SECONDARY_DARK,
    textDisabledDark: Colors.TEXT_DISABLED_DARK,

    statusError: Colors.STATUS_ERROR,
    statusSuccess: Colors.STATUS_SUCCESS,
    statusWarning: Colors.STATUS_WARNING
  },
  titleBarHeight: titleBarHeight(),
  borderRadius: {
    default: BorderRadius.DEFAULT
  },
  spacing: {
    base: Spacing.BASE,
    baseX2: Spacing.BASEx2,
    baseX3: Spacing.BASEx3,
    baseX4: Spacing.BASEx4,
    baseX5: Spacing.BASEx5
  },
  fonts: {
    default: Fonts.DEFAULT,
    stylized: Fonts.STYLIZED
  },
  textStyles: {
    header: TextStyles.HEADER,
    stylizedHeader: TextStyles.STYLIZED_HEADER,
    title: TextStyles.TITLE,
    body: TextStyles.BODY,
    menu: TextStyles.MENU,
    button: TextStyles.BUTTON,
    note: TextStyles.NOTE
  }
};
