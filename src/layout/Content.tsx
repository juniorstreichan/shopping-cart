import React from 'react';
import { Container } from 'semantic-ui-react';
import styled from 'styled-components';

const StyledContent = styled.div`
  min-height: 90vh;
`;

const Content: React.FC = ({ children }) => {
  return (
    <Container as="main">
      <StyledContent>{children}</StyledContent>
    </Container>
  );
};

export default Content;
