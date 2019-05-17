import React, { useContext } from 'react';
import { Button } from 'semantic-ui-react';
import CartContext from '../context/CartContext';

const Home: React.FC = () => {
  const { clearCart } = useContext(CartContext);
  return (
    <div>
      Home
      <br />
      <Button onClick={() => clearCart()} size="massive">
        Limpar carrinho
      </Button>
    </div>
  );
};

export default Home;
