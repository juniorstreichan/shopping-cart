import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button, Header, Icon, List, Popup } from 'semantic-ui-react';
import { CartContext, ICartContext } from '../App';

const PopoverCart: React.FC = ({ children }) => {
  const { products } = useContext<ICartContext>(CartContext);

  const ListProducts = products.map((product: { name: string }, index: any) => (
    <List.Item key={index}>
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
