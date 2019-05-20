import Product from '../pages/Products/Product';
import TYPES from './types';

interface CartAction {
  type: TYPES;
  id?: string;
  product?: Product;
}

interface CartState {
  products: Product[];
}

export default function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case TYPES.CART_CLEAR:
      return { products: [] };
    case TYPES.CART_REMOVE:
      return {
        products: state.products.filter(product => product.id !== action.id),
      };
    case TYPES.CART_ADD:
      return {
        products: action.product ? [...state.products, action.product] : state.products,
      };
    default:
      return state;
  }
}
