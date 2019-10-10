import axios from 'axios';

const getAllShippingAddresses = () => {
    return axios.get(process.env.REACT_APP_API_URL+'/customers/', { headers:{
        'authorization':'Bearer ' +localStorage.getItem('access_token'),
        'Content-Type': 'multipart/form-data' 
    }}).then((response) => {
            return response
        }).catch( (error) => {
            return error
        });
};

export const shippingApi = {
    getAllShippingAddresses,
};
