import React from 'react';
import styled from 'styled-components';

import NjscrBg from 'assets/images/nodejsclasregister-img.png';
import reactIcon from 'assets/images/iconfinder_React.js_logo_1174949.png';
import scIcon from 'assets/images/styled-components.png';
import sbIcon from 'assets/images/storybook-icon.png';
import adIcon from 'assets/images/atomicdesign.png';
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
  background-image: url(${NjscrBg});
  background-size: cover;
  background-repeat: no-repeat;
`;

const ProjectDesc = styled.div`
  display: grid;

  p {
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

function ClassRegister() {
    return (
      <>
        <ProjectTitle>
          Nodejs class register
        </ProjectTitle>
        <ProjectWrapper>
          <ProjectStack>

            <figure>
              <img
                src={reactIcon}
                alt="React"
                style={{ width: "50px", height: "50px" }}
              />
              <figcaption>React</figcaption>
            </figure>


            <figure>
              <img
                src={scIcon}
                alt="Styled Components"
                style={{ width: "50px", height: "50px" }}
              />
              <figcaption>Styled Components</figcaption>
            </figure>

            <figure>
              <img
                src={sbIcon}
                alt="StoryBook"
                style={{ width: "45px", height: "45px" }}
              />
              <figcaption>StoryBook</figcaption>
            </figure>

            <figure>
              <img
                src={adIcon}
                alt="Atomic Design"
                style={{ width: "45px", height: "45px" }}
              />
              <figcaption>Atomic Design</figcaption>
            </figure>

          </ProjectStack>
          <ProjectImage />
          <ProjectDesc>
            <p>
              <span>Dziennik elektroniczny</span>
              {' '}
              we wczesnej fazie produkcyjnej w której odpowiadam za front-end. Jest już cała struktura folderów i komponentów zaprojektowana zgodnie z Atomic Design, zrobiony podgląd komponentów w StoryBook oraz zakodowane przekazywanie propsów w nawigacji do widoku Admina, Ucznia oraz Nauczyciela. Prace w toku.
            </p>

            <ProjectLinks>
              <figure>
                <a href="https://github.com/mikolajcieszczyk/nodejs-class-register-v2" target="_blank">
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

export default ClassRegister;