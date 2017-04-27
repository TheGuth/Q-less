import React, { Component } from 'react';
import { Router, Scene, Actions } from 'react-native-router-flux';
import { Icon } from 'native-base';
import { View, Text } from 'react-native'
import { connect } from 'react-redux';;
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import Signup from './components/Signup';
import Login from './components/Login';
import Checkout from './components/Checkout';
import SubmitOrders from './components/SubmitOrder';

export class App extends Component {
  render() {
    console.log(this.props.currentOrder);
    console.log(this.props.currentOrder.length);
    return (
      <Router>
        <Scene key="root">
          <Scene key="signupPage" component={Signup} title="Q-Less" />
          <Scene key="loginPage" component={Login} title="Q-Less" initial={true} />
          <Scene renderBackButton={() => (null) } key="landingPage" component={LandingPage} title="Q-Less" />
          <Scene
            renderBackButton={() => <Icon onPress={() => Actions.landingPage()} style={{marginLeft: 20}} name="home" />}
            key="dashboard"
            component={Dashboard}
            title="Menu"
            renderRightButton={() => {
              return (
              <View>
                <Icon
                  onPress={() => Actions.checkout()}
                  style={{marginRight: 20}}
                  name="cart" />
                <Text style={{position: 'absolute', right: 2, top: 5}}>{this.props.currentOrder.length}</Text>
              </View>
            )
            }} />
          <Scene backTitle="Menu" backButtonImage={null} onBack={() => Actions.dashboard()} key="checkout" component={Checkout} title="Cart" />
          <Scene backTitle="Cart" backButtonImage={null} onBack={() => Actions.checkout()} key="submitOrders" component={SubmitOrders} title="Submit Order" />
        </Scene>
      </Router>
    )
  }
}

const mapStateToProps = (state, props) => ({
  currentOrder: state.currentOrder
})

export default connect(mapStateToProps)(App);

// #564878
