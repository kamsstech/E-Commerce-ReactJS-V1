import { Types } from "../../constant/action";
import { REACT_APP_BASE_URL } from "../../constant/env";
import { Constants } from "../../constant/localstorage";
import axios from "axios";
import { createBrowserHistory } from "history";
let history = createBrowserHistory();
// import {Base64} from "../encode/encodePassword";


export const SendOTPLoading = () => ({
  type: Types.SEND_OTP_LOADING,
  loading: true,
  statuscode:"",
  payload: {
    message: ""
  },
  error: ""
});

export const SendOTPSuccess = (succMsg,code) => ({
  type: Types.SEND_OTP_SUCCESS,
  loading: false,
  statuscode:code,
  payload: {
    message: succMsg
  },
  error: ""
});

export const SendOTPFailure = (errMsg,code) => ({
  type: Types.SEND_OTP_FAILURE,
  loading: false,
  statuscode:code,
  payload: {
    message: ""
  },
  error: errMsg
});


export const register = (inputs) => async (dispatch) => {
    dispatch(SendOTPLoading());
  if(inputs.page == 'register')
{
  localStorage.setItem(Constants.NAME, inputs.c_cname);
  localStorage.setItem(Constants.MOBILE_NO, inputs.c_mobile_no);
  localStorage.setItem(Constants.PIN_CODE, inputs.c_pincode);
  localStorage.setItem(Constants.PASSWORD, inputs.c_pwd);
  localStorage.setItem(Constants.C_BUYER, inputs.c_buyer);
  localStorage.setItem(Constants.C_SELLER, inputs.c_seller);
  localStorage.setItem(Constants.C_TYPE, inputs.c_type);

  const headers = {
    "Content-Type": "application/json"
  };
    await axios.get(`${REACT_APP_BASE_URL}/lc/ms/c2/otp/send/${inputs.c_mobile_no}`,{headers})
    .then(response => {
      if (response.data.appStatusCode === 0) {
      dispatch(SendOTPSuccess(response.data.messages[0], response.data.appStatusCode));
      dispatch(SendOTPSuccess("",""));
        // if(inputs.c_buyer == "Y"){
        //   history.push("/verify-otp/buyer");
        // } 
        // if(inputs.c_seller == "Y"){
        //   history.push("/verify-otp/seller");
        // }
      }else{
        dispatch(SendOTPFailure(response.data.messages[0],response.data.appStatusCode));
      }
    })
    .catch(error => {
      dispatch(SendOTPFailure("Something went wrong, Please try again later!"));
    });
}
}