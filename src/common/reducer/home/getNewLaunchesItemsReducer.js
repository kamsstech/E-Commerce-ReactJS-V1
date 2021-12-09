import { Types } from "../../constant/action";
import { NewLaunchesItemsEntity, NewLaunchesItemsActionEntity } from "../../model";

const initialState = {
    loading: true,
    statuscode:"",
    payload: [],
    error: "",
    msg:""
}

const GetNewLaunchesItemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.NEWLAUNCHES_ITEMS_SUCCESS: 
            return {
                 loading: action.loading,
              payload: action.payload,
              statuscode:action.statuscode,
              error: action.error,
              msg: action.msg
            };
        case Types.NEWLAUNCHES_ITEMS_FAILURE: 
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

export default GetNewLaunchesItemsReducer;