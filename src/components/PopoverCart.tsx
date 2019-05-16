import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Header, Icon, List, Popup } from 'semantic-ui-react';

const PopoverCart: React.FC = ({ children }) => {
  return (
    <Popup basic style={{ width: '300px' }} wide trigger={children} on="click">
      <Header>Meu Carrinho </Header>
      <List size="massive" divided verticalAlign="middle">
        <List.Item>
          <List.Content>PRODUTO 1</List.Content>
        </List.Item>
        <List.Item>
          <List.Content>PRODUTO 2</List.Content>
        </List.Item>
        <List.Item>
          <List.Content>PRODUTO 3</List.Content>
        </List.Item>
        <List.Item>
          <List.Content>PRODUTO 4</List.Content>
        </List.Item>

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
