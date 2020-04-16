import React from 'react';
import styled from 'styled-components';
import mikolajPhoto from 'assets/images/mikolaj.jpg';

const HomeViewWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const HomeViewLeft = styled.div`
margin-right: 1%;
`;

const HomeViewRight = styled.div`
width: 50%;

`;

const HomeViewTitle = styled.h1`
  font-family: 'Paytone One', sans-serif;
  font-size: 3em;
  letter-spacing: 10px;
  text-align: left;
  color: #FFE48F;
  line-height: 1;
`;

const HomeViewSecondTitle = styled.h2`
  line-height: 2;
  text-align: left;
`;

const HomeViewContent = styled.p`
  text-align: left;
  
`;

function HomeView() {
    return (
      <HomeViewWrapper>
        <HomeViewLeft>
          <img
            src={mikolajPhoto}
            alt="Mikolaj"
            style={{
                        width: '350px'
                    }}
          />
        </HomeViewLeft>
        <HomeViewRight>
          <HomeViewTitle>MIKOŁAJ</HomeViewTitle>
          <HomeViewTitle>CIĘSZCZYK</HomeViewTitle>
          <HomeViewSecondTitle>JUNIOR FRONT-END/WEB DEVELOPER</HomeViewSecondTitle>
          <HomeViewContent>Hi, I am a junior front/web developer with great enthusiasm for learning and great pleasure in creating websites</HomeViewContent>
        </HomeViewRight>
      </HomeViewWrapper>
    );
};

export default HomeView;