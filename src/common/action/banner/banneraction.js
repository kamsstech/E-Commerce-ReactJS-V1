import axios from "axios";
import { Types } from "../../constant/action";
import { REACT_APP_BASE_URL } from "../../constant/env";
import { Constants } from "../../constant/localstorage";


export const BannerActionLoading = () => ({
  type: Types.SHOW_BANNER_LOADING,
  loading: true,
  payload: [],
  error: ""
});

export const BannerActionSuccess = (
  payload
) => ({
  type: Types.SHOW_BANNER_SUCCESS,
  loading: false,
  payload: payload,
  error: ""
});

export const BannerActionFailure = (errMsg) => ({
  type: Types.SHOW_BANNER_FAILURE,
  loading: false,
  payload: [],
  error: errMsg
});

export const BannerAction = () => async(dispatch ) => {
  dispatch(BannerActionLoading());
  // const headers = {
  //   "Content-Type": "application/json"
  // };
  const headers = {
    "Content-Type":"application/json",
    "X-csquare-api-token":localStorage.getItem(Constants.TOKEN),
    "X-csquare-api-key":localStorage.getItem(Constants.KEY),
  };
  await axios
    .get(`${REACT_APP_BASE_URL}/c2/lc/ms/mst/g/banner`,{ headers })
    
    .then(response => {
      
      if(response.data.appStatusCode === 0){
        dispatch(BannerActionSuccess(response.data.payloadJson.data))
      } else {
        dispatch(BannerActionFailure(response.data.messages[0]))
      }
    })
    .catch(error => {
      dispatch(BannerActionFailure("Something went wrong, Please try again later!"));
    });
}