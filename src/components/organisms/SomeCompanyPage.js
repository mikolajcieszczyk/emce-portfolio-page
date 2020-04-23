import React from 'react';
import styled from 'styled-components';

import someCompanyPageBg from 'assets/images/scpImg.png';
import htmlIcon from 'assets/images/htmlIcon.png';
import sassIcon from 'assets/images/icons8-sass-avatar-144.png';
import bootstrapIcon from 'assets/images/bootstrapIcon.png';
import jqueryIcon from 'assets/images/jqueryIcon.png';
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
  background-image: url(${someCompanyPageBg});
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
  text-align: justify;

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

function SomeCompanyPage() {
  return (
    <ProjectWrapper>
      <ProjectImage />
      <ProjectDesc>
        <ProjectTitle>
          Some Company Page
        </ProjectTitle>
        <ProjectText>
          Strona firmy Company Name. Bootstrap w czystej postaci.
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
              alt="Sass"
              style={{ width: "30px", height: "30px" }}
            />
            <figcaption>Sass</figcaption>
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
              src={jqueryIcon}
              alt="jQuery"
              style={{ width: "30px", height: "30px" }}
            />
            <figcaption>jQuery</figcaption>
          </figure>
        </ProjectTech>
        <ProjectLinks>
          <figure>
            <a href="https://github.com/mikolajcieszczyk/some-company-page" target="_blank">
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

export default SomeCompanyPage;