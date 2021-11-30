import { Types } from "../../constant/action";
import { StateListEntity, StateListActionEntity } from "../../model";

const initialState  = {
    payload: [],
    error: ""
}

const AreaListReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.AREA_LIST_SUCCESS: 
            return {
                payload: action.payload,
                error: action.error
            };
        case Types.AREA_LIST_FAILURE: 
            return {
                payload: action.payload,
                error: action.error
            };
        default:
            return state;
    }
}

export default AreaListReducer;