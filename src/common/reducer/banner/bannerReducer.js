import { Types } from "../../constant/action";


const initialState  = {
    loading: false,
    payload: [],
    error: ""
}

const BannerReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.SHOW_BANNER_LOADING: 
            return {
                loading: action.loading,
                payload: action.payload,
                error: action.error
            };
        case Types.SHOW_BANNER_SUCCESS: 
            return {
                loading: action.loading,
                payload: action.payload,
                error: action.error
            };
        case Types.SHOW_BANNER_FAILURE: 
            return {
                loading: action.loading,
                payload: action.payload,
                error: action.error
            };
        default:
            return state;
    }
}

export default BannerReducer;