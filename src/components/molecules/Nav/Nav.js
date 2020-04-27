import React from 'react';
import { NavLink } from "react-router-dom";
import styled from 'styled-components';

const NavWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;

  margin-right: 5%;


  @media (max-width: 767.98px) { 
    justify-content: center;
    margin: 5% 0;
   }
`;

const NavigationLink = styled(NavLink)`
  color: rgba(255, 253, 248, 1);
  font-size: 14px;
  font-weight: 100;
  text-decoration: none;

  margin: 1%; 

  @media (max-width: 767.98px) { 
    font-size: 1em;
   }
`;

const navTitles = [
    { id: 1, title: "Index", path: "/" },
    { id: 2, title: "Technologie", path: "/stack" },
    { id: 3, title: "Projekty", path: "/portfolio" },
    { id: 4, title: "Kontakt", path: "/contact" },
];

const showNavTitles = navTitles.map((element) => (
  <NavigationLink
    exact
    activeStyle={{
            fontWeight: "300",
            color: "#FFE48F",
        }}
    key={element.id}
    to={element.path}
  >
    {element.title}
  </NavigationLink>
));

function Nav() {
    return (
      <NavWrapper>{showNavTitles}</NavWrapper>
    );
};

export default Nav;