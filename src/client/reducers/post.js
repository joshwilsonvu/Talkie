const arrayCopy = arr => Object.assign([], arr);

// Returns a new array containing arr[ind]
const arrayImmutableInsertObj = (arr, ind, val) => {
  let copy = arrayCopy(arr);
  copy[ind] = val;
  return copy;
};
// Returns a new array with val shallowly merged with arr[ind]. Does not insert
const arrayImmutableUpdateObj = (arr, ind, val) => (
  ind in arr
    ? (arr.map((e, i) => ind === i ? {...e, ...val} : e))
    : arrayImmutableInsertObj(arr, ind, val)
);
// Returns a new array with val not included
const arrayImmutableDelete = (arr, ind) => {
  let copy = arrayCopy(arr);
  delete copy[ind];
  return copy;
};

const initialState = {
  posts: [] // sparse array indexed by id
};

export const postReducer = (state = initialState, action) => {
  const {type, ...payload} = action;
  switch (type) {
    case 'POST:CREATE':
      return Object.assign({}, state, {
        posts: arrayImmutableInsert(state.posts, payload.id, payload)
      });
    case 'POST:VOTE':
      return Object.assign({}, state, {
        posts: arrayImmutableUpdateObj(state.posts, payload.id, {votes: payload.votes})
      });
    default:
      return state;
  }
};
