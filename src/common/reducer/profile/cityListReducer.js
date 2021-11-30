import { Types } from "../../constant/action";

const initialState  = {
    payload: [],
    error: ""
}

const CityListReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.CITY_LIST_SUCCESS: 
            return {
                payload: action.payload,
                error: action.error
            };
        case Types.CITY_LIST_FAILURE: 
            return {
                payload: action.payload,
                error: action.error
            };
        default:
            return state;
    }
}

export default CityListReducer;