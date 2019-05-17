import Product from '../../Products/Product';

export default interface CartContextManager {
  clearCart: Function;
  removeItem: (id?: number) => void;
  products: Product[];
}
