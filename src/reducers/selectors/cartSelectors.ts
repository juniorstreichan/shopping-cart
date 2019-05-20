import Product from '../../pages/Products/Product';
import CartStorage from '../../service/CartStorage';

export function clearSelect(): Product[] {
  CartStorage.clearCart();
  return [];
}

export function removeSelect(products: Product[], id: string): Product[] {
  CartStorage.removeProductOfCart(id);
  return products.filter(product => product.id !== id);
}
