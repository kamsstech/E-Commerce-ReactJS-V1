import { Types } from "../../constant/action";
import { REACT_APP_BASE_URL } from "../../constant/env";
import axios from "axios";


//Not used - need to delete //by Ranjitha 
export const ValidateREGISTERLoading = () => ({
  type: Types.VALIDATE_REGISTER_LOADING,
  loading: true,
  statuscode:"",
  message:"",
  payload: {
    message: ""
  },
  error: ""
});

export const ValidateREGISTERSuccess = (sucMsg,code) => ({
  type: Types.VALIDATE_REGISTER_SUCCESS,
  loading: false,
  statuscode:code,
  message:sucMsg,
  payload: {
    message: sucMsg
  },
  error: ""
});

export const ValidateREGISTERFailure = (errMsg,code) => ({
    type: Types.VALIDATE_REGISTER_FAILURE,
  loading: false,
  statuscode:code,
  message:"",
  payload: {
    message: errMsg
  },
  error: errMsg
});

export const validateREGISTER = ( body ) => async (dispatch) => {

  dispatch(ValidateREGISTERLoading());
  // const body = {
  //   c_mobile_no: inputs.c_mobile_no,
  //   c_type:inputs.c_type
  // };
  
  const headers = {
    "Content-Type": "application/json"
  };

  
  await axios.post(`${REACT_APP_BASE_URL}/c2/lc/ms/cust/na/check`,body,{headers})
    .then(response => {
      // console.log(response,"<<<<<validateREGISTERresponse")
      if (response.data.appStatusCode === 2) {
        dispatch(ValidateREGISTERSuccess(response.data.messages[0],response.data.appStatusCode));
      } else if(response.data.appStatusCode === 5) {
        dispatch(ValidateREGISTERFailure(response.data.messages[0],response.data.appStatusCode));
      }
      else if(response.data.appStatusCode === 4) {
        dispatch(ValidateREGISTERFailure(response.data.messages[0],response.data.appStatusCode));
      }
    })
    .catch(error => {
      dispatch(
        ValidateREGISTERFailure(
          "Enter Otp is wrong. Please Enter valid otp or Click on Resend Otp!!!!"
        )
      );
    });
};
