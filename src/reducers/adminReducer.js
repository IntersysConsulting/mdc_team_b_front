import {
  CREATE_ADMIN,
  UPDATE_ADMIN,
  DELETE_ADMIN,
  READ_ADMINS,
  ERROR_ADMIN
} from "../constants/adminConstants";
import { toast } from 'react-toastify';

const initialState = {
  admins: [],
  updated: false
};

const adminTypes = {
  [CREATE_ADMIN]: (newState, data) => {
    toast.dismiss(data.toastId)
    toast.success("Created Admin!");

    newState.admins.push(data.newAdmin)

    return newState
  },
  [UPDATE_ADMIN]: (newState, data) => {
    toast.dismiss(data.toastId)
    toast.success("Updated Admin!");
     
    const indexAdmin = newState.admins.indexOf(data.admin)
    newState[indexAdmin].email = data.inputs.email
    
    return newState
  },
  [DELETE_ADMIN]: (newState, data) => {
    toast.dismiss(data.toastId)
    toast.success("Deleted Admin")
    
    let a = newState.admins.filter(a => {
      return  a.email !== data.admin.email
    })
    
    newState.admins = [...a]
    return newState
  },
  [READ_ADMINS]:  (newState, data) => {
    newState.admins = [...data.data.data]

    return newState;
  },
  [ERROR_ADMIN]: (newState, data) => {
    toast.dismiss(data.toastId)
    toast("Error")

    return newState;
  }
};

export default function adminReducer(
  state = initialState,
  { type, payload }
) {
  if (adminTypes.hasOwnProperty(type)) {
    return adminTypes[type]({ ...state }, payload);
  } else {
    return state;
  }
}
