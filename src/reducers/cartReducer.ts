import Product from '../pages/Products/Product';
import TYPES from './types';
import { clearSelect, removeSelect, addSelect } from './selectors/cartSelectors';

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
      return { products: clearSelect() };
    case TYPES.CART_REMOVE:
      return {
        products: removeSelect(state.products, action.id),
      };
    case TYPES.CART_ADD:
      return {
        products: addSelect(state.products, action.product),
      };
    default:
      return state;
  }
}
