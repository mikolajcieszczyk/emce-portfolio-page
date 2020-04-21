import React from 'react';
import styled from 'styled-components';

import WorkRecordBg from 'assets/images/workhour-record-app-img.png';
import htmlIcon from 'assets/images/icons8-html-5-144.png';
import cssIcon from 'assets/images/icons8-css3-144.png';
import jsIcon from 'assets/images/icons8-javascript-144.png';
import githubIcon from 'assets/images/GitHub-Mark-Light-120px-plus.png';
import { Web } from '@styled-icons/foundation';

const ProjectTitle = styled.h2`
  color: #FFE48F;
  margin: 2% 0 1%;
`;

const ProjectWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 2fr;
  grid-gap: 1rem;

  height: 250px;
`;

const ProjectStack = styled.div`
  display: grid;
  align-items: center;
`;

const ProjectImage = styled.div`
  background-image: url(${WorkRecordBg});
  background-size: cover;
  background-repeat: no-repeat;
`;

const ProjectDesc = styled.div`
  display: grid;
`;

const ProjectLinks = styled.div`
  display: grid;

  grid-template-columns: 1fr 1fr;
`;

function ProjectView(props) {
  return (
    <>
      <ProjectTitle>
        {props.projectTitle}
      </ProjectTitle>
      <ProjectWrapper>
        <ProjectStack>

          <figure>
            <img
              src={props.firstTechIcon}
              alt="HTML"
              style={{ width: "50px", height: "50px" }}
            />
            <figcaption>HTML5</figcaption>
          </figure>


          <figure>
            <img
              src={props.secondTechIcon}
              alt={props.secondTechDesc}
              style={{ width: "50px", height: "50px" }}
            />
            <figcaption>CSS3</figcaption>
          </figure>

          <figure>
            <img
              src={props.thirdTechIcon}
              alt="JavaScript"
              style={{ width: "50px", height: "50px" }}
            />
            <figcaption>JavaScript</figcaption>
          </figure>

        </ProjectStack>
        <ProjectImage />
        <ProjectDesc>
          {props.projectDescription}
          <ProjectLinks>
            <figure>
              <img
                src={githubIcon}
                alt="GitHub"
                style={{ width: "50px", height: "50px" }}
              />
              <a href={props.projectCodeLink}>
                <figcaption>Code</figcaption>
              </a>
            </figure>
            <figure>
              <Web size="55px" />
              <a href={props.projectViewLink}>
                <figcaption>View</figcaption>
              </a>
            </figure>
          </ProjectLinks>

        </ProjectDesc>
      </ProjectWrapper>
    </>
  );
};

export default ProjectView;