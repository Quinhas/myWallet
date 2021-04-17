import { Container } from './styles';
import dollarIcon from '../../assets/dollar.svg'
import arrowUpIcon from '../../assets/arrow-up.svg'
import arrowDownIcon from '../../assets/arrow-down.svg'
import { useMemo } from 'react';
import CountUp from 'react-countup'

interface IWalletCardProps {
  title: string;
  amount: number;
  footerText: string;
  color: string;
  icon: 'dollar' | 'arrowUp' | 'arrowDown';
}

const WalletCard: React.FC<IWalletCardProps> = (props) => {
  const iconSelected = useMemo(() => {
    switch (props.icon) {
      case 'dollar': 
        return dollarIcon;
      case 'arrowUp': 
        return arrowUpIcon;
      case 'arrowDown': 
        return arrowDownIcon;
      default: 
        return dollarIcon
    }
  }, [props.icon]);
  return (
    <Container color={props.color}>
      <span>{props.title}</span>
      <h1>
        <CountUp end={props.amount} prefix={"R$ "} separator={"."} decimal={","} decimals={2} preserveValue={true} duration={1}/>
      </h1>
      <small>{props.footerText}</small>
      { iconSelected && <img src={iconSelected} alt={props.title}/>}
    </Container>
  )
}

export default WalletCard;