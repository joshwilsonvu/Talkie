import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {sessionEnd} from '../actions/session';

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
const NavUsername = styled.div`
  font-weight: bold;
`;
const NavImg = styled.img`
  height: 5rem;
  transition: transform 100ms linear;
  :hover {
    transform: scale(0.85);
  }
`;

export const Nav = connect(
  state => ({
    username: state.session.username
  }),
  dispatch => ({
    logout: () => dispatch(sessionEnd())
  })
)(props => (
  <NavBase>
    <NavLeft>
      <NavTitle>{document.title}</NavTitle>
    </NavLeft>
    <NavCenter>
      <NavImg src="../../img/icon.png"/>
    </NavCenter>
    <NavRight>
      {
        props.username
          ? (
            <>
              <NavUsername>{props.username}</NavUsername>
              <a onClick={props.logout}>Logout</a>
            </>
          )
          : null
      }
    </NavRight>
  </NavBase>
));