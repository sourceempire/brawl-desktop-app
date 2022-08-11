import { DefaultTheme, css } from 'styled-components';
import { getPlatform } from 'utils/processUtils';

enum PlatformName {
  MAC = 'darwin',
  WINDOWS = 'win32'
}

const titleBarHeight = () => {
  switch (getPlatform()) {
    case PlatformName.MAC:
      return '24px';
    case PlatformName.WINDOWS:
      return '30px';
    default:
      console.warn('Platform not supported');
      return '12px';
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
  BASE = '6px',
  BASEx2 = '12px',
  BASEx3 = '18px',
  BASEx4 = '24px',
  BASEx5 = '30px',
  BASEx6 = '36px',
  BASEx7 = '42px',
  BASEx8 = '48px'
}

enum Fonts {
  DEFAULT = "'DM Sans', sans-serif",
  STYLIZED = "'Orbitron', sans-serif"
}

const TextStyles = {
  HEADER: css`
    font-size: 20px;
    font-weight: 500;
  `,
  STYLIZED_HEADER: css`
    font-family: 'Orbitron', sans-serif;
    font-size: 18px;
    font-weight: bold;
  `,
  TITLE: css`
    font-size: 13px;
    font-weight: bold;
  `,
  BODY: css`
    font-size: 13px;
    font-weight: normal;
  `,
  MENU: css`
    font-size: 13px;
    font-weight: normal;
    text-transform: uppercase;
  `,
  BUTTON: css`
    font-size: 12px;
    font-weight: normal;
  `,
  NOTE: css`
    font-size: 11px;
    font-weight: normal;
  `
};

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
  borderRadius: {
    default: BorderRadius.DEFAULT
  },
  spacing: {
    base: Spacing.BASE,
    baseX2: Spacing.BASEx2,
    baseX3: Spacing.BASEx3,
    baseX4: Spacing.BASEx4,
    baseX5: Spacing.BASEx5,
    baseX6: Spacing.BASEx6,
    baseX7: Spacing.BASEx7,
    baseX8: Spacing.BASEx8
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
  },

  titleBarHeight: titleBarHeight(),
  topBarHeight: Spacing.BASEx8,
  friendsBarWidth: '230px'
};
