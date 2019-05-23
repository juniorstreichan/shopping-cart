import Product from './Product';
import productsDB from '../../service/api';

class ProductsService {
  public getAll(): Promise<Product[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const products: Product[] = productsDB.map(product => ({
          id: product.ProductId,
          name: product.Name,
          imageUrl: product.ProductPicUrl,
          price: product.Price,
          description: product.Description,
          category: product.Category,
        }));
        resolve(products);
      }, 2000);
    });
  }
}

export default new ProductsService();
