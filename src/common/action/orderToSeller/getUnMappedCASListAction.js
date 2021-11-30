import { Types } from "../../constant/action";
import { REACT_APP_BASE_URL } from "../../constant/env";
import axios from "axios";
import { Constants } from "../../constant/localstorage";



  export const getUnMappedCASListLoading = ()=> ({
    type: Types.UN_MAPPED_SELLER_CAS_LIST_LOADING,
    loading: true,
    statuscode:"",
    payload: [],
    error: ""
  });

export const getUnMappedCASListSuccess = (result,code) => ({
    type: Types.UN_MAPPED_SELLER_CAS_LIST_SUCCESS,
    loading: false,
    statuscode:code,
    payload: result,
    error: ""
  });

  export const getUnMappedCASListFailure = (errMsg,code) => ({
    type: Types.UN_MAPPED_SELLER_CAS_LIST_FAILURE,
    loading: false,
    statuscode:code,
    payload: [],
    error: errMsg
  });

export const GetUnMappedCASList = (body) => async (dispatch) => {
   
  const headers = {
    "Content-Type": "application/json",
    "X-csquare-api-token":localStorage.getItem(Constants.TOKEN),
    "X-csquare-api-key":localStorage.getItem(Constants.KEY),
  };

    axios.post(`${REACT_APP_BASE_URL}/c2/lc/ms/cust/seller/search/unmappedseller/cas`,body,{headers})
      .then(response => {
       
        if(response.data.appStatusCode === 0){ 
          dispatch(getUnMappedCASListSuccess(response.data.payloadJson.data, response.data.appStatusCode))
        } else {
          dispatch(getUnMappedCASListFailure(response.data.messages[0], response.data.appStatusCode))
        }
      })
      .catch(error => {
        dispatch(getUnMappedCASListFailure("Sorry something went wrong, Please try again"));
      });
  };