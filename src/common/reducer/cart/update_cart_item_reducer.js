import { Types } from "../../constant/action";


const initialState  = {
    loading: false,
    payload: [],
    statusCode:"",
    error: ""
}



const UpdateCartItemReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.UPDATE_CART_ITEM_LOADING: 
            return {
                loading: action.loading,
                payload: action.payload,
                statusCode: action.statusCode,
                error: action.error
            };
        case Types.UPDATE_CART_ITEM_SUCCESS: 
            return {
                loading: action.loading,
                payload: action.payload,
                statusCode: action.statusCode,
                error: action.error
            };
        case Types.UPDATE_CART_ITEM_FAILURE: 
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

export default UpdateCartItemReducer;