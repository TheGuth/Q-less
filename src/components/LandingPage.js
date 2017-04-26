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
    textAlign: 'center'
  },
  textInput: {
    marginTop: 10,
    fontSize: 12,
    height: 35,
    width: 220,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 10,
    textAlign: 'center',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  connectButton: {
    marginTop: 10,
    height: 35,
    width: 220,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  connectButtonText: {
    textAlign: 'center'
  },
  errorMessage: {
    textAlign: 'center',
    color: 'red'
  }

  // header: {
  //   color: '#000000',
  //   margin: 0,
  //   alignSelf: 'center',
  //   justifyContent: 'center',
  //   textAlign: 'center',
  //   padding: 10,
  //   fontWeight: 'bold',
  //   alignItems: 'center',
  //   flex: 1
  // },
  // label: {
  //   color: '#000000',
  //   fontWeight: 'bold',
  //   textAlign: 'center',
  //   alignItems: 'center',
  //   flex: 1
  // },
  // inputform: {
  //   textAlign: 'left',
  //   color: '#333333',
  //   margin: 5,
  //   height: 50,
  //   borderColor: '#60b7e2',
  //   borderWidth: 1,
  // }
}

export default connect()(LandingPage);
