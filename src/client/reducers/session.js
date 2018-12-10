

const initialState = {
  username: ""
};

export const sessionReducer = (state = initialState, action) => {
  switch(action.type) {
    case "SESSION:LOGIN":
      return Object.assign({}, state, { username: action.username });
    case "SESSION:LOGOUT":
      return Object.assign({}, state, { username: "" });
    default:
      return state;
  }
};