import React from 'react';
import styled from 'styled-components';

import ViewTitle from 'components/atoms/ViewTitle';
import { mainTechnologies, secondaryTechnologies,  additionalTechnologies } from 'assets/data/viewsData';

const StackViewMainWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
`;

const StackViewLineWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;

  @media (max-width: 575.98px) { 
    flex-flow: column wrap;
    align-items: center;
   }
`;

const StackViewSquareWrapper = styled.div`
  width: 50%;

  display: flex;
  flex-flow: row wrap;
  justify-content: center;

  @media (max-width: 575.98px) { 
    width: 100%;
   }
`;

const StackViewColumnWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 575.98px) { 


    margin-top: 5%;
   }
`;

const StackViewImage = styled.figure`
  width: ${props => props.small ? "25%" : "20%"};

  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  @media (max-width: 575.98px) { 
    flex-flow: row wrap;
    justify-content: space-around;
    width: 40%;
   }

   @media (min-width: 576px) { 
    justify-content: flex-start
   }

  &:hover {
    opacity: 0.2;
  }

  figcaption {
      margin: 2%;
      font-weight: 700;
      width: 150px;

      @media (max-width: 575.98px) { 
        font-weight: 400;
      }

      @media (max-width: 991.98px) { 
        width: 100px;
      }
  }
`;


function StackView() {
  const mapMainTechnologies = mainTechnologies.map((el) => (
    <StackViewImage>
      <img
        key={el.id}
        src={el.src}
        alt={el.alt}
        style={{ width: "120px", height: "120px" }}
      />
      <figcaption>{el.caption}</figcaption>
    </StackViewImage>
  )
  );

  const mapSecondaryTechnologies = secondaryTechnologies.map((el) => (
    <StackViewImage small>
      <img
        key={el.id}
        src={el.src}
        alt={el.alt}
        style={{ width: "40px", height: "40px" }}
      />
      <figcaption>{el.caption}</figcaption>
    </StackViewImage>
  )
  )

  const mapAdditionalTechnologies = additionalTechnologies.map((el) => (
    <div id={el.id}>
      {el.component}
      <p style={{ color: "#FFD600", margin: "1%" }}>{el.text}</p>
    </div>
  ));

  return (
    <>
      <StackViewMainWrapper>

        <StackViewLineWrapper>
          <ViewTitle title="głównie koduję w technologiach" />
        </StackViewLineWrapper>

        <StackViewLineWrapper>
          {mapMainTechnologies}
        </StackViewLineWrapper>

        <StackViewLineWrapper>
          <ViewTitle title="ponadto używam" />
          
        </StackViewLineWrapper>

        <StackViewLineWrapper>
          <StackViewSquareWrapper>
            {mapSecondaryTechnologies}
          </StackViewSquareWrapper>

          <StackViewSquareWrapper>
            <ViewTitle title="zgodnie z zasadami" />
            <StackViewColumnWrapper>
              {mapAdditionalTechnologies}
            </StackViewColumnWrapper>
          </StackViewSquareWrapper>
        </StackViewLineWrapper>



      </StackViewMainWrapper>
    </>
  );
}

export default StackView;