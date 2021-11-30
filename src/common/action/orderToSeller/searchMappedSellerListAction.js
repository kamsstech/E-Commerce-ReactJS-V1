import { Types } from "../../constant/action";
import { REACT_APP_BASE_URL } from "../../constant/env";
import axios from "axios";
import { Constants } from "../../constant/localstorage";



  export const SearchMappedSellerListLoading = ()=> ({
    type: Types.SEARCH_MAPPED_SELLER_LIST_LOADING,
    loading: true,
    statuscode:"",
    payload: [],
    error: ""
  });

export const SearchMappedSellerListSuccess = (result,code) => ({
    type: Types.SEARCH_MAPPED_SELLER_LIST_SUCCESS,
    loading: false,
    statuscode:code,
    payload: result,
    error: ""
  });

  export const SearchMappedSellerListFailure = (errMsg,code) => ({
    type: Types.SEARCH_MAPPED_SELLER_LIST_FAILURE,
    loading: false,
    statuscode:code,
    payload: [],
    error: errMsg
  });

export const SearchMappedSellerList = (body) => async (dispatch) => {
   
  const headers = {
    "Content-Type": "application/json",
    "X-csquare-api-token":localStorage.getItem(Constants.TOKEN),
    "X-csquare-api-key":localStorage.getItem(Constants.KEY),
  };

    axios.post(`${REACT_APP_BASE_URL}/c2/lc/ms/cust/seller/search/mappedseller`,body,{headers})
      .then(response => {
       
        if(response.data.appStatusCode === 0){ 
          dispatch(SearchMappedSellerListSuccess(response.data.payloadJson.data, response.data.appStatusCode))
        } else {
          dispatch(SearchMappedSellerListFailure(response.data.messages[0], response.data.appStatusCode))
        }
      })
      .catch(error => {
        dispatch(SearchMappedSellerListFailure("Sorry something went wrong, Please try again"));
      });
  };
  