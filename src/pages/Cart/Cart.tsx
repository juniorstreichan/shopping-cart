import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { RouteComponentProps } from 'react-router-dom';
import ListProductsCart from './components/ListProductsCart';

const Cart: React.FC<RouteComponentProps> = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Carrinho</title>
      </Helmet>
      <ListProductsCart />
    </Fragment>
  );
};

export default Cart;
