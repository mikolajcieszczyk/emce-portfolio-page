import React from 'react';

const PortfolioViewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
`;

const PortfolioViewGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 10px;

  width: 100%;

  @media (max-width: 575.98px) { 
    grid-template-columns: repeat(3, 1fr);
   }
`;

const PortfolioViewRectangleContainer = styled.div`
  display: flex;
  flex-direction: column;

   &:hover {
     opacity: 0.8;
   }
`;

const PortfolioViewRectangle = styled.div`
  display: flex;
  height: 100px;

 border: 2px solid #FFE48F;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;

  background: #FFE48F;

`;

const PortfolioViewRectangleCaption = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 30px;

  background: #FFE48F;
  color: #000;
  font-size: 12px;
  font-weight: 400;

  text-align: center;

  border-bottom: 2px solid #FFE48F;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

const ProjectLink = styled(Link)`
  text-decoration: none;
  color: #000;
  font-weight: 700;
`;

class ProjectTile extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: this.props.text }
    }

    onMouseEnter(e) {
        this.setState({ text: 'Szczegóły' })
    }

    onMouseLeave(e) {
        this.setState({ text: this.props.text })
    }

    render() {
        return(
          <ProjectLink to="/portfolio/nodejs-class-register">
            <PortfolioViewRectangleContainer
              onMouseEnter={this.onMouseEnter.bind(this)}
              onMouseLeave={this.onMouseLeave.bind(this)}
            >
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
                {text}
              </PortfolioViewRectangleCaption>
            </PortfolioViewRectangleContainer>
          </ProjectLink>
        )
    }
}

export default ProjectTile;