
import { AuthConstants } from "../../constant/action";

const initialState  = {
    payload: [],
    error: ""
}

const StateListReducer = (state = initialState, action) => {
    switch (action.type) {
        case AuthConstants.STATE_LIST_SUCCESS: 
            return {
                payload: action.payload,
                error: action.error
            };
        case AuthConstants.STATE_LIST_FAILURE: 
            return {
                payload: action.payload,
                error: action.error
            };
        default:
            return state;
    }
}

export default StateListReducer;