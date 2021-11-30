import { Types } from "../../constant/action";
import { REACT_APP_BASE_URL } from "../../constant/env";
import axios from "axios";
import { Constants } from "../../constant/localstorage";
import { createBrowserHistory } from "history";
let history = createBrowserHistory();

// import {Base64} from "../encode/encodePassword";

export const SavePassLoading = () => ({
  type: Types.SAVE_PASS_LOADING,
  loading: true,
  statuscode:"",
  success:"",
  error: ""
});

export const SavePassSuccess = (success,code) => ({
  type: Types.SAVE_PASS_SUCCESS,
  loading: false,
  statuscode:code,
  message:success,
  error: ""
});

export const SavePassFailure = (errMsg,code) => ({
  type: Types.SAVE_PASS_FAILURE,
  loading: false,
  statuscode:code,
  success:"",
  error: errMsg
});

export const SendOTPReset = () => ({
  type: Types.SEND_OTP_RESET,
  loading: false,
  payload: {
    message: ""
  },
  error: ""
});



export const loginLoading = () => ({
  type: Types.LOGIN_LOADING,
  loading: true,
  statuscode:"",
  error: ""
});

export const loginSuccess = (result,sucMsg,code) => ({
  type: Types.LOGIN_SUCCESS,
  loading: false,
  payload:result,
  message:sucMsg,
  statuscode:code,
  error: ""
});


export const loginFailure = (errMsg,code) => ({
  type: Types.LOGIN_FAILURE,
  loading: false,
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
export const SavePassword = (body) => async (dispatch) => {

  dispatch(SavePassLoading());

  const headers = {
    "Content-Type": "application/json"
  };
  
  // console.log(body,"BODY")
  await axios.post(`${REACT_APP_BASE_URL}/lc/ms/c2/srv/l/password/forgot`, body,{headers})
    .then(response => {


      if (response.data.appStatusCode === 0) {
        dispatch(SavePassSuccess(response.data.messages[0],response.data.appStatusCode));

        const body1 ={
          c_mobile_no:body.c_mobile_no,
          c_pwd:body.c_new_pwd
        }
        dispatch(loginLoading());
         axios.post(`${REACT_APP_BASE_URL}/c2/lc/ms/cust/na/login`, body1, { headers })
          .then(response => {
            if (response.data.appStatusCode === 0) {
              localStorage.setItem(Constants.MOBILE_NO, body.c_mobile_no);
              localStorage.setItem(Constants.TOKEN, response.data.payloadJson.data.token);
              localStorage.setItem(Constants.KEY, response.data.payloadJson.data.key);

              dispatch(loginSuccess(response.data.payloadJson.data, response.data.messages[0], response.data.appStatusCode));
              





              const headers = {
                  "Content-Type": "application/json",
                  "X-csquare-api-token": localStorage.getItem(Constants.TOKEN),
                  "X-csquare-api-key": localStorage.getItem(Constants.KEY),
                };
              dispatch(profileDetailsLoading());
              axios.get(`${REACT_APP_BASE_URL}/c2/lc/ms/cust/firm/profile`,{headers})
              .then(responsePro => {
                if (response.data.appStatusCode === 0) {
                  if(response.data.payloadJson !== null){
                    localStorage.setItem(Constants.PIN_CODE, responsePro.data.payloadJson.c_pincode)
                    localStorage.setItem(Constants.NAME, responsePro.data.payloadJson.c_name)
                    let city='';
                      if(responsePro.data.payloadJson.c_city_name)
                      {
                        city=responsePro.data.payloadJson.c_city_name
                      }
                    localStorage.setItem(Constants.CITY, city)
                    dispatch(profileDetailsSuccess("",""));
                    
                  } else {
                    dispatch(profileDetailsFailure(responsePro.data.messages[0],response.data.appStatusCode));
                  }
                } else {
                  dispatch(profileDetailsFailure(responsePro.data.messages[0],response.data.appStatusCode));
                }
              })
              .catch(error => {
                dispatch(profileDetailsFailure("Something went wrong, Please try again later!"));
              });
             history.push("/home");
            } 
            else {
              dispatch(loginFailure(response.data.messages[0],response.data.appStatusCode));
              dispatch(SavePassFailure(response.data.messages[0],response.data.appStatusCode));
            }
          })
          .catch(error => {
            dispatch(SavePassFailure("Something went wrong, Please try again later!"));
          });
      } else {
        dispatch(SavePassFailure(response.data.messages[0], response.data.appStatusCode));
      }
    })
    .catch(error => {
      dispatch(
        SavePassFailure("Something went wrong, Please try again later!")
      );
    });
};
