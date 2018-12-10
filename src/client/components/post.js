import React, {Component} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import TimeAgo from 'timeago-react';
import {PostBase, PostBody} from './layouts';
import {Votes} from './votes';
import * as postActions from '../actions/post';





const Username = styled.span`
  font-weight: bold;
`;

const PostText = styled.div`
  white-space: pre-wrap;
`;

export const Post = connect(
  undefined,
  dispatch => postActions
)(props => {
  return (
    <PostBase>
      <Votes votes={props.votes}
             onDownvote={() => props.postVote(props.username, props.id, -1)}
             onUpvote={() => props.postVote(props.username, props.id, 1)}/>
      <PostBody>
        <div>
          <Username>{props.username}</Username>
          &nbsp;&mdash;&nbsp;
          <TimeAgo datetime={props.date}/>
        </div>
        <PostText>{props.text}</PostText>
      </PostBody>
    </PostBase>
  );
});
