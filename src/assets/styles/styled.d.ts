import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      primary: {
        base: string;
        hover: string;
        active: string;
      };
      accent: {
        base: string;
        hover: string;
        active: string;
      };
      background: {
        base: string;
        hover: string;
        active: string;
      };
      secondary: {
        base: string;
        hover: string;
        active: string;
      };
      surface: {
        base: string;
        hover: string;
        active: string;
      };
      surfaceSecondary: {
        base: string;
        hover: string;
        active: string;
      };
      surfaceElement: {
        base: string;
        hover: string;
        active: string;
      };

      textPrimaryLight: string;
      textSecondaryLight: string;
      textDisabledLight: string;
      textPrimaryDark: string;
      textSecondaryDark: string;
      textDisabledDark: string;

      statusError: string;
      statusSuccess: string;
      statusWarning: string;

      white: string;

      depositGreen: {
        base: string;
        hover: string;
        active: string;
      };
      notificationRed: string;
    };
    borderRadius: {
      default: string;
    };
    spacing: {
      base: number;
      baseX2: number;
      baseX3: number;
      baseX4: number;
      baseX5: number;
      baseX6: number;
      baseX7: number;
      baseX8: number;
    };
    fonts: {
      default: string;
      stylized: string;
    };
    textStyles: {
      header: string;
      stylizedHeader: string;
      title: string;
      body: string;
      menu: string;
      button: string;
      note: string;
    };

    titleBarHeight: number;
    topBarHeight: number;
    friendsBarWidth: number;
  }
}
