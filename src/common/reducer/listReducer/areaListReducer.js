
import { AuthConstants } from "../../constant/action";

const initialState  = {
    payload: [],
    error: ""
}

const AreaListReducer = (state = initialState, action) => {
    switch (action.type) {
        case AuthConstants.AREA_LIST_SUCCESS: 
            return {
                payload: action.payload,
                error: action.error
            };
        case AuthConstants.AREA_LIST_FAILURE: 
            return {
                payload: action.payload,
                error: action.error
            };
        default:
            return state;
    }
}

export default AreaListReducer;