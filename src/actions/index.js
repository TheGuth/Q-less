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
