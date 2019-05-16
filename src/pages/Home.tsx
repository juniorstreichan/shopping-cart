import React from 'react';
import { Button } from 'semantic-ui-react';
import { CartContext } from '../App';

const Home: React.FC = () => {
  return (
    <div>
      Home
      <br />
      <CartContext.Consumer>
        {({ clearCart }) => {
          return <Button onClick={() => clearCart()} size="massive" icon="cart" />;
        }}
      </CartContext.Consumer>
    </div>
  );
};

export default Home;
