import axios from "axios";
import { Types } from "../../constant/action";
import { REACT_APP_BASE_URL } from "../../constant/env";
import { Constants } from "../../constant/localstorage";


export const UpdateCartItemActionLoading = () => ({
  type: Types.UPDATE_CART_ITEM_LOADING,
  loading: true,
  payload: [],
  statusCode:"",
  error: ""
});

export const UpdateCartItemActionSuccess = (payload,code) => ({
  type: Types.UPDATE_CART_ITEM_SUCCESS,
  loading: false,
  payload: payload,
  statusCode:code,
  error: ""
});

export const UpdateCartItemActionFailure = (errMsg,code) => ({
  type: Types.UPDATE_CART_ITEM_FAILURE,
  loading: false,
  payload: [],
  statusCode:code,
  error: errMsg
});

export const UpdateCartItemAction = (body) => async(dispatch ) => {
    

    
  dispatch(UpdateCartItemActionLoading());
  
  const headers = {
    "Content-Type": "application/json",
    "X-csquare-api-token":localStorage.getItem(Constants.TOKEN),
    "X-csquare-api-key":localStorage.getItem(Constants.KEY),
  };

  await axios.post(`${REACT_APP_BASE_URL}/c2/lc/ms/ord/l/cart/updateCartItem`,body,{ headers })
    
    .then(response => {
      
      if(response.data.appStatusCode === 0){
        let data  = []
        data.push(response.data.payloadJson.data)
        dispatch(UpdateCartItemActionSuccess(data, response.data.appStatusCode))
      } else {
        dispatch(UpdateCartItemActionFailure(response.data.messages[0],response.data.appStatusCode))
      }
    })
    .catch(error => {
      dispatch(UpdateCartItemActionFailure("Something went wrong, Please try again later!"));
    });
}