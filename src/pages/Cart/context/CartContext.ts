import React from 'react';
import Product from '../../Products/Product';
import CartContextManager from './CartContextManager';

const CartContext = React.createContext<CartContextManager>({
  removeItem: (id?: string) => console.log(id),
  addItem: (product: Product) => console.log(product),
  clearCart: () => null,
  hasInTheCart: () => false,
  products: [],
});

export default CartContext;
