import React, {Component} from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import {connect} from 'react-redux';

import styled from 'styled-components';
import {Posts} from './posts';
import {Login} from './session';
import {Nav} from './nav';

import {postCreate} from '../actions/post';

const AppPad = styled.div`
  margin: 0;
  padding: 0 ${props => props.theme.padding};
  min-height: 100vh;
  text-align: center;
  line-height: 1.5;
  background-color: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.themeColor};
  font-family: monospace;
`;
const AppCenter = styled.div`
  display: inline-block;
  max-width: 40rem;
  width: 100%;
  text-align: left;
`;

export const App = connect(
  state => ({
    posts: state.post.posts,
    username: state.session.username
  }),

)(props => {
  return (
    <AppPad>
      <AppCenter>
        <Nav username={props.username}/>
        <Switch>
          <Route exact path="/" render={() => <Posts posts={props.posts}/>}/>
          <Route path="/login" render={() => { console.log("login"); return <Login/>;}}/>
        </Switch>

      </AppCenter>
    </AppPad>
  );
});
