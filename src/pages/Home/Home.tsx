import React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Segment } from 'semantic-ui-react';
import { Helmet } from 'react-helmet';

const Home: React.FC<RouteComponentProps> = () => {
  return (
    <Segment placeholder>
      <Helmet>
        <title>Bem vindo</title>
      </Helmet>
      <Link to="produtos">
        <Button fluid size="massive">
          Ver Produtos
        </Button>
      </Link>
    </Segment>
  );
};

export default Home;
