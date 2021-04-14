import { GridLayout } from './styles';

import { Aside, Content, MainHeader} from '../../components'

const Layout: React.FC = () => {
  return (
    <GridLayout>
      <MainHeader/>
      <Aside/>
      <Content/>
    </GridLayout>
  )
}

export default Layout;