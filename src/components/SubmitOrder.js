import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Container, Content, Button, Text, Header, Form, Item, Label, Input } from 'native-base';
import { submitOrder } from '../actions/index';


export class SubmitOrders extends Component {

  state = {
    name: '',
    table: 0,
    email: ''
  }

  grabName(value) {
    this.setState({name: value});
  }

  grabTable(value) {
    this.setState({table: value});
  }

  grabEmail(value) {
    this.setState({email: value});
  }

  render() {

    return (
      <Container style={{marginTop: 80}}>
        <Header style={styles.header}>
          <Text>Submit Order</Text>
        </Header>
        <Content>
          <Form>
            <Item stackedLabel>
              <Label>Name</Label>
              <Input onChangeText={this.grabName.bind(this)} />
            </Item>
            <Item stackedLabel>
              <Label>Table Number</Label>
              <Input onChangeText={this.grabTable.bind(this)}/>
            </Item>
            <Item stackedLabel>
              <Label>Email</Label>
              <Input onChangeText={this.grabEmail.bind(this)} />
            </Item>
            <Button style={styles.button} onPress={() => this.props.dispatch(submitOrder(this.state.name, this.state.email, this.state.table, this.props.currentOrder, this.props.currentConnection))
                                   .then(Actions.dashboard())
                    } block>
            <Text>Submit Order</Text>
            </Button>
          </Form>

        </Content>
      </Container>
    )
  }
}

const styles = {
  header: {
    marginTop: -20
  },
  button: {
    marginTop: 30,
    padding: 10,
    marginRight: 40,
    marginLeft: 40,
  }
}

const mapStateToProps = (state, props) => ({
  currentOrder: state.currentOrder,
  currentConnection: state.currentConnection
})

export default connect(mapStateToProps)(SubmitOrders)
