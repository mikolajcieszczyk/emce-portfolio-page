import React from 'react';
import styled from 'styled-components';

import AstronomyBg from 'assets/images/astronomy-quiz-img.png';
import htmlIcon from 'assets/images/icons8-html-5-144.png';
import cssIcon from 'assets/images/icons8-css3-144.png';
import bootstrapIcon from 'assets/images/icons8-bootstrap-144.png';
import jqueryIcon from 'assets/images/iconfinder_jquery_308442.png';
import jsIcon from 'assets/images/icons8-javascript-144.png';
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
  background-image: url(${AstronomyBg});
  background-size: cover;
  background-repeat: no-repeat;
`;

const ProjectDesc = styled.div`
  display: grid;
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

function AstronomyQuiz() {
    return (
      <>
        <ProjectTitle>
          Astronomy Quiz
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
                src={jsIcon}
                alt="JavaScript"
                style={{ width: "50px", height: "50px" }}
              />
              <figcaption>JavaScript</figcaption>
            </figure>

          </ProjectStack>
          <ProjectImage />
          <ProjectDesc>

            <p>
              Quiz z Astronomii zakodowany w czystym JS. Zmiana pytań za pomocą slidera.
            </p>

            <ProjectLinks>
              <figure>
                <a href="https://github.com/mikolajcieszczyk/astronomy-quiz" target="_blank">
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

export default AstronomyQuiz;