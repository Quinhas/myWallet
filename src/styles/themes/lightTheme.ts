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
	white: '#fff',
	black: '#000',
};

let gray = {
	gray100: Color(defaultColors.white).darken(0.1).hex(),
	gray200: Color(defaultColors.white).darken(0.2).hex(),
	gray300: Color(defaultColors.white).darken(0.3).hex(),
	gray400: Color(defaultColors.white).darken(0.4).hex(),
	gray500: Color(defaultColors.white).darken(0.5).hex(),
	gray600: Color(defaultColors.white).darken(0.6).hex(),
	gray700: Color(defaultColors.white).darken(0.7).hex(),
	gray800: Color(defaultColors.white).darken(0.8).hex(),
	gray900: Color(defaultColors.white).darken(0.9).hex(),
};

let customColors = {
	primary: defaultColors.blue,
	secondary: Color(defaultColors.blue).darken(0.3).hex(),
	tertiary: Color(defaultColors.blue).darken(0.8).hex(),
	success: defaultColors.green,
	info: defaultColors.cyan,
	warning: defaultColors.yellow,
	danger: defaultColors.red,
	light: gray.gray100,
	dark: gray.gray900,
	complementary: '#FCAC0D',
};

let shadows = {
	shadow: `0 .5rem 1rem ${Color.rgb(customColors.dark).alpha(0.15)}`,
	shadow_sm: `0 .125rem .25rem ${Color.rgb(customColors.dark).alpha(0.15)}`,
	shadow_lg: `0 1rem 3rem ${Color.rgb(customColors.dark).alpha(0.15)}`,
	shadow_inset: `inset 0 1px 2px ${Color.rgb(customColors.dark).alpha(0.15)}`,
};


export default {
	title: 'light',
	colors: {...defaultColors, ...gray, ...customColors},
  shadows: shadows
};
