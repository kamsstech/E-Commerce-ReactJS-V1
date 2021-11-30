import { Types } from "../../constant/action";
import { AlternativesEntity, AlternativesActionEntity } from "../../model";

const initialState: AlternativesEntity = {
    loading: true,
    payload: [],
    error: ""
}

const GetPdpPageAlternativesReducer = (state: AlternativesEntity = initialState, action: AlternativesActionEntity): AlternativesEntity => {
    switch (action.type) {
        case Types.PDP_PAGE_ALTERNATIVES_LOADING:
            return {
              loading: action.loading,
              payload: action.payload,
              error: action.error
            };
        case Types.PDP_PAGE_ALTERNATIVES_SUCCESS:
            return {
                loading: action.loading,
                payload: action.payload,
                error: action.error
            };
        case Types.PDP_PAGE_ALTERNATIVES_FAILURE: 
            return {
                loading: action.loading,
                payload: action.payload,
                error: action.error
            };
        default:
            return state;
    }
}

export default GetPdpPageAlternativesReducer;