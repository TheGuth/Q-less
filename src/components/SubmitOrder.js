import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Container, Content, Button, Text, Form, Item, Label, Input } from 'native-base';
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
            <Button onPress={() => this.props.dispatch(submitOrder(this.state.name, this.state.email, this.state.table, this.props.currentOrder, this.props.currentConnection))
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

const mapStateToProps = (state, props) => ({
  currentOrder: state.currentOrder,
  currentConnection: state.currentConnection
})

export default connect(mapStateToProps)(SubmitOrders)
