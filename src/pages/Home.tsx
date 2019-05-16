import React from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      Home
      <br />
      <Link to="carrinho">
        <Button size="massive" icon="cart" />
      </Link>
    </div>
  );
};

export default Home;
