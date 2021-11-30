import { Types } from "../../constant/action";


const initialState = {
    loading: false,
    payload: [],
    statusCode:"",
    error: ""
}

const OrderDetailReducers = (
    state = initialState,
    action)=> {

    switch (action.type) {
        case Types.GET_ORDERDETAIL_LOADING:
            return {
                loading: action.loading,
                payload: action.payload,
                statusCode: action.statusCode,
                error: action.error
            };
        case Types.GET_ORDERDETAIL_SUCCESS:
            return {
                loading: action.loading,
                payload: action.payload,
                statusCode: action.statusCode,
                error: action.error
            };
            case Types.GET_ORDERDETAIL_FAILURE:
            return {
                loading: action.loading,
                payload: action.payload,
                statusCode: action.statusCode,
                error: action.error
            };
        default:
            return state;
    }
}

export default OrderDetailReducers;