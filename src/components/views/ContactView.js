import React from 'react';
import styled from 'styled-components';

const ContactViewWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;

  height: 500px;

  @media (max-width: 575.98px) { 
    grid-template-columns: 1fr;
   }
`;

const ContactViewTitle = styled.h2`
   margin-right: 5%;

   font-size: 3em;
   color: #FFE48F;
   text-align: right;
   text-transform: uppercase;

   animation: text-focus-in 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;

   @media (max-width: 575.98px) { 
    align-self: end;
    margin: 0;
    font-size: 2em;
    text-align: center;
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

const ContactViewData = styled.div`
  p {
    text-align: left;

    @media (max-width: 575.98px) { 
    text-align: center;
   }

    a {
    color: #fff;
    font-size: 24px; 
    font-weight: 900;
    text-decoration: underline;
    text-decoration-color: #FFE48F;

    @media (max-width: 575.98px) { 
    font-size: 20px;
   }
   }
  }
`;

function ContactView() {
    return (
      <ContactViewWrapper>
        <ContactViewTitle>
          kontakt
        </ContactViewTitle>
        <ContactViewData>
          <p><a href="mailto:mikolaj.cieszczyk@gmail.com">mikolaj.cieszczyk@gmail.com</a></p>
          <p><a href="https://www.linkedin.com/in/mikolajcieszczyk/" target="_blank">LinkedIn</a></p>
          <p><a href="https://www.facebook.com/mikolaj.cieszczyk/" target="_blank">Facebook</a></p>
          <p><a href="https://github.com/mikolajcieszczyk" target="_blank">GitHub</a></p>
        </ContactViewData>

      </ContactViewWrapper>
    );
};

export default ContactView;