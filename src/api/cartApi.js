import axios from 'axios';

const getItems = () => {
    axios.get('').then((response) => {
      return response;
    }).catch( (error) => {
      return error
    });
};

export const cartApi = {
  getItems,
};
