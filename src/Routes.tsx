import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/produtos" component={Products} />
      <Route path="/carrinho" exact component={Cart} />
      <Route path="*" render={() => <Redirect to="/" />} />
    </Switch>
  );
};

export default Routes;
