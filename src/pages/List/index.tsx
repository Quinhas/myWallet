import { useMemo, useState, useEffect } from "react";
import { ContentHeader, HistoryFinanceCard, SelectInput } from "../../components";
import { Button, Container, Content, Filters } from "./styles";
import { Expenses, Gains } from '../../repositories';

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

  const { type } = props.match.params;
  const config = useMemo(() => {
    return type === 'entry-balance' ? {title: 'Entradas', lineColor: "#198754"} : {title: 'Saídas', lineColor: '#dc3545'}
  }, [type]);

  const listData = useMemo(() => {
    return type === 'entry-balance' ? Gains : Expenses;
  }, [type]);

  const months = [
    {
      value: 5, label: 'Maio',
    },
    {
      value: 6, label: 'Junho',
    },
    {
      value: 7, label: 'Julho',
    }
  ];
  const years = [
    {
      value: 2020, label: 2020,
    },
    {
      value: 2019, label: 2019,
    },
    {
      value: 2018, label: 2018,
    }
  ];

  
  useEffect(() => {
    const response = listData.map(item => {
      return {
        description: item.description,
        amountFormatted: item.amount,
        frequency: item.frequency,
        dateFormatted: item.date,
        tagColor: item.frequency === 'recorrente' ? '#20c997' : '#0dcaf0'
      }
    })
    setData(response)
  }, [listData])

  return (
    <>
      <Container>
        <ContentHeader title={config.title} lineColor={config.lineColor}>
          <SelectInput options={months}/>
          <SelectInput options={years}/>
        </ContentHeader>

        <Filters>
          <Button type="button" color="#20c997">Recorrentes</Button>
          <Button type="button" color="#0dcaf0">Eventuais</Button>
        </Filters>

        <Content>
          {
            data.map((item, index) => (
              <HistoryFinanceCard key={index} tagColor={item.tagColor} title={item.description} subtitle={item.dateFormatted} amount={item.amountFormatted} />
            ))
          }
        </Content>
      </Container>
    </>
  )
}

export default List;