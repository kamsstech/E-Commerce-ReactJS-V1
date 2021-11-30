import { Types } from "../../../constant/action";

const initialState = {
    loading: true,
    payload: [],
    error: ""
}

const ItemSubMasterMapCountReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.ITEM_SUB_MASTER_MAP_COUNT_LOADING:
            return {
              loading: action.loading,
              payload: action.payload,
              error: action.error
            };
        case Types.ITEM_SUB_MASTER_MAP_COUNT_SUCCESS:
            return {
                loading: action.loading,
                payload: action.payload,
                error: action.error
            };
        case Types.ITEM_SUB_MASTER_MAP_COUNT_FAILURE: 
            return {
                loading: action.loading,
                payload: action.payload,
                error: action.error
            };
        default:
            return state;
    }
}

export default ItemSubMasterMapCountReducer;