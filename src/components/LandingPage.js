import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
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
        <Text style={styles.errorMessage}>
          Connection Error
        </Text>
      );
    }
    return <Text></Text>
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.topHeader}>Q-less. Why wait in a line.</Text>
          <Text style={styles.secondaryHeader}>Connect to a Business!</Text>
        </View>
        <View>
          {this.errorMessage()}
          <TextInput
          placeholder="Business Id"
          label="Connect"
          style={styles.textInput}
          value={this.state.currentConnection}
          onChangeText={this.grabBusiness.bind(this)} />
        <TouchableOpacity style={styles.connectButton} onPress={() => this.onConnect()}>
          <Text style={styles.connectButtonText}>
            Connect!
          </Text>
        </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 0,
    flexDirection: 'column',
    paddingTop: 100,
  },
  header: {
    marginTop: 10,
    marginBottom: 10,
  },
  topHeader: {
    marginTop: 20,
    padding: 10,
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 50,
    textAlign: 'center',
    justifyContent: 'center'
  },
  secondaryHeader: {
    marginTop: 35,
    padding: 10,
    textAlign: 'center',
    fontSize: 18,
  },
  textInput: {
    marginTop: 10,
    fontSize: 12,
    height: 45,
    width: 420,
    borderColor: 'lightgray',
    borderWidth: 0.5,
    borderRadius: 10,
    textAlign: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 16,
  },
  connectButton: {
    marginTop: 30,
    height: 45,
    backgroundColor: '#1e90ff',
    width: 320,
    borderColor: '#00bfff',
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  connectButtonText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 16
  },
  errorMessage: {
    textAlign: 'center',
    color: 'red'
  }
}

export default connect()(LandingPage);
