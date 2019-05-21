import Product from '../pages/Products/Product';

class CartStorage {
  private key = 'persist:cart';

  public getProductsCart(): Product[] {
    try {
      const products = JSON.parse(localStorage.getItem(this.key) || '[]');
      return products;
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  private setProductsToCart(products: Product[]): void {
    localStorage.setItem(this.key, JSON.stringify(products || []));
  }

  public addProductToCart(product: Product): void {
    const products = [...this.getProductsCart(), product];
    this.setProductsToCart(products);
  }

  public removeProductOfCart(id: string = '0'): void {
    const products = this.getProductsCart().filter(p => p.id !== id);
    this.setProductsToCart(products);
  }

  public clearCart(): void {
    localStorage.setItem(this.key, '[]');
  }
}
export default new CartStorage();
