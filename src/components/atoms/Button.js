import React from 'react';
import styled from 'styled-components';

export const Button = styled.button`
  width: 140px;
  height: 45px;

  border-radius: 10px;

  background: ${props => props.secondary ? "#FFE48F" : "#181818"};
  border: 2px solid #FFE48F;

  color: ${props => props.secondary ? "#181818" : "rgba(255, 253, 248, 1)"};
  font-size: 18px;
  font-weight: 200;

  &:hover {
   background: ${props => props.secondary ? "#181818" : "#FFE48F"};
   color: ${props => props.secondary ? "rgba(255, 253, 248, 1)" : "#181818"};
  }

`;