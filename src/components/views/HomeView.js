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
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const HomeViewName = styled.h1`
  margin-bottom: 1%;
  font-family: 'Paytone One', sans-serif;
  font-size: 4em;
  letter-spacing: 10px;
  text-align: left;
  color: #FFE48F;
  line-height: 1;
`;

const HomeViewPosition = styled.h2`
  margin-bottom: 5%;
  line-height: 2;
  text-align: left;
`;

const HomeViewWelcome = styled.div`
text-align: left;
  p {
    font-size: 2em;
    white-space: nowrap;
    overflow: hidden;
    width: 100%;
    animation: type 3s steps(60, end); 
  }

  @keyframes type{ 
  from { 
    width: 0; 
    } 
  } 
`;

const HomeViewContent = styled(HomeViewWelcome)`
  font-size: 20px;

  span {
  color: #FFE48F;

  animation: blink 1s infinite;
  }

  @keyframes blink{
  to {
    opacity: .0;
    }
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
        <HomeViewWelcome>
          <p>
            Cześć, nazywam się
          </p>
        </HomeViewWelcome>
        <HomeViewName>MIKOŁAJ</HomeViewName>
        <HomeViewName>CIĘSZCZYK</HomeViewName>
        <HomeViewPosition>JUNIOR FRONT-END DEVELOPER</HomeViewPosition>
        <HomeViewContent>
          <p>
            a to moje portfolio! ;-)
            <span>|</span>
          </p>
        </HomeViewContent>
      </HomeViewRight>
    </HomeViewWrapper>
  );
};

export default HomeView;