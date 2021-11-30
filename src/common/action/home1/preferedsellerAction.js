import { Types } from "../../constant/action";
import { ENV } from "../../constant/env";
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
    "Content-Type":"application/json",
    "X-csquare-api-token":localStorage.getItem(Constants.TOKEN),
    "X-csquare-api-key":localStorage.getItem(Constants.KEY),
  };
 
  const body ={
      "c_pincode":"641668",
      "n_page":"1",
      "n_limit":"5"
  }

    await axios.post(`${ENV.BASE_URL}/web/rawgetPreferredSellerInspired`,body,{headers})
    .then(response => {

      if(response.data.appStatusCode === 0){
        if (response.data.payloadJson !== null) {

        dispatch(preferedsellerSuccess(response.data.payloadJson[0].j_seller_lists))
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
