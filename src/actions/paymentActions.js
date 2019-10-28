import { PaymentConstants } from "../constants/paymentConstants";
import { PaymentApi } from "../api/paymentApi";


const fetchCardsBegin = () => {
  return {
    type: PaymentConstants.FETCH_CARDS_BEGIN
  };
};

const fetchCardsSuccess = Cards => {
  return {
    type: PaymentConstants.FETCH_CARDS_SUCCESS,
    payload: Cards
  };
};

const fetchCardsError = error => {
  return {
    type: PaymentConstants.FETCH_CARDS_ERROR,
    payload: error.message
  };
};



const postCardBegin = () => {
    return {
      type: PaymentConstants.POST_CARD_BEGIN
    };
};
  
  const postCardsuccess = success => {
    return {
      type: PaymentConstants.POST_CARD_SUCCESS,
      payload: success.message
    };
  };
  
  const postCardError = error => {
    return {
      type: PaymentConstants.POST_CARD_ERROR,
      payload: error.message
    };
  };


const deleteCardBegin = () => {
  return {
    type: PaymentConstants.DELETE_CARD_BEGIN
  };
};

const deleteCardSuccess = success => {
  return {
    type: PaymentConstants.DELETE_CARD_SUCCESS,
    payload: success.message
  };
};

const deleteCardError = error => {
  return {
    type: PaymentConstants.DELETE_CARD_ERROR,
    payload: error.message
  };
};

const payInStripeBegin = () => {
  return {
    type: PaymentConstants.ATTEMPT_PAYMENT_BEGIN
  };
};

const payInStripeSuccess = success => {
  return {
    type: PaymentConstants.ATTEMPT_PAYMENT_SUCCESS,
    payload: success.message
  };
};

const payInStripeError = error => {
  return {
    type: PaymentConstants.ATTEMPT_PAYMENT_ERROR,
    payload: error.message
  };
};

export const getCardsAction = () => {
  return dispatch => {
    dispatch(fetchCardsBegin());
    PaymentApi
      .getCards()
      .then(response => {
        (response.data.data.cards.sources.data)
        ? dispatch(fetchCardsSuccess(response.data.data.cards.sources.data))
        : dispatch(fetchCardsSuccess( [] ))
      })
      .catch(error => {
        dispatch(fetchCardsError(error));
      });
  };
};

export const addCardAction = token_card => {
    return dispatch => {
      dispatch(postCardBegin());
      PaymentApi
        .postCard(token_card)
        .then(response => {
          dispatch(postCardsuccess(response.data));
        })
        .catch(error => {
          dispatch(postCardError(error));
        });
    };
};

export const deleteCardAction = id_card => {
  return dispatch => {
    dispatch(deleteCardBegin());
    PaymentApi
      .deleteCard(id_card)
      .then(response => {
        dispatch(deleteCardSuccess(response.data));
      })
      .catch(error => {
        dispatch(deleteCardError(error));
      });
  };
};

export const payInStripe = (paymentInfo) => {
  return dispatch => {
    dispatch(payInStripeBegin());
    PaymentApi
      .attemptStripePayment(paymentInfo)
      .then(response => {
        dispatch(payInStripeSuccess(response.data));
      })
      .catch(error => {
        dispatch(payInStripeError(error));
      });
  };
} 