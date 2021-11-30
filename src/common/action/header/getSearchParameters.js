import { Types } from "../../constant/action";


export const searchParameters = (searchObject) => ({
    type: Types.SEARCH_PARAMETERS_SUCCESS,
    // loading: false,
    payload: searchObject,
    // error: errMsg
  });
export const GetSearchParameters= (searchObject) => async (dispatch) => {
  
    dispatch(searchParameters(searchObject));
}