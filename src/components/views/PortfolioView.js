import React from 'react';
import styled from 'styled-components';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import TicTacToe from 'components/organisms/TicTacToe';
import WorkRecordApp from 'components/organisms/WorkRecordApp';
import AstronomyQuiz from 'components/organisms/AstronomyQuiz';
import ClassRegister from 'components/organisms/ClassRegister';
import Todolist from 'components/organisms/Todolist';
import SomeCompanyPage from 'components/organisms/SomeCompanyPage';

import ViewTitle from 'components/atoms/ViewTitle';
import { projectTiles } from 'assets/data/viewsData';

const PortfolioViewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
`;

const PortfolioViewGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 10px;

  width: 100%;

  @media (max-width: 575.98px) { 
    grid-template-columns: repeat(3, 1fr);
   }
`;

export const PortfolioViewRectangleContainer = styled.div`
  display: flex;
  flex-direction: column;

   
`;

export const PortfolioViewRectangle = styled.div`
  display: flex;
  height: 100px;

 border: 2px solid #FFE48F;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;

  background: #FFE48F;

`;

export const PortfolioViewRectangleCaption = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 30px;

  background: #FFE48F;
  color: #000;
  font-size: 12px;
  font-weight: 400;

  text-align: center;

  border-bottom: 2px solid #FFE48F;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
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
        <ViewTitle title="wybrane projekty" span="[najnowsze od lewej]" />
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