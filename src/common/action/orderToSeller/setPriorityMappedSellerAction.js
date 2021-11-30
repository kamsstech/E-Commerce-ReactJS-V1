import { Types } from "../../constant/action";
import { REACT_APP_BASE_URL } from "../../constant/env";
import axios from "axios";
import { Constants } from "../../constant/localstorage";



  export const SetPriorityMappedSellerLoading = ()=> ({
    type: Types.SET_PRIORITY_MAPPED_SELLER_LOADING,
    loading: true,
    statuscode:"",
    payload: [],
    error: ""
  });

export const SetPriorityMappedSellerSuccess = (result,code) => ({
    type: Types.SET_PRIORITY_MAPPED_SELLER_SUCCESS,
    loading: false,
    statuscode:code,
    payload: result,
    error: ""
  });

  export const SetPriorityMappedSellerFailure = (errMsg,code) => ({
    type: Types.SET_PRIORITY_MAPPED_SELLER_FAILURE,
    loading: false,
    statuscode:code,
    payload: [],
    error: errMsg
  });

export const SetPriorityMappedSeller = (body) => async (dispatch) => {
   
  const headers = {
    "Content-Type": "application/json",
    "X-csquare-api-token":localStorage.getItem(Constants.TOKEN),
    "X-csquare-api-key":localStorage.getItem(Constants.KEY),
  };

    axios.post(`${REACT_APP_BASE_URL}/c2/lc/ms/cust/seller/update/priority`,body,{headers})
      .then(response => {
       
        if(response.data.appStatusCode === 0){ 
          dispatch(SetPriorityMappedSellerSuccess(response.data.payloadJson.data, response.data.appStatusCode))
        } else {
          dispatch(SetPriorityMappedSellerFailure(response.data.messages[0], response.data.appStatusCode))
        }
      })
      .catch(error => {
        dispatch(SetPriorityMappedSellerFailure("Sorry something went wrong, Please try again"));
      });
  };
  