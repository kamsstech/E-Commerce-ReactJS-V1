import { Types } from "../../../constant/action";

const initialState = {
    loading: true,
    statuscode:"",
    payload: [],
    error: "",
    msg:""
}

const CategoryListReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.CATEGORY_LIST_LOADING:
            return {
              loading: action.loading,
              payload: action.payload,
              statuscode:action.statuscode,
              error: action.error,
              msg: action.msg
            };
        case Types.CATEGORY_LIST_SUCCESS:
            return {
                loading: action.loading,
              payload: action.payload,
              statuscode:action.statuscode,
              error: action.error,
              msg: action.msg
            };
        case Types.CATEGORY_LIST_FAILURE: 
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

export default CategoryListReducer;