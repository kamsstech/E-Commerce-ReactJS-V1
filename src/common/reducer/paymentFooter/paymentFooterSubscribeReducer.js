import { Types } from "../../constant/action";
import {PaymentFooterActionEntity, PaymentFooterReducerEntity } from "../../model";

const initialState: PaymentFooterReducerEntity = {
  loading:false,
  payload: [],
  error: ""
};

const PaymentFooterSubscribeReducer = (
  state: PaymentFooterReducerEntity = initialState,
  action: PaymentFooterActionEntity
): PaymentFooterReducerEntity => {
  switch (action.type) {
    case Types.GET_PAYMENTFOOTERSUBSCRIBE_LOADING:
      return {
        loading: action.loading,
        payload: action.payload,
        error: action.error
      };

    case Types.GET_PAYMENTFOOTERSUBSCRIBE_SUCCESS:
      return {
        loading:action.loading,
        payload: action.payload,
        error: action.error
      };
    
    case Types.GET_PAYMENTFOOTERSUBSCRIBE_FAILURE:
      return {
        loading:action.loading,
        payload: action.payload,
        error: action.error
      };
      
    default:
      return state;
  }
};

export default PaymentFooterSubscribeReducer;

