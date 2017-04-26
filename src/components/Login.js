import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { Spinner } from './common';
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

export class Login extends Component {
  state = {
    email: '',
    password: '',
    error: false,
    loading: false
  }

  grabPassword(value) {
    this.setState({password: value});
  }

  grabEmail(value) {
    this.setState({email: value});
  }

  onLogin() {
    const {email, password} = this.state;
    this.setState({loading: true})

    this.props.dispatch(actions.signinUser(email, password))
      .then(response => {
        if (this.props.authenticated) {
          return Actions.landingPage();
        } else {
          this.setState({error: true})
        }
        this.setState({loading: false})
      })
      .catch(error => {
        console.log(error);
        this.setState({error: true})
        this.setState({loading: false})
      })
  }

  errorMessage() {
    if (this.state.error) {
      return (
        <Text>
          Incorrect Email or Password
        </Text>
      );
    }
    return <Text></Text>
  }

  renderSpinner() {
    if (this.state.loading) {
      return <Spinner size="large" />;
    }
  }

  render() {
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
                <Input secureTextEntry={true} onChangeText={this.grabPassword.bind(this)} />
              </Item>
            </Form>
            <Button onPress={this.onLogin.bind(this)} block info>
              <Text>Log In </Text>
            </Button>
            {this.errorMessage()}
            <Text>OR</Text>
            <Button onPress={() => Actions.signupPage()} block>
              <Text>Sign Up</Text>
            </Button>
            {this.renderSpinner()}
          </Content>
        </Container>
    </Container>
    );
  }
}

const mapStateToProps = (state, props) => ({
  authenticated: state.authenticated,
})

export default connect(mapStateToProps)(Login);
