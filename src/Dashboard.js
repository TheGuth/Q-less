import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { fetchMenu } from './actions/index'

export class Dashboard extends Component {

  componentWillMount() {
    this.props.dispatch(fetchMenu(this.props.currentConnection));
  }

  render() {
    console.log(this.props)
    const menuItems = this.props.menu.map((item, id) => {
      return
    })

    return (
      <View style={{margin: 128}}>
        <Text>Dashboard</Text>
      </View>
    )
  }
}

const mapStateToProps = (state, props) => ({
  currentConnection: state.currentConnection,
  menu: state.menu
})


export default connect(mapStateToProps)(Dashboard);
