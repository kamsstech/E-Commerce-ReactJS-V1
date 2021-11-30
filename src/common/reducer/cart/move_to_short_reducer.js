import { Types } from "../../constant/action";


const initialState  = {
    loading: false,
    payload: "",
    statuscode:"",
    message:"",
    error: ""
}

const MoveToShortReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.MOVE_TO_SHORT_LOADING: 
            return {
                loading: action.loading,
                payload: action.payload,
                statuscode: action.statuscode,
                message: action.message,
                error: action.error
            };
        case Types.MOVE_TO_SHORT_SUCCESS: 
            return {
                loading: action.loading,
                payload: action.payload,
                statuscode: action.statuscode,
                message: action.message,
                error: action.error
            };
        case Types.MOVE_TO_SHORT_FAILURE: 
            return {
                loading: action.loading,
                payload: action.payload,
                statuscode: action.statuscode,
                message: action.message,
                error: action.error
            };
        default:
            return state;
    }
}

export default MoveToShortReducer;