import { Types } from "../../constant/action";

const initialState  = {
    loading: false,
    payload: [],
    error: ""
}
const CategoryListsReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.CATEGORYLISTS_LOADING: 
            return {
                loading: action.loading,
                payload: action.payload,
                error: action.error
            };
        case Types.CATEGORYLISTS_SUCCESS: 
            return {
                loading: action.loading,
                payload: action.payload,
                error: action.error
            };
        case Types.CATEGORYLISTS_FAILURE: 
            return {
                loading: action.loading,
                payload: action.payload,
                error: action.error
            };
        default:
            return state;
    }
}
export default CategoryListsReducer;