import { Types } from "../../constant/action";
import { REACT_APP_BASE_URL } from "../../constant/env";
import axios from "axios";


export const ReSendOTPLoading = () => ({
  type: Types.SEND_OTP_LOADING,
  loading: true,
  statuscode:"",
  payload: {
    message: ""
  },
  error: ""
});

export const ReSendOTPSuccess = (succMsg,code) => ({
  type: Types.SEND_OTP_SUCCESS,
  loading: false,
  statuscode:code,
  payload: {
    message: "OTP Sent Successfully!"
  },
  error: ""
});

export const ReSendOTPFailure = (errMsg,code) => ({
  type: Types.SEND_OTP_FAILURE,
  loading: false,
  statuscode:code,
  payload: {
    message: ""
  },
  error: errMsg
});

export const ReSendOTP = (inputs) => async (dispatch) => {
  dispatch(ReSendOTPLoading());
  const headers = {
    "Content-Type": "application/json"
  };
  await axios.get(`${REACT_APP_BASE_URL}/lc/ms/c2/otp/send/${inputs.username}`,{headers})
    .then(response => {
      if (response.data.appStatusCode === 0) {
        dispatch(ReSendOTPSuccess(response.data.messages[0], response.data.appStatusCode));
        dispatch(ReSendOTPSuccess("",""));
      } else {
        dispatch(ReSendOTPFailure(response.data.messages[0],response.data.appStatusCode));
      }
    })
    .catch(error => {
      dispatch(ReSendOTPFailure("Something went wrong, Please try again later!"));
    });
};
