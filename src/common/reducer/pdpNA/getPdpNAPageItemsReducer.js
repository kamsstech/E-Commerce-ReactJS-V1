import { Types } from "../../constant/action";


const initialState = {
    loading: true,
    payload: [],
    error: ""
}

const GetPdpNAPageItemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.PDP_NA_PAGE_ITEMS_LOADING:
            return {
              loading: action.loading,
              payload: action.payload,
              error: action.error
            };
        case Types.PDP_NA_PAGE_ITEMS_SUCCESS:
            return {
                loading: action.loading,
                payload: action.payload,
                error: action.error
            };
        case Types.PDP_NA_PAGE_ITEMS_FAILURE: 
            return {
                loading: action.loading,
                payload: action.payload,
                error: action.error
            };
        default:
            return state;
    }
}

export default GetPdpNAPageItemsReducer;