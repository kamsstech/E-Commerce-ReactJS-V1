import { Types } from "../../constant/action";


const initialState  = {
    loading: false,
    payload: [],
    error: ""
}

const GetCartItemReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_CART_ITEM_LOADING: 
            return {
                loading: action.loading,
                payload: action.payload,
                error: action.error
            };
        case Types.GET_CART_ITEM_SUCCESS:
            return {
                loading: action.loading,
                payload: action.payload,
                error: action.error
            };
        case Types.GET_CART_ITEM_FAILURE: 
            return {
                loading: action.loading,
                payload: action.payload,
                error: action.error
            };
        default:
            return state;
    }
}

export default GetCartItemReducer;