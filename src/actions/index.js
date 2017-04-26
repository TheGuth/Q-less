export const retrieveBusinessInfo = (currentConnection) => dispatch => {
  console.log('hello');
  return fetch(`https://vast-earth-24706.herokuapp.com/dashboard/${currentConnection}`)
  .then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  }).then(data => {
    console.log(data);
    return dispatch(businessInfoSuccess(data));
  }).catch(error => {
    return dispatch(businessInfoError(error));
  });
};

export const BUSINESS_INFO_SUCCESS = 'BUSINESS_INFO_SUCCESS';
export const businessInfoSuccess = (data) => ({
    type: BUSINESS_INFO_SUCCESS,
    data: data
});

export const BUSINESS_INFO_ERROR = 'BUSINESS_INFO_ERROR';
export const businessInfoError = (currentConnection) => ({
    type: BUSINESS_INFO_ERROR,
    currentConnection: currentConnection
});

export const CONNECT_TO_BUSINESS = 'CONNECT_TO_BUSINESS';
export const connectToBusiness = (currentConnection) => ({
    type: CONNECT_TO_BUSINESS,
    currentConnection: currentConnection
});

/////////////////////////////////////////////////////

export const fetchMenu = (currentConnection) => dispatch => {
  // /dashboard/:id/drinks/:page
    return fetch(`/dashboard/${currentConnection}/drinks/0`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    }).then(data => {

      dispatch(retrieveBusinessInfo(currentConnection));
      dispatch(connectToBusiness(currentConnection));
      return dispatch(loadMenu(data))
    }).catch(error => {
      return dispatch(loadMenuError(error));
    });
};

export const LOAD_MENU = 'LOAD_MENU';
export const loadMenu = (data) => ({
    type: LOAD_MENU,
    data: data
});

export const LOAD_MENU_ERROR = 'LOAD_MENU_ERROR';
export const loadMenuError = (error) => ({
    type: LOAD_MENU_ERROR,
    error: error
});

////////////////////////////////////////////////

export const submitOrder = (userNameInput, userEmailInput, userTableInput, orders, currentConnection) => dispatch => {
  let orderTotal = 0;
  orders.forEach((order) => {
    orderTotal += order.price;
  })
  const data = {clientName: userNameInput, table: userTableInput, clientEmail: userEmailInput, order: orders, totalDrinks: orders.length, orderTotal: orderTotal }
  return fetch(`/order/${currentConnection}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  }).then(data => {
    return dispatch(orderSuccess());
  }).catch(error => {
    return dispatch(orderFailure(error));
  });
};

export const ORDER_SUCCESS = 'ORDER_SUCCESS';
export const orderSuccess = () => ({
    type: ORDER_SUCCESS
});

export const ORDER_FAILURE = 'ORDER_FAILURE';
export const orderFailure = (error) => ({
    type: ORDER_FAILURE,
    error: error
});

///////////////////////////////////////

export const REMOVE_ORDER = 'REMOVE_ORDER';
export const removeOrder = (id) => ({
    type: REMOVE_ORDER,
    id: id
});

export const REMOVE_ORDER_ERROR = 'REMOVE_ORDER_ERROR';
export const removeOrderError = (error) => ({
    type: REMOVE_ORDER_ERROR,
    error: error
});

export const ADD_ORDER = 'ADD_ORDER';
export const addOrder = (drinkName, price) => ({
    type: ADD_ORDER,
    drinkName: drinkName,
    price: price,
});

export const ADD_ORDER_ERROR = 'ADD_ORDER_ERROR';
export const addOrderError = (error) => ({
    type: ADD_ORDER_ERROR,
    error: error
});

//////////////////////////////////////
