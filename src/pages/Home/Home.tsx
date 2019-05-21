import React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Segment } from 'semantic-ui-react';

const Home: React.FC<RouteComponentProps> = () => {
  return (
    <Segment placeholder>
      <Link to="produtos">
        <Button fluid size="massive">
          Ver Produtos
        </Button>
      </Link>
    </Segment>
  );
};

export default Home;
