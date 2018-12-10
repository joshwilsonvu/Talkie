'use strict';

import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {ThemeProvider} from 'styled-components';
import {App} from './components/app';
import {sessionReducer} from './reducers/session';
import {postReducer} from './reducers/post';
import {websocketsMiddleware} from './middleware/websockets';

import theme from './theme';

const store = createStore(
  combineReducers({
    session: sessionReducer,
    post: postReducer
  }),
  applyMiddleware(websocketsMiddleware)
);

// Function to render the whole application
render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);

