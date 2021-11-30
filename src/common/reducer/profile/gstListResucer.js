import { Types } from "../../constant/action";
import { GSTListResultEntity, GSTListActionEntity } from "../../model";

const initialState: GSTListResultEntity  = {
    payload: [],
    error: ""
}

const GSTListReducer = (state: any = initialState, action: GSTListActionEntity): GSTListResultEntity => {
    switch (action.type) {
        case Types.GST_LIST_SUCCESS: 
            return {
                payload: action.payload,
                error: action.error
            };
        case Types.GST_LIST_FAILURE: 
            return {
                payload: action.payload,
                error: action.error
            };
        default:
            return state;
    }
}

export default GSTListReducer;