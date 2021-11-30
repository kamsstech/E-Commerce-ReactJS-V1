import axios from "axios";
import { Types } from "../../constant/action";
import { ENV } from "../../constant/env";
import { REACT_APP_BASE_URL } from "../../constant/env";
import { Constants } from "../../constant/localstorage";

export const FreqorderActionLoading = () => ({
  type: Types.SHOW_FREQORDER_LOADING,
  loading: true,
  payload: [],
  error: ""
});

export const FreqorderActionSuccess = (
  payload
) => ({
  type: Types.SHOW_FREQORDER_SUCCESS,
  loading: false,
  payload: payload,
  error: ""
});

export const FreqorderActionFailure = (errMsg) => ({
  type: Types.SHOW_FREQORDER_FAILURE,
  loading: false,
  payload: [],
  error: errMsg
});

export const FreqorderAction = (inputs) => async(dispatch) => {
  dispatch(FreqorderActionLoading());
  const headers = {
    "Content-Type": "application/json",
    "X-csquare-api-token":localStorage.getItem(Constants.TOKEN),
    "X-csquare-api-key":localStorage.getItem(Constants.KEY),
  };
  await axios.post(`${REACT_APP_BASE_URL}/ord/l/freq`,inputs,{ headers })
    .then(response => {
      if(response.data.appStatusCode === 0){
        let data  = []
        data.push(response.data.payloadJson.data)
        dispatch(FreqorderActionSuccess(data))
      } else {
        dispatch(FreqorderActionFailure(response.data.messages[0]))
      }
    })
    .catch(error => {
      dispatch(FreqorderActionFailure("Something went wrong, Please try again later!"));
    });
}