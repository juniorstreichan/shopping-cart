import React, { Fragment, useContext, useEffect, useState } from 'react';
import Helmet from 'react-helmet';
import { RouteComponentProps } from 'react-router-dom';
import { Header, Segment } from 'semantic-ui-react';
import CartContext from '../Cart/context/CartContext';
import CartContextManager from '../Cart/context/CartContextManager';
import GridProucts from './components/GridProucts';
import ModalProduct from './components/ModalProduct';
import ProductCard from './components/ProductCard';
import Product from './Product';
import ProductsService from './ProductsService';

const Products: React.FC<RouteComponentProps> = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoadding, setIsLoadding] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [productToShow, setProductToShow] = useState<Product>();
  const { addItem, hasInTheCart } = useContext<CartContextManager>(CartContext);

  useEffect(() => {
    setIsLoadding(true);
    ProductsService.getAll()
      .then(response => {
        setProducts(response);
        setIsLoadding(false);
      })
      .catch(() => setIsLoadding(false));
  }, []);

  function closeModal() {
    setShowModal(false);
    setProductToShow(undefined);
  }

  return (
    <Fragment>
      <Helmet>
        <title>Produtos</title>
      </Helmet>
      {productToShow && (
        <ModalProduct
          isInTheCart={hasInTheCart(productToShow)}
          onClose={closeModal}
          product={productToShow}
          onAdd={() => addItem(productToShow)}
          open={showModal}
        />
      )}
      <Segment placeholder>
        <Header textAlign="center" as="h1">
          Produtos
        </Header>
      </Segment>
      <GridProucts
        products={products}
        isLoadding={isLoadding}
        renderProduct={product => (
          <ProductCard
            onViewCard={() => {
              setProductToShow(product);
              setShowModal(true);
            }}
            onAddtoCart={addItem}
            product={product}
            hasInTheCart={hasInTheCart(product)}
          />
        )}
      />
    </Fragment>
  );
};

export default Products;
