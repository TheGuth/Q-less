import { BUSINESS_INFO_SUCCESS,
         BUSINESS_INFO_ERROR,
         CONNECT_TO_BUSINESS,
       } from '../actions';

const initialState = {};

export const rootReducer = (state=initialState, action) => {
  switch(action.type) {
    case BUSINESS_INFO_SUCCESS:
        console.log(action.data);
        return {...state, businessName: action.data.businessName, currentConnection: action.data.id};
    case BUSINESS_INFO_ERROR:
      console.log(action.error)
      return state;
    case CONNECT_TO_BUSINESS:
      return {...state, currentConnection: action.currentConnection};
    default:
      return state;
  }
}
