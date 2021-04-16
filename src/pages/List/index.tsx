import {useMemo, useState, useEffect} from 'react';
import {ContentHeader, HistoryFinanceCard, SelectInput} from '../../components';
import {Button, Container, Content, Filters} from './styles';
import {Expenses, Gains} from '../../repositories';
import {formatCurrency, monthsList} from '../../utils';
import moment from 'moment';
import 'moment/locale/pt-br';

interface IListProps {
  match: {
    params: {
      type: string;
    };
  };
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
  const [monthSelected, setMonthSelected] = useState<number>(moment().month() + 1);
  const [yearSelected, setYearSelected] = useState<number>(moment().year());
  const [frequencySelected, setFrequencySelected] = useState(['recorrente', 'eventual']);

  const {type} = props.match.params;

  const config = useMemo(() => {
    return type === 'entry-balance' ? {title: 'Entradas', lineColor: '#198754', listData: Gains} : {title: 'Saídas', lineColor: '#dc3545', listData: Expenses};
  }, [type]);

  const years = useMemo(() => {
    let uniqueYears: number[] = [];

    config.listData.forEach((item) => {
      const year = moment(item.date).year();
      if (!uniqueYears.includes(year)) {
        uniqueYears.push(year);
      }
    });

    return uniqueYears.map((year) => {
      return {
        value: year,
        label: year,
      };
    });
  }, [config]);

  const months = useMemo(() => {
    return monthsList.map((month, index) => {
      return {
        value: index + 1,
        label: month,
      };
    });
  }, []);

  const handleMonthSelected = (month: string) => {
    try {
      setMonthSelected(Number(month))
    } catch(err) {
      throw new Error('Invalid month value. Only values beetwen 0-12 are accepted.')
    }
  }

  const handleYearSelected = (year: string) => {
    try {
      setYearSelected(Number(year))
    } catch(err) {
      throw new Error('Invalid year value. Only integer values are accepted.')
    }
  }

  const handleFrequencyClick = (frequency: string) => {
    const alreadySelected = frequencySelected.findIndex((item) => item === frequency);

    alreadySelected >= 0 ? setFrequencySelected(frequencySelected.filter((item) => item !== frequency)) : setFrequencySelected((prev) => [...prev, frequency]);
  };

  useEffect(() => {
    const filteredDate = config.listData.filter((item) => {
      const date = moment(item.date).utc().format();
      const month = moment(date).month() + 1;
      const year = moment(date).year();
      return month === monthSelected && year === yearSelected && frequencySelected.includes(item.frequency);
    });

    const response = filteredDate.map((item) => {
      return {
        description: item.description,
        amountFormatted: formatCurrency(Number(item.amount)),
        frequency: item.frequency,
        dateFormatted: moment(item.date).local().format('L'),
        tagColor: item.frequency === 'recorrente' ? '#20c997' : '#0dcaf0',
      };
    });
    setData(response);
  }, [config, monthSelected, yearSelected, frequencySelected]);

  return (
    <>
      <Container>
        <ContentHeader title={config.title} lineColor={config.lineColor}>
          <SelectInput
            defaultValue={monthSelected}
            options={months}
            onChange={(e) => handleMonthSelected(e.target.value)}
          />
          <SelectInput
            defaultValue={yearSelected}
            options={years}
            onChange={(e) => handleYearSelected(e.target.value)}
          />
        </ContentHeader>

        <Filters>
          <Button
            onClick={() => handleFrequencyClick('recorrente')}
            type='button'
            className={`${frequencySelected.includes('recorrente') && 'active'}`}
            color='#20c997'
          >
            Recorrentes
          </Button>
          <Button
            onClick={() => handleFrequencyClick('eventual')}
            type='button'
            className={`${frequencySelected.includes('eventual') && 'active'}`}
            color='#0dcaf0'
          >
            Eventuais
          </Button>
        </Filters>

        <Content>
          {data.length === 0 && <p style={{textAlign: 'center', paddingTop: '1rem'}}>Não existem dados neste mês.</p>}
          {data.length !== 0 &&
            data.map((item, index) => <HistoryFinanceCard key={index} tagColor={item.tagColor} title={item.description} subtitle={item.dateFormatted} amount={item.amountFormatted} />)}
        </Content>
      </Container>
    </>
  );
};

export default List;
