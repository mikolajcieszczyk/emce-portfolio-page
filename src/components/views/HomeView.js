import React from 'react';
import styled from 'styled-components';
import mikolajPhoto from 'assets/images/mikolaj.png';
import {Button} from 'components/atoms/Button';

const HomeViewWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  grid-column-gap: 5rem;

  width: 100%;
  height: 60vh;

  margin-top: 7%;
`;

const MikolajPhoto = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: end;
  align-items: center;
`;

const MikolajPhotoImg = styled.img`
  width: 80%;
`;

const WelcomeContent = styled.div`
  display: grid;
  grid-template-rows: repeat(4, 1fr);
`;

const MyNameIs = styled.div`
  display: grid;
  align-items: end;
  justify-content: start;

  

  p {
    font-size: 20px;
    font-weight: 200;
    white-space: nowrap;
    overflow: hidden;
    width: 100%;
    animation: type 1s steps(60, end);


    span {
      font-weight: 300;
    }

    span:last-child {
      color: #FFE48F;
      animation: blink 1s infinite;
      }
    @keyframes blink{
      to {
        opacity: .0;
        }
    }
  }

  @keyframes type{
  from {
    width: 0;
    }
  }
}
`;

const NameSurname = styled.div`
  display: grid;
  align-items: center;
  margin: 2% 0;
  font-size: 60px;
  font-weight: 900;
  text-align: left;
  text-transform: uppercase;
  color: #FFE48F;
  line-height: 1;
`;

const MyPosition = styled.h2`
  display: grid;
  align-items: start;

  font-size: 1.3em;
  font-weight: 100;
  letter-spacing: 5px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;

  margin: 8% 5% 0;
  
  

  > button:first-child {
    margin-right: 5%;
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
      <MikolajPhoto>
        <MikolajPhotoImg
          src={mikolajPhoto}
          alt="Mikolaj"
        />
      </MikolajPhoto>
      <WelcomeContent>
        <MyNameIs>
          <p>
            <span>Cześć,</span> nazywam się <span>_</span>
          </p>
        </MyNameIs>
        <NameSurname>
          Mikołaj
          Cięszczyk
        </NameSurname>
        <MyPosition>
          JUNIOR FRONT-END DEVELOPER
        </MyPosition>
        <ButtonsContainer>
          <Button secondary>PORTFOLIO</Button>
          <Button>KONTAKT</Button>
        </ButtonsContainer>
      </WelcomeContent>
    </HomeViewWrapper>
  )
}

export default HomeView;