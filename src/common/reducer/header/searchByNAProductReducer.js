import { Types } from "../../constant/action";
import { SearchByProductEntity, SearchByProductActionEntity } from "../../model";

const initialState  = {
    loading: false,
    payload: [],
    statuscode:"",
    error: ""
}

const searchByNAProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.SEARCH_BY_NA_PRODUCT_LOADING: 
            return {
                loading: action.loading,
                payload: action.payload,
                statuscode: action.statuscode,
                error: action.error
            };
        case Types.SEARCH_BY_NA_PRODUCT_SUCCESS: 
            return {
                loading: action.loading,
                payload: action.payload,
                statuscode: action.statuscode,
                error: action.error
            };
        case Types.SEARCH_BY_NA_PRODUCT_FAILURE: 
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

export default searchByNAProductReducer;