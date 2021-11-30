import { Types } from "../../constant/action";


const initialState  = {
    loading: false,
    payload: "",
    statuscode:"",
    message:"",
    error: ""
}

const DeleteByIdReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.DELETE_BY_ID_LOADING: 
            return {
                loading: action.loading,
                payload: action.payload,
                statuscode: action.statuscode,
                message: action.message,
                error: action.error
            };
        case Types.DELETE_BY_ID_SUCCESS: 
            return {
                loading: action.loading,
                payload: action.payload,
                statuscode: action.statuscode,
                message: action.message,
                error: action.error
            };
        case Types.DELETE_BY_ID_FAILURE: 
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

export default DeleteByIdReducer;