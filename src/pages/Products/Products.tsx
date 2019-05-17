import React, { Fragment, useContext, useEffect, useState } from 'react';
import { Grid, Header } from 'semantic-ui-react';
import CartContext from '../Cart/context/CartContext';
import CartContextManager from '../Cart/context/CartContextManager';
import Product from './Product';
import ProductCard from './ProductCard';
import ProductsService from './ProductsService';

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { addItem } = useContext<CartContextManager>(CartContext);

  useEffect(() => {
    ProductsService.getAll().then(response => {
      setProducts(response);
    });
  }, []);

  const list = products.map(product => (
    <Grid.Column mobile={16} tablet={8} computer={5} key={product.id}>
      <ProductCard onViewCard={() => alert(product.name)} onAddtoCart={addItem} product={product} />
    </Grid.Column>
  ));

  return (
    <Fragment>
      <Header textAlign="center" as="h1">
        Produtos
      </Header>
      <Grid container textAlign="center">
        {list}
      </Grid>
    </Fragment>
  );
};

export default Products;
