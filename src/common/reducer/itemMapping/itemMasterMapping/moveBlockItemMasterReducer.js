import { Types } from "../../../constant/action";

const initialState = {
    loading: true,
    statuscode:"",
    payload: [],
    error: "",
    msg: ""
}

const MoveBlockItemMasterReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.BLOCK_ITEM_MASTER_MAP_LOADING:
            return {
                  loading: action.loading,
                  payload: action.payload,
                  statuscode:action.statuscode,
                  error: action.error,
                  msg: action.msg
            };
        case Types.BLOCK_ITEM_MASTER_MAP_SUCCESS:
            return {
                  loading: action.loading,
                  payload: action.payload,
                  statuscode:action.statuscode,
                  error: action.error,
                  msg: action.msg
            };
        case Types.BLOCK_ITEM_MASTER_MAP_FAILURE: 
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

export default MoveBlockItemMasterReducer;