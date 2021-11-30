import { Types } from "../../constant/action";
import { REACT_APP_BASE_URL } from "../../constant/env";
import axios from "axios";

import {Base64} from "../encode/encodePassword";
import { Constants } from "../../constant/localstorage";

export const searchBySellerLoading = () => ({
  type: Types.SEARCH_BY_SELLER_LOADING,
  loading: true,
  payload: [],
  statuscode:"",
  error: ""
});

export const searchBySellerSuccess = (searchBySeller,code) => ({
  type: Types.SEARCH_BY_SELLER_SUCCESS,
  loading: false,
  payload: searchBySeller,
  statuscode:code,
  error: ""
});

export const searchBySellerFailure = (errMsg,code) => ({
  type: Types.SEARCH_BY_SELLER_FAILURE,
  loading: false,
  payload: [],
  statuscode:code,
  error: errMsg
});

export const SearchBySeller = (body) => async (dispatch) => {
  // dispatch(searchBySellerLoading());
  // let serachVar = Base64.encode(searchKey)
  const headers = {
    "Content-Type": "application/json",
    "X-Csquare-Api-Token":localStorage.getItem(Constants.TOKEN),
    "X-Csquare-Api-Key":localStorage.getItem(Constants.KEY)
  };

  // const body = {
  //   c_search_term: searchKey,
  //   c_search_type: search_type
  // }
  // .get(`${ENV.BASE_URL}/mst/search/seller/${searchKey}`,{ headers })
  
  await axios.post(`${REACT_APP_BASE_URL}/c2/lc/ms/mst/search/l/seller`,body,{headers})
    .then(response => {
      console.log(response,"ACTION RESPONSE SELLER")
      if(response.data.appStatusCode === 0){

        let data_seller=[]

        data_seller.push(response.data.payloadJson)

        dispatch(searchBySellerSuccess(response.data.payloadJson.data.j_list),response.data.appStatusCode)
        
      } else {
        dispatch(searchBySellerFailure(response.data.messages[0],response.data.appStatusCode))
      }
    })
    .catch(error => {
      dispatch(searchBySellerFailure("Sorry something went wrong, Please try again"));
    });
};
