import { Types } from "../../../constant/action";

const initialState = {
    loading: true,
    statuscode:"",
    payload: [],
    error: "",
    msg:""
}

const ItemSubMasterSearchReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.ITEM_SUB_MASTER_SEARCH_LOADING:
            return {
              loading: action.loading,
              payload: action.payload,
              statuscode:action.statuscode,
              error: action.error,
              msg: action.msg
            };
        case Types.ITEM_SUB_MASTER_SEARCH_SUCCESS:
            return {
                loading: action.loading,
              payload: action.payload,
              statuscode:action.statuscode,
              error: action.error,
              msg: action.msg
            };
        case Types.ITEM_SUB_MASTER_SEARCH_FAILURE: 
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

export default ItemSubMasterSearchReducer;