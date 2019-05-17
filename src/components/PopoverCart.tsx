import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button, Header, Icon, List, Popup } from 'semantic-ui-react';
import CartContextManager from '../types/interfaces/CartContextManager';
import Product from '../types/interfaces/Product';
import CartContext from '../context/CartContext';

const PopoverCart: React.FC = ({ children }) => {
  const { products, removeItem } = useContext<CartContextManager>(CartContext);

  const ListProducts = products.map((product: Product, index: number) => (
    <List.Item key={`${index}-${index * 2}-${index * 3}`}>
      <List.Content floated="right">
        <Button
          icon="trash"
          color="red"
          onClick={() => {
            removeItem(product.id);
          }}
        />
      </List.Content>
      <List.Content>{product.name}</List.Content>
    </List.Item>
  ));

  return (
    <Popup basic style={{ width: '300px' }} wide trigger={children} on="click">
      <Header>Meu Carrinho </Header>
      <List size="massive" divided verticalAlign="middle">
        {ListProducts}
        <List.Item>
          <List.Content>
            <Link to="carrinho">
              <Button color="green" fluid animated>
                <Button.Content visible>Finalizar Compra</Button.Content>
                <Button.Content hidden>
                  <Icon name="arrow right" />
                  <Icon name="cart" />
                </Button.Content>
              </Button>
            </Link>
          </List.Content>
        </List.Item>
      </List>
    </Popup>
  );
};

export default PopoverCart;
