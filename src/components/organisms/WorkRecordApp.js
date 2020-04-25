import React from 'react';
import styled from 'styled-components';

import WorkRecordBg from 'assets/images/wraImg.png';
import htmlIcon from 'assets/images/htmlIcon.png';
import sassIcon from 'assets/images/icons8-sass-avatar-144.png';
import jqueryIcon from 'assets/images/jqueryIcon.png';
import jsIcon from 'assets/images/jsIcon.png';
import mongoIcon from 'assets/images/mongoIcon.png';
import expressIcon from 'assets/images/expressJsIcon.png';
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

  background-image: url(${WorkRecordBg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  border: 2px solid #FFE48F;
  border-radius: 20px;

    @media (max-width: 767.98px) { 
      display: none;
    }

    @media (max-width: 991.98px) { 
      height: 650px;
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
      margin: 5% 0;

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
  grid-template-columns: repeat(3, 1fr);

    figure {
      text-align: center;
      margin: 5%;

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

class WorkRecordApp extends React.Component {
  constructor(props) {
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
    const { text } = this.state;

    return (
      <ProjectWrapper>
        <ProjectDemoLink
          href="https://github.com/mikolajcieszczyk/work-record-app"
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
              href="https://github.com/mikolajcieszczyk/work-record-app"
              rel="noopener noreferrer"
              target="_blank"
              title="DEMO"
            >
              Work Record App
            </a>
          </ProjectTitle>
          <ProjectText>
            <span>Autorska aplikacja</span>
            {' '}
            przeznaczona do użytku dla wszelkiej maści freelancerów, korepetytorów lub... trenerów tenisa (moja motywacja!) ;-)
            {' '}
            <span>Umożliwia dodawanie/edycję/usuwanie klientów,</span>
            {' '}
            wraz z ich predefiniowanymi stawkami i notatkami, dodawanie przepracowanych godzin, które są grupowane w okresy miesięczne.
            {' '}
            <span>Głównym pożytkiem</span>
            {' '}
            płynącym z aplikacji jest możliwość generowania raportów miesięcznych, które można wyeksportować do PDF i przedstawić pracodawcy lub schować do segregatora.
          </ProjectText>
          <ProjectInWhat>
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
                  alt="SASS"
                  style={{ width: "30px", height: "30px" }}
                />
                <figcaption>Sass</figcaption>
              </figure>

              <figure>
                <img
                  src={jsIcon}
                  alt="JavaScript"
                  style={{ width: "30px", height: "30px" }}
                />
                <figcaption>JavaScript</figcaption>
              </figure>

              <figure>
                <img
                  src={jqueryIcon}
                  alt="jQuery"
                  style={{ width: "30px", height: "30px" }}
                />
                <figcaption>jQuery</figcaption>
              </figure>

              <figure>
                <img
                  src={mongoIcon}
                  alt="MongoDB"
                  style={{ width: "30px", height: "30px" }}
                />
                <figcaption>MongoDB</figcaption>
              </figure>

              <figure>
                <img
                  src={expressIcon}
                  alt="ExpressJS"
                  style={{ width: "30px", height: "30px" }}
                />
                <figcaption>ExpressJS</figcaption>
              </figure>
            </ProjectTech>
            <ProjectLinks>
              <figure>
                <a
                  href="https://github.com/mikolajcieszczyk/work-record-app"
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

export default WorkRecordApp;