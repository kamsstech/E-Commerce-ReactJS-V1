import { Types } from "../../constant/action";

const initialState = {
    loading: true,
    payload: [],
    statuscode:'',
    error: "",
    msg:""
}

const WatchlistItemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.WATCHLIST_LOADING:
            return {
              loading: action.loading,
              payload: action.payload,
              statuscode: action.statuscode,
              error: action.error,
              msg: action.msg
            };
        case Types.WATCHLIST_SUCCESS:
            return {
                loading: action.loading,
              payload: action.payload,
              statuscode: action.statuscode,
              error: action.error,
              msg: action.msg
            };
        case Types.WATCHLIST_FAILURE: 
            return {
                loading: action.loading,
              payload: action.payload,
              statuscode: action.statuscode,
              error: action.error,
              msg: action.msg
            };
        default:
            return state;
    }
}

export default WatchlistItemsReducer;