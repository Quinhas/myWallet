import { useMemo } from 'react';
import { Container, Profile, Welcome, UserName } from './styles';
import emojis from '../../utils/emojis';
import {Toggle} from '../../components';

const MainHeader: React.FC = () => {

  const emoji = useMemo(() => {
    const indice = Math.floor(Math.random() * emojis.length);
    return emojis[indice];
  }, [])

  return (
    <Container>
      <Toggle></Toggle>
      <Profile>
        <Welcome>Olá, {emoji}</Welcome>
        <UserName>Lucas Santana</UserName>
      </Profile>
    </Container>
  )
}

export default MainHeader;