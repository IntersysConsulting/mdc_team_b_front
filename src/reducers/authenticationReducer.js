import {
  AUTHENTICATED,
  UNAUTHENTICATED,
  AUTHENTICATION_ERROR,
  SAVE_USER,
  VALIDATE_AUTHENTICATION,
  REFRESH_TOKEN
} from "../constants/authenticationConstants";

const initialState = {
  role: "guest",
  name: "Guest"
};

const autenticationTypes = {
  [AUTHENTICATED]: (newState, {data}) => {
    newState.name = data.customer_name || data.admin_name || newState.name;

    newState.role =
      data.message === "Welcome admin"
        ? "admin"
        : data.message === "Welcome guest!"
        ? "guest"
        : "registeredUser";

    localStorage.setItem("access_token", data.access_token);
    localStorage.setItem("refresh_token", data.refresh_token);

    return newState;
  },
  [UNAUTHENTICATED]: newState => {
    localStorage.clear();
    return {
      role: "guest",
      name: "Guest"
    };
  },
  [SAVE_USER]: (newState, data) => {
    newState.role = "registeredUser";
    let fullName = data.inputs.first_name + " " + data.inputs.last_name
    newState.name = fullName
    return newState;
  },
  [AUTHENTICATION_ERROR]: (newState, data) => alert(data.data.message),
  [VALIDATE_AUTHENTICATION]: (newState, data) => {
    let role = data.data.role.toLowerCase();
    role = role === "customer" ? "registeredUser" : role;
    if (newState.role === role) {
      return newState;
    } else {
      localStorage.clear();
      return {
        role: "guest",
        name: "Guest"
      };
    }
  },
  [REFRESH_TOKEN]: (newState, data) => {
    localStorage.setItem("access_token", data.data.access_token);
    return newState;
  }
};

export default function authenticationReducer(
  state = initialState,
  { type, auth }
) {
  if (autenticationTypes.hasOwnProperty(type)) {
    return autenticationTypes[type]({ ...state }, auth);
  } else {
    return state;
  }
}
