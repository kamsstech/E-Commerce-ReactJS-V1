import axios from "axios";
import { Types } from "../../constant/action";
import { REACT_APP_BASE_URL } from "../../constant/env";
import { Constants } from "../../constant/localstorage";


export const DeleteBySellerActionLoading = () => ({
  type: Types.DELETE_BY_SELLER_LOADING,
  loading: true,
  payload: [],
  error: ""
});

export const DeleteBySellerActionSuccess = (payload) => ({
  type: Types.DELETE_BY_SELLER_SUCCESS,
  loading: false,
  payload: payload,
  error: ""
});

export const DeleteBySellerActionFailure = (errMsg) => ({
  type: Types.DELETE_BY_SELLER_FAILURE,
  loading: false,
  payload: [],
  error: errMsg
});

export const DeleteBySellerAction = (body) => async(dispatch ) => {
    // deleteBySellerResult
    // DeleteBySellerAction
  dispatch(DeleteBySellerActionLoading());
  // const headers = {
  //   "Content-Type": "application/json"
  // };
  const headers = {
    "Content-Type": "application/json",
    "X-csquare-api-token":localStorage.getItem(Constants.TOKEN),
    "X-csquare-api-key":localStorage.getItem(Constants.KEY),
  };

  await axios.post(`${REACT_APP_BASE_URL}/c2/lc/ms/ord/l/cart/deleteSeller`,body,{ headers })
    
    .then(response => {
      
      if(response.data.appStatusCode === 0){
        let data  = []
        data.push(response.data.payloadJson.data)
        dispatch(DeleteBySellerActionSuccess(data))
      } else {
        dispatch(DeleteBySellerActionFailure(response.data.messages[0]))
      }
    })
    .catch(error => {
      dispatch(DeleteBySellerActionFailure("Something went wrong, Please try again later!"));
    });
}