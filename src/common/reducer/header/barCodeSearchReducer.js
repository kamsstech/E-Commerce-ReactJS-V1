import { Types } from "../../constant/action";

const initialState  = {
    loading: false,
    payload: [],
    statuscode:"",
    error: ""
}
const BarcodeSearchReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.BARCODE_SEARCH_LOADING: 
            return {
                loading: action.loading,
                payload: action.payload,
                statuscode: action.statuscode,
                error: action.error
            };
        case Types.BARCODE_SEARCH_SUCCESS: 
            return {
                loading: action.loading,
                payload: action.payload,
                statuscode: action.statuscode,
                error: action.error
            };
        case Types.BARCODE_SEARCH_FAILURE: 
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
export default BarcodeSearchReducer;