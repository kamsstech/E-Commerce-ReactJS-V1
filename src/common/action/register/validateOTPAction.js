import { Types } from "../../constant/action";
import { REACT_APP_BASE_URL } from "../../constant/env";
import { Constants } from "../../constant/localstorage";
import axios from "axios";


export const verifyOTPLoading = () => ({
    type: Types.VERIFY_OTP_LOADING,
    message:"",
    statuscode:"",
    loading: true,
    error: ""
});

export const verifyOTPSuccess = (sucMsg,code) => ({
    type: Types.VERIFY_OTP_SUCCESS,
    message:sucMsg,
    statuscode:code,
    loading: false,
    payload:sucMsg,
    error: ""
});

export const verifyOTPFailure = (errMsg,code) => ({
    type: Types.VERIFY_OTP_FAILURE,
    message:"",
    statuscode:code,
    loading: false,
    error: errMsg
});
export const registerLoading = () => ({
  type: Types.REGISTER_LOADING,
  loading: true,
  message:"",
  statuscode:"",
  error: ""
});

export const registerSuccess = (sucMsg,code) => ({
  type: Types.REGISTER_SUCCESS,
  loading: false,
  message:sucMsg,
  statuscode:code,
  error: "forverifyotp"
});

export const registerFailure = (errMsg,code) => ({
  type: Types.REGISTER_FAILURE,
  loading: false,
  message:"",
  statuscode:code,
  error: errMsg
});
export const profileDetailsLoading = () => ({
  type: Types.PROFILE_DETAILS_LOADING,
  loading: true,
  error: "",
  message: "",
  statuscode:""
});

export const profileDetailsSuccess = (result,code) => ({
  type: Types.PROFILE_DETAILS_SUCCESS,
  loading: false,
  error: "",
  payload: result,
  statuscode:code
});

export const profileDetailsFailure = (errMsg,code) => ({
  type: Types.PROFILE_DETAILS_SUCCESS,
  loading: false,
  error: errMsg,
  message: "",
  statuscode:code
});

export const validateOTP = (inputs) => async (dispatch) => {
    dispatch(verifyOTPLoading());

    const body = {
        c_mobile_no: localStorage.getItem(Constants.MOBILE_NO),
        OTP: inputs.OTP,
        n_login:0
    };
    const type = inputs.type;
    const headers = {
      "Content-Type": "application/json",
    };
    const body1 = {
      c_name: localStorage.getItem(Constants.NAME),
      c_mobile_no: localStorage.getItem(Constants.MOBILE_NO),
      c_pincode:localStorage.getItem(Constants.PIN_CODE),
      c_pwd: localStorage.getItem(Constants.PASSWORD), 
      c_type: localStorage.getItem(Constants.C_TYPE),
    };
    await axios
        .post(`${REACT_APP_BASE_URL}/lc/ms/c2/otp/verify`, body, { headers })
        .then(response => {
            if (response.data.appStatusCode === 0 || response.data.appStatusCode === 17) {
                dispatch(verifyOTPSuccess(response.data.messages[0],response.data.appStatusCode));
                dispatch(verifyOTPSuccess("",""));
                axios.post(`${REACT_APP_BASE_URL}/c2/lc/ms/cust/na/register`, body1, { headers })
                    .then(response => {
                      if (response.data.appStatusCode === 0) {

                        if(response.data.payloadJson !== null){
                            dispatch(registerSuccess(response.data.messages[0],response.data.appStatusCode));
                            dispatch(registerSuccess("",""));
                            //  localStorage.setItem('token', response.data.payloadJson.data.token);
                            //  localStorage.setItem('key', response.data.payloadJson.data.key);
                            localStorage.setItem(Constants.TOKEN, response.data.payloadJson.data.token);
                             localStorage.setItem(Constants.KEY, response.data.payloadJson.data.key);
                             const headers1 = {
                                  "Content-Type": "application/json",
                                  "X-csquare-api-token":localStorage.getItem(Constants.TOKEN),
                                  "X-csquare-api-key":localStorage.getItem(Constants.KEY),
                                };

                                
                            console.log(headers1, "<<< headers1")    

                          ///firm/profile
                            axios.get(`${REACT_APP_BASE_URL}/c2/lc/ms/cust/firm/profile`,{headers1})
                            .then(responsePro => {
                              console.log(responsePro)
                              if (responsePro.data.appStatusCode === 0) {
                                if(responsePro.data.payloadJson !== null){
                                  localStorage.setItem(Constants.PIN_CODE, responsePro.data.payloadJson.c_pincode)
                                  localStorage.setItem(Constants.NAME, responsePro.data.payloadJson.c_name)
                                  let city='';
                                    if(responsePro.data.payloadJson.c_city_name)
                                    {
                                      city=responsePro.data.payloadJson.c_city_name
                                    }
                                  localStorage.setItem(Constants.CITY, city)
                                  dispatch(profileDetailsSuccess(responsePro.data.payloadJson,responsePro.data.appStatusCode));
                                  dispatch(profileDetailsSuccess("",""));
                                  
                                } else {
                                  dispatch(profileDetailsFailure(responsePro.data.messages[0],responsePro.data.appStatusCode));
                                }
                              } else {
                                dispatch(profileDetailsFailure(responsePro.data.messages[0],responsePro.data.appStatusCode));
                              }
                            })
                            .catch(error => {
                              dispatch(profileDetailsFailure("Something went wrong, Please try again later!"));
                            });
                          // history.push(`/register-details/${type}`);
                        } else {
                          dispatch(registerFailure(response.data.messages[0],response.data.appStatusCode));
                        } 
                      } else {
                        dispatch(registerFailure(response.data.messages[0],response.data.appStatusCode));
                      }
                    })


                    .catch(error => {
                      dispatch(registerFailure("Something went wrong, Please try again later!",response.data.appStatusCode));
                    });
            } else if(response.data.appStatusCode === 17){
                dispatch(verifyOTPFailure("OTP Expired!",response.data.appStatusCode));
            } else {
                dispatch(verifyOTPFailure(response.data.messages[0],response.data.appStatusCode));
            }
        })
        .catch(err => {
            dispatch(verifyOTPFailure("Something went wrong, Please try again later!!!!"));
        })
}