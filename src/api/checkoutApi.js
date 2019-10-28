import axios from "axios";

const getOrderInfo = () => {
  return axios
    .get(process.env.REACT_APP_API_URL + "/orders/?filter=pending", {
      headers: {
        authorization: "Bearer " + localStorage.getItem("access_token")
      }
    })
    .then(response => {
      return response;
    })
    .catch(error => {
      return error;
    });
};

const updateOrder = order => {
  return axios
    .put(process.env.REACT_APP_API_URL + "/orders/", order, {
      headers: {
        authorization: "Bearer " + localStorage.getItem("access_token"),
        "Content-Type": "multipart/form-data"
      }
    })
    .then(response => {
      return response;
    })
    .catch(error => {
      return error;
    });
};

const getCustomerInfo = () => {
  return axios
    .get(process.env.REACT_APP_API_URL + "/customers/", {
      headers: {
        authorization: "Bearer " + localStorage.getItem("access_token"),
        "Content-Type": "multipart/form-data"
      }
    })
    .then(response => {
      return response;
    })
    .catch(error => {
      return error;
    });
};

const postShippingAddress = address => {
  let data_holder = {
    first_name: address["First Name"],
    last_name: address["Last Name"],
    address: address["Address"],
    city: address["City"],
    country: address["Country"],
    state: address["State"],
    zip_code: address["Zip Code"],
    between: address["Between"],
    delivery_notes: address["Delivery Notes"]
  };

  let formData = new FormData();
  formData.set("address", data_holder.address);
  formData.set("between", data_holder.between);
  formData.set("country", data_holder.country);
  formData.set("state", data_holder.state);
  formData.set("city", data_holder.city);
  formData.set("zip_code", data_holder.zip_code);
  formData.set("first_name", data_holder.first_name);
  formData.set("last_name", data_holder.last_name);
  formData.set("delivery_notes", data_holder.delivery_notes);
  return postNewAddress(formData, "shipping");
};

const postBillingAddress = address => {
  let data_holder = {
    first_name: address["First Name"],
    last_name: address["Last Name"],
    address: address["Address"],
    city: address["City"],
    country: address["Country"],
    state: address["State"],
    zip_code: address["Zip Code"]
  };

  let formData = new FormData();
  formData.set("address", data_holder.address);
  formData.set("country", data_holder.country);
  formData.set("state", data_holder.state);
  formData.set("city", data_holder.city);
  formData.set("zip_code", data_holder.zip_code);
  formData.set("first_name", data_holder.first_name);
  formData.set("last_name", data_holder.last_name);

  return postNewAddress(formData, "billing");
};

const postNewAddress = (formData, whereto) => {
  return axios
    .post(process.env.REACT_APP_API_URL + "/customers/" + whereto, formData, {
      headers: {
        authorization: "Bearer " + localStorage.getItem("access_token"),
        "Content-Type": "multipart/form-data"
      }
    })
    .then(response => {
      return response;
    })
    .catch(error => {
      return error;
    });
};

export const checkoutApi = {
  getOrderInfo,
  getCustomerInfo,
  updateOrder,
  postShippingAddress,
  postBillingAddress
};
