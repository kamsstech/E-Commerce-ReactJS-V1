import { Types } from "../../constant/action";
import { REACT_APP_BASE_URL } from "../../constant/env";
import axios from "axios";
import { Constants } from "../../constant/localstorage";

export const shorbookCountLoading = () => ({
  type: Types.SHORTCOUNT_LOADING,
  loading: true,
  payload: [],
  error: ""
});

export const shorbookCountSuccess = (categorylists) => ({
  type: Types.SHORTCOUNT_SUCCESS,
  loading: false,
  payload: categorylists,
  error: ""
});

export const shorbookCountFailure = (errMsg)=> ({
  type: Types.SHORTCOUNT_FAILURE,
  loading: false,
  payload: [],
  error: errMsg
});

export const ShortbookCount = () => async (dispatch) => {
  dispatch(shorbookCountLoading());
  const headers = {
    "Content-Type":"application/json",
    "X-csquare-api-token":localStorage.getItem(Constants.TOKEN),
    "X-csquare-api-key":localStorage.getItem(Constants.KEY),
  };
  
  await axios
   .get(`${REACT_APP_BASE_URL}/c2/lc/ms/ord/l/sb/count`,{ headers })
    .then(response => {
      // console.log(response)
      if(response.data.appStatusCode === 0){
        dispatch(shorbookCountSuccess(response.data.payloadJson))
      } else {
        dispatch(shorbookCountFailure(response.data.messages[0]))
      }
    })
    .catch(error => {
      dispatch(shorbookCountFailure("Something went wrong, Please try again later!"));
    });
};
