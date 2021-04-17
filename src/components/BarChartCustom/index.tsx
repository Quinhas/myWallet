import {Bar, BarChart, Cell, ResponsiveContainer, Tooltip} from 'recharts';
import {formatCurrency} from '../../utils';
import {Container, SideLeft, SideRight, LegendContainer, Legend} from './styles';

interface IBarChartProps {
	title: string;
	data: {
		name: string;
		amount: number;
		percent: number;
		color: string;
	}[];
}

const BarChartCustom: React.FC<IBarChartProps> = (props) => (
	<Container>
		<SideLeft>
			<h2>{props.title}</h2>
			<LegendContainer>
				{props.data.map((legend) => (
					<Legend key={legend.name} color={legend.color}>
						<div>{legend.percent}%</div>
						<span>{legend.name}</span>
					</Legend>
				))}
			</LegendContainer>
		</SideLeft>
		<SideRight>
			<ResponsiveContainer width={'50%'}>
				<BarChart data={props.data}>
					<Bar dataKey={'amount'} name='Valor'>
						{props.data.map((bar) => (
							<Cell key={bar.name} cursor='pointer' fill={bar.color} />
						))}
					</Bar>
					<Tooltip cursor={{fill: 'none'}} formatter={(value: any) => formatCurrency(Number(value))} />
				</BarChart>
			</ResponsiveContainer>
		</SideRight>
	</Container>
);

export default BarChartCustom;
