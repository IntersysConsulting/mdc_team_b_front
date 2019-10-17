import axios from "axios";

const getProductsAdmin = (page_received, page_size, searchParameters) => {
  return axios
    .get(process.env.REACT_APP_API_URL + "/products/", {
      params: {
        page: page_received,
        page_size: page_size,
        search_name: searchParameters["search"]
      }
    })
    .then(response => {
      return response;
    })
    .catch(error => {
      return error;
    });
};

const checkPrivileges = () => {
  return axios
    .get(process.env.REACT_APP_API_URL + "/identity/", {
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

const postProductAdmin = formData => {
  return axios
    .post(process.env.REACT_APP_API_URL + "/admin/products/", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        authorization: "Bearer " + localStorage.getItem("access_token")
      }
    })
    .then(response => {
      console.log(response);
      return response;
    })
    .catch(error => {
      console.log(error);
      return error;
    });
};

const deleteProductAdmin = product_id => {
  const header = {
    headers: { authorization: "Bearer " + localStorage.getItem("access_token") }
  };
  const body = { ...header };
  body.data = { id: product_id };
  return axios
    .delete(process.env.REACT_APP_API_URL + "/admin/products/", body)
    .then(response => {
      console.log(response);
      return response;
    })
    .catch(error => {
      console.log(error.response);
      return error;
    });
};

export const productManagementApi = {
  getProductsAdmin,
  checkPrivileges,
  postProductAdmin,
  deleteProductAdmin
};
