import React from 'react';
import styled from 'styled-components';

import { Linkedin , FacebookSquare , GithubSquare } from '@styled-icons/fa-brands';



const ContactViewWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 40% 10% 30%;
  align-items: center;
  justify-content: center;

  height: 500px;

  @media (max-width: 767.98px) { 
        grid-template-rows: 50% 10% 10%;

        height: 300px;
      }
`;

const ContactViewTitle = styled.h2`
  align-self: end;
  justify-self: center;


   font-size: 3em;
   color: #FFE48F;
   text-align: center;
   text-transform: uppercase;

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

const ContactViewEmail = styled.div`
  justify-self: center;

    a {
      color: #fff;
      font-size: 24px; 
      font-weight: 900;
      text-decoration: underline;
      text-decoration-color: #FFE48F;

      @media (max-width: 767.98px) { 
        font-size: 20px;
      }
    }
`;

const ContactViewData = styled.div`
  justify-self: center;
  align-self: start;

    a {
        color: #fff;
        font-size: 24px; 
        font-weight: 900;
        text-decoration: underline;
        text-decoration-color: #FFE48F;

        :nth-child(1) {
          &:hover {
            color: #0072b1;
        }
      }

        :nth-child(2) {
          &:hover {
            color: #3b5998;
        }
      }

        :nth-child(3) {
          &:hover {
            color: #d73a49;
        }
      }
   } 
}
`;

const ContactViewAbout = styled.div`
  width: 100%;

  font-size: 12px;
  text-align: center;

  a {
    margin: 0 5px;

    color: #FFE48F;
  }
`;

function ContactView() {
    return (
      <>
        <ContactViewWrapper>
          <ContactViewTitle>
            kontakt
        </ContactViewTitle>
          <ContactViewEmail>
            <a href="mailto:mikolaj.cieszczyk@gmail.com">mikolaj.cieszczyk@gmail.com</a>
          </ContactViewEmail>
          <ContactViewData>
            <a
              href="https://www.linkedin.com/in/mikolajcieszczyk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size="54px" />
            </a>
            <a
              href="https://www.facebook.com/mikolaj.cieszczyk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookSquare size="54px" />
            </a>
            <a
              href="https://github.com/mikolajcieszczyk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubSquare size="54px" />
            </a>
          </ContactViewData>
        </ContactViewWrapper>

        <ContactViewAbout>
          <p>Autor: Mikołaj Cięszczyk, 2020</p> 
          <span>Ikony w aplikacji dzięki</span> 
          <a
            href="https://icons8.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
             icons8
          </a>
          oraz
          <a
            href="https://styled-icons.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Styled Icons
          </a>
      </ContactViewAbout>
      </>
    );
};

export default ContactView;