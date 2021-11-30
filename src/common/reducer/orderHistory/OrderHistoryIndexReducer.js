import { Types } from "../../constant/action";
import {OrderHistoryIndexEntity, OrderHistoryIndexActionEntity, SearchParametersResultEntity } from "../../model";

const initialState: any = {
    payload:{ 
        index:0,
    }
}


const OrderHistoryIndexReducer = (state: OrderHistoryIndexEntity = initialState, action: OrderHistoryIndexActionEntity): OrderHistoryIndexEntity => {
    switch (action.type) {
        case Types.ORDER_HISTORY_INDEX_PARAMETERS_SUCCESS: 
        return {
            payload: action.payload
        }
        default:
            return state;
    }
}
export default OrderHistoryIndexReducer;