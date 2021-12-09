import { Types } from "../../constant/action";


const initialState = {
    loading: true,
    statuscode:"",
    payload: [],
    error: "",
    msg:""
}

const GetPdpPageItemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.PDP_PAGE_ITEMS_LOADING:
            return {
               loading: action.loading,
              payload: action.payload,
              statuscode:action.statuscode,
              error: action.error,
              msg: action.msg
            };
        case Types.PDP_PAGE_ITEMS_SUCCESS:
            return {
                 loading: action.loading,
              payload: action.payload,
              statuscode:action.statuscode,
              error: action.error,
              msg: action.msg
            };
        case Types.PDP_PAGE_ITEMS_FAILURE: 
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

export default GetPdpPageItemsReducer;