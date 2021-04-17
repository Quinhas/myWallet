import {useMemo, useState} from 'react';
import {Container, Profile, Welcome, UserName} from './styles';
import emojis from '../../utils/emojis';
import {Toggle} from '../../components';

import { useTheme } from '../../hooks/theme';

const MainHeader: React.FC = () => {
	const emoji = useMemo(() => {
		const indice = Math.floor(Math.random() * emojis.length);
		return emojis[indice];
	}, []);

	const { theme, toggleTheme } = useTheme();

	const [darkTheme, setDarkTheme] = useState(() => theme.title === 'dark' ? true : false);

	const handleChangeTheme = () => {
		setDarkTheme(!darkTheme);
		toggleTheme();
	}

	return (
		<Container>
			<Toggle labelLeft="Light" labelRight="Dark" checked={darkTheme} onChange={handleChangeTheme}></Toggle>
			<Profile>
				<Welcome>Olá, {emoji}</Welcome>
				<UserName>Lucas Santana</UserName>
			</Profile>
		</Container>
	);
};

export default MainHeader;
