import axios from 'axios';

const getItems = () => {
  return new Promise( (resolve, reject) => {
    axios.get('').then((response) => {
      resolve(response);
    }).catch( (error) => {
      reject(error);
    });
  });
};

export const cartApi = {
  getItems,
};
