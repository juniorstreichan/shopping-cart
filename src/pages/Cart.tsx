import React, { useContext } from 'react';
import { List, Button } from 'semantic-ui-react';
import CartContext from '../context/CartContext';
import Product from '../types/interfaces/Product';

const Cart = () => {
  const { products, removeItem } = useContext(CartContext);

  const ListProducts = products.map((product: Product, index: number) => (
    <List.Item key={`${index}-${index * 2}-${index * 3}`}>
      <List.Content floated="right">
        <Button
          icon="trash"
          color="red"
          onClick={() => {
            removeItem(product.id);
          }}
        />
      </List.Content>
      <List.Content>{product.name}</List.Content>
    </List.Item>
  ));
  return (
    <List size="massive" divided verticalAlign="middle">
      {ListProducts}
    </List>
  );
};

export default Cart;
