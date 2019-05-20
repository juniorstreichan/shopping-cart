import React from 'react';
import { Button, Card, Icon, Popup } from 'semantic-ui-react';
import Product from '../Product';

const ProductCard: React.FC<{
  product: Product;
  onAddtoCart: Function;
  onViewCard: Function;
}> = ({ product, onAddtoCart, onViewCard }) => {
  const bottomGroup = (
    <Button.Group>
      <Popup
        trigger={(
<Button onClick={() => onAddtoCart(product)} color="blue">
            <Icon name="plus" />
            <Icon name="cart" />
          </Button>
)}
        content="Adicionar ao carrinho"
        hideOnScroll
      />
      <Popup
        trigger={(
<Button onClick={() => onViewCard()} color="blue">
            <Icon name="eye" size="large" />
          </Button>
)}
        content="Ver mais"
        hideOnScroll
      />
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
