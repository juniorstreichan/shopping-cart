import React from 'react';
import Helmet from 'react-helmet';
import { Button, Divider, Header, Icon, Image, Label, Modal, Statistic } from 'semantic-ui-react';
import Product from '../Product';

interface ModalProps {
  onClose: Function;
  onAdd: Function;
  open: boolean;
  product: Product;
  isInTheCart: boolean;
}

const ModalProduct: React.FC<ModalProps> = ({ onClose, onAdd, open, product, isInTheCart }) => (
  <Modal
    closeIcon
    closeOnDimmerClick={false}
    dimmer="blurring"
    open={open}
    onClose={() => onClose()}
  >
    <Modal.Header>Informações do produto</Modal.Header>
    <Modal.Content image>
      <Helmet>
        <title>{product.name}</title>
      </Helmet>
      <Image wrapped size="medium" src={product.imageUrl} />
      <Modal.Description>
        <Header as="h2">
          <strong>{product.name}</strong>
        </Header>
        <b>
          {`Categoria:  `}
          <Label>{product.category}</Label>
        </b>
        <Divider />
        {product.description}
        <br />
        <Statistic horizontal color="green" size="tiny">
          <Statistic.Label>Valor:</Statistic.Label>
          <Statistic.Value>
            {product.price &&
              product.price.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
          </Statistic.Value>
        </Statistic>
      </Modal.Description>
    </Modal.Content>

    <Modal.Actions>
      <Button onClick={() => onClose()}>Voltar</Button>
      {product && (
        <Button
          onClick={() => onAdd(product)}
          disabled={isInTheCart}
          color={isInTheCart ? 'green' : 'blue'}
        >
          <Icon name="plus" />
          {isInTheCart ? `  Já está no carrinho   ` : `  Adicionar ao carrinho   `}
          <Icon name="cart" />
        </Button>
      )}
    </Modal.Actions>
  </Modal>
);

export default ModalProduct;
