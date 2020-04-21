import React from 'react';
import styled from 'styled-components';

import WorkRecordBg from 'assets/images/wraImg.png';
import htmlIcon from 'assets/images/htmlIcon.png';
import sassIcon from 'assets/images/icons8-sass-avatar-144.png';
import jqueryIcon from 'assets/images/jqueryIcon.png';
import jsIcon from 'assets/images/jsIcon.png';
import mongoIcon from 'assets/images/mongoIcon.png';
import expressIcon from 'assets/images/expressJsIcon.png';
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

  @media (max-width: 991.98px) { 
    grid-template-columns: repeat(3, 1fr);

    figcaption {
    margin-bottom: 2%;

    }
   }
`;

const ProjectImage = styled.div`
  background-image: url(${WorkRecordBg});
  background-color: #5A0A4F;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;

  @media (max-width: 991.98px) { 
    display: none;
   }
`;

const ProjectDesc = styled.div`
  display: grid;

  p {
    font-size: 14px;
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

function WorkRecordApp() {
  return (
    <>
      <ProjectTitle>
        Work Record App
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
              src={sassIcon}
              alt="SASS"
              style={{ width: "50px", height: "50px" }}
            />
            <figcaption>Sass</figcaption>
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

          <figure>
            <img
              src={mongoIcon}
              alt="MongoDB"
              style={{ width: "40px", height: "40px" }}
            />
            <figcaption>MongoDB</figcaption>
          </figure>

          <figure>
            <img
              src={expressIcon}
              alt="ExpressJS"
              style={{ width: "40px", height: "40px" }}
            />
            <figcaption>ExpressJS</figcaption>
          </figure>

        </ProjectStack>
        <ProjectImage />
        <ProjectDesc>
          <p>
            <span>Autorska aplikacja</span>
            {' '}
            przeznaczona do użytku dla wszelkiej maści freelancerów, korepetytorów lub... trenerów tenisa (moja motywacja!) ;-) 
            {' '}
            <span>Umożliwia dodawanie/edycję/usuwanie klientów,</span>
            {' '}
            wraz z ich predefiniowanymi stawkami i notatkami, dodawanie przepracowanych godzin, które są grupowane w okresy miesięczne. 
            {' '}
            <span>Głównym pożytkiem</span>
            {' '}
            płynącym z aplikacji jest możliwość generowania raportów miesięcznych, które można wyeksportować do PDF i przedstawić pracodawcy lub schować do segregatora.
          </p>

          <ProjectLinks>
            <figure>
              <a href="https://github.com/mikolajcieszczyk/work-record-app" target="_blank">
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

export default WorkRecordApp;