import React, { Fragment, useContext, useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import {
  Button,
  Grid,
  Header,
  Icon,
  Image,
  Modal,
  Segment,
  Divider,
  Label,
  Statistic,
} from 'semantic-ui-react';
import CardLoadding from '../../layout/CardLoadding';
import CartContext from '../Cart/context/CartContext';
import CartContextManager from '../Cart/context/CartContextManager';
import ProductCard from './components/ProductCard';
import Product from './Product';
import ProductsService from './ProductsService';

const Products: React.FC<RouteComponentProps> = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoadding, setIsLoadding] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [productToShow, setProductToShow] = useState<Product>();
  const { addItem, hasInTheCart } = useContext<CartContextManager>(CartContext);

  const hasProductInTheCart = productToShow ? hasInTheCart(productToShow) : false;

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

  const list = products.map((product, index: number) => (
    <Grid.Column mobile={16} tablet={8} computer={5} key={`${index}-Products-${product.id}`}>
      <ProductCard
        onViewCard={() => {
          setProductToShow(product);
          setShowModal(true);
        }}
        onAddtoCart={addItem}
        product={product}
        hasInTheCart={hasInTheCart(product)}
      />
    </Grid.Column>
  ));

  const modal = (
    <Modal
      closeIcon
      closeOnDimmerClick={false}
      dimmer="blurring"
      open={showModal}
      onClose={() => closeModal()}
    >
      <Modal.Header>Informações do produto</Modal.Header>

      {productToShow && (
        <Modal.Content image>
          <Image wrapped size="medium" src={productToShow.imageUrl} />
          <Modal.Description>
            <Header as="h2">
              <strong>{productToShow.name}</strong>
            </Header>
            <b>
              {`Categoria:  `}
              <Label>{productToShow.category}</Label>
            </b>
            <Divider />
            {productToShow.description}
            <br />
            <Statistic horizontal color="green" size="tiny">
              <Statistic.Label>Valor:</Statistic.Label>
              <Statistic.Value>
                {productToShow.price &&
                  productToShow.price.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
              </Statistic.Value>
            </Statistic>
          </Modal.Description>
        </Modal.Content>
      )}
      <Modal.Actions>
        <Button onClick={() => closeModal()}>Voltar</Button>
        {productToShow && (
          <Button
            onClick={() => addItem(productToShow)}
            disabled={hasProductInTheCart}
            color={hasProductInTheCart ? 'green' : 'blue'}
          >
            <Icon name="plus" />
            {hasProductInTheCart ? `  Já está no carrinho   ` : `  Adicionar ao carrinho   `}
            <Icon name="cart" />
          </Button>
        )}
      </Modal.Actions>
    </Modal>
  );

  return (
    <Fragment>
      {modal}
      <Segment placeholder>
        <Header textAlign="center" as="h1">
          Produtos
        </Header>
      </Segment>
      <Grid container textAlign="center">
        {isLoadding && <CardLoadding numOfCards={18} />}
        {list}
      </Grid>
    </Fragment>
  );
};

export default Products;
