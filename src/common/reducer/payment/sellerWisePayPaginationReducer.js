import { Types } from "../../constant/action";

const initialState = {
    loading: true,
    statuscode:"",
    payload: [],
    error: "",
    msg:""
}

const SellerwisePayPaginationReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.SELLER_WISE_PAY_PAGINATION_LOADING:
            return {
              loading: action.loading,
              payload: action.payload,
              statuscode:action.statuscode,
              error: action.error,
              msg: action.msg
            };
        case Types.SELLER_WISE_PAY_PAGINATION_SUCCESS:
            return {
                loading: action.loading,
              payload: action.payload,
              statuscode:action.statuscode,
              error: action.error,
              msg: action.msg
            };
        case Types.SELLER_WISE_PAY_PAGINATION_FAILURE: 
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

export default SellerwisePayPaginationReducer;