import React, { useState } from "react";
import styled from "styled-components";
import CartContext from "./pages/Cart/context/CartContext";
import Content from "./layout/Content";
import Footer from "./layout/Footer";
import layoutConstants from "./layout/layout-constants";
import Navbar from "./layout/Navbar";
import Routes from "./Routes";
import Product from "./pages/Products/Product";

const StyledApp = styled.div`
  margin-top: ${layoutConstants.NAVBAR_HEIGHT}px;
`;

const initialValues = {
  products: [
    { id: 1, name: "PRODUTO 1" },
    { id: 2, name: "PRODUTO 2" },
    { id: 3, name: "PRODUTO 3" },
    { id: 4, name: "PRODUTO 4" },
    { id: 5, name: "PRODUTO 5" },
    { id: 6, name: "PRODUTO 6 " },
    { id: 7, name: "PRODUTO 7" }
  ]
};

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>(initialValues.products);

  function clearCart() {
    setProducts([]);
  }
  function removeItem(id?: number): void {
    const newProducts = products.filter(product => product.id !== id);
    setProducts(newProducts);
  }

  return (
    <StyledApp>
      <CartContext.Provider value={{ clearCart, products, removeItem }}>
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
