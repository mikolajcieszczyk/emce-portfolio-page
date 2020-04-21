import React from 'react';
import styled from 'styled-components';

import someCompanyPageBg from 'assets/images/scpImg.png';
import htmlIcon from 'assets/images/htmlIcon.png';
import sassIcon from 'assets/images/icons8-sass-avatar-144.png';
import bootstrapIcon from 'assets/images/bootstrapIcon.png';
import jqueryIcon from 'assets/images/jqueryIcon.png';
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
    grid-template-columns: repeat(4, 1fr);
   }
`;

const ProjectImage = styled.div`
  background-image: url(${someCompanyPageBg});
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: 991.98px) { 
    display: none;
   }
`;

const ProjectDesc = styled.div`
  display: grid;

  p {
    margin-bottom: 5%;
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

function SomeCompanyPage() {
    return (
      <>
        <ProjectTitle>
          Some Company Page
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
                alt="Sass"
                style={{ width: "50px", height: "50px" }}
              />
              <figcaption>Sass</figcaption>
            </figure>

            <figure>
              <img
                src={bootstrapIcon}
                alt="Bootstrap"
                style={{ width: "50px", height: "50px" }}
              />
              <figcaption>Bootstrap</figcaption>
            </figure>

            <figure>
              <img
                src={jqueryIcon}
                alt="jQuery"
                style={{ width: "50px", height: "50px" }}
              />
              <figcaption>jQuery</figcaption>
            </figure>

          </ProjectStack>
          <ProjectImage />
          <ProjectDesc>

            <p>
              Strona firmy Company Name. Bootstrap w czystej postaci.
            </p>

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
      </>
    );
};

export default SomeCompanyPage;