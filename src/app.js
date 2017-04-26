import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { rootReducer } from './reducers';
import Route from './router';


class App extends Component {

  render() {
    const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Route />
      </Provider>
    );
  }
}

export default App;
