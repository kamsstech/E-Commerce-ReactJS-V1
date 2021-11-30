import { Types } from "../../constant/action";
import { REACT_APP_BASE_URL } from "../../constant/env";
import axios from "axios";
import { Constants } from "../../constant/localstorage";



  export const GetMappedSellerListLoading = ()=> ({
    type: Types.MAPPED_SELLER_LIST_LOADING,
    loading: true,
    statuscode:"",
    payload: [],
    error: ""
  });

export const GetMappedSellerListSuccess = (result,code) => ({
    type: Types.MAPPED_SELLER_LIST_SUCCESS,
    loading: false,
    statuscode:code,
    payload: result,
    error: ""
  });

  export const GetMappedSellerListFailure = (errMsg,code) => ({
    type: Types.MAPPED_SELLER_LIST_FAILURE,
    loading: false,
    statuscode:code,
    payload: [],
    error: errMsg
  });

export const GetMappedSellerList = (body) => async (dispatch) => {
   
  const headers = {
    "Content-Type": "application/json",
    "X-csquare-api-token":localStorage.getItem(Constants.TOKEN),
    "X-csquare-api-key":localStorage.getItem(Constants.KEY),
  };

    axios.post(`${REACT_APP_BASE_URL}/c2/lc/ms/cust/seller/mapped/seller`,body,{headers})
      .then(response => {
       
        if(response.data.appStatusCode === 0){ 
          dispatch(GetMappedSellerListSuccess(response.data.payloadJson.data, response.data.appStatusCode))
        } else {
          dispatch(GetMappedSellerListFailure(response.data.messages[0], response.data.appStatusCode))
        }
      })
      .catch(error => {
        dispatch(GetMappedSellerListFailure("Sorry something went wrong, Please try again"));
      });
  };