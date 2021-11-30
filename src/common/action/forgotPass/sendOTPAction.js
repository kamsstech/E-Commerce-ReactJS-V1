import { Types } from "../../constant/action";
import { REACT_APP_BASE_URL } from "../../constant/env";
import axios from "axios";

import { Constants } from "../../constant/localstorage";


export const SendOTPLoading = () => ({
  type: Types.SEND_OTP_LOADING,
  loading: true,
  statuscode:"",
  payload: {
    message: ""
  },
  dum_msg:"",
  error: ""
});

export const SendOTPSuccess = (succMsg,code) => ({
  type: Types.SEND_OTP_SUCCESS,
  loading: false,
  statuscode:code,
  payload: {
    message: succMsg
  },
  dum_msg:"otp send successfully",
  error: ""
});

export const SendOTPFailure = (errMsg,code) => ({
  type: Types.SEND_OTP_FAILURE,
  loading: false,
  statuscode:code,
  payload: {
    message: ""
  },
  dum_msg:"otp send failure",
  error: errMsg
});

export const SendOTP = (inputs) => async (dispatch) => {


if(inputs.page == 'login')
{
  localStorage.setItem(Constants.MOBILE_NO, inputs.c_username);
    const body ={
        'c_mobile_no':inputs.c_username,
        'c_type':"B"
      }
       const headers = {
      "Content-Type": "application/json"
    };
    dispatch(SendOTPLoading());
    await axios.post(`${REACT_APP_BASE_URL}/c2/lc/ms/cust/na/check`,body,{headers})
    .then(response => {
      if (response.data.appStatusCode === 2) {
         axios.get(`${REACT_APP_BASE_URL}/lc/ms/c2/otp/send/${inputs.c_username}`,{headers})
        .then(response => {
          if (response.data.appStatusCode === 0) {
            
          dispatch(SendOTPSuccess(response.data.messages[0],response.data.appStatusCode));
          dispatch(SendOTPSuccess("",""));
            if (inputs.page === "login") {
              
              // history.push(`/forgot-password/${inputs.c_username}`);
            }
          }else{
            dispatch(SendOTPFailure("OTP Not Send!. Again try",response.data.appStatusCode));
          }

        }).catch(error => {
          dispatch(SendOTPFailure("Something went wrong, Please try again later!",response.data.appStatusCode));
        });

      } 
      else if(response.data.appStatusCode >= 0) {
        // dispatch(SendOTPFailure("This mobile Number is not Registered!. To register,return to SIGN UP screen"));
        dispatch(SendOTPFailure(response.data.messages[0],response.data.appStatusCode));
      }
      else {
        
        dispatch(SendOTPFailure(response.data.messages[0],response.data.appStatusCode));
        
      }
    })
    .catch(error => {
      dispatch(SendOTPFailure("Something went wrong, Please try again later!"));
    });
}



if(inputs.page == 'register')
{
  localStorage.setItem(Constants.NAME, inputs.c_cname);
  localStorage.setItem(Constants.MOBILE_NO, inputs.c_mobile_no);
  localStorage.setItem(Constants.PIN_CODE, inputs.c_pincode);
  localStorage.setItem(Constants.PASSWORD, inputs.c_pwd);
  localStorage.setItem(Constants.C_BUYER, inputs.c_buyer);
  localStorage.setItem(Constants.C_SELLER, inputs.c_seller);
  localStorage.setItem(Constants.C_TYPE, inputs.c_type);
  const body ={
      'c_mobile_no':inputs.c_mobile_no,
      'c_type':inputs.c_type
    }
  const headers = {
    "Content-Type": "application/json"
  };
  dispatch(SendOTPLoading());
    await axios.get(`${REACT_APP_BASE_URL}/lc/ms/c2/otp/send/${inputs.c_mobile_no}`,{headers})
    .then(response => {
      if (response.data.appStatusCode === 0) {
      dispatch(SendOTPSuccess(response.data.messages[0],response.data.appStatusCode));
      dispatch(SendOTPSuccess("",""));
        // if(inputs.c_buyer == "Y"){
        //   history.push("/verify-otp/buyer");
        // } 
        // if(inputs.c_seller == "Y"){
        //   history.push("/verify-otp/seller");
        // }
      }else{
        dispatch(SendOTPFailure("OTP Not Send!. Again try"));
      }
    })
    .catch(error => {
      dispatch(SendOTPFailure("Something went wrong, Please try again later!"));
    });
}
if(inputs.page == 'forgot')
{
    const body ={
        'c_mobile_no':inputs.c_username,
        'c_type':"B"
      }
       const headers = {
      "Content-Type": "application/json"
    };
    dispatch(SendOTPLoading());
    await axios.post(`${REACT_APP_BASE_URL}/c2/lc/ms/cust/na/check`,body,{headers})
    .then(response => {
      if (response.data.appStatusCode === 2) {
         axios.get(`${REACT_APP_BASE_URL}/lc/ms/c2/otp/send/${inputs.c_username}`,{headers})
        .then(response => {
          if (response.data.appStatusCode === 0) {
          dispatch(SendOTPSuccess(response.data.messages[0],response.data.appStatusCode));
          dispatch(SendOTPSuccess("",""));
          }else{
            // dispatch(SendOTPFailure("OTP Not Send!. Again try"));
            dispatch(SendOTPFailure(response.data.messages[0],response.data.appStatusCode));
          }

        }).catch(error => {
          // dispatch(SendOTPFailure("Something went wrong, Please try again later!"));
          dispatch(SendOTPFailure(response.data.messages[0],response.data.appStatusCode));
        });

      } 
      else if(response.data.appStatusCode >= 0) {
        // dispatch(SendOTPFailure("This mobile Number is not Registered!. To register,return to SIGN UP screen"));
        dispatch(SendOTPFailure(response.data.messages[0],response.data.appStatusCode));
      }
      else {
        
        dispatch(SendOTPFailure(response.data.messages[0]));
        
      }
    })
    .catch(error => {
      dispatch(SendOTPFailure("Something went wrong, Please try again later!"));
    });
}   
};
