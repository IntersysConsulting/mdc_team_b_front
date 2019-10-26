import axios from "axios";

const DEFAULT_HEADERS = {
  authorization: "Bearer " + localStorage.getItem("access_token"),
  "Content-Type": "multipart/form-data"
};

const putInfo = info => {
  let formData = new FormData();
  formData.set("first_name", info.first_name);
  formData.set("last_name", info.last_name);
  formData.set("email", info.email);
  formData.set("phone", info.phone);

  return axios
    .put(process.env.REACT_APP_API_URL + "/customers/", formData, {
      headers: DEFAULT_HEADERS
    })
    .then(response => {
      return response;
    })
    .catch(error => {
      return error;
    });
};

const postShipping = address => {
  let formData = new FormData();
  formData.set("address", address.address);
  formData.set("between", address.between);
  formData.set("country", address.country);
  formData.set("state", address.state);
  formData.set("city", address.city);
  formData.set("zip_code", address.zip_code);
  formData.set("first_name", address.first_name);
  formData.set("last_name", address.last_name);
  formData.set("delivery_notes", address.delivery_notes);
  return axios
    .post(process.env.REACT_APP_API_URL + "/customers/shipping", formData, {
      headers: DEFAULT_HEADERS
    })
    .then(response => {
      return response;
    })
    .catch(error => {
      return error;
    });
};

const postBilling = address => {
  let formData = new FormData();
  formData.set("address", address.address);
  formData.set("country", address.country);
  formData.set("state", address.state);
  formData.set("city", address.city);
  formData.set("zip_code", address.zip_code);
  formData.set("first_name", address.first_name);
  formData.set("last_name", address.last_name);

  return axios
    .post(process.env.REACT_APP_API_URL + "/customers/billing", formData, {
      headers: DEFAULT_HEADERS
    })
    .then(response => {
      return response;
    })
    .catch(error => {
      return error;
    });
};

export const checkoutAddressApi = {
  putInfo,
  postShipping,
  postBilling
};
