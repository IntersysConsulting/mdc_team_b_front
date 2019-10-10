import axios from "axios";

const URL = "http://127.0.0.1:5000/api/v1/";
const configDefault = {
  baseURL: URL,
  responseType: "json",
  headers: { "Content-Type": "multipart/form-data" }
};

export function request(config = configDefault) {
  const token = localStorage.getItem("access_token");

  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }

  return axios.create(config);
}

export function requestRefreshUser(config = configDefault) {
  const token = localStorage.getItem("refresh_token");

  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }

  return axios.create(config).put("session/");
}

export function requestRefreshAdmin(config = configDefault) {
  const token = localStorage.getItem("refresh_token");

  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }

  return axios.create(config).put("admin/session/");
}
