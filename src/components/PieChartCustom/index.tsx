import { Container, Legend, LegendContainer, SideLeft, SideRight } from './styles';
import { PieChart , Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

interface IPieChartProps {
  data: {
    name: string;
    value: number;
    percent: number;
    color: string;
  }[]
}

const PieChartCustom: React.FC<IPieChartProps> = (props) => (
  <Container>
    <SideLeft>
      <h2>Relação</h2>
      <LegendContainer>
        {
          props.data.map((legend) => (<Legend key={legend.name} color={legend.color}>
              <div>{legend.percent}%</div>
              <span>{legend.name}</span>
            </Legend>
          ))
        }
      </LegendContainer>
    </SideLeft>
    <SideRight>
      <ResponsiveContainer>
        <PieChart>
          <Pie data={props.data} labelLine={false} paddingAngle={5} dataKey={"percent"} innerRadius={50} outerRadius={70}>
            {
              props.data.map((legend) => (
                <Cell key={legend.name} fill={legend.color} />
              ))
            }
          </Pie>
          <Tooltip formatter={(value: any) => {return `${value}%`}}/>
        </PieChart>
      </ResponsiveContainer>
    </SideRight>
  </Container>
)

export default PieChartCustom;