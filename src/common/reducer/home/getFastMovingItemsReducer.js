import { Types } from "../../constant/action";
import { FastMovingItemsEntity, FastMovingItemsActionEntity } from "../../model";

const initialState  = {
    payload: [],
    error: ""
}

const GetFastMovingItemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.FASTMOVING_ITEMS_SUCCESS: 
            return {
                payload: action.payload,
                error: action.error
            };
        case Types.FASTMOVING_ITEMS_FAILURE: 
            return {
                payload: action.payload,
                error: action.error
            };
        default:
            return state;
    }
}

export default GetFastMovingItemsReducer;