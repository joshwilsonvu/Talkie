import React from 'react';
import {connect} from 'react-redux';
import {Post} from './post';

export const Posts = connect(
  state => ({
    posts: state.post.posts,
    username: state.session.username
  })
)(
  props => (
    <main>
      {props.posts.map(post => <Post {...post} key={post.id} own={post.username === props.username}/>).reverse()}
    </main>
  )
);
