import { Types } from "../../constant/action";


const initialState  = {
    loading: false,
    payload: [],
    statuscode:"",
    error: ""
}

const SearchBySellerReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.SEARCH_BY_SELLER_LOADING: 
            return {
                loading: action.loading,
                payload: action.payload,
                statuscode: action.statuscode,
                error: action.error
            };
        case Types.SEARCH_BY_SELLER_SUCCESS: 
            return {
                loading: action.loading,
                payload: action.payload,
                statuscode: action.statuscode,
                error: action.error
            };
        case Types.SEARCH_BY_SELLER_FAILURE: 
            return {
                loading: action.loading,
                payload: action.payload,
                statuscode: action.statuscode,
                error: action.error
            };
        default:
            return state;
    }
}

export default SearchBySellerReducer;