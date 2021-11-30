import { Types } from "../../constant/action";
import { NewLaunchesItemsEntity, NewLaunchesItemsActionEntity } from "../../model";

const initialState: NewLaunchesItemsEntity  = {
    payload: [],
    error: ""
}

const GetNewLaunchesItemsReducer = (state: NewLaunchesItemsEntity = initialState, action: NewLaunchesItemsActionEntity): NewLaunchesItemsEntity => {
    switch (action.type) {
        case Types.NEWLAUNCHES_ITEMS_SUCCESS: 
            return {
                payload: action.payload,
                error: action.error
            };
        case Types.NEWLAUNCHES_ITEMS_FAILURE: 
            return {
                payload: action.payload,
                error: action.error
            };
        default:
            return state;
    }
}

export default GetNewLaunchesItemsReducer;