import React from 'react';
import { Button, Card, Icon } from 'semantic-ui-react';
import Product from './Product';

const ProductCard: React.FC<{
  product: Product;
  onAddtoCart: Function;
  onViewCard: Function;
}> = ({ product, onAddtoCart, onViewCard }) => {
  const bottomGroup = (
    <Button.Group>
      <Button onClick={() => onAddtoCart(product)} color="blue">
        <Icon name="plus" />
        <Icon name="cart" />
      </Button>
      <Button onClick={() => onViewCard()} color="blue">
        <Icon name="eye" size="large" />
      </Button>
    </Button.Group>
  );
  return <Card link header={product.name} image={product.imageUrl} extra={bottomGroup} />;
};

export default ProductCard;
