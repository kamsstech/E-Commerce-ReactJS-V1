import { Types } from "../../constant/action";
import { ShopByMfcEntity, SearchBySellerActionEntity,ShopByMfcActionEntity } from "../../model";

const initialState: ShopByMfcEntity  = {
    loading: false,
    payload: [],
    error: ""
}

const ShopByMfcReducer = (state: ShopByMfcEntity = initialState, action: ShopByMfcActionEntity): ShopByMfcEntity => {
    switch (action.type) {
        case Types.SHOP_BY_MFC_LOADING: 
            return {
                loading: action.loading,
                payload: action.payload,
                error: action.error
            };
        case Types.SHOP_BY_MFC_SUCCESS: 
            return {
                loading: action.loading,
                payload: action.payload,
                error: action.error
            };
        case Types.SHOP_BY_MFC_FAILURE: 
            return {
                loading: action.loading,
                payload: action.payload,
                error: action.error
            };
        default:
            return state;
    }
}

export default ShopByMfcReducer;