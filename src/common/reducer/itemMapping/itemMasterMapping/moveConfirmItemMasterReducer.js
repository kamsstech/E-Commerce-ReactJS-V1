import { Types } from "../../../constant/action";

const initialState = {
    loading: true,
    statuscode:"",
    payload: [],
    error: "",
    msg: ""
}

const MoveConfirmItemMasterReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.CONFIRM_ITEM_MASTER_MAP_LOADING:
            return {
                  loading: action.loading,
                  payload: action.payload,
                  statuscode:action.statuscode,
                  error: action.error,
                  msg: action.msg
            };
        case Types.CONFIRM_ITEM_MASTER_MAP_SUCCESS:
            return {
                  loading: action.loading,
                  payload: action.payload,
                  statuscode:action.statuscode,
                  error: action.error,
                  msg: action.msg
            };
        case Types.CONFIRM_ITEM_MASTER_MAP_FAILURE: 
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

export default MoveConfirmItemMasterReducer;