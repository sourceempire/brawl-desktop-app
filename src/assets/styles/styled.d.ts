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
    };
    borderRadius: {
      default: string;
    };
    spacing: {
      base: string;
      baseX2: string;
      baseX3: string;
      baseX4: string;
      baseX5: string;
      baseX6: string;
      baseX7: string;
      baseX8: string;
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

    titleBarHeight: string;
    topBarHeight: string;
    friendsBarWidth: string;
  }
}
