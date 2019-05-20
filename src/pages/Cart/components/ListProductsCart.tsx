import React, { Fragment, useContext } from 'react';
import Product from '../../Products/Product';
import CartContext from '../context/CartContext';
import ItemProductCart from './ItemProductsCart';

const ListProductsCart: React.FC = () => {
  const { products, removeItem } = useContext(CartContext);
  return (
    <Fragment>
      {products.map((product: Product) => (
        <ItemProductCart
          key={`ListProductsCart-${product.id}`}
          product={product}
          removeItem={removeItem}
        />
      ))}
    </Fragment>
  );
};

export default ListProductsCart;
