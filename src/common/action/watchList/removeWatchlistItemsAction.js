import { Types } from "../../constant/action";
import { REACT_APP_BASE_URL } from "../../constant/env";
import { Constants } from "../../constant/localstorage";
import axios from "axios";

export const removeWatchlistItemsLoading = () => ({
  type: Types.REMOVE_WATCHLIST_LOADING,
  payload:[],
  loading: true,
  error: ""
});
export const removeWatchlistItemsSuccess = (result) => ({
  type: Types.REMOVE_WATCHLIST_SUCCESS,
  payload: "Success",
  loading: false,
  error: ""
});

export const removeWatchlistItemsFailure = (errMsg) => ({
  type: Types.REMOVE_WATCHLIST_FAILURE,
  payload: [],
  loading: false,
  error: errMsg
});

export const RemoveWatchlistItems = (body) => async (dispatch) => {
  dispatch(removeWatchlistItemsLoading())
  
  const headers = {
    "Content-Type":"application/json",
    "X-csquare-api-token":localStorage.getItem(Constants.TOKEN),
    "X-csquare-api-key":localStorage.getItem(Constants.KEY),
  };
  await axios.post(`${REACT_APP_BASE_URL}/c2/lc/ms/ord/l/wl/removeFromWatchlist`,body, {headers})
        .then(response => {
      if(response.data.appStatusCode === 0){
      dispatch(removeWatchlistItemsSuccess(response.data.messages[0]))

      }else{
        dispatch(removeWatchlistItemsFailure(response.data.messages[0]));
      }
   })
  .catch(error => {
    dispatch(removeWatchlistItemsFailure("Something went wrong, Please try again later!"));
  });

  
};
