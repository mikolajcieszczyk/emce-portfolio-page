import React from 'react';
import styled from 'styled-components';

import TictactoeBg from 'assets/images/tictactoeImg.png';
import htmlIcon from 'assets/images/htmlIcon.png';
import cssIcon from 'assets/images/cssIcon.png';
import bootstrapIcon from 'assets/images/bootstrapIcon.png';
import jqueryIcon from 'assets/images/jqueryIcon.png';
import jsIcon from 'assets/images/jsIcon.png';
import githubIcon from 'assets/images/githubIcon.png';
import { Web } from '@styled-icons/foundation';

const ProjectWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 5%;

  height: 40vh;
  margin: 3% 0 15%;
`;

const ProjectTitle = styled.h3`
  display: grid;
  align-items: center;
  color: #FFE48F;

  text-transform: capitalize;
`;

const ProjectImage = styled.div`
  background-image: url(${TictactoeBg});
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;

  height: 400px;

  border: 2px solid #FFE48F;
  border-radius: 20px;
`;

const ProjectDesc = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  justify-items: stretch;

  height: 400px;
`;

const ProjectText = styled.p`
  margin-bottom: 2%;
  text-align: justify;

  span { 
    color: #FFE48F;
  }
`;

const ProjectTech = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-items: center;
  align-items: center;

  margin-bottom: 5%;

  figure {
    text-align: center;
  }

  figcaption {
    font-size: 12px;
    font-weight: 400;
  }
`;

const ProjectLinks = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;


  a {
    color: white;
    text-decoration: none;
  }

  figcaption {
    color: #FFE48F;
    font-size: 12px;
    font-weight: 400;
    text-align: center;
  }
`;

function TicTacToe() {
  return (
    <ProjectWrapper>
      <ProjectImage />
      <ProjectDesc>
        <ProjectTitle>
          Tic-Tac-Toe
        </ProjectTitle>
        <ProjectText>
          <span>Kółko i krzyżyk...</span>
          {' '}
          któż z nas nie grał w czasie lekcji z kolegą z ławki ;-) Aplikacja zaprogramowana
          {' '}
          <span>do gry w dwie osoby</span>
          , daje możliwość (gwoli ścisłości to wymusza ;) zdefiniowania imion graczy. Po skończonej rundzie wyświetla komunikat o zwycięzcy, a następnie losuje osobę, która rozpocznie kolejną rundę. 
          {' '}
          <span>Doskonały zabijacz czasu!</span>
        </ProjectText>
        <ProjectTech>
          <figure>
            <img
              src={htmlIcon}
              alt="HTML"
              style={{ width: "30px", height: "30px" }}
            />
            <figcaption>HTML5</figcaption>
          </figure>


          <figure>
            <img
              src={cssIcon}
              alt="CSS"
              style={{ width: "30px", height: "30px" }}
            />
            <figcaption>CSS3</figcaption>
          </figure>

          <figure>
            <img
              src={bootstrapIcon}
              alt="Bootstrap"
              style={{ width: "30px", height: "30px" }}
            />
            <figcaption>Bootstrap</figcaption>
          </figure>

          <figure>
            <img
              src={jsIcon}
              alt="JavaScript"
              style={{ width: "30px", height: "30px" }}
            />
            <figcaption>JavaScript</figcaption>
          </figure>

          <figure>
            <img
              src={jqueryIcon}
              alt="jQuery"
              style={{ width: "30px", height: "30px" }}
            />
            <figcaption>jQuery</figcaption>
          </figure>
        </ProjectTech>
        <ProjectLinks>
          <figure>
            <a href="https://github.com/mikolajcieszczyk/tic-tac-toe" target="_blank">
              <img
                src={githubIcon}
                alt="GitHub"
                style={{ width: "50px", height: "50px" }}
              />
              <figcaption>Kod</figcaption>
            </a>
          </figure>
          <figure>
            <a href="#" target="_blank">
              <Web size="56px" />
              <figcaption>Zobacz</figcaption>
            </a>
          </figure>
        </ProjectLinks>
      </ProjectDesc>
    </ProjectWrapper>
  )
}

export default TicTacToe;