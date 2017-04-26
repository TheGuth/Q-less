import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Content, List, ListItem, Text } from 'native-base';


export  class Checkout extends Component {

  render() {
    const drinks = this.props.currentOrder.map((order, id) => {
      return  <ListItem key={id}>
                <Text> {order.drinkName} - ${order.price}</Text>
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
