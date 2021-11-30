import { Types } from "../../constant/action";
import { REACT_APP_BASE_URL } from "../../constant/env";
import axios from "axios";
import { Constants } from "../../constant/localstorage";



  export const SearchUnMappedSellerListLoading = ()=> ({
    type: Types.SEARCH_UN_MAPPED_SELLER_LIST_LOADING,
    loading: true,
    statuscode:"",
    payload: [],
    error: ""
  });

export const SearchUnMappedSellerListSuccess = (result,code) => ({
    type: Types.SEARCH_UN_MAPPED_SELLER_LIST_SUCCESS,
    loading: false,
    statuscode:code,
    payload: result,
    error: ""
  });

  export const SearchUnMappedSellerListFailure = (errMsg,code) => ({
    type: Types.SEARCH_UN_MAPPED_SELLER_LIST_FAILURE,
    loading: false,
    statuscode:code,
    payload: [],
    error: errMsg
  });

export const SearchUnMappedSellerList = (body) => async (dispatch) => {
   
  const headers = {
    "Content-Type": "application/json",
    "X-csquare-api-token":localStorage.getItem(Constants.TOKEN),
    "X-csquare-api-key":localStorage.getItem(Constants.KEY),
  };

    axios.post(`${REACT_APP_BASE_URL}/c2/lc/ms/cust/seller/search/unmappedseller`,body,{headers})
      .then(response => {
       
        if(response.data.appStatusCode === 0){ 
          dispatch(SearchUnMappedSellerListSuccess(response.data.payloadJson.data, response.data.appStatusCode))
        } else {
          dispatch(SearchUnMappedSellerListFailure(response.data.messages[0], response.data.appStatusCode))
        }
      })
      .catch(error => {
        dispatch(SearchUnMappedSellerListFailure("Sorry something went wrong, Please try again"));
      });
  };