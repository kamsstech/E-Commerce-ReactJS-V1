import { Types } from "../../constant/action";
import { REACT_APP_BASE_URL } from "../../constant/env";
import axios from "axios";
import { Constants } from "../../constant/localstorage";



  export const GetUnMappedSellerListLoading = ()=> ({
    type: Types.UN_MAPPED_SELLER_LIST_LOADING,
    loading: true,
    statuscode:"",
    payload: [],
    error: ""
  });

export const GetUnMappedSellerListSuccess = (result,code) => ({
    type: Types.UN_MAPPED_SELLER_LIST_SUCCESS,
    loading: false,
    statuscode:code,
    payload: result,
    error: ""
  });

  export const GetUnMappedSellerListFailure = (errMsg,code) => ({
    type: Types.UN_MAPPED_SELLER_LIST_FAILURE,
    loading: false,
    statuscode:code,
    payload: [],
    error: errMsg
  });

export const GetUnMappedSellerList = (body) => async (dispatch) => {
   
  const headers = {
    "Content-Type": "application/json",
    "X-csquare-api-token":localStorage.getItem(Constants.TOKEN),
    "X-csquare-api-key":localStorage.getItem(Constants.KEY),
  };

    axios.post(`${REACT_APP_BASE_URL}/c2/lc/ms/cust/seller/list`,body,{headers})
      .then(response => {
       
        if(response.data.appStatusCode === 0){ 
          dispatch(GetUnMappedSellerListSuccess(response.data.payloadJson.data, response.data.appStatusCode))
        } else {
          dispatch(GetUnMappedSellerListFailure(response.data.messages[0], response.data.appStatusCode))
        }
      })
      .catch(error => {
        dispatch(GetUnMappedSellerListFailure("Sorry something went wrong, Please try again"));
      });
  };