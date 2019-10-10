import axios from 'axios';

const getOrderInfo = () => {
    return axios.get(process.env.REACT_APP_API_URL+'/orders/?filter=pending', {headers:{authorization:'Bearer '+localStorage.getItem('access_token')}}).then((response) => {
        return response
        }).catch( (error) => {
        return error
        });
};

export const checkoutOrderApi = {
    getOrderInfo,
};