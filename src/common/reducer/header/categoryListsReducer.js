import { Types } from "../../constant/action";

const initialState  = {
    loading: true,
    statuscode:"",
    payload: [],
    error: "",
    msg:""
}
const CategoryListsReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.CATEGORYLISTS_LOADING: 
            return {
                loading: action.loading,
              payload: action.payload,
              statuscode:action.statuscode,
              error: action.error,
              msg: action.msg
            };
        case Types.CATEGORYLISTS_SUCCESS: 
            return {
                loading: action.loading,
              payload: action.payload,
              statuscode:action.statuscode,
              error: action.error,
              msg: action.msg
            };
        case Types.CATEGORYLISTS_FAILURE: 
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
export default CategoryListsReducer;