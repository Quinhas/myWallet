import {createContext, useState, useContext} from 'react';

import {DarkTheme, LightTheme} from '../styles/themes';

interface IThemeContext {
	toggleTheme(): void;
	theme: DefaultTheme;
}

interface DefaultTheme {
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
		complementary: string;
	};
	elevations: {
		sm: string;
		md: string;
		lg: string;
		xl: string;
	};
	getColorContrast(color: any): any;
}

const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

const ThemeProvider: React.FC = ({children}) => {
	const [theme, setTheme] = useState<DefaultTheme>(() => {
    const themeSaved = localStorage.getItem('@myWallet:theme');
    if (themeSaved === 'darkTheme') {
      return DarkTheme;
    } else {
      return LightTheme;
    }
  });
	const toggleTheme = () => {
		if (theme.title === 'dark') {
			setTheme(LightTheme);
			localStorage.setItem('@myWallet:theme', 'lightTheme');
		} else {
			setTheme(DarkTheme);
			localStorage.setItem('@myWallet:theme', 'darkTheme');
		}
	};

	return <ThemeContext.Provider value={{toggleTheme, theme}}>{children}</ThemeContext.Provider>;
};

function useTheme(): IThemeContext {
	const context = useContext(ThemeContext);
	return context;
}

export {ThemeProvider, useTheme};
