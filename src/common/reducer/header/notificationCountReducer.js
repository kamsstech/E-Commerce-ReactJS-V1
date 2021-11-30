import { Types } from "../../constant/action";

const initialState  = {
    loading: false,
    payload: [],
    error: ""
}
const NotificationCountReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.NOTIFICOUNT_LOADING: 
            return {
                loading: action.loading,
                payload: action.payload,
                error: action.error
            };
        case Types.NOTIFICOUNT_SUCCESS: 
            return {
                loading: action.loading,
                payload: action.payload,
                error: action.error
            };
        case Types.NOTIFICOUNT_FAILURE: 
            return {
                loading: action.loading,
                payload: action.payload,
                error: action.error
            };
        default:
            return state;
    }
}
export default NotificationCountReducer;