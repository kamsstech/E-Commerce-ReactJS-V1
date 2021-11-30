import { Types } from "../../constant/action";
import { REACT_APP_BASE_URL } from "../../constant/env";
import axios from "axios";

export const ValidateOTPLoading = () => ({
  type: Types.VALIDATE_OTP_LOADING,
  loading: true,
  payload: {
    message: ""
  },
  error: ""
});

export const ValidateOTPSuccess = () => ({
  type: Types.VALIDATE_OTP_SUCCESS,
  loading: false,
  payload: {
    message: "success"
  },
  error: ""
});

export const ValidateOTPFailure = (
  errMsg
) => ({
  type: Types.VALIDATE_OTP_FAILURE,
  loading: false,
  payload: {
    message: ""
  },
  error: errMsg
});

export const ValidateOTP = ( inputs ) => async (dispatch) => {

  dispatch(ValidateOTPLoading());
  
  
  const headers = {
    "Content-Type": "application/json"
  };
  const body={
    'c_mobile_no':inputs.c_mobile_no,
    'OTP':inputs.OTP,
    
  }
  await axios.post(`${REACT_APP_BASE_URL}/lc/ms/c2/otp/verify`, body,{headers})
    .then(response => {
      if (response.data.appStatusCode === 0 || response.data.appStatusCode === 17) {
        dispatch(ValidateOTPSuccess());
      } else {
        dispatch(ValidateOTPFailure(response.data.messages[0]));
      }
    })
    .catch(error => {
      dispatch(
        ValidateOTPFailure(
          "Enter Otp is wrong. Please Enter valid otp or Click on Resend Otp!!!!"
        )
      );
    });
};
