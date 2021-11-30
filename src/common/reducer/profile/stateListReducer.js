import { Types } from "../../constant/action";

const initialState  = {
    payload: [],
    messages:"",
    error: ""
}

const StateListReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case Types.STATE_LIST_SUCCESS: 
            return {
                payload: action.payload,
                messages: action.error
            };
        case Types.STATE_LIST_FAILURE: 
            return {
                payload: action.payload,
                error: action.error
            };
        default:
            return state;
    }
}

export default StateListReducer;