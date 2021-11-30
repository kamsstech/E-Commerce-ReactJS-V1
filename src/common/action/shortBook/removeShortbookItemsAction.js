import { Types } from "../../constant/action";
import { REACT_APP_BASE_URL } from "../../constant/env";
import { Constants } from "../../constant/localstorage";
import axios from "axios";

export const removeShortbookItemsLoading = () => ({
  type: Types.REMOVE_SHORTBOOK_LOADING,
  payload:[],
  loading: true,
  error: ""
});
export const removeShortbookItemsSuccess = (result) => ({
  type: Types.REMOVE_SHORTBOOK_SUCCESS,
  payload: "Success",
  loading: false,
  error: ""
});

export const removeShortbookItemsFailure = (errMsg) => ({
  type: Types.REMOVE_SHORTBOOK_FAILURE,
  payload: [],
  loading: false,
  error: errMsg
});

export const RemoveShortbookItems = (body) => async (dispatch) => {
  dispatch(removeShortbookItemsLoading())
  
  const headers = {
    "Content-Type":"application/json",
    "X-csquare-api-token":localStorage.getItem(Constants.TOKEN),
    "X-csquare-api-key":localStorage.getItem(Constants.KEY),
  };
  
  await axios.post(`${REACT_APP_BASE_URL}/c2/lc/ms/ord/l/sb/remove`,body, {headers})
        .then(response => {
      if(response.data.appStatusCode === 0){
      dispatch(removeShortbookItemsSuccess(response.data.messages[0]))

      }else{
        dispatch(removeShortbookItemsFailure(response.data.messages[0]));
      }
   })
  .catch(error => {
    dispatch(removeShortbookItemsFailure("Something went wrong, Please try again later!"));
  });

  
};
