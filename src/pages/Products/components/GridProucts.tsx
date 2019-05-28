import React from 'react';
import { Grid } from 'semantic-ui-react';
import CardLoadding from '../../../layout/CardLoadding';
import Product from '../Product';

interface GridProps {
  products: Product[];
  isLoadding: boolean;
  renderProduct: (product: Product) => React.ReactNode;
}

const GridProucts: React.FC<GridProps> = ({ products, isLoadding, renderProduct }) => (
  <Grid container textAlign="center">
    {isLoadding && <CardLoadding numOfCards={16} />}
    {products.map((product, index: number) => (
      <Grid.Column mobile={16} tablet={8} computer={5} key={`${index}-GridProucts-${product.id}`}>
        {renderProduct(product)}
      </Grid.Column>
    ))}
  </Grid>
);

export default GridProucts;
