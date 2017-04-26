import React, { Component } from 'react';
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

export default class Signup extends Component {
  state = {
    email: '',
    password: ''
  }

  grabPassword(value) {
    this.setState({password: value});
  }

  grabEmail(value) {
    this.setState({email: value});
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
                <Input onChangeText={this.grabPassword.bind(this)} />
              </Item>
            </Form>
            <Button block>
              <Text>Sign Up</Text>
            </Button>
          </Content>
        </Container>
    </Container>
    );
  }
}
