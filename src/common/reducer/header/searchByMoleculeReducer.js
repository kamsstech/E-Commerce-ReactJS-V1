import { Types } from "../../constant/action";


const initialState  = {
    loading: false,
    payload: [],
    statuscode:"",
    error: ""
}

const SearchByMoleculeReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.SEARCH_BY_MOLECULE_LOADING: 
            return {
                loading: action.loading,
                payload: action.payload,
                statuscode: action.statuscode,
                error: action.error
            };
        case Types.SEARCH_BY_MOLECULE_SUCCESS: 
            return {
                loading: action.loading,
                payload: action.payload,
                statuscode: action.statuscode,
                error: action.error
            };
        case Types.SEARCH_BY_MOLECULE_FAILURE: 
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

export default SearchByMoleculeReducer;