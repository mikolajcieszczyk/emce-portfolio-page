import React from 'react';
import styled from 'styled-components';


import htmlIcon from 'assets/images/icons8-html-5-144.png';
import cssIcon from 'assets/images/icons8-css3-144.png';
import sassIcon from 'assets/images/icons8-sass-avatar-144.png';
import jsIcon from 'assets/images/icons8-javascript-144.png';
import reactIcon from 'assets/images/icons8-react-160.png';

import jqueryIcon from 'assets/images/iconfinder_jquery_308442.png';
import bootstrapIcon from 'assets/images/icons8-bootstrap-144.png';
import scIcon from 'assets/images/styled-components.png';
import seoIcon from 'assets/images/iconfinder_Graph-Magnifier_379472.png';
import npmIcon from 'assets/images/icons8-npm-144.png';
import yarnIcon from 'assets/images/iconfinder_yarn_4691251.png';
import sbIcon from 'assets/images/storybook.svg';
import gitIcon from 'assets/images/icons8-github-150.png';

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

  height: 200px;

  /* background: #FFE48F; */


  figcaption {
      margin-top: 5%;
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
        style={{ width: "144px" }}
      />
      <figcaption>{el.caption}</figcaption>
    </StackViewImage>
  )
  );

  const additionalTechnologies = [
    { id: 14, src: TabletMobileCombo, alt: "rwdIcon", size: "15", title: "RWD", text: "Responsive Web Design" },
    { id: 15, src: MobileFriendly, alt: "mobileFirstIcon", size: "15", title: "Mobile First", text: "Mobile First" },
    { id: 16, src: Search, alt: "seoIcon", size: "15", title: "SEO", text: "Search Engine Optimization" }
  ]

  const mapAdditionalTechnologies = additionalTechnologies.map((el) => (
    <div>
      <{el.src}
        key={el.id}
        size={el.size}
        title={el.title}
        alt={el.alt}
      />
      <p>{el.text}</p>
    </div>
  )
  )

  const secondaryTechnologies = [
    { id: 6, src: jqueryIcon, alt: "jqueryIcon", caption: "jQuery" },
    { id: 7, src: bootstrapIcon, alt: "bootstrapIcon", caption: "Bootstrap" },
    { id: 8, src: scIcon, alt: "styledComponentsIcon", caption: "Styled Components" },
    { id: 10, src: seoIcon, alt: "seoIcon", caption: "SEO" },
    { id: 11, src: npmIcon, alt: "npmIcon", caption: "NPM" },
    { id: 12, src: yarnIcon, alt: "yarnIcon", caption: "YARN" },
    { id: 12, src: sbIcon, alt: "sbIcon", caption: "Storybook" },
    { id: 13, src: gitIcon, alt: "gitIcon", caption: "Git" },
  ];

  const mapSecondaryTechnologies = secondaryTechnologies.map((el) => (
    <StackViewImage>
      <img
        key={el.id}
        src={el.src}
        alt={el.alt}
        style={{ width: "60px" }}
      />
      <figcaption>{el.caption}</figcaption>
    </StackViewImage>
  )
  )

  return (
    <>
      <StackViewWrapper>
        <h2>koduję głównie w technologiach</h2>
        <StackViewIconsContainer>
          {mapMainTechnologies}
        </StackViewIconsContainer>
        <h2>
          zgodnie z zasadami
        </h2>
        <StackViewIconsContainer>
          {mapAdditionalTechnologies}
        </StackViewIconsContainer>
        <h2>PONADTO</h2>
        <StackViewIconsContainer>
          {mapSecondaryTechnologies}
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