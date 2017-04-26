export const CONNECT_WITH_BUSINESS = 'CONNECT_WITH_BUSINESS';
export const connectWithBusiness = (currentConnection) => ({
  type: CONNECT_WITH_BUSINESS,
  currentConnection: currentConnection
});

export const fetchMenu = (currentConnection) => dispatch => {

  return fetch(`https://vast-earth-24706.herokuapp.com/dashboard/${currentConnection}/drinks/0`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1OTAwYmY4MmJiOWFiNTAwMWM5ZmJjMDgiLCJpYXQiOjE0OTMyMjEyNTA3MDd9.I9q8OFGx6RHuhil7NsFinZgRFCGsRHJBVJ4Tk56C1Bk'
      }
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  }).then(data => {
    return dispatch(loadMenu(data))
  }).catch(error => {
    return dispatch(loadMenuError(error));
  });
}

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
