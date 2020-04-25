import React from 'react';
import styled from 'styled-components';

import { Link } from "react-router-dom";


export const PortfolioViewRectangleContainer = styled.div`
  display: flex;
  flex-direction: column;

   &:hover {
     opacity: 0.8;
   }
`;

export const PortfolioViewRectangle = styled.div`
  display: flex;
  height: 100px;

 border: 2px solid #FFE48F;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;

  background: #FFE48F;

`;

export const PortfolioViewRectangleCaption = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 30px;

  background: #FFE48F;
  color: #000;
  font-size: 12px;
  font-weight: ${ (props) => props.bolder ? "900" : "400"};

  text-align: center;

  border-bottom: 2px solid #FFE48F;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

export const ProjectLink = styled(Link)`
  text-decoration: none;
  color: #000;
  font-weight: 700;
`;

class ProjectTile extends React.Component {
    constructor(props) {
        super(props);

      this.boldCaption = this.boldCaption.bind(this);
      this.unboldCaption = this.unboldCaption.bind(this);

        this.state = { 
          text: this.props.text,
          bolder: false
         }
    }

    boldCaption() {
        this.setState({ 
          text: "KLIK",
          bolder: true
         })
    }

    unboldCaption() {
        this.setState({ 
          text: this.props.text,
          bolder: false
         })
    }

    render() {
        const { text } = this.state;

        return(
          <ProjectLink to={this.props.url}>
            <PortfolioViewRectangleContainer
              onMouseEnter={this.boldCaption}
              onMouseLeave={this.unboldCaption}
            >
              <PortfolioViewRectangle
                alt={this.props.alt}
                style={{
                        backgroundImage: `url(${this.props.bg})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                    }}
              />
              <PortfolioViewRectangleCaption
                bolder={this.state.bolder}
              >
                {text}
              </PortfolioViewRectangleCaption>
            </PortfolioViewRectangleContainer>
          </ProjectLink>
        )
    }
}

export default ProjectTile;