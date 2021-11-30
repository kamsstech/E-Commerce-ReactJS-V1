import { Types } from "../../constant/action";
import { REACT_APP_BASE_URL } from "../../constant/env";
import { Constants } from "../../constant/localstorage";
import axios from "axios";

export const addWatchlistItemsLoading = () => ({
  type: Types.ADD_WATCHLIST_LOADING,
  payload:[],
  loading: true,
  error: ""
});
export const addWatchlistItemsSuccess = (result) => ({
  type: Types.ADD_WATCHLIST_SUCCESS,
  payload: "Success",
  loading: false,
  error: ""
});

export const addWatchlistItemsFailure = (errMsg) => ({
  type: Types.ADD_WATCHLIST_FAILURE,
  payload: [],
  loading: false,
  error: errMsg
});

export const AddWatchlistItems = (body) => async (dispatch) => {
  dispatch(addWatchlistItemsLoading())
  
  const headers = {
    "Content-Type":"application/json",
    "X-csquare-api-token":localStorage.getItem(Constants.TOKEN),
    "X-csquare-api-key":localStorage.getItem(Constants.KEY),
  };
  
  await axios.post(`${REACT_APP_BASE_URL}/c2/lc/ms/ord/l/wl/addToWatchlists`,body, {headers})
        .then(response => {
      if(response.data.appStatusCode === 0){
      dispatch(addWatchlistItemsSuccess(response.data.messages[0]))

      }else{
        dispatch(addWatchlistItemsFailure(response.data.messages[0]));
      }
   })
  .catch(error => {
    dispatch(addWatchlistItemsFailure("Something went wrong, Please try again later!"));
  });

  
};
