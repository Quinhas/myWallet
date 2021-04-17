import { Route, Switch } from 'react-router-dom';

import { Dashboard, List } from '../pages';

const AppRoutes: React.FC = () => (
  <Switch>
    <Route path="/dashboard" component={Dashboard}></Route>
    <Route path="/list/:type" component={List}></Route>
  </Switch>
);

export default AppRoutes;