import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { List } from 'semantic-ui-react';
import ListProductsCart from './components/ListProductsCart';

const Cart: React.FC<RouteComponentProps> = () => {
  return (
    <List size="massive" divided verticalAlign="middle">
      <ListProductsCart />
    </List>
  );
};

export default Cart;
