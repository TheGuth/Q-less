import {
  CONNECT_WITH_BUSINESS,
  LOAD_MENU,
  LOAD_MENU_ERROR
 } from '../actions/index';

const initialState = {
  currentConnection: '',
  menu:[]
}

export const reducers = (state=initialState, action) => {
  switch (action.type) {

    case CONNECT_WITH_BUSINESS:
      return {...state, currentConnection: action.currentConnection}

    case LOAD_MENU:
      console.log('LOAD_MENU');
      return {...state, menu: action.data};

    case LOAD_MENU_ERROR:
      return state;

  }
}
