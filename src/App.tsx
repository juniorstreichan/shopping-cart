import React from 'react';
import { Button } from 'semantic-ui-react';
import Content from './layout/Content';
import Routes from './Routes';

const App: React.FC = () => {
  return (
    <Content>
      SHOPPING CART
      <Button size="massive" icon="cart" />
      <Routes />
    </Content>
  );
};

export default App;
