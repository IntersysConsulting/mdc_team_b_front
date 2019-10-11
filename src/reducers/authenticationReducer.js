import {
  AUTHENTICATED,
  UNAUTHENTICATED,
  AUTHENTICATION_ERROR,
  VALIDATE_AUTHENTICATION
} from "../constants/authenticationConstants";

const initialState = {
  role: "guest",
  name: "Guest",
  message: "",
};

const autenticationTypes = {
  [AUTHENTICATED]: (newState, data) => {
    newState.name = (
      data.customer_name ? data.customer_name : 
      data.admin_name ? data.admin_name : newState.name
    )
    newState.role = ( data.message === "Welcome admin" ? "admin" :  "registeredUser" ) 
  
    localStorage.setItem("access_token", data.access_token)
    localStorage.setItem("refresh_token", data.refresh_token)
 
    newState.message = "ok"

    return newState
  },
  [UNAUTHENTICATED]: (newState) => {
    localStorage.removeItem("access_token")
    localStorage.removeItem("refresh_token")
    return {
      role: "guest",
      name: "Guest",
      message:""
    }
  },
  [AUTHENTICATION_ERROR]: (newState, data) => {
    newState.message = data.message
    return newState
  },
  [VALIDATE_AUTHENTICATION]: (newState, data) => {
    let role = data.role.toLowerCase()
    role = (role === "customer" ? "registeredUser" : role)
    if(newState.role === role) {
      return newState
    } else {
      localStorage.removeItem("access_token")
      localStorage.removeItem("refresh_token")
      return {
        role: "guest",
        name: "Guest",
        message:""
      }
    }
  }
}

export default function authenticationReducer(state = initialState, { type, auth }) {
    if (autenticationTypes.hasOwnProperty(type)) {
        return autenticationTypes[type]({...state }, auth.data)
    } else {
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      return {
        role: "guest",
        name: "Guest"
      };
    }
  }
};

export default function authenticationReducer(
  state = initialState,
  { type, auth }
) {
  if (autenticationTypes.hasOwnProperty(type)) {
    return autenticationTypes[type]({ ...state }, auth.data);
  } else {
    return state;
  }
}
