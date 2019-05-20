import React, { Fragment, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Icon, Image, Label, List, Popup, Segment } from 'semantic-ui-react';
import styled from 'styled-components';
import Product from '../../Products/Product';
import CartContext from '../context/CartContext';
import CartContextManager from '../context/CartContextManager';
import ButtonRemoveItem from './ButtonRemoveItem';

const PopoverContent = styled.aside`
  max-height: 70vh !important;
  overflow: auto;

  margin-bottom: 10px;
`;

const PopoverCart: React.FC = () => {
  const { products, removeItem } = useContext<CartContextManager>(CartContext);
  const [isOpen, setIsOpen] = useState(false);
  const haveProducts = products.length > 0;

  const trigger = (
    <Button fluid color="orange" onClick={() => setIsOpen(!isOpen)}>
      <Icon name={isOpen ? 'caret up' : 'caret down'} />
      <Icon name="cart" />
      {haveProducts && (
        <Label circular color="green" size="tiny">
          {products.length}
        </Label>
      )}
    </Button>
  );

  const ListProducts = products.map((product: Product) => (
    <List.Item key={`PopoverCart-${product.id}`}>
      <Image size="tiny" src={product.imageUrl} />
      <br />
      <List.Content floated="right">
        <Popup
          hideOnScroll
          position="left center"
          on="click"
          content={<ButtonRemoveItem onRemove={() => removeItem(product.id)} />}
          trigger={<Button icon="trash" color="red" />}
        />
      </List.Content>
      <List.Content>
        <span>{product.name}</span>
      </List.Content>
    </List.Item>
  ));

  return (
    <Popup basic style={{ width: '300px' }} wide trigger={trigger} on="click" open={isOpen}>
      <Segment size="massive" color="orange">
        Meu Carrinho
        <br />
        <p>
          <small>
            {haveProducts ? (
              <Fragment>
                {`Quantidade: `}
                <b>{products.length}</b>
              </Fragment>
            ) : (
              <Fragment>
                está vazio ...
                <Icon name="leaf" />
                <Icon name="leaf" />
                <Icon name="leaf" />
              </Fragment>
            )}
          </small>
        </p>
      </Segment>

      <PopoverContent>
        <List ordered size="massive" divided verticalAlign="middle">
          {ListProducts}
        </List>
      </PopoverContent>
      <Link to={haveProducts ? 'carrinho' : 'produtos'}>
        <Button color="green" fluid animated>
          <Button.Content visible>
            {haveProducts ? 'Finalizar Compra' : 'Ver Produtos'}
          </Button.Content>
          <Button.Content hidden>
            <Icon name={haveProducts ? 'arrow right' : 'arrow left'} />
            <Icon name="cart" />
          </Button.Content>
        </Button>
      </Link>
    </Popup>
  );
};

export default PopoverCart;
