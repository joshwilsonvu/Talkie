import io from "socket.io-client";
const socket = io();

// Inbound Message from Socket server
const incomingMessages = [
  "SESSION:LOGIN",
  "SESSION:LOGOUT",
  "POSTS:RECEIVE",
  "POST:RECEIVE"
];

export const websocketsMiddleware = store => next => action => {
  incomingMessages.forEach(type => {
    socket.on(type, payload => {
      let obj = Object.assign({ type: type }, payload);
      store.dispatch(obj);
    });
  });

  if (action.type === "POST:SEND" && action.text !== "") {
    socket.emit("POST:SEND", {text: action.text});
  } else if (action.type === "SESSION:START") {
    // empty
    socket.emit("SESSION:SEND", { username: action.username, password: action.password });
  }
};