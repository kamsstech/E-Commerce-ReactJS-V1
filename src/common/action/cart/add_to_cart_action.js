import axios from "axios";
import { Types } from "../../constant/action";
import { REACT_APP_BASE_URL } from "../../constant/env";
import { Constants } from "../../constant/localstorage";


export const AddToCartActionLoading = () => ({
  type: Types.ADD_TO_CART_LOADING,
  loading: true,
  payload: [],
  statuscode:"",
  message:"",
  error: ""
});

export const AddToCartActionSuccess = (payload,code) => ({
  type: Types.ADD_TO_CART_SUCCESS,
  loading: false,
  payload: payload,
  message: payload,
  statuscode:code,
  error: ""
});

export const AddToCartActionFailure = (errMsg,code) => ({
  type: Types.ADD_TO_CART_FAILURE,
  loading: false,
  payload: [],
  statuscode:code,
  message:"",
  error: errMsg
});

export const AddToCartAction = (body) => async(dispatch ) => {

 
  dispatch(AddToCartActionLoading());
  
  const headers = {
    "Content-Type": "application/json",
    "X-csquare-api-token":localStorage.getItem(Constants.TOKEN),
    "X-csquare-api-key":localStorage.getItem(Constants.KEY),
  };

  await axios.post(`${REACT_APP_BASE_URL}/c2/lc/ms/ord/l/cart/addItem`,body,{ headers }).then(response => {
      
      if(response.data.appStatusCode === 0){
        // let data  = []
        // data.push(response.data.payloadJson.data)
        console.log(response.data,"ADD TO CART RESPONSE")
        dispatch(AddToCartActionSuccess(response.data.messages[0],response.data.appStatusCode))
        dispatch(AddToCartActionSuccess("",""))
      } else {
        dispatch(AddToCartActionFailure(response.data.messages[0],response.data.appStatusCode))
      }
    })
    .catch(error => {
      dispatch(AddToCartActionFailure("Something went wrong, Please try again later!"));
    });
}