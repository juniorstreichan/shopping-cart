import React, { useState } from 'react';
import styled from 'styled-components';
import Content from './layout/Content';
import layoutConstants from './layout/layout-constants';
import Navbar from './layout/Navbar';
import Routes from './Routes';
import Footer from './layout/Footer';

const StyledApp = styled.div`
  margin-top: ${layoutConstants.NAVBAR_HEIGHT}px;
`;

const initialValues = {
  clearCart: () => console.log('clearCart'),
  products: [
    { name: 'PRODUTO 1' },
    { name: 'PRODUTO 2' },
    { name: 'PRODUTO 3' },
    { name: 'PRODUTO 4' },
    { name: 'PRODUTO 5' },
    { name: 'PRODUTO 6 ' },
    { name: 'PRODUTO 7' },
  ],
};

export interface ICartContext {
  clearCart: Function;
  products: { name: string }[];
}

export const CartContext = React.createContext<ICartContext>({
  clearCart: () => console.log('clearCart'),
  products: [],
});

const App: React.FC = () => {
  const [products, setProducts] = useState(initialValues.products);

  function clearCart() {
    setProducts([]);
  }
  return (
    <StyledApp>
      <CartContext.Provider value={{ clearCart, products }}>
        <Navbar />
        <Content>
          <Routes />
        </Content>
        <Footer />
      </CartContext.Provider>
    </StyledApp>
  );
};

export default App;
