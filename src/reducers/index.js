import { CONNECT_WITH_BUSINESS } from '../actions/index';

const initialState = {
  currentConnection: ''
}

export const reducers = (state=initialState, action) => {
  switch (action.type) {
    case CONNECT_WITH_BUSINESS:
      console.log('CONNECT_WITH_BUSINESS');
      console.log(action.currentConnection);
      return {...state, currentConnection: action.currentConnection}

    default:
  }
}
