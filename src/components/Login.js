import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import * as actions from '../actions/auth';
import {Container,
  Header,
  Content,
  Left,
  Right,
  Button,
  Icon,
  Body,
  Title,
  View,
  ListItem,
  Text,
  CheckBox,
  Footer,
  FooterTab,
  CardItem,
  Card,
  Form,
  Item,
  Label,
  Input
 } from 'native-base';

export class Signup extends Component {
  state = {
    email: '',
    password: '',
    error: false
  }

  grabPassword(value) {
    this.setState({password: value});
  }

  grabEmail(value) {
    this.setState({email: value});
  }

  onLogin() {
    const {email, password} = this.state;
    console.log(email, password);
    this.props.dispatch(actions.signinUser(email, password))
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      })
  }

  // onConnect() {
  //   this.props.dispatch(actions.retrieveBusinessInfo(this.state.currentConnection))
  //     .then(response => {
  //       console.log(response.type)
  //       if (response.type === 'BUSINESS_INFO_SUCCESS') {
  //         this.setState({errorMessage: false})
  //         return Actions.dashboard()
  //       } else {
  //         this.setState({errorMessage: true})
  //       }
  //     })
  //     .catch(error => {
  //       console.log(error);
  //       this.setState({errorMessage: true})
  //     })
  // }

  errorMessage() {
    if (this.state.errorMessage) {
      return (
        <Text style={styles.errorMessage}>
          Incorrect Email or Password
        </Text>
      );
    }
    return <Text></Text>
  }



  render() {
    console.log(this.state.email, this.state.password);
    return (
      <Container>
        <Header>
          <Body>
            <Title>Log In</Title>
          </Body>
          <Right>
            <Button transparent>
            </Button>
          </Right>
        </Header>
        <Container>
          <Content>
            <Form>
              <Item stackedLabel>
                <Label>Email</Label>
                <Input onChangeText={this.grabEmail.bind(this)} />
              </Item>
              <Item stackedLabel last>
                <Label>Password</Label>
                <Input onChangeText={this.grabPassword.bind(this)} />
              </Item>
            </Form>
            <Button onPress={this.onLogin.bind(this)} block info>
              <Text>Log In </Text>
            </Button>
            <Text>OR</Text>
            <Button onPress={() => Actions.signupPage()} block>
              <Text>Sign Up</Text>
            </Button>
          </Content>
        </Container>
    </Container>
    );
  }
}

export default connect()(Signup);
