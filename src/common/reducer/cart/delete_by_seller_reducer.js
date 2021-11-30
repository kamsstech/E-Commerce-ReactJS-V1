import { Types } from "../../constant/action";


const initialState  = {
    loading: false,
    payload: [],
    error: ""
}

const DeleteBySellerReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.DELETE_BY_SELLER_LOADING: 
            return {
                loading: action.loading,
                payload: action.payload,
                error: action.error
            };
        case Types.DELETE_BY_SELLER_SUCCESS: 
            return {
                loading: action.loading,
                payload: action.payload,
                error: action.error
            };
        case Types.DELETE_BY_SELLER_FAILURE: 
            return {
                loading: action.loading,
                payload: action.payload,
                error: action.error
            };
        default:
            return state;
    }
}

export default DeleteBySellerReducer;