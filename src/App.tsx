import React from 'react';
import styled from 'styled-components';
import Content from './layout/Content';
import layoutConstants from './layout/layout-constants';
import Navbar from './layout/Navbar';
import Routes from './Routes';
import Footer from './layout/Footer';

const StyledApp = styled.div`
  margin-top: ${layoutConstants.NAVBAR_HEIGHT}px;
`;

const App: React.FC = () => {
  return (
    <StyledApp>
      <Navbar />
      <Content>
        <Routes />
      </Content>
      <Footer />
    </StyledApp>
  );
};

export default App;
