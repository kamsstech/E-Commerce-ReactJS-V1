import { Types } from "../../constant/action";


const initialState  = {
    loading: false,
    payload: [],
    statuscode:"",
    message:"",
    error: ""
}

const AddToCartReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.ADD_TO_CART_LOADING: 
            return {
                loading: action.loading,
                payload: action.payload,
                statuscode: action.statuscode,
                message: action.message,
                error: action.error
            };
        case Types.ADD_TO_CART_SUCCESS: 
            return {
                loading: action.loading,
                payload: action.payload,
                statuscode: action.statuscode,
                message: action.message,
                error: action.error
            };
        case Types.ADD_TO_CART_FAILURE: 
            return {
                loading: action.loading,
                payload: action.payload,
                statuscode: action.statuscode,
                message: action.message,
                error: action.error
            };
        default:
            return state;
    }
}

export default AddToCartReducer;