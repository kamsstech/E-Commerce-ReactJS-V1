import { Types } from "../../constant/action";
import { REACT_APP_BASE_URL } from "../../constant/env";
import axios from "axios";
import { Constants } from "../../constant/localstorage";



  export const GetSellerInfoLoading = ()=> ({
    type: Types.GET_SELLER_INFO_LOADING,
    loading: true,
    statuscode:"",
    payload: [],
    error: ""
  });

export const GetSellerInfoSuccess = (result,code) => ({
    type: Types.GET_SELLER_INFO_SUCCESS,
    loading: false,
    statuscode:code,
    payload: result,
    error: ""
  });

  export const GetSellerInfoFailure = (errMsg,code) => ({
    type: Types.GET_SELLER_INFO_FAILURE,
    loading: false,
    statuscode:code,
    payload: [],
    error: errMsg
  });

export const GetSellerInfo = (body) => async (dispatch) => {
   
  const headers = {
    "Content-Type": "application/json",
    "X-csquare-api-token":localStorage.getItem(Constants.TOKEN),
    "X-csquare-api-key":localStorage.getItem(Constants.KEY),
  };

    axios.post(`${REACT_APP_BASE_URL}/c2/lc/ms/cust/seller/getsellerinfo`,body,{headers})
      .then(response => {
       
        if(response.data.appStatusCode === 0){ 
          dispatch(GetSellerInfoSuccess(response.data.payloadJson.data, response.data.appStatusCode))
        } else {
          dispatch(GetSellerInfoFailure(response.data.messages[0], response.data.appStatusCode))
        }
      })
      .catch(error => {
        dispatch(GetSellerInfoFailure("Sorry something went wrong, Please try again"));
      });
  };