import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux';
import { Input, Button } from './common';
import { connect } from 'react-redux';
import * as actions from '../actions';


export class LandingPage extends Component {
  state = {
    currentConnection: '',
    errorMessage: false
  }

  grabBusiness(value) {
    this.setState({currentConnection: value});
  }

  onConnect() {
    this.props.dispatch(actions.retrieveBusinessInfo(this.state.currentConnection))
      .then(response => {
        console.log(response.type)
        if (response.type === 'BUSINESS_INFO_SUCCESS') {
          this.setState({errorMessage: false})
          return Actions.dashboard()
        } else {
          this.setState({errorMessage: true})
        }
      })
      .catch(error => {
        console.log(error);
        this.setState({errorMessage: true})
      })
  }

  errorMessage() {
    if (this.state.errorMessage) {
      return (
      <Text>
        Connection Error
      </Text>
    );
    }

    return <Text></Text>
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header2}>Why fight the crowd, when you can order your drinks without missing a beat.</Text>
        <Text style={styles.label}>Connect to a Business!</Text>
        {this.errorMessage()}
        <TextInput
        placeholder="Business Id"
        label="Connect"
        value={this.state.currentConnection}
        style ={styles.inputform}
        onChangeText={this.grabBusiness.bind(this)} />
        <Button onPress={() => this.onConnect()}/>
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

export default connect()(LandingPage);
