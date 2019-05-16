import React from 'react';
import { Container } from 'semantic-ui-react';

const Content: React.FC = ({ children }) => {
  return <Container as="main">{children}</Container>;
};

export default Content;
