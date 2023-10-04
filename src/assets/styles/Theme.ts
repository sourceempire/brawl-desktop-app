import { Theme } from '@emotion/react';
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

type TextStylesType = {
  header: string;
  stylizedHeader: string;
  title: string;
  body: string;
  menu: string;
  button: string;
  note: string;
};

const textStyles: TextStylesType = {
  header: 'bold 20px ' + Fonts.DEFAULT,
  stylizedHeader: 'bold 18px ' + Fonts.STYLIZED,
  title: 'bold 13px ' + Fonts.DEFAULT,
  body: 'normal 13px ' + Fonts.DEFAULT,
  menu: 'normal 13px ' + Fonts.DEFAULT,
  button: 'normal 12px ' + Fonts.DEFAULT,
  note: 'normal 11px ' + Fonts.DEFAULT
};

export const theme: Theme = {
  colors: {
    primary: {
      base: 'hsl(39, 100%, 47%)',
      hover: 'hsl(39, 100%, 57%)',
      active: 'hsl(39, 100%, 67%)'
    },
    accent: {
      base: 'hsl(143, 65%, 65%)',
      hover: 'hsl(143, 65%, 75%)',
      active: 'hsl(143, 65%, 85%)'
    },
    background: {
      base: 'hsl(240, 20%, 17%)',
      hover: 'hsl(240, 19%, 27%)',
      active: 'hsl(240, 19%, 37%)'
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
    textPrimaryDark: 'rgba(0, 0, 0, 0.871)',
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
  textStyles,
  titleBarHeight: titleBarHeight(),
  topBarHeight: Spacing.BASEx8,
  friendsBarWidth: 230
};
