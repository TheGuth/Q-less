import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { fetchMenu } from './actions/index';
import { Container, Content, List, ListItem, Thumbnail, Text, Header, Body, ActionSheet, Button, Left, Right, Title } from 'native-base';

export class Dashboard extends Component {

  componentWillMount() {
    this.props.dispatch(fetchMenu(this.props.currentConnection));
  }

  render() {
    const menuItems = this.props.menu.map((item, id) => {
      return <ListItem>
              <Thumbnail square size={80} source={require('./img/drink.png')} />
              <Body>
                <Text>{item.drinkName} - ${item.price}</Text>
                <Text note>{item.ingredients}</Text>
              </Body>
            </ListItem>
    })

    return (
      <Container>
          <Header>
            <Text>Menu</Text>
          </Header>
          <Content>
            <List>
              {menuItems}
            </List>
          </Content>
      </Container>
    )
  }
}

const mapStateToProps = (state, props) => ({
  currentConnection: state.currentConnection,
  menu: state.menu
})


export default connect(mapStateToProps)(Dashboard);
