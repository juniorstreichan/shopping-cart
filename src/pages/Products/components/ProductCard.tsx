import React from 'react';
import { Button, Card, Divider, Icon, Image, Label, Popup } from 'semantic-ui-react';
import styled from 'styled-components';
import Product from '../Product';

const StyledCard = styled(Card)`
  min-height: 400px;
  :hover {
    box-shadow: 1px 10px 10px 1px rgba(33, 33, 33, 0.5);
  }
`;

const ProductCard: React.FC<{
  product: Product;
  onAddtoCart: Function;
  onViewCard: Function;
  hasInTheCart: boolean;
}> = ({ product, onAddtoCart, onViewCard, hasInTheCart }) => {
  const btnAdd = (
    <Button
      onClick={() => onAddtoCart(product)}
      disabled={hasInTheCart}
      color={hasInTheCart ? 'green' : 'blue'}
    >
      <Icon name="plus" />
      <Icon name="cart" />
    </Button>
  );
  const btnView = (
    <Button onClick={() => onViewCard()} color="blue">
      <Icon name="eye" size="large" />
    </Button>
  );

  return (
    <StyledCard fluid>
      <Label attached="top left">{product.category}</Label>
      {/* <Image
        as="img"
        onClick={() => onViewCard()}
        ui={false}
        wrapped
        fluid
        className="lazyload"
        src={product.imageUrl}
      /> */}

      <img data-sizes="auto" data-src={product.imageUrl} className="lazyload" />
      <Card.Content>
        <Card.Header>{product.name}</Card.Header>
        <Divider hidden />
        <Card.Meta>
          <Label tag color="green" size="large">
            {product.price &&
              product.price.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
          </Label>
        </Card.Meta>
      </Card.Content>
      <Card.Content extra textAlign="center">
        <Button.Group>
          <Popup trigger={btnAdd} content="Adicionar ao carrinho" hideOnScroll />
          <Popup trigger={btnView} content="Ver mais" hideOnScroll />
        </Button.Group>
      </Card.Content>
    </StyledCard>
  );
};

export default ProductCard;
