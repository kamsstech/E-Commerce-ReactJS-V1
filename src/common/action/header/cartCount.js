import { Types } from "../../constant/action";
import { REACT_APP_BASE_URL } from "../../constant/env";
import axios from "axios";
import { Constants } from "../../constant/localstorage";

export const cartCountLoading = () => ({
  type: Types.CARTCOUNT_LOADING,
  loading: true,
  payload: [],
  statuscode:"",
  error: ""
});

export const cartCountSuccess = (categorylists,code) => ({
  type: Types.CARTCOUNT_SUCCESS,
  loading: false,
  payload: categorylists,
  statuscode:code,
  error: ""
});

export const cartCountFailure = (errMsg,code)=> ({
  type: Types.CARTCOUNT_FAILURE,
  loading: false,
  payload: [],
  statuscode:code,
  error: errMsg
});

export const CartCount = (body) => async (dispatch) => {
  dispatch(cartCountLoading());
  const headers = {
    "Content-Type":"application/json",
    "X-csquare-api-token":localStorage.getItem(Constants.TOKEN),
    "X-csquare-api-key":localStorage.getItem(Constants.KEY),
  };
  
  await axios
   .post(`${REACT_APP_BASE_URL}/c2/lc/ms/ord/l/cart/count`,body,{ headers })
    .then(response => {
      // console.log(response)
      if(response.data.appStatusCode === 0){
        dispatch(cartCountSuccess(response.data.payloadJson,response.data.appStatusCode))
        dispatch(cartCountSuccess("",""))
      } else {
        dispatch(cartCountFailure(response.data.messages[0],response.data.appStatusCode))
      }
    })
    .catch(error => {
      dispatch(cartCountFailure("Something went wrong, Please try again later!"));
    });
};
