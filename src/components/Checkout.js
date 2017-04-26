import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { fetchMenu, addOrder } from '../actions/index';
import { Container, Content, List, ListItem, Thumbnail, Text, Header, Body, ActionSheet, Button, Left, Right, Title } from 'native-base';

export class Dashboard extends Component {

  componentWillMount() {

  }

  displayCurrentOrder() {

  }

  render() {
    return (

      <Container>
          <Header>
            <Text>Current Order</Text>
          </Header>
          <Content>
            <List>
            </List>
          </Content>
      </Container>

    )
  }
}

const mapStateToProps = (state, props) => ({
  currentConnection: state.currentConnection,
  currentOrder: state.currentOrder
})


export default connect(mapStateToProps)(Dashboard);
