import { Types } from "../../../constant/action";

const initialState = {
    loading: true,
    statuscode:"",
    payload: [],
    error: "",
    msg:""
}

const AddCategoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.ADD_CATEGORY_LOADING:
            return {
                loading: action.loading,
                payload: action.payload,
                statuscode:action.statuscode,
                error: action.error,
                msg: action.msg
            };
        case Types.ADD_CATEGORY_SUCCESS:
            return {
                loading: action.loading,
                payload: action.payload,
                statuscode:action.statuscode,
                error: action.error,
                msg: action.msg
            };
        case Types.ADD_CATEGORY_FAILURE: 
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

export default AddCategoryReducer;