import { Menu } from '@material-ui/icons';
import { Btn, Icon, Nav, Text, Toolbar } from './styles';
const Navbar: React.FC = () => {

  return (
    <Nav position="static">
      <Toolbar>
        <Icon edge="start" color="inherit" aria-label="menu">
          <Menu />
        </Icon>
        <Text variant="h6">
          News
        </Text>
        <Btn variant="contained" color="secondary">Login</Btn>
      </Toolbar>
    </Nav>
  )
}

export default Navbar;