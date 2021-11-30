import { Types } from "../../constant/action";

const initialState = {
    loading: true,
    statuscode:"",
    payload: [],
    error: "",
    msg:""
}

const SellerPayOrderReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.SELLER_PAY_ORDER_LOADING:
            return {
              loading: action.loading,
              payload: action.payload,
              statuscode:action.statuscode,
              error: action.error,
              msg: action.msg
            };
        case Types.SELLER_PAY_ORDER_SUCCESS:
            return {
                loading: action.loading,
              payload: action.payload,
              statuscode:action.statuscode,
              error: action.error,
              msg: action.msg
            };
        case Types.SELLER_PAY_ORDER_FAILURE: 
            return {
                loading: action.loading,
                  payload: action.payload,
                  statuscode:action.statuscode,
                  error: action.error,
                  msg: action.msg
            };
        default:
            return state;
    }
}

export default SellerPayOrderReducer;