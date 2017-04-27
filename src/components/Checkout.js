import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Content, List, ListItem, Text, Button, Icon } from 'native-base';
import { removeOrder } from '../actions/index'


export  class Checkout extends Component {

  onSubmitOrder() {
    //switch to form screen
  }

  render() {
    const drinks = this.props.currentOrder.map((order, id) => {
      console.log(order);
      return  <ListItem key={order.id}>
                <Text> {order.drinkName} - ${order.price}</Text>
                <Button transparent primary iconRight onPress={() => this.props.dispatch(removeOrder(order.id))}>
                  <Icon name='trash' />
                </Button>
              </ListItem>
    });
     return (
       <Container>
           <Content>
               <List>
                {drinks}
               </List>
           </Content>
       </Container>
    )
  }
}


const mapStateToProps = (state, props) => ({
  currentOrder: state.currentOrder
})

export default connect(mapStateToProps)(Checkout);
