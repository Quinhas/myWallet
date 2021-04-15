import Color from 'color';

let defaultColors = {
  blue: '#0d6efd',
  indigo: '#6610f2',
  purple: '#6f42c1',
  pink: '#d63384',
  red: '#dc3545',
  orange: '#fd7e14',
  yellow: '#ffc107',
  green: '#198754',
  teal: '#20c997',
  cyan: '#0dcaf0',
  white: '#000',
  black: '#fff'
}

let gray = {
  gray100: Color(defaultColors.black).darken(0.1).negate().hex(),
  gray200: Color(defaultColors.black).darken(0.2).negate().hex(),
  gray300: Color(defaultColors.black).darken(0.3).negate().hex(),
  gray400: Color(defaultColors.black).darken(0.4).negate().hex(),
  gray500: Color(defaultColors.black).darken(0.5).negate().hex(),
  gray600: Color(defaultColors.black).darken(0.6).negate().hex(),
  gray700: Color(defaultColors.black).darken(0.7).negate().hex(),
  gray800: Color(defaultColors.black).darken(0.8).negate().hex(),
  gray900: Color(defaultColors.black).darken(0.9).negate().hex()
}

let customColors = {
  primary: defaultColors.blue,
  secondary: Color(defaultColors.blue).darken(0.3).hex(),
  tertiary: Color(defaultColors.blue).darken(0.8).hex(),
  success: defaultColors.green,
  info: defaultColors.cyan,
  warning: defaultColors.yellow,
  danger: defaultColors.red,
  light: gray.gray500,
  dark: gray.gray900,
  complementary: '#FCAC0D'
}

let elevations = {
	sm: `0px 2px 4px ${Color.rgb(defaultColors.white).alpha(0.24)};`,
	md: `0px 4px 8px ${Color.rgb(defaultColors.white).alpha(0.16)};`,
	lg: `0px 8px 16px ${Color.rgb(defaultColors.white).alpha(0.12)};`,
	xl: `0px 16px 24px ${Color.rgb(defaultColors.white).alpha(0.12)};`,
};

const darkTheme = {
  title: 'dark',
  colors: {...defaultColors, ...gray, ...customColors},
  elevations: elevations
};


export default darkTheme;