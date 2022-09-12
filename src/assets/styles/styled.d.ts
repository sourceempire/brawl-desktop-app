import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      accent: string;
      background: string;
      secondary: string;
      lightTint: string;

      textPrimaryLight: string;
      textSecondaryLight: string;
      textDisabledLight: string;
      textPrimaryDark: string;
      textSecondaryDark: string;
      textDisabledDark: string;

      statusError: string;
      statusSuccess: string;
      statusWarning: string;

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
      header: FlattenSimpleInterpolation;
      stylizedHeader: FlattenSimpleInterpolation;
      title: striFlattenSimpleInterpolationng;
      body: FlattenSimpleInterpolation;
      menu: FlattenSimpleInterpolation;
      button: FlattenSimpleInterpolation;
      note: FlattenSimpleInterpolation;
    };

    titleBarHeight: number;
    topBarHeight: number;
    friendsBarWidth: number;
  }
}
