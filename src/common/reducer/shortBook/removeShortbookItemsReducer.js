import { Types } from "../../constant/action";

const initialState = {
    loading: true,
    payload: [],
    error: ""
}

const RemoveShortbookItemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.REMOVE_SHORTBOOK_LOADING:
            return {
              loading: action.loading,
              payload: action.payload,
              error: action.error
            };
        case Types.REMOVE_SHORTBOOK_SUCCESS:
            return {
                loading: action.loading,
                payload: action.payload,
                error: action.error
            };
        case Types.REMOVE_SHORTBOOK_FAILURE: 
            return {
                loading: action.loading,
                payload: action.payload,
                error: action.error
            };
        default:
            return state;
    }
}

export default RemoveShortbookItemsReducer;