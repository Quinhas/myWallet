import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      blue: string;
      indigo: string;
      purple: string;
      pink: string;
      red: string;
      orange: string;
      yellow: string;
      green: string;
      teal: string;
      cyan: string;
      white: string;
      gray100: string;
      gray200: string;
      gray300: string;
      gray400: string;
      gray500: string;
      gray600: string;
      gray700: string;
      gray800: string;
      gray900: string;
      black: string;
      primary: string;
      secondary: string;
      success: string;
      info: string;
      warning: string;
      danger: string;
      light: string;
      dark: string;
      complementary: string
    },
    elevations: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    },
    getColorContrast(color: any): any
  };
  
}