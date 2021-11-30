import { Types } from "../../constant/action";
import {SearchParametersEntity, SearchParametersActionEntity, SearchParametersResultEntity } from "../../model";

const initialState: any = {
    payload:{ 
        searchKey:"",
        searchby:"Products"
    }
}


const SearchParametersReducer = (state: SearchParametersEntity = initialState, action: SearchParametersActionEntity): SearchParametersEntity => {
    switch (action.type) {
        case Types.SEARCH_PARAMETERS_SUCCESS: 
        return {
            payload: action.payload
        }
        default:
            return state;
    }
}
export default SearchParametersReducer;