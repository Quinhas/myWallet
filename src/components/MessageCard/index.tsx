import { Container } from './styles';

interface IMessageCardProps {
  title: string;
  description: string;
  footerText: string;
  icon: string;
}

const MessageCard: React.FC<IMessageCardProps> = (props) => {
  return (
    <Container>
      <header>
        <h1>
          {props.title}
          <img src={props.icon} alt={props.title}/>
        </h1>
        <p>{props.description}</p>
      </header>
      <footer>
        <small>{props.footerText}</small>
      </footer>
    </Container>
  )
}

export default MessageCard;