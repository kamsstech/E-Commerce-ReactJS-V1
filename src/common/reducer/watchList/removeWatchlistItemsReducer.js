import { Types } from "../../constant/action";

const initialState = {
    loading: true,
    payload: [],
    error: ""
}

const RemoveWatchlistItemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.REMOVE_WATCHLIST_LOADING:
            return {
              loading: action.loading,
              payload: action.payload,
              error: action.error
            };
        case Types.REMOVE_WATCHLIST_SUCCESS:
            return {
                loading: action.loading,
                payload: action.payload,
                error: action.error
            };
        case Types.REMOVE_WATCHLIST_FAILURE: 
            return {
                loading: action.loading,
                payload: action.payload,
                error: action.error
            };
        default:
            return state;
    }
}

export default RemoveWatchlistItemsReducer;