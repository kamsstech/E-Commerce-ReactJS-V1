import { Types } from "../../constant/action";
import { SellersEntity, SellersActionEntity } from "../../model";

const initialState: SellersEntity  = {
    loading: false,
    payload: [],
    error: ""
}

const SellersReducer = (state: SellersEntity = initialState, action: SellersActionEntity): SellersEntity => {
    switch (action.type) {
        case Types.SHOW_SELLER_LOADING: 
            return {
                loading: action.loading,
                payload: action.payload,
                error: action.error
            };
        case Types.SHOW_SELLER_SUCCESS: 
            return {
                loading: action.loading,
                payload: action.payload,
                error: action.error
            };
        case Types.SHOW_SELLER_FAILURE: 
            return {
                loading: action.loading,
                payload: action.payload,
                error: action.error
            };
        default:
            return state;
    }
}

export default SellersReducer;