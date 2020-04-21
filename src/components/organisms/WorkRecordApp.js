import React from 'react';
import styled from 'styled-components';

import WorkRecordBg from 'assets/images/workhour-record-app-img.png';
import htmlIcon from 'assets/images/icons8-html-5-144.png';
import sassIcon from 'assets/images/icons8-sass-avatar-144.png';
import jqueryIcon from 'assets/images/iconfinder_jquery_308442.png';
import jsIcon from 'assets/images/icons8-javascript-144.png';
import mongoIcon from 'assets/images/mongodb-icon.png';
import expressIcon from 'assets/images/expressjs-icon.png';
import githubIcon from 'assets/images/GitHub-Mark-Light-120px-plus.png';
import { Web } from '@styled-icons/foundation';

const ProjectTitle = styled.h2`
  color: #FFE48F;
  margin: 2% 0 1%;

  text-transform: uppercase;
`;

const ProjectWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 2fr;
  grid-gap: 1rem;

  height: 250px;
`;

const ProjectStack = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;

  font-weight: 700;
`;

const ProjectImage = styled.div`
  background-image: url(${WorkRecordBg});
  background-size: cover;
  background-repeat: no-repeat;
`;

const ProjectDesc = styled.div`
  display: grid;

  p {
    font-size: 14px;
    text-align: justify;

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