import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const NavLeft = styled.div`
  flex: 1;
  text-align: left;
`;
const NavCenter = styled.div`
  flex: 1;
  text-align: center;
`;
const NavRight = styled.div`
  flex: 1;
  text-align: right;
`;
const NavBase = styled.header`
  display: flex;
  vertical-align: bottom;
  align-items: flex-end;
  max-height: 5rem;
`;
const NavTitle = styled.h1`
  margin-bottom: 0;
`;
const NavImg = styled.img`
  height: 5rem;
`;

export const Nav = props => (
  <NavBase>
    <NavLeft>
      <NavTitle>{document.title}</NavTitle>
    </NavLeft>
    <NavCenter>
      <NavImg src="/icon.png" />
    </NavCenter>
    <NavRight>
      { !props.username
        ? <><Link to="/login">Log In</Link><br/><Link to="/signup">Sign up</Link></>
        : <Link to="/logout">Log Out</Link>
      }
    </NavRight>
  </NavBase>
);