import { Types } from "../../constant/action";
import { SearchByMfcEntity, SearchByMfcActionEntity } from "../../model";

const initialState  = {
    loading: false,
    payload: [],
    statuscode:"",
    error: ""
}

const SearchByMfcReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.SEARCH_BY_MFC_LOADING: 
            return {
                loading: action.loading,
                payload: action.payload,
                statuscode: action.statuscode,
                error: action.error
            };
        case Types.SEARCH_BY_MFC_SUCCESS: 
            return {
                loading: action.loading,
                payload: action.payload,
                statuscode: action.statuscode,
                error: action.error
            };
        case Types.SEARCH_BY_MFC_FAILURE: 
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

export default SearchByMfcReducer;