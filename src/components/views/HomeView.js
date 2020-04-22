import React from 'react';
import styled from 'styled-components';
import mikolajPhoto from 'assets/images/mikolaj.jpg';

const HomeViewWrapper = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 575.98px) { 
    flex-direction: column;
   }
`;

const HomeViewLeft = styled.div`
  width: 50%;

  display: flex;
  justify-content: flex-end;
  margin-right: 1%;
`;

const HomeViewRight = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 575.98px) { 
    width: 90%;
   }
`;

const HomeViewName = styled.h1`
  margin-bottom: 1%;
  font-family: 'Paytone One', sans-serif;
  font-size: 4em;
  letter-spacing: 12px;
  text-align: left;
  color: #FFE48F;
  line-height: 1;

  @media (max-width: 575.98px) { 
    font-size: 2em;
   }

   @media (max-width: 767.98px) { 
     font-size: 3em;
    }
`;

const HomeViewPosition = styled.h2`
  margin-bottom: 5%;
  line-height: 2;
  text-align: left;
  letter-spacing: 2.5px;

  @media (max-width: 575.98px) { 
    margin: 0;
    font-size: 1em;
   }
`;

const HomeViewWelcome = styled.div`
text-align: left;
  p {
    font-size: 20px;
    white-space: nowrap;
    overflow: hidden;
    width: 100%;
    animation: text-focus-in 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;

    @media (max-width: 575.98px) { 
    font-size: 1em;
   }
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
}


`;

const HomeViewContent = styled.div`
  text-align: left;
  p {
    font-size: 3em;
    white-space: nowrap;
    overflow: hidden;
    width: 100%;
    margin-bottom: 5%;
    animation: type 3s steps(60, end);

    @media (max-width: 575.98px) { 
    font-size: 1em;
   }

   @media (min-width: 767.98px) { 
     font-size: 2em;
    }
  }

  @keyframes type{
  from {
    width: 0;
    }
  }

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
            width: '70%'
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
            a to moje portfolio ;-)
            <span>|</span>
          </p>
        </HomeViewContent>
      </HomeViewRight>
    </HomeViewWrapper>
  );
};

export default HomeView;