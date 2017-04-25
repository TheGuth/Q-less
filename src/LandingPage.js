import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Input } from './components/common'

export default class LandingPage extends Component {
  state = {
    currentConnection: ''
  }

  grabBusiness(value) {
    this.setState({currentConnection: value});
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header2}>Why fight the crowd, when you can order your drinks without missing a beat.</Text>
        <Text style={styles.label}>Connect to a Business!</Text>
        <TextInput
        placeholder="Business Id"
        label="Connect"
        value={this.state.currentConnection}
        style ={styles.inputform}
        onChangeText={this.grabBusiness.bind(this)} />
        <Text onPress={Actions.dashboard}>This is LandingPage!</Text>
      </View>
    );
  }
}



const styles = {
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 100
  },
  header2: {
    color: '#000000',
    fontWeight: 'bold',
    alignItems: 'center',
    flex: 1
  },
  label: {
    color: '#000000',
    fontWeight: 'bold',
    alignItems: 'center',
    flex: 1
  },
  inputform: {
    textAlign: 'left',
    color: '#333333',
    margin: 5,
    height: 50,
    borderColor: '#60b7e2',
    borderWidth: 1,
  }

}
