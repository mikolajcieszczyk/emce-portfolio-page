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

import ProjectTile from 'components/molecules/ProjectTile';

import WorkRecordBg from 'assets/images/wraImg.png';
import AstronomyBg from 'assets/images/astronomyQuizImg.png';
import TictactoeBg from 'assets/images/tictactoeImg.png';
import TodolistBg from 'assets/images/todoListImg.png';
import NjscrBg from 'assets/images/ncrImg.png';
import someCompanyPageBg from 'assets/images/scpImg.png';



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

  @media (max-width: 767.98px) { 
      grid-template-columns: repeat(3, 1fr);
    }
`;

function PortfolioView() {
  return (
    <Router>
      <PortfolioViewWrapper>
        <ViewTitle title="wybrane projekty" span="[najnowsze od lewej]" />
        <PortfolioViewGrid>
          <ProjectTile 
            url="/portfolio/nodejs-class-register"
            alt="node js class register"
            bg={NjscrBg}
            text="NodeJS Class Register" 
            />
          <ProjectTile
            url="/portfolio/work-record-app"
            alt="work record app"
            bg={WorkRecordBg}
            text="Work Record App"
          />
          <ProjectTile
            url="/portfolio/tictac"
            alt="tic tac toe"
            bg={TictactoeBg}
            text="Tic Tac Toe"
          />
          <ProjectTile
            url="/portfolio/some-company-page"
            alt="SomeCompanyPage"
            bg={someCompanyPageBg}
            text="Some Company Page"
          />
          <ProjectTile
            url="/portfolio/astronomy-quiz"
            alt="astronomy quiz"
            bg={AstronomyBg}
            text="Astronomy Quiz"
          />
          <ProjectTile
            url="/portfolio/todolist"
            alt="Todolist"
            bg={TodolistBg}
            text="To-Do List"
          />
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