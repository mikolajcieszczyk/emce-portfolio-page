import React from 'react';
import styled from 'styled-components';

import NjscrBg from 'assets/images/ncrImg.png';
import reactIcon from 'assets/images/reactIcon.png';
import scIcon from 'assets/images/scIcon.png';
import sbIcon from 'assets/images/storybookIcon.png';
import adIcon from 'assets/images/atomicDesignIcon.png';
import githubIcon from 'assets/images/githubIcon.png';
import { Web } from '@styled-icons/foundation';

const ProjectWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 5%;

  height: 40vh;
  margin: 3% 0 15%;

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
`;

const ProjectTitle = styled.h3`
  display: grid;
  align-items: center;
  color: #FFE48F;

  text-transform: capitalize;
`;

const ProjectImage = styled.div`
  background-image: url(${NjscrBg});
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
  text-align: justify;
  margin-bottom: 2%;

  span { 
    color: #FFE48F;
  }
`;

const ProjectTech = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
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

function ClassRegister() {
  return (
    <ProjectWrapper>
      <ProjectImage />
      <ProjectDesc>
        <ProjectTitle>
          NodeJS Class Register
        </ProjectTitle>
        <ProjectText>
          <span>Projekt dziennika elektronicznego</span>
          {' '}
          we wczesnej fazie produkcyjnej. Odpowiadam w nim za front-end. Jest już cała struktura folderów i komponentów zaprojektowana zgodnie z Atomic Design, zrobiony podgląd komponentów w StoryBook oraz zakodowane przekazywanie propsów w nawigacji do widoku Admina, Ucznia oraz Nauczyciela. Prace w toku.
        </ProjectText>
        <ProjectTech>
          <figure>
            <img
              src={reactIcon}
              alt="React"
              style={{ width: "30px", height: "30px" }}
            />
            <figcaption>React</figcaption>
          </figure>


          <figure>
            <img
              src={scIcon}
              alt="Styled Components"
              style={{ width: "30px", height: "30px" }}
            />
            <figcaption>Styled Components</figcaption>
          </figure>

          <figure>
            <img
              src={sbIcon}
              alt="StoryBook"
              style={{ width: "30px", height: "30px" }}
            />
            <figcaption>StoryBook</figcaption>
          </figure>

          <figure>
            <img
              src={adIcon}
              alt="Atomic Design"
              style={{ width: "30px", height: "30px" }}
            />
            <figcaption>Atomic Design</figcaption>
          </figure>
        </ProjectTech>
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
  )
}

export default ClassRegister;