import Product from './Product';

export default interface CartContextManager {
  clearCart: Function;
  removeItem: (id?: number) => void;
  products: Product[];
}
