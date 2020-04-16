import React from 'react';
import styled from 'styled-components';
import htmlIcon from 'assets/images/icons8-html-5-144.png';
import cssIcon from 'assets/images/icons8-css3-144.png';
import sassIcon from 'assets/images/icons8-sass-avatar-144.png';
import jsIcon from 'assets/images/icons8-javascript-144.png';
import reactIcon from 'assets/images/icons8-react-160.png';

const StackViewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  h1 {
    margin: 1%;
    color: #FFE48F;
  }
`;

const StackViewIconsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  width: 100%;
`;

const StackViewImage = styled.figure`
  display: flex;
  flex-direction: column;

  height: 200px;

  figcaption {
      font-weight: 700;
  }
`;

function StackView() {
    const technologies = [
        { id: 1, src: htmlIcon, alt: "htmlIcon", caption: "HTML5", },
        { id: 2, src: cssIcon, alt: "cssIcon", caption: "CSS3" },
        { id: 3, src: sassIcon, alt: "sassIcon", caption: "SASS" },
        { id: 2, src: jsIcon, alt: "jsIcon", caption: "JavaScript" },
        { id: 5, src: reactIcon, alt: "reactIcon", caption: "ReactJS", },
    ]

    const mapTechnologies = technologies.map((el) => (
      <StackViewImage>
        <img
          key={el.id}
          src={el.src}
          alt={el.alt}
          style={{ 
                    width: "144px" 
                    }}
        />
        <figcaption>{el.caption}</figcaption>
      </StackViewImage>
    )
    );
    return (
      <>
        <StackViewWrapper>
          <h1>GŁÓWNE TECHNOLOGIE</h1>
          <StackViewIconsContainer>
            {mapTechnologies}
          </StackViewIconsContainer>
          <h1>PONADTO UŻYWAM</h1>
        </StackViewWrapper>
      </>
    );
}

export default StackView;