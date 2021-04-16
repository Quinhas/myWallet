import { useMemo, useState, useEffect } from "react";
import { ContentHeader, HistoryFinanceCard, SelectInput } from "../../components";
import { Button, Container, Content, Filters } from "./styles";
import { Expenses, Gains } from '../../repositories';
import { formatCurrency, monthsList } from "../../utils";
import moment from "moment";
import 'moment/locale/pt-br';

interface IListProps {
  match: {
    params: {
      type: string;
    }
  }
}

interface IData {
  description: string;
  amountFormatted: string;
  frequency: string;
  dateFormatted: string;
  tagColor: string;
}

const List: React.FC<IListProps> = (props) => {
  const [data, setData] = useState<IData[]>([]);
  const [monthSelected, setMonthSelected] = useState<string>(String(moment().month() + 1));
  const [yearSelected, setYearSelected] = useState<string>(String(moment().year()));

  const { type } = props.match.params;
  const config = useMemo(() => {
    return type === 'entry-balance' ? {title: 'Entradas', lineColor: "#198754"} : {title: 'Saídas', lineColor: '#dc3545'}
  }, [type]);

  const listData = useMemo(() => {
    return type === 'entry-balance' ? Gains : Expenses;
  }, [type]);

  const years = useMemo(() => {
    let uniqueYears: number[] = [];

    listData.forEach(item => {
      const year = moment(item.date).year();
      if (!uniqueYears.includes(year)) {
        uniqueYears.push(year)
      }
    });

    return uniqueYears.map(year => {
      return {
        value: year,
        label: year
      }
    })
  }, [listData])
  
  const months = useMemo(() => {
    return monthsList.map((month, index) => {
      return {
        value: index + 1,
        label: month
      }
    });
  }, [])

  
  useEffect(() => {
    const filteredDate = listData.filter(item => {
      const date = moment(item.date).utc().format();
      const month = String(moment(date).month() + 1);
      const year = String(moment(date).year());
      return month === monthSelected && year === yearSelected;
    });

    const response = filteredDate.map(item => {
      return {
        description: item.description,
        amountFormatted: formatCurrency(Number(item.amount)),
        frequency: item.frequency,
        dateFormatted: moment(item.date).local().format('L'),
        tagColor: item.frequency === 'recorrente' ? '#20c997' : '#0dcaf0'
      }
    })
    setData(response)
  }, [listData, monthSelected, yearSelected])

  return (
    <>
      <Container>
        <ContentHeader title={config.title} lineColor={config.lineColor}>
          <SelectInput defaultValue={monthSelected} options={months} onChange={(e) => setMonthSelected(e.target.value)}/>
          <SelectInput defaultValue={yearSelected} options={years} onChange={(e) => setYearSelected(e.target.value)}/>
        </ContentHeader>

        <Filters>
          <Button type="button" color="#20c997">Recorrentes</Button>
          <Button type="button" color="#0dcaf0">Eventuais</Button>
        </Filters>

        <Content>
          {
            data.length === 0 && <p style={{textAlign: 'center', paddingTop: '1rem'}}>Não existem dados neste mês.</p>
          }
          {
            data.length !== 0 && data.map((item, index) => (
              <HistoryFinanceCard key={index} tagColor={item.tagColor} title={item.description} subtitle={item.dateFormatted} amount={item.amountFormatted} />
            ))
          }
        </Content>
      </Container>
    </>
  )
}

export default List;