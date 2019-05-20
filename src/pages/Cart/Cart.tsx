import React, { useContext, Fragment } from 'react';
import { List, Button, Image, Popup, Divider } from 'semantic-ui-react';
import CartContext from './context/CartContext';
import Product from '../Products/Product';

const Cart = () => {
  const { products, removeItem } = useContext(CartContext);

  const ListProducts = products.map((product: Product, index: number) => (
    <List.Item key={`${index}-${index * 2}-${index * 3}`}>
      <List.Content floated="right">
        <Popup
          hideOnScroll
          position="left center"
          on="click"
          content={(
<Fragment>
              <b>Tem certeza ?</b> <Divider />
              <Button
                fluid
                size="mini"
                onClick={() => {
                  removeItem(product.id);
                }}
                color="blue"
              >
                Sim
              </Button>
            </Fragment>
)}
          trigger={<Button icon="trash" color="red" />}
        />
      </List.Content>
      <Image size="medium" src={product.imageUrl} />
      <List.Content>{product.name}</List.Content>
    </List.Item>
  ));
  return (
    <List size="massive" divided verticalAlign="middle">
      {ListProducts}
    </List>
  );
};

export default Cart;
