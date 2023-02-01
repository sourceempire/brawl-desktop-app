import { DefaultTheme, css } from 'styled-components';
import { getPlatform } from 'utils/processUtils';

enum PlatformName {
  MAC = 'darwin',
  WINDOWS = 'win32'
}

const titleBarHeight = () => {
  switch (getPlatform()) {
    case PlatformName.MAC:
      return 24;
    case PlatformName.WINDOWS:
      return 30;
    default:
      console.warn('Platform not supported');
      return 12;
  }
};

enum Spacing {
  BASE = 6,
  BASEx2 = 12,
  BASEx3 = 18,
  BASEx4 = 24,
  BASEx5 = 30,
  BASEx6 = 36,
  BASEx7 = 42,
  BASEx8 = 48
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
    line-height: 1.4;
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
    primary: {
      base: 'hsl(39, 100%, 47%)',
      hover: 'hsl(39, 100%, 57%)',
      active: 'hsl(39, 100%, 67%)'
    },
    accent: {
      base: 'hsl(143, 65%, 75%)',
      hover: 'hsl(143, 65%, 85%)',
      active: 'hsl(143, 65%, 95%)'
    },
    background: {
      base: 'hsl(240, 19%, 17%)',
      hover: 'hsl(240, 19%, 27%)',
      active: 'hsl(240, 19%, 17%)'
    },
    secondary: {
      base: 'hsl(238, 19%, 26%)',
      hover: 'hsl(238, 19%, 36%)',
      active: 'hsl(238, 19%, 46%)'
    },
    surface: {
      base: 'hsl(240, 19%, 21%)',
      hover: 'hsl(240, 19%, 31%)',
      active: 'hsl(240, 19%, 41%)'
    },
    surfaceSecondary: {
      base: 'hsl(238, 19%, 34%)',
      hover: 'hsl(238, 19%, 44%)',
      active: 'hsl(238, 19%, 54%)'
    },
    surfaceElement: {
      base: 'hsl(240, 19%, 29%)',
      hover: 'hsl(240, 19%, 39%)',
      active: 'hsl(240, 19%, 49%)'
    },

    textPrimaryLight: 'rgba(255, 255, 255, 1)',
    textSecondaryLight: 'rgba(218, 218, 218, .67)',
    textDisabledLight: 'rgba(218, 218, 218, .50)',
    textPrimaryDark: 'rgba(0, 0, 0, .87)',
    textSecondaryDark: 'rgba(0, 0, 0, .54)',
    textDisabledDark: 'rgba(0, 0, 0, .38)',

    statusError: '#DD3A3A',
    statusSuccess: '#65CA57',
    statusWarning: '#F4A52F',

    white: 'hsl(0, 100%, 100%)',

    notificationRed: 'hsl(0, 95%, 61%)',
    depositGreen: {
      base: 'hsl(143, 41%, 33%)',
      hover: 'hsl(143, 41%, 43%)',
      active: 'hsl(143, 41%, 53%)'
    }
  },
  borderRadius: {
    default: '3px'
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
  friendsBarWidth: 230
};
