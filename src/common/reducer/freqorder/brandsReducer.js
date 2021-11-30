import { Types } from "../../constant/action";
import { BrandsEntity, BrandsActionEntity } from "../../model";

const initialState: BrandsEntity  = {
    loading: false,
    payload: [],
    error: ""
}

const BrandsReducer = (state: BrandsEntity = initialState, action: BrandsActionEntity): BrandsEntity => {
    switch (action.type) {
        case Types.SHOW_BANNER_LOADING: 
            return {
                loading: action.loading,
                payload: action.payload,
                error: action.error
            };
        case Types.SHOW_BANNER_SUCCESS: 
            return {
                loading: action.loading,
                payload: action.payload,
                error: action.error
            };
        case Types.SHOW_BANNER_FAILURE: 
            return {
                loading: action.loading,
                payload: action.payload,
                error: action.error
            };
        default:
            return state;
    }
}

export default BrandsReducer;