import {Container, Header, Img, MenuContainer, MenuItemLink, Title} from './styles';
import logoImg from '../../assets/logo.svg';
import {MdDashboard} from 'react-icons/md';
import {FaArrowUp, FaArrowDown, FaSignOutAlt} from 'react-icons/fa';

const Aside: React.FC = () => {
	return (
		<Container>
			<Header>
				<Img src={logoImg} alt='Logo MyWallet' />
				<Title>My Wallet</Title>
			</Header>
			<MenuContainer>
				<MenuItemLink href='/dashboard'>
					<MdDashboard />
					Dashboard
				</MenuItemLink>

				<MenuItemLink href='/list/entry-balance'>
					<FaArrowUp />
					Entradas
				</MenuItemLink>

				<MenuItemLink href='/list/exit-balance'>
					<FaArrowDown />
					Saídas
				</MenuItemLink>

				<MenuItemLink href='/'>
					<FaSignOutAlt />
					Sair
				</MenuItemLink>
			</MenuContainer>
		</Container>
	);
};

export default Aside;
