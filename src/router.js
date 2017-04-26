import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import Signup from './components/Signup';
import Login from './components/Login';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="signupPage" component={Signup} title="Q-Less" />
          <Scene key="loginPage" component={Login} title="Q-Less" initial={true} />
          <Scene key="landingPage" component={LandingPage} title="Q-Less" />
          <Scene renderBackButton={() => (null) } key="dashboard" component={Dashboard} title="Q-Less" />
        </Scene>
      </Router>
    )
  }
}
