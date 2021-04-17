import { ResponsiveContainer, LineChart, Line, XAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Container } from './styles';
import { formatCurrency } from '../../utils';

interface IHistoryCardProps {
  data: {
    monthName: string;
    monthNumber: number;
    amountEntry: number;
    amountOutput: number;
  }[],
  lineColorAmountEntry: string;
  lineColorAmountOutput: string;
}

const HistoryCard: React.FC<IHistoryCardProps> = (props) => (
  <Container>
      <h2>Histórico de saldo</h2>
    <ResponsiveContainer height={"100%"}>
      <LineChart data={props.data} margin={{top: 20, right: 20, left: 20, bottom: 30}}>
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis dataKey="monthName" />
        <Tooltip formatter={(value: any) => formatCurrency(Number(value))}/>
        <Line type="monotone" dataKey="amountEntry" name={"Entradas"} stroke={props.lineColorAmountEntry} strokeWidth={3} dot={{ r: 5}} activeDot={{ r: 8}}/>
        <Line type="monotone" dataKey="amountOutput" name={"Saídas"} stroke={props.lineColorAmountOutput} strokeWidth={3} dot={{ r: 5}} activeDot={{ r: 8}}/>
        <Legend wrapperStyle={{paddingTop: 10}}/>
      </LineChart>
    </ResponsiveContainer>
  </Container>
)


export default HistoryCard;