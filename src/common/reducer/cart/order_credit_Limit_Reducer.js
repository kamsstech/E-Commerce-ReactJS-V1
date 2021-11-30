import { Types } from "../../constant/action";


const initialState = {
  loading:false,
  statuscode:"",
  payload: [],
  error: ""
};

const OrderCreditLimitReducer = (
  state = initialState,
  action
)  => {
  switch (action.type) {
    case Types.ORDER_CREDIT_LIMIT_LOADING:
      return {
        loading: action.loading,
        statuscode: action.statuscode,
        payload: action.payload,
        error: action.error
      };

    case Types.ORDER_CREDIT_LIMIT_SUCCESS:
      return {
        loading:action.loading,
        statuscode: action.statuscode,
        payload: action.payload,
        error: action.error
      };
    
    case Types.ORDER_CREDIT_LIMIT_FAILURE:
      return {
        loading:action.loading,
        statuscode: action.statuscode,
        payload: action.payload,
        error: action.error
      };
      
    default:
      return state;
  }
};

export default OrderCreditLimitReducer;

