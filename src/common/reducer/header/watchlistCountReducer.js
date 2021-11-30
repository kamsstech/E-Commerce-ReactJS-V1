import { Types } from "../../constant/action";

const initialState  = {
    loading: false,
    payload: [],
    error: ""
}
const WatchlistCountReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.WATCHCOUNT_LOADING: 
            return {
                loading: action.loading,
                payload: action.payload,
                error: action.error
            };
        case Types.WATCHCOUNT_SUCCESS: 
            return {
                loading: action.loading,
                payload: action.payload,
                error: action.error
            };
        case Types.WATCHCOUNT_FAILURE: 
            return {
                loading: action.loading,
                payload: action.payload,
                error: action.error
            };
        default:
            return state;
    }
}
export default WatchlistCountReducer;