import { Types } from "../../constant/action";
import { REACT_APP_BASE_URL } from "../../constant/env";
import axios from "axios";
import { Constants } from "../../constant/localstorage";

export const watchlistCountLoading = () => ({
  type: Types.WATCHCOUNT_LOADING,
  loading: true,
  payload: [],
  error: ""
});

export const watchlistCountSuccess = (result) => ({
  type: Types.WATCHCOUNT_SUCCESS,
  loading: false,
  payload: result,
  error: ""
});

export const watchlistCountFailure = (errMsg)=> ({
  type: Types.WATCHCOUNT_FAILURE,
  loading: false,
  payload: [],
  error: errMsg
});

export const WatchlistCount = () => async (dispatch) => {
  dispatch(watchlistCountLoading());
  const headers = {
    "Content-Type":"application/json",
    "X-csquare-api-token":localStorage.getItem(Constants.TOKEN),
    "X-csquare-api-key":localStorage.getItem(Constants.KEY),
  };

  await axios
   .get(`${REACT_APP_BASE_URL}/c2/lc/ms/ord/l/wl/count`,{ headers })
    .then(response => {
      
      if(response.data.appStatusCode === 0){
        
        // response.setState({ items:dispatch(watchlistCountSuccess(response.data.payloadJson))
        // })
        dispatch(watchlistCountSuccess(response.data.payloadJson))
        // dispatch(watchlistCountSuccess(this.setState({ items: response.data.payloadJson })))
      } else {
        dispatch(watchlistCountFailure(response.data.messages[0]))
      }
    })
    .catch(error => {
      dispatch(watchlistCountFailure("Something went wrong, Please try again later!"));
    });
};
