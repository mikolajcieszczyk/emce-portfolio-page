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
  background-image: url(${WorkRecordBg});
  background-size: cover;
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
  font-size: 14px;
  text-align: justify;

  span { 
    color: #FFE48F;
  }
`;

const ProjectTech = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
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

function WorkRecordApp() {
  return (
    <ProjectWrapper>
      <ProjectImage />
      <ProjectDesc>
        <ProjectTitle>
          Work Record App
        </ProjectTitle>
        <ProjectText>
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
              src={sassIcon}
              alt="SASS"
              style={{ width: "30px", height: "30px" }}
            />
            <figcaption>Sass</figcaption>
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

          <figure>
            <img
              src={mongoIcon}
              alt="MongoDB"
              style={{ width: "30px", height: "30px" }}
            />
            <figcaption>MongoDB</figcaption>
          </figure>

          <figure>
            <img
              src={expressIcon}
              alt="ExpressJS"
              style={{ width: "30px", height: "30px" }}
            />
            <figcaption>ExpressJS</figcaption>
          </figure>
        </ProjectTech>
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
  )
}

export default WorkRecordApp;