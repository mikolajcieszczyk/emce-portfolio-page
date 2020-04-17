import React from 'react';
import styled from 'styled-components';


import htmlIcon from 'assets/images/icons8-html-5-144.png';
import cssIcon from 'assets/images/icons8-css3-144.png';
import sassIcon from 'assets/images/icons8-sass-avatar-144.png';
import jsIcon from 'assets/images/icons8-javascript-144.png';
import reactIcon from 'assets/images/iconfinder_React.js_logo_1174949.png';

import jqueryIcon from 'assets/images/iconfinder_jquery_308442.png';
import bootstrapIcon from 'assets/images/icons8-bootstrap-144.png';
import scIcon from 'assets/images/styled-components.png';
import npmIcon from 'assets/images/icons8-npm-144.png';
import sbIcon from 'assets/images/storybook-icon.png';
import githubIcon from 'assets/images/GitHub-Mark-Light-120px-plus.png';
import gitIcon from 'assets/images/Git-Logo-White.png';
import yarnIcon from 'assets/images/yarn-icon.png';

import { TabletMobileCombo } from '@styled-icons/entypo';
import { MobileFriendly } from '@styled-icons/material-outlined';
import { Search } from '@styled-icons/fa-solid';



const StackViewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  h2 {
    margin: 1%;
    color: #FFE48F;
    text-transform: uppercase;
  }
`;

const StackViewIconsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  width: 100%;
  margin-bottom: 2%;

  > div {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;

    p {
      margin-left: 2%;
    }
  }
`;

const StackViewImage = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  /* height: 200px; */

width: 100%;

  figcaption {
      margin-top: 1%;
      font-weight: 700;
  }
`;

function StackView() {
  const mainTechnologies = [
    { id: 1, src: htmlIcon, alt: "htmlIcon", caption: "HTML5", },
    { id: 2, src: cssIcon, alt: "cssIcon", caption: "CSS3" },
    { id: 3, src: sassIcon, alt: "sassIcon", caption: "Sass/SCSS" },
    { id: 4, src: jsIcon, alt: "jsIcon", caption: "JavaScript" },
    { id: 5, src: reactIcon, alt: "reactIcon", caption: "ReactJS", },
  ];

  const mapMainTechnologies = mainTechnologies.map((el) => (
    <StackViewImage>
      <img
        key={el.id}
        src={el.src}
        alt={el.alt}
        style={{ width: "144px", height: "144px" }}
      />
      <figcaption>{el.caption}</figcaption>
    </StackViewImage>
  )
  );  

  const secondaryTechnologies = [
    { id: 6, src: jqueryIcon, alt: "jqueryIcon", caption: "jQuery" },
    { id: 7, src: bootstrapIcon, alt: "bootstrapIcon", caption: "Bootstrap" },
    { id: 8, src: scIcon, alt: "styledComponentsIcon", caption: "Styled Components" },
  ];

  const mapSecondaryTechnologies = secondaryTechnologies.map((el) => (
    <StackViewImage>
      <img
        key={el.id}
        src={el.src}
        alt={el.alt}
        style={{ width: "60px", height: "60px" }}
      />
      <figcaption>{el.caption}</figcaption>
    </StackViewImage>
  )
  )

  const tertiaryTechnologies = [
    { id: 11, src: npmIcon, alt: "npmIcon", caption: "NPM" },
    { id: 12, src: yarnIcon, alt: "yarnIcon", caption: "YARN" },
    { id: 12, src: sbIcon, alt: "sbIcon", caption: "Storybook" },
    { id: 13, src: gitIcon, alt: "gitIcon", caption: "Git" },
    { id: 14, src: githubIcon, alt: "githubIcon", caption: "GitHub" },
  ]

  const mapTertiaryTechnologies = tertiaryTechnologies.map((el) => (
    <StackViewImage>
      <img
        key={el.id}
        src={el.src}
        alt={el.alt}
        style={{ width: "60px", height: "60px" }}
      />
      <figcaption>{el.caption}</figcaption>
    </StackViewImage>
  )
  )

  const additionalTechnologies = [
    {
      id: 15,
      component: <TabletMobileCombo alt="rwdIcon" size="15" title="RWD" />,
      text: 'Responsive Web Design',
    },
    {
      id: 16,
      component: <MobileFriendly alt="mobileFirstIcon" size="15" title="Mobile First" />,
      text: 'Mobile First',
    },
    {
      id: 17,
      component: <Search alt="seoIcon" size="15" title="SEO" />,
      text: 'Search Engine Optimization',
    },
  ];

  const mapAdditionalTechnologies = additionalTechnologies.map((el) => (
    <div id={el.id}>
      {el.component}
      <p>{el.text}</p>
    </div>
  ));

  return (
    <>
      <StackViewWrapper>
        <h2>koduję głównie w technologiach</h2>
        <StackViewIconsContainer>
          {mapMainTechnologies}
        </StackViewIconsContainer>
        <StackViewIconsContainer>
          {mapSecondaryTechnologies}
        </StackViewIconsContainer>
        <h2>
          zgodnie z zasadami
        </h2>
        <StackViewIconsContainer>
          {mapAdditionalTechnologies}
        </StackViewIconsContainer>
        <h2>PONADTO korzystam z</h2>
        <StackViewIconsContainer>
          {mapTertiaryTechnologies}
        </StackViewIconsContainer>
        
        {/* <span>Atomic Design</span> */}


        {/* <h1>PROJEKTY KODUJĘ Z:</h1>
          <span>VSCode</span>
          <span>ESLint</span>
          <span>Prettier</span>
          <span>Linux</span>
          <span>Adobe XD</span>  */}
      </StackViewWrapper>
    </>
  );
}

export default StackView;