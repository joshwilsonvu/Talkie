import React from 'react';
import {connect} from 'react-redux';
import {postCreate} from '../actions/post';

export const Entry = create(
  state => ({username: state.session.username}),
dispatch => ({
  post: (username, text) => dispatch(postCreate(username, text))
})
)(props => (
  <
  )
)