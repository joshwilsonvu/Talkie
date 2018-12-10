import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {PostBase, PostBody} from './layouts';

const Input = styled.input`
  border: none;
`;
const Submit = styled.button`
  
`;

export const Login = connect(
  undefined,
  dispatch => {
    onSubmit: dispatch()
  }
)(props => {
  return (
    <PostBase>
      <PostBody>
        <form onSubmit={props.onSubmit}>
          <div>
            <label htmlFor="username">Username:&nbsp;</label>
            <Input id="username" name="username" type="text"/>
          </div>
          <div>
            <label htmlFor="password">Password:&nbsp;</label>
            <Input id="password" name="password" type="password"/>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </PostBody>
    </PostBase>
  );
});