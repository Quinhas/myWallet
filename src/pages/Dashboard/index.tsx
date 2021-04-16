import moment from "moment";
import { useMemo, useState } from "react";
import { ContentHeader, SelectInput } from "../../components";
import { Expenses, Gains } from "../../repositories";
import { monthsList } from "../../utils";
import { Container } from "./styles";

const Dashboard: React.FC = () => {
  const [monthSelected, setMonthSelected] = useState<number>(moment().month() + 1);
  const [yearSelected, setYearSelected] = useState<number>(moment().year());


  const years = useMemo(() => {
    let uniqueYears: number[] = [];

    [...Gains, ...Expenses].forEach((item) => {
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
  }, []);

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

  return (
    <>
      <Container>
        <ContentHeader title={'Dashboard'} lineColor={'#FCAC0D'}>
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
      </Container>
    </>
  )
}

export default Dashboard;