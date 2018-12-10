
import {Map} from 'immutable';

const initialState = {
  posts: Map()
};

export const postReducer = (state = initialState, action) => {
  switch(action.type) {
    case "POST:CREATE":
      return Object.assign({}, state, {
        posts: state.posts.set(action.id, {
          id: action.id,
          username: action.username,
          votes: action.votes,
          userDidVote: action.userDidVote,
          text: action.text
        })
      });
    default:
      return state;
  }
};
