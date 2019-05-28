import React, { useContext } from 'react';
import { List } from 'semantic-ui-react';
import Product from '../../Products/Product';
import CartContext from '../context/CartContext';
import ItemProductCart from './ItemProductsCart';

const ListProductsCart: React.FC = () => {
  const { products, removeItem } = useContext(CartContext);
  return (
    <List size="massive" divided verticalAlign="middle">
      {products.map((product: Product, index: number) => (
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
