import { PaymentConstants } from '../constants/paymentConstants';

const INITIAL_STATE = {
    cardsRetrieved: [],
    cardsChanged: false,
    errors: undefined,
    message: undefined,
    loading: true
};

const paymentReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PaymentConstants.FETCH_CARDS_BEGIN:
            return { ...state, cardsChanged: false, loading: true };

        case PaymentConstants.FETCH_CARDS_SUCCESS:
            return { ...state, loading: false, cardsRetrieved: action.payload };

        case PaymentConstants.FETCH_CARDS_ERROR:
            return { ...state, loading: false, errors: action.payload };



        case PaymentConstants.POST_CARD_BEGIN:
            return { ...state, loading: true };
    
        case PaymentConstants.POST_CARD_SUCCESS:
            return { ...state, loading: false, message: action.payload, cardsChanged : true };
    
        case PaymentConstants.POST_CARD_ERROR:
            return { ...state, loading: false, errors: action.payload };



        case PaymentConstants.DELETE_CARD_BEGIN:
            return { ...state, loading: true };

        case PaymentConstants.DELETE_CARD_SUCCESS:
            return { ...state, loading: false, message: action.payload, cardsChanged : true };

        case PaymentConstants.DELETE_CARD_ERROR:
            return { ...state, loading: false, errors: action.payload };

        default:
            return state;
    }
};

export default paymentReducer;