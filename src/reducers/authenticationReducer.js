import {
  AUTHENTICATED,
  UNAUTHENTICATED,
  AUTHENTICATION_ERROR
} from "../constants/authenticationConstants";

const initialState = {
  login: false,
  name: "Guest",
};

export default function authenticationReducer(state = initialState, {type, auth}) {
  let newState = {...state}
  switch (type) {
    case AUTHENTICATED:
      newState.login = true
      console.log(auth.data.access_token)
      localStorage.setItem('access_token', auth.data.access_token)
      localStorage.setItem('refresh_token', auth.data.refresh_token)
      break
    case UNAUTHENTICATED:
      break
    case AUTHENTICATION_ERROR:
      break
    default:
      return state;
  }
  return newState
}
