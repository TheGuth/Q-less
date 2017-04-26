import { BUSINESS_INFO_SUCCESS,
         BUSINESS_INFO_ERROR,
         CONNECT_TO_BUSINESS,
         GRAB_ORDERS,
         GRAB_ORDERS_ERROR,
         ORDER_SUCCESS,
         ORDER_FAILURE,
         REMOVE_ORDER,
         REMOVE_ORDER_ERROR,
         ADD_ORDER,
         ADD_ORDER_ERROR,
         DRINK_IS_READY,
         DRINK_IS_READY_ERROR,
         LOAD_MENU,
         LOAD_MENU_ERROR
       } from '../actions';

import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
} from '../actions/auth'

const initialState = {
  menu: [],
  businessName: '',
  currentOrder: [],
  currentConnection: '',
  authenticated: false,
  quantity: 0
};

export const rootReducer = (state=initialState, action) => {
  switch(action.type) {
    case AUTH_USER:
      return { ... state, error: '', authenticated: true };
    case UNAUTH_USER:
      return { ...state, authenticated: false };
    case AUTH_ERROR:
      return { ...state, error: action.payload };
    case BUSINESS_INFO_SUCCESS:
      console.log(action.data.id);
      return {...state, businessName: action.data.businessName, currentConnection: action.data.id};
    case BUSINESS_INFO_ERROR:
      console.log(action.error)
      return state;
    case CONNECT_TO_BUSINESS:
      return {...state, currentConnection: action.currentConnection};
    case LOAD_MENU:
      console.log(action.data);
      return {...state, menu: action.data};
    case LOAD_MENU_ERROR:
      console.error(action.error);
      return state;
    case GRAB_ORDERS:
      console.log(action.data);
      return {...state, orders: action.data};
    case GRAB_ORDERS_ERROR:
      console.error(action.error);
      return state;
    case ADD_ORDER:
      const currentOrder = state.currentOrder.slice();
      for (let i = 0; i < action.quantity; i++) {
      currentOrder.push({drinkName: action.drinkName, price: action.price});
    }
      console.log(currentOrder);
      return {...state, currentOrder: currentOrder, quantity: action.quantity};
    case ADD_ORDER_ERROR:
      console.error(action.error);
      return state;
    case REMOVE_ORDER:
      const currentOrderRemoval = state.currentOrder.slice();
      currentOrderRemoval.splice(action.id, 1);
      return {...state, currentOrder: currentOrderRemoval};
    case REMOVE_ORDER_ERROR:
      console.error(action.error);
      return state;
    case ORDER_SUCCESS:
      console.log(state.currentOrder);
      return {...state, currentOrder: []};
    case ORDER_FAILURE:
      console.error(action.error);
      return state;
    default:
      return state;

// import {
//   CONNECT_WITH_BUSINESS,
//   LOAD_MENU,
//   LOAD_MENU_ERROR,
//   ADD_ORDER,
//   ADD_ORDER_ERROR
//  } from '../actions/index';
//
// const initialState = {
//   currentConnection: '',
//   menu:[],
//   currentOrder: []
// }
//
// export const reducers = (state=initialState, action) => {
//   switch (action.type) {
//
//     case CONNECT_WITH_BUSINESS:
//       return {...state, currentConnection: action.currentConnection}
//
//     case LOAD_MENU:
//       return {...state, menu: action.data};
//
//     case LOAD_MENU_ERROR:
//       return state;
//
//     case  ADD_ORDER:
//     console.log('ADD_ORDER');
//     const currentOrder = state.currentOrder.slice();
//     currentOrder.push({drinkName: action.drinkName, price: action.price});
//     console.log(currentOrder);
//     return {...state, currentOrder};
//
//     case ADD_ORDER_ERROR:
//     return state;
  }
}
