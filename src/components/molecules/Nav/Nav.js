import React from 'react';
import { NavLink } from "react-router-dom";
import styled from 'styled-components';
import { NavButton } from 'components/atoms/NavButton/NavButton';

const NavWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;

  margin-right: 1%;
  `;

const NavigationLink = styled(NavLink)`
  color: rgba(255, 253, 248, 1);
  font-size: 24px;
  text-decoration: none;

  margin: 1%; 
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
            fontWeight: "900",
        }}
    key={element.id}
    to={element.path}
  >
    {element.title}
  </NavigationLink>
));

// eslint-disable-next-line import/prefer-default-export
export function Nav() {
    return (
      <NavWrapper>{showNavTitles}</NavWrapper>
    );
};