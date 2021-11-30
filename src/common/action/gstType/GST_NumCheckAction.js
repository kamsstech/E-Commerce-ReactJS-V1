import { Types } from "../../constant/action";
import { REACT_APP_BASE_URL } from "../../constant/env";
import axios from "axios";
import { Constants } from "../../constant/localstorage";

  export const GST_NumCheckLoading = ()=> ({
    type: Types.GST_NUM_CHECK_LOADING,
    loading: true,
    statuscode:"",
    payload: [],
    error: ""
  });

export const GST_NumCheckSuccess = (result,code) => ({
    type: Types.GST_NUM_CHECK_SUCCESS,
    loading: false,
    statuscode:code,
    payload: result,
    error: ""
  });

  export const GST_NumCheckFailure = (errMsg,code) => ({
    type: Types.GST_NUM_CHECK_FAILURE,
    loading: false,
    statuscode:code,
    payload: [],
    error: errMsg
  });
  
export const GST_NumCheck = () => async (dispatch) => {
   
  const headers = {
    "Content-Type": "application/json",
    "X-csquare-api-token":localStorage.getItem(Constants.TOKEN),
    "X-csquare-api-key":localStorage.getItem(Constants.KEY),
  };

    axios.get(`${REACT_APP_BASE_URL}/c2/lc/ms/cust/firm/check/gst`,{headers})
      .then(response => {
       
        if(response.data.appStatusCode === 0){ 
          dispatch(GST_NumCheckSuccess(response.data.payloadJson.data, response.data.appStatusCode))
        } else {
          dispatch(GST_NumCheckFailure(response.data.messages[0], response.data.appStatusCode))
        }
      })
      .catch(error => {
        dispatch(GST_NumCheckFailure("Sorry something went wrong, Please try again"));
      });
  };