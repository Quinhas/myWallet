import { GridLayout } from './styles';

import { Aside, Content, MainHeader} from '../../components'

const Layout: React.FC = ({children}) => {
  return (
    <GridLayout>
      <MainHeader/>
      <Aside/>
      <Content>
        {children}
      </Content>
    </GridLayout>
  )
}

export default Layout;