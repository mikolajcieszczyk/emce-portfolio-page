import React from 'react';
import styled from 'styled-components';

import ViewTitle from 'components/atoms/ViewTitle';
import { mainTechnologies, secondaryTechnologies, additionalTechnologies } from 'assets/data/viewsData';

const StackViewWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 2fr 1fr 1fr 1fr 1fr;
  grid-gap: 1rem;
  justify-items: stretch;

  @media (max-width: 767.98px) { 
    grid-template-rows: 2% auto auto auto auto auto;
   }
`;

const StackViewTitle = styled.div`
  display: grid;
  justify-items: center;
  align-items: start;
`;

const StackViewSubtitle = styled(StackViewTitle)`
  align-items: center;
`;

const StackViewImage = styled.figure`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;

  figcaption {
      margin: 5% 0;
      font-weight: 700;
      text-align: center;
  }
`;

const MainTechnologies = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-items: center;
  align-items: start;

  @media (max-width: 767.98px) { 
    grid-template-columns: 1fr 1fr;
   }
`;

const SecondaryTechnologies = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  justify-items: center;
  align-items: center;

  @media (max-width: 767.98px) { 
    grid-template-columns: 1fr 1fr;
   }
`;

const AdditionalTechnologies = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  align-items: start;

  > div {
    text-align: center;

    p {
      margin-top: 5%;

      @media (max-width: 767.98px) { 
        margin-bottom: 5%;
      }
    }
  }

  @media (max-width: 767.98px) { 
    grid-template-columns: 1fr;
    margin-bottom: 5%;
   }
`;

function StackView() {
  const mapMainTechnologies = mainTechnologies.map((el) => (
    <StackViewImage>
      <img
        key={el.id}
        src={el.src}
        alt={el.alt}
      />
      <figcaption>{el.caption}</figcaption>
    </StackViewImage>
  ));
  const mapSecondaryTechnologies = secondaryTechnologies.map((el) => (
    <StackViewImage>
      <img
        key={el.id}
        src={el.src}
        alt={el.alt}
        style={{ width: "60px", height: "60px" }}
      />
      <figcaption>{el.caption}</figcaption>
    </StackViewImage>
  ));
  const mapAdditionalTechnologies = additionalTechnologies.map((el) => (
    <div id={el.id}>
      {el.component}
      <p style={{ color: "#FFD600", textAlign: "center" }}>{el.text}</p>
    </div>
  ));
  return (
    <StackViewWrapper>
      <StackViewTitle>
        <ViewTitle title="główne technologie" />
      </StackViewTitle>
      <MainTechnologies>
        {mapMainTechnologies}
      </MainTechnologies>
      <StackViewSubtitle>
        <ViewTitle title="ponadto używam" />
      </StackViewSubtitle>
      <SecondaryTechnologies>
        {mapSecondaryTechnologies}
      </SecondaryTechnologies>
      <StackViewSubtitle>
        <ViewTitle title="zgodnie z zasadami" />
      </StackViewSubtitle>
      <AdditionalTechnologies>
        {mapAdditionalTechnologies}
      </AdditionalTechnologies>
    </StackViewWrapper>
  )
}

export default StackView;