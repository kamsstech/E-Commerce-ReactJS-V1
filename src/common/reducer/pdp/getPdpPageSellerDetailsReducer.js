import { Types } from "../../constant/action";


// import {PdpPageItemsEntity } from "../../model/pdp/PdpPageItemsEntity";
// import {PdpPageItemsActionEntity } from "../../model/pdp/PdpPageItemsActionEntity";

const initialState= {
    loading: true,
    payload: [],
    statuscode:"",
    error: ""
}

const GetPdpPageSellerDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.PDP_PAGE_SELLER_DETAILS_LOADING:
            return {
              loading: action.loading,
              payload: action.payload,
              statuscode: action.statuscode,
              error: action.error
            };
        case Types.PDP_PAGE_SELLER_DETAILS_SUCCESS: 
            return {
                loading: action.loading,
                payload: action.payload,
                statuscode: action.statuscode,
                error: action.error
            };
        case Types.PDP_PAGE_SELLER_DETAILS_FAILURE: 
            return {
                loading: action.loading,
                payload: action.payload,
                statuscode: action.statuscode,
                error: action.error
            };
        default:
            return state;
    }
}

export default GetPdpPageSellerDetailsReducer;