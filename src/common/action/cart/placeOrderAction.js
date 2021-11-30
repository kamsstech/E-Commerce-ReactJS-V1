import { Types } from "../../constant/action";
import { REACT_APP_BASE_URL } from "../../constant/env";
import axios from "axios";
import { Constants } from "../../constant/localstorage";



  export const PlaceOrderLoading = ()=> ({
    type: Types.PLACE_ORDER_LOADING,
    loading: true,
    statuscode:"",
    payload: [],
    error: ""
  });

export const PlaceOrderSuccess = (result,code) => ({
    type: Types.PLACE_ORDER_SUCCESS,
    loading: false,
    statuscode:code,
    payload: result,
    error: ""
  });

  export const PlaceOrderFailure = (errMsg,code) => ({
    type: Types.PLACE_ORDER_FAILURE,
    loading: false,
    statuscode:code,
    payload: [],
    error: errMsg
  });
  
export const PlaceOrder = (body) => async (dispatch) => {
   
  const headers = {
    "Content-Type": "application/json",
    "X-csquare-api-token":localStorage.getItem(Constants.TOKEN),
    "X-csquare-api-key":localStorage.getItem(Constants.KEY),
  };

    axios.post(`${REACT_APP_BASE_URL}/po/k/lo/cartToOrder`,body,{headers})
      .then(response => {
        console.log(response.data.appStatusCode, "<<<<<< Place order appStatusCode")
        if(response.data.appStatusCode === 0){ 
          dispatch(PlaceOrderSuccess(response.data.payloadJson, response.data.appStatusCode))
        } else {
          dispatch(PlaceOrderFailure(response.data.messages[0], response.data.appStatusCode))
        }
      })
      .catch(error => {
        dispatch(PlaceOrderFailure("Sorry something went wrong, Please try again"));
      });
  };