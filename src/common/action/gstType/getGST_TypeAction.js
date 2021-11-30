import { Types } from "../../constant/action";
import { REACT_APP_BASE_URL } from "../../constant/env";
import axios from "axios";
import { Constants } from "../../constant/localstorage";



  export const GetGST_TypeLoading = ()=> ({
    type: Types.GST_TYPE_LOADING,
    loading: true,
    statuscode:"",
    payload: [],
    error: ""
  });

export const GetGST_TypeSuccess = (result,code) => ({
    type: Types.GST_TYPE_SUCCESS,
    loading: false,
    statuscode:code,
    payload: result,
    error: ""
  });

  export const GetGST_TypeFailure = (errMsg,code) => ({
    type: Types.GST_TYPE_FAILURE,
    loading: false,
    statuscode:code,
    payload: [],
    error: errMsg
  });
  
export const GetGST_Type = () => async (dispatch) => {
   
  const headers = {
    "Content-Type": "application/json",
    "X-csquare-api-token":localStorage.getItem(Constants.TOKEN),
    "X-csquare-api-key":localStorage.getItem(Constants.KEY),
  };

    axios.get(`${REACT_APP_BASE_URL}/c2/lc/ms/mst/g/gst`,{headers})
      .then(response => {
       
        if(response.data.appStatusCode === 0){ 
          dispatch(GetGST_TypeSuccess(response.data.payloadJson.data, response.data.appStatusCode))
        } else {
          dispatch(GetGST_TypeFailure(response.data.messages[0], response.data.appStatusCode))
        }
      })
      .catch(error => {
        dispatch(GetGST_TypeFailure("Sorry something went wrong, Please try again"));
      });
  };