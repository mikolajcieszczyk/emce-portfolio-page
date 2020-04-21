import React from 'react';
import styled from 'styled-components';

const ViewTitleTemplate = styled.h2`
   font-size: 24px;
   color: #FFE48F;
   text-align: center;
   text-transform: uppercase;

   margin: 2% 0;

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

span {
  display: block;
  font-size: 10px;
  color: #fff;
}
`;

function ViewTitle({title, span}) {
    return (
        <ViewTitleTemplate>
            {title} 
            <span>
            {span}
            </span>
        </ViewTitleTemplate>
    )
}

export default ViewTitle;