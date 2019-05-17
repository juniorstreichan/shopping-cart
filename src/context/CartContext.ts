import React from 'react';
import CartContextManager from '../types/interfaces/CartContextManager';

const CartContext = React.createContext<CartContextManager>({
  clearCart: () => null,
  removeItem: (id?: number) => null,
  products: [],
});

export default CartContext;
