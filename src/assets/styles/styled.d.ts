import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      accent: string;
      background: string;
      secondary: string;
      lightTint: string;
    };
    borderRadius: {
      default: string;
    };
    titleBarHeight: string;
  }
}
