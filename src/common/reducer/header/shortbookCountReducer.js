import { Types } from "../../constant/action";

const initialState  = {
    loading: false,
    payload: [],
    error: ""
}
const ShortbookCountReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.SHORTCOUNT_LOADING: 
            return {
                loading: action.loading,
                payload: action.payload,
                error: action.error
            };
        case Types.SHORTCOUNT_SUCCESS: 
            return {
                loading: action.loading,
                payload: action.payload,
                error: action.error
            };
        case Types.SHORTCOUNT_FAILURE: 
            return {
                loading: action.loading,
                payload: action.payload,
                error: action.error
            };
        default:
            return state;
    }
}
export default ShortbookCountReducer;