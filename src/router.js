import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="landingPage" component={LandingPage} title="DrunkFast" initial={true} />
          <Scene key="dashboard" component={Dashboard} title="Dashboard" />
        </Scene>
      </Router>
    )
  }
}
