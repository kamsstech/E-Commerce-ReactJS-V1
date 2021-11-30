import axios from "axios";
import { Types } from "../../constant/action";
import { REACT_APP_BASE_URL } from "../../constant/env";
import { Constants } from "../../constant/localstorage";


export const GetCartItemActionLoading = () => ({
  type: Types.GET_CART_ITEM_LOADING,
  loading: true,
  payload: "",
  error: ""
});

export const GetCartItemActionSuccess = (payload) => ({
  type: Types.GET_CART_ITEM_SUCCESS,
  loading: false,
  payload: payload,
  error: ""
});

export const GetCartItemActionFailure = (errMsg) => ({
  type: Types.GET_CART_ITEM_FAILURE,
  loading: false,
  payload: "",
  error: errMsg
});

export const GetCartItemAction = (body) => async(dispatch ) => {

 
  dispatch(GetCartItemActionLoading());
  
  const headers = {
    "Content-Type": "application/json",
    "X-csquare-api-token":localStorage.getItem(Constants.TOKEN),
    "X-csquare-api-key":localStorage.getItem(Constants.KEY),
  };

  await axios.post(`${REACT_APP_BASE_URL}/c2/lc/ms/ord/l/cart/branch/cart`,body,{ headers })
    
    .then(response => {
      
      if(response.data.appStatusCode === 0){
        let data  = []
        data.push(response.data.payloadJson.data)
        dispatch(GetCartItemActionSuccess(response.data.payloadJson.data))
      } else {
        dispatch(GetCartItemActionFailure(response.data.messages[0]))
      }
    })
    .catch(error => {
      dispatch(GetCartItemActionFailure("Something went wrong, Please try again later!"));
    });
}