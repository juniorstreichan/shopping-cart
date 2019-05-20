import React, { Fragment } from 'react';
import { Divider, Button } from 'semantic-ui-react';

const ButtonRemoveItem: React.FC<{ onRemove: Function }> = ({ onRemove }) => {
  return (
    <Fragment>
      <b>Tem certeza ?</b>
      <Divider />
      <Button
        fluid
        size="mini"
        onClick={() => {
          onRemove();
        }}
        color="blue"
      >
        Sim
      </Button>
    </Fragment>
  );
};

export default ButtonRemoveItem;
