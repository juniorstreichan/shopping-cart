import React, { useReducer } from 'react';
import styled from 'styled-components';
import Content from './layout/Content';
import Footer from './layout/Footer';
import layoutConstants from './layout/layout-constants';
import Navbar from './layout/Navbar';
import CartContext from './pages/Cart/context/CartContext';
import Product from './pages/Products/Product';
import cartReducer from './reducers/cartReducer';
import TYPES from './reducers/types';
import Routes from './Routes';
import CartStorage from './service/CartStorage';

const StyledApp = styled.div`
  margin-top: ${layoutConstants.NAVBAR_HEIGHT}px;
`;
const initialValues = {
  products: CartStorage.getProductsCart(),
};

const App: React.FC = () => {
  const [state, dispatch] = useReducer(cartReducer, initialValues);
  function clearCart() {
    dispatch({ type: TYPES.CART_CLEAR });
  }
  function removeItem(id: string = '0'): void {
    dispatch({ type: TYPES.CART_REMOVE, id });
  }
  function addItem(product: Product): void {
    dispatch({ type: TYPES.CART_ADD, product });
  }

  function hasInTheCart(product: Product): boolean {
    return state.products.filter(p => p.id === product.id).length > 0;
  }

  return (
    <StyledApp>
      <CartContext.Provider
        value={{
          clearCart,
          products: state.products,
          removeItem,
          addItem,
          hasInTheCart,
        }}
      >
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
