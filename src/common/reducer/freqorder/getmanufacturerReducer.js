import { Types } from "../../constant/action";
import { ManufacturerEntity, ManufacturerActionEntity } from "../../model";

const initialState: ManufacturerEntity  = {
    loading: false,
    payload: [],
    error: ""
}

const GetmanufacturerReducer = (state: ManufacturerEntity = initialState, action: ManufacturerActionEntity): ManufacturerEntity => {
    switch (action.type) {
        case Types.SHOW_MANUFACTURER_LOADING: 
            return {
                loading: action.loading,
                payload: action.payload,
                error: action.error
            };
        case Types.SHOW_MANUFACTURER_SUCCESS: 
            return {
                loading: action.loading,
                payload: action.payload,
                error: action.error
            };
        case Types.SHOW_MANUFACTURER_FAILURE: 
            return {
                loading: action.loading,
                payload: action.payload,
                error: action.error
            };
        default:
            return state;
    }
}

export default GetmanufacturerReducer;