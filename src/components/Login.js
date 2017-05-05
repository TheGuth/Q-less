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
    email: 'exampleUser893@gmail.com',
    password: 'password',
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
      .then(() => {
        console.log(this.props.authenticated);
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
        <Text style={styles.errorStyles}>
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
      <Container style={styles.containerStyles}>
        <Container>
          <Content>
            <Form style={styles.formStyles}>
              <Item stackedLabel>
                <Label>Email</Label>
                <Input value={this.state.email} onChangeText={this.grabEmail.bind(this)} />
              </Item>
              <Item stackedLabel last>
                <Label>Password</Label>
                <Input value={this.state.password} secureTextEntry={true} onChangeText={this.grabPassword.bind(this)} />
              </Item>
            </Form>
            <Button style={styles.buttonStyles} onPress={this.onLogin.bind(this)} block>
              <Text>Log In</Text>
            </Button>
            {this.errorMessage()}
            <Text style={styles.textStyles} >Not a member yet? Sign Up!</Text>
            <Button style={styles.buttonSignup} onPress={() => Actions.signupPage()} block>
              <Text>Sign Up</Text>
            </Button>
            {this.renderSpinner()}
          </Content>
        </Container>
    </Container>
    );
  }
}

const styles = {
  containerStyles: {
    marginTop: 60,
  },
  headerTextStyles: {
    paddingRight: 240,
  },
  formStyles: {
    marginBottom: 20
  },
  buttonStyles: {
    marginTop: 10,
    padding: 10,
    marginRight: 40,
    marginLeft: 40,
  },
  buttonSignup: {
    marginTop: 20,
    padding: 10,
    marginRight: 40,
    marginLeft: 40,
  },
  textStyles: {
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: 200
  },
  errorStyles: {
    marginTop: 10,
    textAlign: 'center',
    color: 'red'
  }

}

const mapStateToProps = (state, props) => ({
  authenticated: state.authenticated,
})

export default connect(mapStateToProps)(Login);
