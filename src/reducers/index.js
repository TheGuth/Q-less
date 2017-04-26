import {
  CONNECT_WITH_BUSINESS,
  LOAD_MENU,
  LOAD_MENU_ERROR,
  ADD_ORDER,
  ADD_ORDER_ERROR
 } from '../actions/index';

const initialState = {
  currentConnection: '',
  menu:[],
  currentOrder: []
}

export const reducers = (state=initialState, action) => {
  switch (action.type) {

    case CONNECT_WITH_BUSINESS:
      return {...state, currentConnection: action.currentConnection}

    case LOAD_MENU:
      return {...state, menu: action.data};

    case LOAD_MENU_ERROR:
      return state;

    case  ADD_ORDER:
    console.log('ADD_ORDER');
    const currentOrder = state.currentOrder.slice();
    currentOrder.push({drinkName: action.drinkName, price: action.price});
    console.log(currentOrder);
    return {...state, currentOrder};

    case ADD_ORDER_ERROR:
    return state;
  }
}
