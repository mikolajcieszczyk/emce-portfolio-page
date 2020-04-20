import React from 'react';
import styled from 'styled-components';

import WorkRecordBg from 'assets/images/workhour-record-app-img.png';
import htmlIcon from 'assets/images/icons8-html-5-144.png';
import cssIcon from 'assets/images/icons8-css3-144.png';
import jsIcon from 'assets/images/icons8-javascript-144.png';
import githubIcon from 'assets/images/GitHub-Mark-Light-120px-plus.png';
import { Web } from '@styled-icons/foundation';


const ProjectWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 2fr;

  height: 250px;

  /* border: 1px solid white; */
`;

const ProjectTitle = styled.h2`
  color: #FFE48F;
`;

const ProjectStack = styled.div`
  margin-top: auto;
  margin-bottom: auto;
`;

const ProjectImage = styled.div`
  background-image: url(${WorkRecordBg});
  background-size: cover;
  background-repeat: no-repeat;
`;

const ProjectDesc = styled.div`
  padding: 1%;
`;

const ProjectLinks = styled.div`
  margin-top: 5%;

  display: grid;
  grid-template-columns: 1fr 1fr;
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
            Enim aliqua elit ullamco aliquip et aliquip magna duis minim mollit.
            Do deserunt deserunt aliqua consectetur amet ex tempor et incididunt ullamco.
            Cillum do occaecat id in quis duis sit id sunt dolor irure.
          </p>
          <p>
            Enim aliqua elit ullamco aliquip et aliquip magna duis minim mollit.
            Do deserunt deserunt aliqua consectetur amet ex tempor et incididunt ullamco.
            Cillum do occaecat id in quis duis sit id sunt dolor irure.
          </p>

          <ProjectLinks>
            <figure>
              <img
                src={githubIcon}
                alt="GitHub"
                style={{ width: "50px", height: "50px" }}
              />
              <figcaption>Code</figcaption>
            </figure>
            <figure>
              <Web size="55px" />
              <figcaption>View</figcaption>
            </figure>
          </ProjectLinks>

        </ProjectDesc>
      </ProjectWrapper>
    </>
  );
};

export default WorkRecordApp;