import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { rootReducer } from './reducers';
import Route from './router';
export const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export const state = store.getState();

class App extends Component {

  render() {

    return (
      <Provider store={store}>
        <Route />
      </Provider>
    );
  }
}

export default App;
