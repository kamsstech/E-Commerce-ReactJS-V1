import { Types } from "../../constant/action";

const initialState = {
    loading: true,
    payload: [],
    error: ""
}

const AddWatchlistItemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.ADD_WATCHLIST_LOADING:
            return {
              loading: action.loading,
              payload: action.payload,
              error: action.error
            };
        case Types.ADD_WATCHLIST_SUCCESS:
            return {
                loading: action.loading,
                payload: action.payload,
                error: action.error
            };
        case Types.ADD_WATCHLIST_FAILURE: 
            return {
                loading: action.loading,
                payload: action.payload,
                error: action.error
            };
        default:
            return state;
    }
}

export default AddWatchlistItemsReducer;