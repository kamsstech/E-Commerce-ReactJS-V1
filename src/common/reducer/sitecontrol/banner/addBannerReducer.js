import { Types } from "../../../constant/action";

const initialState = {
    loading: true,
    statuscode:"",
    payload: [],
    error: "",
    msg:""
}

const AddBannerReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.ADD_BANNER_LOADING:
            return {
              loading: action.loading,
              payload: action.payload,
              statuscode:action.statuscode,
              error: action.error,
              msg: action.msg
            };
        case Types.ADD_BANNER_SUCCESS:
            return {
                loading: action.loading,
              payload: action.payload,
              statuscode:action.statuscode,
              error: action.error,
              msg: action.msg
            };
        case Types.ADD_BANNER_FAILURE: 
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

export default AddBannerReducer;