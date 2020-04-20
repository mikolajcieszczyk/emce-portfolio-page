import React from 'react';
import styled from 'styled-components';

import { mainTechnologies, secondaryTechnologies,  additionalTechnologies } from 'assets/data/viewsData';

const StackViewMainWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
`;

const StackViewTitle = styled.h2`
   color: #FFE48F;
   text-align: ${props => props.left ? "left" : "center"};
   text-transform: uppercase;

   margin: 1% 0;

   animation: text-focus-in 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;

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

const StackViewLineWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`;

const StackViewSquareWrapper = styled.div`
  width: 50%;

  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

const StackViewColumnWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StackViewImage = styled.figure`
  width: ${props => props.small ? "25%" : "20%"};

  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  &:hover {
    opacity: 0.2;
  }

  figcaption {
      margin: 2%;
      font-weight: 700;
      width: 150px;
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
          <StackViewTitle>
            głównie koduję w technologiach
          </StackViewTitle>
        </StackViewLineWrapper>

        <StackViewLineWrapper>
          {mapMainTechnologies}
        </StackViewLineWrapper>

        <StackViewLineWrapper>
          <StackViewTitle>
            ponadto używam
          </StackViewTitle>
          <StackViewTitle>
            zgodnie z zasadami
          </StackViewTitle>
        </StackViewLineWrapper>

        <StackViewLineWrapper>
          <StackViewSquareWrapper>
            {mapSecondaryTechnologies}
          </StackViewSquareWrapper>

          <StackViewSquareWrapper>
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