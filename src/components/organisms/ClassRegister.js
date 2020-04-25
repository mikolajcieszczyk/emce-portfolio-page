import React from 'react';
import styled from 'styled-components';

import NjscrBg from 'assets/images/ncrImg.png';
import reactIcon from 'assets/images/reactIcon.png';
import scIcon from 'assets/images/scIcon.png';
import sbIcon from 'assets/images/storybookIcon.png';
import adIcon from 'assets/images/atomicDesignIcon.png';
import { Code } from '@styled-icons/entypo';


const ProjectWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 5%;

  margin: 3% 0 3%;

  animation: text-focus-in 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;

  @media (max-width: 767.98px) { 
    grid-template-columns: 1fr;
   }

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

const ProjectDemoLink = styled.a`
  text-decoration: none;
  color: #000;
  font-size: 2em;
  font-weight: 700;
`;

const ProjectImage = styled.div`
  display: grid;
  align-items: center;

  height: 400px;

  background-image: url(${NjscrBg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  border: 2px solid #FFE48F;
  border-radius: 20px;

    @media (max-width: 767.98px) { 
      display: none;
    }

    @media (max-width: 991.98px) { 
      height: 500px;
    }

   div {
    display: grid;
    align-items: center;

    height: 100px;

    background-color: ${ (props) => props.caption ? "rgba(255, 229, 143, 0.68)" : "inherit"};

    text-align: center;
   }
`;

const ProjectTitle = styled.h2`
  display: grid;
  align-items: center;
  
   a {
     color: #FFE48F;
     text-decoration: none;
     text-transform: capitalize;

     &:hover {
       text-decoration: underline;
       text-decoration-color: #fff;
     }
   }

   @media (max-width: 767.98px) { 
      margin: 5% 0;

        a {
            text-decoration: underline;
            text-decoration-color: #fff;
        }
    }

    @media (max-width: 991.98px) { 
      a {
            text-decoration: underline;
            text-decoration-color: #fff;
        }
    }
`;

const ProjectDesc = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  justify-items: stretch;

  height: 400px;

  @media (max-width: 767.98px) { 
      grid-template-rows: 1fr;
    }

  @media (max-width: 991.98px) { 
      height: 500px;
    }
`;

const ProjectText = styled.p`
  text-align: justify;

    span { 
      color: #FFE48F;
    }

    @media (max-width: 767.98px) { 
      margin-bottom: 5%;
    }
`;

const ProjectInWhat = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  justify-content: center;
  align-items: center;

  @media (max-width: 767.98px) { 
    grid-template-columns: 1fr;
  }

  @media (max-width: 991.98px) { 
    grid-template-columns: 1fr;
    margin-top: 5%;
  }
`;

const ProjectTech = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

    figure {
      text-align: center;

      &:hover {
      img {
        opacity: 0.8;
      }
      }
    }

    figcaption {
      font-size: 12px;
      font-weight: 400;
    }
`;

const ProjectLinks = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  align-items: start;

    a {
      color: white;
      text-decoration: none;
    }

    figure {
      padding: 5%;

        &:hover {
        border: 2px solid #FFE48F;
        border-radius: 20px;
        }
    }

    figcaption {
      color: #FFE48F;
      font-weight: 400;
      text-align: center;
    }
`;

class ClassRegister extends React.Component {
  constructor(props){
    super(props);

    this.showCaption = this.showCaption.bind(this);
    this.hideCaption = this.hideCaption.bind(this);

    this.state = {
      caption: false,
      text: ""
    };
  }

  showCaption() {
    this.setState({ 
      caption: true, 
      text: "ZOBACZ DEMO" 
      });
  }

  hideCaption() {
    this.setState({ 
      caption: false, 
      text: "" 
      });
  }

  render() {
    const {text} = this.state;

    return (
      <ProjectWrapper>
        <ProjectDemoLink 
          href="https://github.com/mikolajcieszczyk/nodejs-class-register-v2"
          rel="noopener noreferrer"
          target="_blank"
          title="DEMO"
        >
          <ProjectImage
            onMouseEnter={this.showCaption}
            onMouseLeave={this.hideCaption}
            caption={this.state.caption}
          >
            <div>
              {text}
            </div>
          </ProjectImage>
        </ProjectDemoLink>
        <ProjectDesc>
          <ProjectTitle>
            <a
              href="https://github.com/mikolajcieszczyk/nodejs-class-register-v2"
              rel="noopener noreferrer"
              target="_blank"
              title="DEMO"
            >
              NodeJS Class Register
            </a>
          </ProjectTitle>
          <ProjectText>
            <span>Projekt dziennika elektronicznego</span>
            {' '}
            we wczesnej fazie produkcyjnej. Odpowiadam w nim za front-end. Jest już cała struktura folderów i komponentów zaprojektowana zgodnie z Atomic Design, zrobiony podgląd komponentów w StoryBook oraz zakodowane przekazywanie propsów w nawigacji do widoku Admina, Ucznia oraz Nauczyciela. Prace w toku.
          </ProjectText>
          <ProjectInWhat>
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
                <a 
                  href="https://github.com/mikolajcieszczyk/nodejs-class-register-v2" 
                  rel="noopener noreferrer"
                  target="_blank"
                  title="KOD"
                >
                  <Code size="60px" />
                  <figcaption>KOD</figcaption>
                </a>
              </figure>
            </ProjectLinks>
          </ProjectInWhat>
        </ProjectDesc>
      </ProjectWrapper>
    )
  }
}

export default ClassRegister;