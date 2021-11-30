import { Types } from "../../constant/action";
import { REACT_APP_BASE_URL } from "../../constant/env";
import axios from "axios";

import { Constants } from "../../constant/localstorage";

export const preferedsellerLoading = () => ({
    type: Types.GET_PREFEREDSELLER_LOADING,
    loading:false,
    payload:[],
    error: ""
   
  });
  export const preferedsellerSuccess = (result) => ({
    type: Types.GET_PREFEREDSELLER_SUCCESS,
    loading:false,
    payload:result,
    error: ""
  });
  
  export const preferedsellerFailure = (errMsg) => ({
    type: Types.GET_PREFEREDSELLER_FAILURE,
    loading:false,
    payload:[],
    error: errMsg
  });
  

export const PreferedSellerCall = () => async (dispatch) => {
    dispatch(preferedsellerLoading());
 
  const headers = {
    "Content-Type": "application/json",
    "X-csquare-api-token":localStorage.getItem(Constants.TOKEN),
    "X-csquare-api-key":localStorage.getItem(Constants.KEY),
  };


  const body={
    // "c_pincode":localStorage.getItem(Constants.PIN_CODE),
    "n_page":0,
    "n_limit":15
  }



  ///web/getPreferredSellerInspired
  ///c2/lc/ms/mst/seller/preferredSeller
    await axios.post(`${REACT_APP_BASE_URL}/c2/lc/ms/mst/seller/preferred`,body,{headers})
    .then(response => {

      if(response.data.appStatusCode === 0){
        if (response.data.payloadJson !== null) {

        dispatch(preferedsellerSuccess(response.data.payloadJson.data))
        } 
        else {
          dispatch(preferedsellerFailure(response.data.messages[0]))
        }
      } 
      else {
        dispatch(preferedsellerFailure(response.data.messages[0]))
      }
    })
    .catch(error => {
      dispatch(preferedsellerFailure("Something went wrong, Please try again later!"));
    });
};
