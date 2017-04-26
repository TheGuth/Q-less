import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { View, Text } from 'react-native';
import Route from './router';
import { reducers } from './reducers'


class App extends Component {

  render() {
    const store = createStore(reducers, applyMiddleware(ReduxThunk));


    return (
      <Provider store={store}>
        <Route />
      </Provider>
    );
  }
}

export default App;
