import axios from 'axios';

const getAllOrders = () => {
    return axios.get(process.env.REACT_APP_API_URL+'/orders/', 
    {headers:{authorization:'Bearer '+localStorage.getItem('access_token')}}).then((response) => {
        return response
        }).catch( (error) => {
        return error
        });
};

export const myOrdersApi = {
    getAllOrders,
};