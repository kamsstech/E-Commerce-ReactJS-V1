import { Types } from "../../constant/action";
import { FastMovingItemsEntity, FastMovingItemsActionEntity } from "../../model";

const initialState  = {
    loading: true,
    statuscode:"",
    payload: [],
    error: "",
    msg:""
}

const GetFastMovingItemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.FASTMOVING_ITEMS_SUCCESS: 
            return {
                loading: action.loading,
              payload: action.payload,
              statuscode:action.statuscode,
              error: action.error,
              msg: action.msg
            };
        case Types.FASTMOVING_ITEMS_FAILURE: 
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

export default GetFastMovingItemsReducer;