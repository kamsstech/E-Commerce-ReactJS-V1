import { Types } from "../../constant/action";

const initialState  = {
    payload: "",
    messages:"",
    statuscode:"",
    error: ""
}

const GetStateCityAreaReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case Types.STATE_CITY_AREA_LIST_SUCCESS: 
            return {
                payload: action.payload,
                messages: action.error,
                statuscode: action.statuscode
            };
        case Types.STATE_CITY_AREA_LIST_FAILURE: 
            return {
                payload: action.payload,
                error: action.error,
                statuscode: action.statuscode
            };
        default:
            return state;
    }
}

export default GetStateCityAreaReducer;