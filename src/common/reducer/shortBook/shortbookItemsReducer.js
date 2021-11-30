import { Types } from "../../constant/action";

const initialState = {
    loading: true,
    payload: [],
    statuscode:"",
    error: "",
    msg:""
}

const ShortbookItemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.SHORTBOOK_LOADING:
            return {
              loading: action.loading,
              payload: action.payload,
              statuscode: action.statuscode,
              error: action.error,
              msg: action.msg
            };
        case Types.SHORTBOOK_SUCCESS:
            return {
                loading: action.loading,
                payload: action.payload,
                statuscode: action.statuscode,
                error: action.error,
                msg: action.msg
            };
        case Types.SHORTBOOK_FAILURE: 
            return {
                loading: action.loading,
                payload: action.payload,
                statuscode: action.statuscode,
                error: action.error,
                msg: action.msg
            };
        default:
            return state;
    }
}

export default ShortbookItemsReducer;