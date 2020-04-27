import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import styled from 'styled-components';
import './App.css';
import Nav from 'components/molecules/Nav/Nav';
import HomeView from 'components/views/HomeView';
import StackView from 'components/views/StackView';
import PortfolioView from 'components/views/PortfolioView';
import ContactView from 'components/views/ContactView';

const PageWrapper = styled.div`
  width: 90%;
  height: 100%;

  margin: 0 auto;
`;

function App() {
  return (
    <>
      <PageWrapper>
        <div>
          <BrowserRouter>
          <Nav />
            <Switch>
              <Route exact path="/" component={HomeView} />
              <Route path="/stack" component={StackView} />
              <Route path="/portfolio" component={PortfolioView} />
              <Route path="/contact" component={ContactView} />
            </Switch>
          </BrowserRouter>
        </div>
      </PageWrapper>
    </>
  );
}

export default App;