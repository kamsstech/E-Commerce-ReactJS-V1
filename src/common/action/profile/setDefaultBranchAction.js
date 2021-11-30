import { Types } from "../../constant/action";
import { REACT_APP_BASE_URL } from "../../constant/env";
import { Constants } from "../../constant/localstorage";
import axios from "axios";



export const setDefaultSuccess = (sucMsg,code) => ({
  type: Types.SET_DEFAULT_SUCCESS,
  loading: false,
  payload: {
    message: "success"
  },
  error: "",
  message:sucMsg,
  statuscode:code
});

export const setDefaultFailure = (errMsg,code) => ({
  type: Types.SET_DEFAULT_FAILURE,
  loading: false,
  payload: {
    message: ""
  },
  error: errMsg,
  statuscode:code
});

export const setDefaultBranch = (firmId) => async (dispatch) => {
  // console.log(firmId, "setDefaultBranch")

  localStorage.setItem(Constants.FIRM_ID, firmId);
  // const headers = {
  //   "Content-Type": "application/json",
  //   "x-csquare-cus-id": localStorage.getItem(Constants.CUST_ID),
  //   "x-csquare-firm-id": firmId
  // };
  const headers = {
    "Content-Type": "application/json",
    "X-csquare-api-token":localStorage.getItem(Constants.TOKEN),
    "X-csquare-api-key":localStorage.getItem(Constants.KEY),
  };

  const body={
    c_br_code:firmId
  }
  await axios
  .post(`${REACT_APP_BASE_URL}/c2/lc/ms/cust/firm/setdefaultbranch`, body, { headers })
  .then(response => {
    if (response.data.appStatusCode === 0) {   
      // console.log(response, "res")  
      dispatch(setDefaultSuccess(response.data.messages[0],response.data.appStatusCode));
      localStorage.setItem(Constants.TOKEN, response.data.payloadJson.data.token);
      localStorage.setItem(Constants.KEY, response.data.payloadJson.data.key);
      localStorage.setItem(Constants.TOKEN_EXPIRY, response.data.payloadJson.data.tokenExpiry);

    } else {
      dispatch(setDefaultFailure(response.data.messages[0],response.data.appStatusCode));
    }
  })
  .catch(error => {
    // console.log(error, "error");
    dispatch(setDefaultFailure("Something went wrong, Please try again later!"));
  });
}