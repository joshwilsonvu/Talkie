import React from 'react';
import styled from 'styled-components';
import TimeAgo from 'timeago-react';
import {PostBase, PostBody} from './layouts';

export const Username = styled.span`
  font-weight: bold;
  text-decoration: ${props => props.own ? "underline" : "none"};
`;

export const PostText = styled.div`
  white-space: pre-wrap;
`;

export const Post = props => (
  <PostBase>
    <PostBody>
      <div>
        <Username own={props.own}>{props.username}</Username>
        &nbsp;&mdash;&nbsp;
        <TimeAgo datetime={props.date}/>
      </div>
      <PostText>{props.text}</PostText>
    </PostBody>
  </PostBase>
);

