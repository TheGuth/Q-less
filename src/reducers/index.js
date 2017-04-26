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
         DRINK_IS_READY_ERROR
       } from '../actions';

const initialState = {
  menu: [],
  businessName: '',
  currentOrder: [],
  currentConnection: ''
};

export const rootReducer = (state=initialState, action) => {
  switch(action.type) {
    case BUSINESS_INFO_SUCCESS:
      console.log(action.data.id);
      return {...state, businessName: action.data.businessName, currentConnection: action.data.id};
    case BUSINESS_INFO_ERROR:
      console.log(action.error)
      return state;
    case CONNECT_TO_BUSINESS:
      return {...state, currentConnection: action.currentConnection};
    case GRAB_ORDERS:
      console.log(action.data);
      return {...state, orders: action.data};
    case GRAB_ORDERS_ERROR:
      console.error(action.error);
      return state;
    case ADD_ORDER:
      const currentOrder = state.currentOrder.slice();
      currentOrder.push({drinkName: action.drinkName, price: action.price});
      return {...state, currentOrder: currentOrder};
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
  }
}
