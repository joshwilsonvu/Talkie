import React, {Component} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import TimeAgo from 'timeago-react';
import {PostBase, PostBody} from './layouts';
import {Votes} from './votes';
import { postCreate, postVote } from '../actions/post';

const Username = styled.span`
  font-weight: bold;
`;

const PostText = styled.div`
  white-space: pre-wrap;
`;

export const Post = connect(
  (state, ownProps) => {
    const post = state.post.posts.get(ownProps.id);
    return {
      id: post.id,
      username: post.username,
      text: post.text,
      date: post.date,
      votes: post.votes,
      userDidVote: post.userDidVote
    }
  },
  dispatch => ({
    postVote()
  })
)(props => {
  return (
    <PostBase>
      <Votes votes={props.votes}
             onVote={() => props.postVote(props.username, props.id, true)}
             onUnvote={() => props.postVote(props.username, props.id, false)}/>
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
