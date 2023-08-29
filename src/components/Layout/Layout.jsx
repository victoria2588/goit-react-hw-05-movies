import React from 'react';
import styled from 'styled-components';

import { NavLink, Outlet } from 'react-router-dom';
import { NavList } from './Layout.styled';

const StyledLink = styled(NavLink)`
  color: #ff0281;
  text-decoration: none;
  font-size: 24px;

  &.active {
    color: #c816e0;
    font-weight: 500;
  }
`;

const Layout = () => {
  return (
    <>
      <header>
        <NavList>
          <li>
            <StyledLink to="/">Home</StyledLink>
          </li>
          <li>
            <StyledLink to="/movies">Movies</StyledLink>
          </li>
        </NavList>
        <hr />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;