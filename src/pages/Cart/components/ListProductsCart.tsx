import React, { useContext } from 'react';
import { List } from 'semantic-ui-react';
import CartContext from '../context/CartContext';
import ItemProductCart from './ItemProductsCart';

const ListProductsCart: React.FC = () => {
  const { products, removeItem } = useContext(CartContext);
  return (
    <List size="massive" divided verticalAlign="middle">
      {products.map((product, index: number) => (
        <ItemProductCart
          key={`${index}-ListProductsCart-${product.id}`}
          product={product}
          removeItem={removeItem}
        />
      ))}
    </List>
  );
};

export default ListProductsCart;
