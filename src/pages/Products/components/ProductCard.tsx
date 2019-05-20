import React from 'react';
import { Button, Card, Icon, Popup } from 'semantic-ui-react';
import Product from '../Product';

const ProductCard: React.FC<{
  product: Product;
  onAddtoCart: Function;
  onViewCard: Function;
}> = ({ product, onAddtoCart, onViewCard }) => {
  const btnAdd = (
    <Button onClick={() => onAddtoCart(product)} color="blue">
      <Icon name="plus" />
      <Icon name="cart" />
    </Button>
  );
  const btnView = (
    <Button onClick={() => onViewCard()} color="blue">
      <Icon name="eye" size="large" />
    </Button>
  );
  const bottomGroup = (
    <Button.Group>
      <Popup trigger={btnAdd} content="Adicionar ao carrinho" hideOnScroll />
      <Popup trigger={btnView} content="Ver mais" hideOnScroll />
    </Button.Group>
  );
  return (
    <Card
      style={{ minHeight: '400px' }}
      link
      header={product.name}
      image={product.imageUrl}
      extra={bottomGroup}
    />
  );
};

export default ProductCard;
