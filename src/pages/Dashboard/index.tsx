import { useCallback, useMemo, useState } from "react";
import { getMonth, getYear } from 'date-fns';
import { ContentHeader, MessageCard, PieChartCustom, SelectInput, WalletCard, HistoryCard, BarChartCustom } from "../../components";
import { Expenses, Gains } from "../../repositories";
import { monthsList } from "../../utils";
import { Container, Content } from "./styles";
import happyIcon from '../../assets/happy.svg';
import sadIcon from '../../assets/sad.svg';
import grinningIcon from '../../assets/grinning.svg';


const Dashboard: React.FC = () => {
  const [monthSelected, setMonthSelected] = useState<number>(getMonth(new Date()) + 1);
  const [yearSelected, setYearSelected] = useState<number>(getYear(new Date()));


  const years = useMemo(() => {
    let uniqueYears: number[] = [];

    [...Gains, ...Expenses].forEach((item) => {
      const year = getYear(new Date());
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

  const totalExpenses = useMemo(() => {
    let total: number = 0;
    Expenses.forEach(item => {
      let month = getMonth(new Date(item.date)) + 1;
      let year = getYear(new Date(item.date));
      if (month === monthSelected && year === yearSelected) {
        try {
          total += Number(item.amount);
        } catch (error) {
          throw new Error('Invalid amount! Value must be a number');
        }
      }
    })
    return total;
  }, [monthSelected, yearSelected]);

  const totalGains = useMemo(() => {
    let total: number = 0;
    Gains.forEach(item => {
      let month = getMonth(new Date(item.date)) + 1;
      let year = getYear(new Date(item.date));
      if (month === monthSelected && year === yearSelected) {
        try {
          total += Number(item.amount);
        } catch (error) {
          throw new Error('Invalid amount! Value must be a number');
        }
      }
    })
    return total;
  }, [monthSelected, yearSelected]);

  const totalBalance = useMemo(() => {
    return totalGains - totalExpenses;
  }, [totalGains, totalExpenses]);

  const message = useMemo(() => {
    if (totalGains === 0 && totalExpenses === 0) {
      return { 
        title: "Oops!",
        description: "Sua carteira está zerada!",
        footerText: "Não há registros de entradas ou saídas neste mês.",
        icon: happyIcon
      }
    } else if (totalBalance > 0) {
      return { 
        title: "Muito bem!",
        description: "Sua carteira está positiva!",
        footerText: "Continue assim! Considere investir seu dinheiro.",
        icon: happyIcon
      }
    } else if (totalBalance < 0) {
      return { 
        title: "Que triste!",
        description: "Sua carteira está negativa!",
        footerText: "Corte gastos! Verifique se está gastando apenas com o necessário.",
        icon: sadIcon
      }
    } else {
      return { 
        title: "Ufaa!",
        description: "Este mês foi complicado!",
        footerText: "Tenha cuidado! No próximo mês tente poupar o seu dinheiro.",
        icon: grinningIcon
      }
    }
  }, [totalBalance]);

  const relationExpensesGains = useMemo(() => {
    const total = totalGains + totalExpenses;
    const percentGains = (totalGains / total) * 100;
    const percentExpenses = (totalExpenses / total) * 100;
    const data = [
      {
        name: "Entradas",
        value: totalGains,
        percent: Number(percentGains.toFixed(1)) || 0,
        color: '#198754'
      },
      {
        name: "Saídas",
        value: totalExpenses,
        percent: Number(percentExpenses.toFixed(1)) || 0,
        color: '#dc3545'
      },
    ]
    return data;
  }, [totalGains, totalExpenses]);

  const historyData = useMemo(() => {
    return monthsList.map((_, month) => {
      let amountEntry: number = 0;
      Gains.forEach((gain) => {
        const gainMonth = getMonth(new Date(gain.date));
        const gainYear = getYear(new Date(gain.date));
        if (gainMonth === month && gainYear === yearSelected) {
          try {
            amountEntry += Number(gain.amount);
          } catch (error) {
            throw new Error('Invalid amount! Value must be a number');
          }
        }
      });

      let amountOutput: number = 0;
      Expenses.forEach((expense) => {
        const expenseMonth = getMonth(new Date(expense.date));
        const expenseYear = getYear(new Date(expense.date));
        if (expenseMonth === month && expenseYear === yearSelected) {
          try {
            amountOutput += Number(expense.amount);
          } catch (error) {
            throw new Error('Invalid amount! Value must be a number');
          }
        }
      });
      return {
        monthNumber: month,
        monthName: monthsList[month].substr(0,3),
        amountEntry,
        amountOutput
      }
    })
  }, [yearSelected]);

  const relationExpenses = useMemo(() => {
    let amountRecurrent = 0;
    let amountEventual = 0;

    Expenses.filter((expense) => {
      const date = new Date(expense.date);
      const month = getMonth(date) + 1;
      const year = getYear(date);

      return month === monthSelected && year === yearSelected;
    }).forEach((expense) => {
      if (expense.frequency === "recorrente") {
        return amountRecurrent += Number(expense.amount);
      }
      if (expense.frequency === "eventual") {
        return amountEventual += Number(expense.amount);
      }
    });

    const total = amountRecurrent + amountEventual;

    return [
      {
        name: 'Recorrentes',
        amount: amountRecurrent,
        percent: Number(((amountRecurrent / total) * 100).toFixed(1)) || 0,
        color: '#20c997'
      },
      {
        name: 'Eventual',
        amount: amountEventual,
        percent: Number(((amountEventual / total) * 100).toFixed(1)) || 0,
        color: '#0dcaf0'
      }
    ]
  }, [monthSelected, yearSelected])

  const relationGains = useMemo(() => {
    let amountRecurrent = 0;
    let amountEventual = 0;

    Gains.filter((gain) => {
      const date = new Date(gain.date);
      const month = getMonth(date) + 1;
      const year = getYear(date);

      return month === monthSelected && year === yearSelected;
    }).forEach((gain) => {
      if (gain.frequency === "recorrente") {
        return amountRecurrent += Number(gain.amount);
      }
      if (gain.frequency === "eventual") {
        return amountEventual += Number(gain.amount);
      }
    });

    const total = amountRecurrent + amountEventual;

    return [
      {
        name: 'Recorrentes',
        amount: amountRecurrent,
        percent: Number(((amountRecurrent / total) * 100).toFixed(1)) || 0,
        color: '#20c997'
      },
      {
        name: 'Eventual',
        amount: amountEventual,
        percent: Number(((amountEventual / total) * 100).toFixed(1)) || 0,
        color: '#0dcaf0'
      }
    ]
  }, [monthSelected, yearSelected])

  const handleMonthSelected = useCallback((month: string) => {
    try {
      setMonthSelected(Number(month))
    } catch(err) {
      throw new Error('Invalid month value. Only values beetwen 0-12 are accepted.')
    }
  }, [])

  const handleYearSelected = useCallback((year: string) => {
    try {
      setYearSelected(Number(year))
    } catch(err) {
      throw new Error('Invalid year value. Only integer values are accepted.')
    }
  }, [])

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

        <Content>
          <WalletCard title={"Saldo"} amount={totalBalance} footerText={"Atualizado com base nas entradas e saídas"} icon={"dollar"} color={"#FCAC0D"}/>
          <WalletCard title={"Entradas"} amount={totalGains} footerText={"Atualizado com base nas entradas e saídas"} icon={"arrowUp"} color={"#198754"}/>
          <WalletCard title={"Saídas"} amount={totalExpenses} footerText={"Atualizado com base nas entradas e saídas"} icon={"arrowDown"} color={"#dc3545"}/>
          <MessageCard title={message.title} description={message.description} footerText={message.footerText} icon={message.icon}/>
          <PieChartCustom data={relationExpensesGains}/>
          <HistoryCard data={historyData} lineColorAmountEntry="#198754" lineColorAmountOutput="#dc3545"></HistoryCard>
          <BarChartCustom title={"Entradas"} data={relationGains}/>
          <BarChartCustom title={"Saídas"} data={relationExpenses}/>
        </Content>
      </Container>
    </>
  )
}

export default Dashboard;