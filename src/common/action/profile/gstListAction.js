import { Types } from "../../constant/action";
import { REACT_APP_BASE_URL } from "../../constant/env";
import axios from "axios";
import { Constants } from "../../constant/localstorage";


export const gstListSuccess = (result) => ({
  type: Types.GST_LIST_SUCCESS,
  payload: result,
  error: ""
});
  
export const gstListFailure = (errMsg) => ({
  type: Types.GST_LIST_FAILURE,
  payload: [],
  error: errMsg
});

export const GSTListAction = () => async (dispatch) => { 
  // const headers = {
  //   "Content-Type": "application/json"
  // };
  const headers = {
    "Content-Type": "application/json",
    "X-csquare-api-token":localStorage.getItem(Constants.TOKEN),
    "X-csquare-api-key":localStorage.getItem(Constants.KEY),
  };
  await axios
    .get(`${REACT_APP_BASE_URL}/c2/lc/ms/mst/g/gst`,{ headers })
    .then(response => {
      if(response.data.appStatusCode === 0){ 
        dispatch(gstListSuccess(response.data.payloadJson.data))
      } else {
        dispatch(gstListFailure(response.data.messages[0]))
      }
    })
    .catch(error => {
      dispatch(gstListFailure("Something went wrong, Please try again later!"));
    });
};
