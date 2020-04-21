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

const ProjectTitle = styled.h2`
  color: #FFE48F;
  margin: 2% 0 1%;

  text-transform: capitalize;
`;

const ProjectWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 2fr;
  grid-gap: 1rem;

  height: 250px;

  @media (max-width: 991.98px) { 
    grid-template-columns: 1fr;
   }
`;

const ProjectStack = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;

  font-weight: 700;

  @media (max-width: 575.98px) { 
    grid-template-columns: repeat(3, 1fr);
   }

   @media (min-width: 767.98px) { 
    grid-template-columns: repeat(5, 1fr);
   }
   
   @media (min-width: 992px) { 
     grid-template-columns: repeat(2, 1fr);
   }
   
`;

const ProjectImage = styled.div`
  background-image: url(${TictactoeBg});
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: 991.98px) { 
    display: none;
   }
`;

const ProjectDesc = styled.div`
  display: grid;
  
  p {
    text-align: justify;
    margin-bottom: 5%;

    span {
      color: #FFE48F; 
    }
  }
`;

const ProjectLinks = styled.div`
  display: grid;

  grid-template-columns: 1fr 1fr;

  align-items: end;

  a {
    color: white;
    text-decoration: none;
  }

  figcaption {
    color: #FFE48F;
    font-weight: 700;
  }

  @media (max-width: 991.98px) { 
    margin-bottom: 5%;
   }
`;

function TicTacToe() {
  return (
    <>
      <ProjectTitle>
        Tic-Tac-Toe Game
      </ProjectTitle>
      <ProjectWrapper>
        <ProjectStack>

          <figure>
            <img
              src={htmlIcon}
              alt="HTML"
              style={{ width: "50px", height: "50px" }}
            />
            <figcaption>HTML5</figcaption>
          </figure>


          <figure>
            <img
              src={cssIcon}
              alt="CSS"
              style={{ width: "50px", height: "50px" }}
            />
            <figcaption>CSS3</figcaption>
          </figure>

          <figure>
            <img
              src={bootstrapIcon}
              alt="Bootstrap"
              style={{ width: "40px", height: "40px" }}
            />
            <figcaption>Bootstrap</figcaption>
          </figure>

          <figure>
            <img
              src={jsIcon}
              alt="JavaScript"
              style={{ width: "50px", height: "50px" }}
            />
            <figcaption>JavaScript</figcaption>
          </figure>

          <figure>
            <img
              src={jqueryIcon}
              alt="jQuery"
              style={{ width: "40px", height: "40px" }}
            />
            <figcaption>jQuery</figcaption>
          </figure>

        </ProjectStack>
        <ProjectImage />
        <ProjectDesc>

          <p>
            <span>Kółko i krzyżyk...</span>
            {' '}
            któż z nas nie grał w czasie lekcji z kolegą z ławki ;-) Aplikacja zaprogramowana 
            {' '}
            <span>do gry w dwie osoby</span>
            , daje możliwość (gwoli ścisłości to wymusza ;) zdefiniowania imion graczy. Po skończonej rundzie wyświetla komunikat o zwycięzcy, a następnie losuje osobę, która rozpocznie kolejną rundę. <span>Doskonały zabijacz czasu!</span>
          </p>

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
    </>
  );
};

export default TicTacToe;