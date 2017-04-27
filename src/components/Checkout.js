import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { Container, Content, List, ListItem, Text, Button, Icon, Header } from 'native-base';
import { removeOrder } from '../actions/index'


export  class Checkout extends Component {

  onSubmitOrder() {
    //switch to form screen
  }

  render() {
    let total = 0;
    const drinks = this.props.currentOrder.map((order, id) => {
      total += order.price
      return  <ListItem key={order.id}>
                <Text> {order.drinkName} - ${order.price}</Text>
                <Button style={styles.button} transparent primary iconRight onPress={() => this.props.dispatch(removeOrder(order.id))}>
                  <Icon name='trash' />
                </Button>
              </ListItem>
    });
     return (
       <Container style={{marginTop: 80}}>
           <Content>
               <List>
                {drinks}
               </List>
               <List>
                 <Text style={styles.textStyleMargin} >Current Total</Text>
                 <Text style={styles.textStyle}>${total}</Text>
               </List>
           </Content>
           <Button style={styles.buttonBottom} onPress={() => Actions.submitOrders()} primary block>
             <Text>Checkout</Text>
           </Button>
       </Container>
    )
  }
}

const styles = {
  header: {
    marginTop: -20,
  },
  button: {
    position: 'absolute',
    right: 10,
  },
  textStyle: {
    textAlign: 'center'
  },
  textStyleMargin: {
    textAlign: 'center',
    marginTop: 20
  },
  buttonBottom: {
    marginBottom: 20,
    padding: 10,
    marginRight: 40,
    marginLeft: 40,
  }
}


const mapStateToProps = (state, props) => ({
  currentOrder: state.currentOrder
})

export default connect(mapStateToProps)(Checkout);
