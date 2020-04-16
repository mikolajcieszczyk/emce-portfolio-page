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
  margin-bottom: 1%;
  font-family: 'Paytone One', sans-serif;
  font-size: 4em;
  letter-spacing: 10px;
  text-align: left;
  color: #FFE48F;
  line-height: 1;
`;

const HomeViewSecondTitle = styled.h2`
  margin-bottom: 5%;
  line-height: 2;
  text-align: left;
`;

const HomeViewContent = styled.p`
  font-size: 2em;
  text-align: left;

  p {
    text-align: justify;
  }

  p:last-child {
    margin-top: 2%;
    color: #FFE48F;
    text-align: center;
  }
`;

function HomeView() {
  return (
    <HomeViewWrapper>
      <HomeViewLeft>
        <img
          src={mikolajPhoto}
          alt="Mikolaj"
          style={{
            width: '450px'
          }}
        />
      </HomeViewLeft>
      <HomeViewRight>
        <HomeViewTitle>MIKOŁAJ</HomeViewTitle>
        <HomeViewTitle>CIĘSZCZYK</HomeViewTitle>
        <HomeViewSecondTitle>JUNIOR FRONT-END DEVELOPER</HomeViewSecondTitle>
        <HomeViewContent>
          Cześć!
          <p>Jestem junior front-end developerem. Czerpię dużą przyjemność z odkrywania magii programowania i procesu tworzenia.</p>
          <p>Poznaj moje projekty ;-)</p>
        </HomeViewContent>
      </HomeViewRight>
    </HomeViewWrapper>
  );
};

export default HomeView;