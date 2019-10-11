import axios from 'axios'

const URL = process.env.REACT_APP_API_URL
const configDefault = {
  baseURL: URL,
  responseType: "json",
  headers: {'Content-Type': 'multipart/form-data' }
}

export function request (config = configDefault)  {
  const access_token = localStorage.getItem("access_token")
  if(access_token) {
    config.headers['Authorization'] = `Bearer ${access_token}`
  }
  return axios.create(config)
} 

export function requestRefreshUser (config = configDefault)  {
  const token = localStorage.getItem("refresh_token")

  if(token) {
    config.headers['Authorization'] = `Bearer ${token}`
  }

  return axios.create(config).put('session/')
} 

export function requestRefreshAdmin (config = configDefault)  {
  const token = localStorage.getItem("refresh_token")

  if(token) {
    config.headers['Authorization'] = `Bearer ${token}`
  }

  return axios.create(config).put('admin/session/')
} 