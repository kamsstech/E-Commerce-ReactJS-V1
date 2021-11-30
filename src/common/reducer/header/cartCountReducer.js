import { Types } from "../../constant/action";

const initialState  = {
    loading: false,
    payload: [],
    error: "",
    statuscode:"",

}
const CartCountReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.CARTCOUNT_LOADING: 
            return {
                loading: action.loading,
                payload: action.payload,
                statuscode: action.statuscode,
                error: action.error
            };
        case Types.CARTCOUNT_SUCCESS: 
            return {
                loading: action.loading,
                payload: action.payload,
                statuscode: action.statuscode,
                error: action.error
            };
        case Types.CARTCOUNT_FAILURE: 
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
export default CartCountReducer;