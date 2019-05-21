import React, { Fragment, useContext, useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Button, Grid, Header, Icon, Image, Modal, Segment } from 'semantic-ui-react';
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
  const { addItem } = useContext<CartContextManager>(CartContext);

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

  const list = products.map(product => (
    <Grid.Column mobile={16} tablet={8} computer={5} key={product.id}>
      <ProductCard
        onViewCard={() => {
          setProductToShow(product);
          setShowModal(true);
        }}
        onAddtoCart={addItem}
        product={product}
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
          <Header>
            <strong>{productToShow.name}</strong>
          </Header>
        </Modal.Content>
      )}
      <Modal.Actions>
        <Button onClick={() => closeModal()}>Voltar</Button>
        {productToShow && (
          <Button onClick={() => addItem(productToShow)} color="blue">
            <Icon name="plus" />
            {`  Adicionar ao carrinho   `}
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
