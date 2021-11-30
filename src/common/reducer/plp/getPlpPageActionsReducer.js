import { Types } from "../../constant/action";

const initialState = {
    loading: true,
    payload: [],
    statuscode:"",
    error: "",
    msg: ""
}

const GetPlpPageActionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.PLP_PAGE_LOADING:
            return {
              loading: action.loading,
              payload: action.payload,
              statuscode:action.statuscode,
              error: action.error,
              msg: action.msg
            };
        case Types.PLP_PAGE_SUCCESS:
            return {
                loading: action.loading,
                payload: action.payload,
                statuscode:action.statuscode,
                error: action.error,
                msg: action.msg
            };
        case Types.PLP_PAGE_FAILURE: 
            return {
                loading: action.loading,
                payload: action.payload,
                statuscode:action.statuscode,
                error: action.error,
                msg: action.msg
            };
        default:
            return state;
    }
}

export default GetPlpPageActionsReducer;