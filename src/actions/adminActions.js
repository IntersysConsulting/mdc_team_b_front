import {
  CREATE_ADMIN,
  READ_ADMIN,
  UPDATE_ADMIN,
  DELETE_ADMIN,
  READ_ADMINS,
  ERROR_ADMIN
} from "../constants/adminConstants";

export function create_admin(admins) {
  return {
    type: CREATE_ADMIN,
    admins: admins
  }
}

export function read_admin(admins) {
  return {
    type: READ_ADMIN,
    admins: admins
  }
}

export function update_admin(admins) {
  return {
    type: UPDATE_ADMIN,
    admins: admins
  }
}

export function delete_admin(admins) {
  return {
    type: DELETE_ADMIN,
    admins: admins
  }
}

export function read_admins(admins) {
  return {
    type: READ_ADMINS,
    admins: admins
  }
}

export function error_admin(error) {
  return {
    type: ERROR_ADMIN,
    error: error
  }
}