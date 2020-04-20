import React from 'react';
import styled from 'styled-components';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";

import TicTacToe from 'components/organisms/TicTacToe';
import WorkRecordApp from 'components/organisms/WorkRecordApp';
import AstronomyQuiz from 'components/organisms/AstronomyQuiz';
import ClassRegister from 'components/organisms/ClassRegister';
import Todolist from 'components/organisms/Todolist';
import SomeCompanyPage from 'components/organisms/SomeCompanyPage';

import { projectTiles } from 'assets/data/viewsData';

const PortfolioViewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
`;

const PortfolioViewTitle = styled.h2`
   color: #FFE48F;
   text-align: ${props => props.left ? "left" : "center"};
   text-transform: uppercase;

   margin: 1% 0;

   animation: text-focus-in 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;

   @keyframes text-focus-in {
  0% {
    -webkit-filter: blur(12px);
            filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-filter: blur(0px);
            filter: blur(0px);
    opacity: 1;
  }
}
`;

const PortfolioViewGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 10px;

  width: 100%;
`;

export const PortfolioViewRectangle = styled.div`
  height: 150px;

  border: 1px solid white;
`;

export const PortfolioViewRectangleCaption = styled.div`
  position: relative;
  top: 119px;
  
  width: 100%;
  height: 30px;

  background: #FFE48F;
  color: #000;
`;

export const ProjectLink = styled(Link)`
  text-decoration: none;
  color: #000;
  font-weight: 700;
`;



function PortfolioView() {

    

    const mapProjectsTiles = projectTiles.map((el) => (
      <div id={el.id}>
        {el.component}
      </div>
    ));

    return (
      <Router>
        <PortfolioViewWrapper>
          <PortfolioViewTitle>
            wybrane projekty
          </PortfolioViewTitle>
          <PortfolioViewGrid>

            {mapProjectsTiles}
          </PortfolioViewGrid>
        </PortfolioViewWrapper>
        <Switch>
          <Route path="/portfolio/work-record-app" component={WorkRecordApp} />
          <Route path="/portfolio/tictac" component={TicTacToe} />
          <Route path="/portfolio/astronomy-quiz" component={AstronomyQuiz} />
          <Route path="/portfolio/nodejs-class-register" component={ClassRegister} />
          <Route path="/portfolio/todolist" component={Todolist} />
          <Route path="/portfolio/some-company-page" component={SomeCompanyPage} />
        </Switch>
      </Router>
    );
};

export default PortfolioView;