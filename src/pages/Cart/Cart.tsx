import React from 'react';
import { List } from 'semantic-ui-react';
import ListProductsCart from './components/ListProductsCart';

const Cart = () => {
  return (
    <List size="massive" divided verticalAlign="middle">
      <ListProductsCart />
    </List>
  );
};

export default Cart;
