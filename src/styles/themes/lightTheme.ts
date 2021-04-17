import Color from 'color'

const defaultColors = {
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
  white: '#fff',
  black: '#000'
}

const gray = {
  gray100: Color(defaultColors.white).darken(0.1).hex(),
  gray200: Color(defaultColors.white).darken(0.2).hex(),
  gray300: Color(defaultColors.white).darken(0.3).hex(),
  gray400: Color(defaultColors.white).darken(0.4).hex(),
  gray500: Color(defaultColors.white).darken(0.5).hex(),
  gray600: Color(defaultColors.white).darken(0.6).hex(),
  gray700: Color(defaultColors.white).darken(0.7).hex(),
  gray800: Color(defaultColors.white).darken(0.8).hex(),
  gray900: Color(defaultColors.white).darken(0.9).hex()
}

const customColors = {
  primary: defaultColors.blue,
  secondary: Color(defaultColors.blue).darken(0.3).hex(),
  tertiary: Color(defaultColors.blue).darken(0.8).hex(),
  success: defaultColors.green,
  info: defaultColors.cyan,
  warning: defaultColors.yellow,
  danger: defaultColors.red,
  light: gray.gray100,
  dark: gray.gray900,
  complementary: '#FCAC0D'
}

const elevations = {
  sm: `0px 2px 4px ${Color.rgb(customColors.dark).alpha(0.24)};`,
  md: `0px 4px 8px ${Color.rgb(customColors.dark).alpha(0.16)};`,
  lg: `0px 8px 16px ${Color.rgb(customColors.dark).alpha(0.12)};`,
  xl: `0px 16px 24px ${Color.rgb(customColors.dark).alpha(0.12)};`
}

const getColorContrast = (color: any) => {
  console.log(color)
  return Color(color).isLight() ? 'black' : 'white'
}

const lightTheme = {
  title: 'light',
  colors: { ...defaultColors, ...gray, ...customColors },
  elevations: elevations,
  getColorContrast
}

export default lightTheme
