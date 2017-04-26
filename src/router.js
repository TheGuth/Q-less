import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="landingPage" component={LandingPage} title="Q-Less" initial={true} />
          <Scene renderBackButton={() => (null) } key="dashboard" component={Dashboard} title="Q-Less" />
        </Scene>
      </Router>
    )
  }
}
