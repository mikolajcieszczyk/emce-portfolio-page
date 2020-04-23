import React from 'react';

import htmlIcon from 'assets/images/htmlIcon.png';
import cssIcon from 'assets/images/cssIcon.png';
import sassIcon from 'assets/images/icons8-sass-avatar-144.png';
import jsIcon from 'assets/images/jsIcon.png';
import reactIcon from 'assets/images/reactIcon.png';
import jqueryIcon from 'assets/images/jqueryIcon.png';
import bootstrapIcon from 'assets/images/bootstrapIcon.png';
import scIcon from 'assets/images/scIcon.png';
import npmIcon from 'assets/images/npmIcon.png';
import sbIcon from 'assets/images/storybookIcon.png';
import adIcon from 'assets/images/atomicDesignIcon.png';
import githubIcon from 'assets/images/githubIcon.png';
import gitIcon from 'assets/images/gitIcon.png';
import yarnIcon from 'assets/images/yarnIcon.png';
import vscodeIcon from 'assets/images/vsCodeIcon.png';
import xdIcon from 'assets/images/xdIcon.png';
import eslintIcon from 'assets/images/esLintIcon.png';
import { TabletMobileCombo } from '@styled-icons/entypo';
import { MobileFriendly } from '@styled-icons/material-outlined';
import { Search } from '@styled-icons/fa-solid';

import AstronomyBg from 'assets/images/astronomyQuizImg.png';
import TictactoeBg from 'assets/images/tictactoeImg.png';
import TodolistBg from 'assets/images/todoListImg.png';
import WorkRecordBg from 'assets/images/wraImg.png';
import NjscrBg from 'assets/images/ncrImg.png';
import someCompanyPageBg from 'assets/images/scpImg.png';

import { PortfolioViewRectangle, PortfolioViewRectangleCaption, ProjectLink, PortfolioViewRectangleContainer } from 'components/views/PortfolioView';

import techIcon from 'assets/images/techIcon.png';


export const projectTiles = [
  {
    id: 96,
    component: <ProjectLink to="/portfolio/nodejs-class-register">
      <PortfolioViewRectangleContainer>
        <PortfolioViewRectangle
          alt="node js class register"
          style={{
          backgroundImage: `url(${NjscrBg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        />
        <PortfolioViewRectangleCaption>
          NodeJS Class Register
        </PortfolioViewRectangleCaption>
      </PortfolioViewRectangleContainer>
    </ProjectLink>,
  },
    {
        id: 98,
        component: <ProjectLink to="/portfolio/work-record-app">
          <PortfolioViewRectangleContainer>
            <PortfolioViewRectangle
              alt="work record app"
              style={{
                backgroundImage: `url(${WorkRecordBg})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"
            }}
            />
            <PortfolioViewRectangleCaption>
              Work Record App
            </PortfolioViewRectangleCaption>
          </PortfolioViewRectangleContainer>
        </ProjectLink>,

    },
    {
        id: 97,
        component: <ProjectLink to="/portfolio/tictac">
          <PortfolioViewRectangleContainer>
            <PortfolioViewRectangle
              alt="tic tac toe"
              style={{ 
                backgroundImage: `url(${TictactoeBg})`, 
                backgroundPosition: "center", 
                backgroundSize: "cover", 
                backgroundRepeat: "no-repeat" 
                }}
            />
            <PortfolioViewRectangleCaption>
              Tic Tac Toe
            </PortfolioViewRectangleCaption>
          </PortfolioViewRectangleContainer>
        </ProjectLink>,
    },
  {
    id: 94,
    component: <ProjectLink to="/portfolio/some-company-page">
      <PortfolioViewRectangleContainer>
        <PortfolioViewRectangle
          alt="SomeCompanyPage"
          style={{
          backgroundImage: `url(${someCompanyPageBg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
        }}
        />
        <PortfolioViewRectangleCaption>
          Some Company Page
        </PortfolioViewRectangleCaption>
      </PortfolioViewRectangleContainer>
    </ProjectLink>,
  },
    {
        id: 99,
        component: <ProjectLink to="/portfolio/astronomy-quiz">
          <PortfolioViewRectangleContainer>
            <PortfolioViewRectangle
              alt="astronomy quiz"
              style={{ 
                backgroundImage: `url(${AstronomyBg})`, 
                backgroundPosition: "center", 
                backgroundSize: "cover", 
                backgroundRepeat: "no-repeat" }}
            />
            <PortfolioViewRectangleCaption>
              Astronomy Quiz
            </PortfolioViewRectangleCaption>
          </PortfolioViewRectangleContainer>
        </ProjectLink>,
    },
    {
        id: 95,
        component: <ProjectLink to="/portfolio/todolist">
          <PortfolioViewRectangleContainer>
            <PortfolioViewRectangle
              alt="Todolist"
              style={{
                backgroundImage: `url(${TodolistBg})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"
            }}
            />
            <PortfolioViewRectangleCaption>
              To-Do List
            </PortfolioViewRectangleCaption>
          </PortfolioViewRectangleContainer>
        </ProjectLink>,
    },
]

export const mainTechnologies = [
    { id: 1, src: htmlIcon, alt: "htmlIcon", caption: "HTML5", },
    { id: 2, src: cssIcon, alt: "cssIcon", caption: "CSS3" },
    { id: 3, src: sassIcon, alt: "sassIcon", caption: "Sass/SCSS" },
    { id: 4, src: jsIcon, alt: "jsIcon", caption: "JavaScript" },
    { id: 5, src: reactIcon, alt: "reactIcon", caption: "ReactJS", },
];

export const secondaryTechnologies = [
    { id: 6, src: jqueryIcon, alt: "jqueryIcon", caption: "jQuery" },
    { id: 7, src: bootstrapIcon, alt: "bootstrapIcon", caption: "Bootstrap" },
    { id: 8, src: scIcon, alt: "styledComponentsIcon", caption: "Styled Components" },
    { id: 9, src: vscodeIcon, alt: "vscodeIcon", caption: "VSCode" },
    { id: 54, src: xdIcon, alt: "xdIcon", caption: "Adobe XD" },
    { id: 54, src: eslintIcon, alt: "eslintIcon", caption: "ESLint" },
    { id: 11, src: npmIcon, alt: "npmIcon", caption: "NPM" },
    { id: 12, src: yarnIcon, alt: "yarnIcon", caption: "YARN" },
    { id: 12, src: sbIcon, alt: "sbIcon", caption: "Storybook" },
    { id: 13, src: adIcon, alt: "adIcon", caption: "Atomic Design" },
    { id: 14, src: gitIcon, alt: "gitIcon", caption: "Git" },
    { id: 15, src: githubIcon, alt: "githubIcon", caption: "GitHub" },
];

export const tertiaryTechnologies = [
    
];

export const additionalTechnologies = [
    {
        id: 16,
        component: <TabletMobileCombo alt="rwdIcon" size="60" title="RWD" />,
        text: 'Responsive Web Design',
    },
    {
        id: 17,
        component: <MobileFriendly alt="mobileFirstIcon" size="60" title="Mobile First" />,
        text: 'Mobile First',
    },
    {
        id: 18,
        component: <Search alt="seoIcon" size="60" title="SEO" />,
        text: 'Search Engine Optimization',
    },
];