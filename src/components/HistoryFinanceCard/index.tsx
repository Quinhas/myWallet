import {Container, Tag, Text} from './styles';

interface IHistoryFinanceCardProps {
	tagColor: string;
	title: string;
	subtitle: string;
	amount: string;
}

const HistoryFinanceCard: React.FC<IHistoryFinanceCardProps> = (props) => (
	<Container>
		<Tag color={props.tagColor} />
		<Text>
			<span>{props.title}</span>
			<small>{props.subtitle}</small>
		</Text>
		<h3>{props.amount}</h3>
	</Container>
);

export default HistoryFinanceCard;
