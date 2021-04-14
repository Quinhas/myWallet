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
  white: '#fff',
  gray100: '#f8f9fa',
  gray200: '#e9ecef',
  gray300: '#dee2e6',
  gray400: '#ced4da',
  gray500: '#adb5bd',
  gray600: '#6c757d',
  gray700: '#495057',
  gray800: '#343a40',
  gray900: '#212529',
  black: '#000'
}

let customColors = {
  primary: defaultColors.blue,
  secondary: defaultColors.gray600,
  success: defaultColors.green,
  info: defaultColors.cyan,
  warning: defaultColors.yellow,
  danger: defaultColors.red,
  light: defaultColors.gray100,
  dark: defaultColors.gray900,
}

export default {
  title: 'dark',
  color: {...defaultColors, ...customColors}
};
