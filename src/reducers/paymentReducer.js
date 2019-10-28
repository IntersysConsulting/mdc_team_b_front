import { PaymentConstants } from '../constants/paymentConstants';

const INITIAL_STATE = {
    cardsRetrieved: [],
    cardsChanged: false,
    payment_completed: false,
    success_message: undefined,
    error_message: undefined,
    loading: true
};

const paymentReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PaymentConstants.FETCH_CARDS_BEGIN:
            return { ...state, cardsChanged: false, loading: true };

        case PaymentConstants.FETCH_CARDS_SUCCESS:
            return { ...state, loading: false, cardsRetrieved: action.payload };

        case PaymentConstants.FETCH_CARDS_ERROR:
            return { ...state, loading: false, error_message: action.payload };



        case PaymentConstants.POST_CARD_BEGIN:
            return { ...state, loading: true };
    
        case PaymentConstants.POST_CARD_SUCCESS:
            return { ...state, success_message: action.payload, cardsChanged : true };
    
        case PaymentConstants.POST_CARD_ERROR:
            return { ...state, loading: false, error_message: action.payload };



        case PaymentConstants.DELETE_CARD_BEGIN:
            return { ...state, loading: true };

        case PaymentConstants.DELETE_CARD_SUCCESS:
            return { ...state, success_message: action.payload, cardsChanged : true };

        case PaymentConstants.DELETE_CARD_ERROR:
            return { ...state, loading: false, error_message: action.payload };



        case PaymentConstants.ATTEMPT_PAYMENT_BEGIN:
            return { ...state };
        
        case PaymentConstants.ATTEMPT_PAYMENT_SUCCESS:
            console.log("Reached reducer");
            return { ...state, success_message: action.payload, payment_completed: true };
        
        case PaymentConstants.ATTEMPT_PAYMENT_ERROR:
            return { ...state, error_message: action.payload, payment_completed: false };
        
        default:
            return state;
    }
};

export default paymentReducer;