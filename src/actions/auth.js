import { Actions } from 'react-native-router-flux';

export const AUTH_USER = 'auth_user';
export const UNAUTH_USER = 'unauth_user';
export const AUTH_ERROR = 'auth_error';
export const FETCH_MESSAGE = 'fetch_message';

const ROOT_URL = 'https://vast-earth-24706.herokuapp.com';

export function signinUser(email, password) {
  console.log(email, password);
  const data ={email: email, password: password}
  return function(dispatch) {
    // Submit email/password to the server
    return fetch(`${ROOT_URL}/login`, {
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
      console.log(data);
      // If request is good...
      // - Update state to indicate user is authenticated
      dispatch({ type: AUTH_USER });
      // - Save the JWT token
      localStorage.setItem('token', data.token);
      // - redirect to the route '/feature'
      Actions.dashboard();
    })
    .catch(() => {
      // If request is bad...
      // - Show an error to the user
      dispatch(authError('Bad Login Info'));
    });
  }
}

export function signupUser({ email, password }) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/signup`, { email, password })
      .then(response => {
        dispatch({ type: AUTH_USER });
        localStorage.setItem('token', response.data.token);

        Actions.dashboard()
      })
      .catch(response => {
        dispatch(authError(response.response.data.error))
      });
  }
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}

export function signoutUser() {
  localStorage.removeItem('token');

  return { type: UNAUTH_USER };
}
