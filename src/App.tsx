import React, { useState } from 'react';
import styled from 'styled-components';
import Content from './layout/Content';
import Footer from './layout/Footer';
import layoutConstants from './layout/layout-constants';
import Navbar from './layout/Navbar';
import CartContext from './pages/Cart/context/CartContext';
import Product from './pages/Products/Product';
import Routes from './Routes';

const StyledApp = styled.div`
  margin-top: ${layoutConstants.NAVBAR_HEIGHT}px;
`;

const initialValues = {
  products: [],
};

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>(initialValues.products);

  function clearCart() {
    setProducts([]);
  }
  function removeItem(id?: string): void {
    const newProducts = products.filter(product => product.id !== id);
    setProducts(newProducts);
  }
  function addItem(product: Product): void {
    const newProducts = products.filter(p => product.id !== p.id).concat(product);
    setProducts(newProducts);
  }

  return (
    <StyledApp>
      <CartContext.Provider value={{ clearCart, products, removeItem, addItem }}>
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
