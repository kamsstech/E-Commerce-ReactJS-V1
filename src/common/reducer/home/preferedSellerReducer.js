import { Types } from "../../constant/action";
import { PreferedSellerReducerEntity, PreferedSellerEntity } from "../../model";

const initialState: PreferedSellerReducerEntity = {
    loading: false,
    payload: [],
    error: ""
}

const PreferedsellerReducerss = (
    state: PreferedSellerReducerEntity = initialState,
    action: PreferedSellerEntity): PreferedSellerReducerEntity => {

    switch (action.type) {
        case Types.GET_PREFEREDSELLER_LOADING:
            return {
                loading: action.loading,
                payload: action.payload,
                error: action.error
            };
        case Types.GET_PREFEREDSELLER_SUCCESS:
            return {
                loading: action.loading,
                payload: action.payload,
                error: action.error
            };
            case Types.GET_PREFEREDSELLER_FAILURE:
            return {
                loading: action.loading,
                payload: action.payload,
                error: action.error
            };
        default:
            return state;
    }
}

export default PreferedsellerReducerss;