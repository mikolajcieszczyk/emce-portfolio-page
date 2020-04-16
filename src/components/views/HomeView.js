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

const HomeViewContent = styled.div`
  font-size: 2em;
  text-align: left;

  p {
  white-space: nowrap;
  overflow: hidden;
  width: 100%;
  animation: type 2s steps(60, end); 
  }

  p:nth-child(3){
    font-size: 3em;
    margin-top: 5%;
    font-size: 40px;
    color: #FFE48F;
    animation: type2 4s steps(60, end);
  }

  span {
  animation: blink 1s infinite;
  }

  @keyframes type{ 
  from { 
    width: 0; 
    } 
  } 

  @keyframes type2{
    0%{
      width: 0;
      }
    50%{
      width: 0;
      }
    100%{
       width: 100; 
      } 
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
        <HomeViewTitle>MIKOŁAJ</HomeViewTitle>
        <HomeViewTitle>CIĘSZCZYK</HomeViewTitle>
        <HomeViewSecondTitle>JUNIOR FRONT-END DEVELOPER</HomeViewSecondTitle>
        <HomeViewContent>
          <p>
            Cześć!
          </p>
          <p>Jestem junior front-end developerem, </p>
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