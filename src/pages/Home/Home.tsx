import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

const Home: React.FC = () => {
  return (
    <div>
      Home
      <br />
      <Link to="produtos">
        <Button fluid size="massive">
          Ver Produtos
        </Button>
      </Link>
    </div>
  );
};

export default Home;
