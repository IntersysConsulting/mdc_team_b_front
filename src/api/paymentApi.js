import axios from "axios";

const getCards = () => {
  return axios
   .get(process.env.REACT_APP_API_URL + "/payment/cards", {
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


const postCard = token_card => {
    return axios
    .put(process.env.REACT_APP_API_URL + "/payment/cards", { card_token: token_card }, 
        { 
            headers: { authorization: "Bearer " + localStorage.getItem("access_token") } 
        } 
    )
    .then(response => {
        return response;
    })
    .catch( (error) => {
        return error;
    });
};

const deleteCard = id_card => {
    const header = {
        headers: { authorization: "Bearer " + localStorage.getItem("access_token") }
    };
    const body = { ...header };
    body.data = { card_id: id_card };
    return axios
        .delete(process.env.REACT_APP_API_URL + "/payment/cards", body)
        .then(response => {
          return response;
        })
        .catch(error => {
          return error;
    });
};

export const PaymentApi = {
  getCards,
  postCard,
  deleteCard
};