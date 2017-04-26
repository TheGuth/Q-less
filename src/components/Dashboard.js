import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import * as actions from '../actions';

export class Dashboard extends Component {

  componentWillMount() {
    this.props.dispatch(actions.fetchMenu(this.props.currentConnection));
  }

  render() {
    return (
      <View style={{margin: 128}}>
        <Text>Dashboard</Text>
      </View>
    )
  }
}

const mapStateToProps = (state, props) => ({
  currentConnection: state.currentConnection,
  businessName: state.businessName,
  currentOrder: state.currentOrder,
  menu: state.menu,
})

export default connect(mapStateToProps)(Dashboard);
