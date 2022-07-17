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
    titleBarHeight: string;
    spacing: {
      base: string;
      baseX2: string;
      baseX3: string;
      baseX4: string;
      baseX5: string;
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
  }
}
