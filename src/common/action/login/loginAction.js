import { Types } from "../../constant/action";
import { REACT_APP_BASE_URL } from "../../constant/env";
import { Constants } from "../../constant/localstorage";
// import { Base64 } from "../encode/encodePassword";
import axios from "axios";


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

export const login = (inputs) => async (dispatch) => {
  dispatch(loginLoading());
 const body = {
   "c_mobile_no": inputs.username,
   "c_pwd": inputs.password
 };
  const headers = {
    "Content-Type": "application/json"
  };
  await axios.post(`${REACT_APP_BASE_URL}/c2/lc/ms/cust/na/login`, body, { headers })
    .then(response => {
      if (response.data.appStatusCode === 0) {
        console.log(response)
        localStorage.setItem(Constants.MOBILE_NO, inputs.username);
        localStorage.setItem(Constants.TOKEN, response.data.payloadJson.data.token);
        localStorage.setItem(Constants.KEY, response.data.payloadJson.data.key);
        localStorage.setItem(Constants.C_TYPE, response.data.payloadJson.data.cType);
        localStorage.setItem(Constants.TOKEN_EXPIRY, response.data.payloadJson.data.tokenExpiry);

        if(response.data.payloadJson.data.c_lc_user_active_status === "A" && response.data.payloadJson.data.c_lc_user_status === "0" && response.data.payloadJson.data.c_update_status === "1"){
          
          localStorage.setItem(Constants.USER_ACTIVE_STATUS, response.data.payloadJson.data.c_lc_user_active_status);
          localStorage.setItem(Constants.USER_STATUS, response.data.payloadJson.data.c_lc_user_status);
          localStorage.setItem(Constants.UPDATE_STATUS, response.data.payloadJson.data.c_update_status);
        }
        // else if(response.data.payloadJson.data.c_lc_user_active_status === "P" && response.data.payloadJson.data.c_lc_user_status === "0" && response.data.payloadJson.data.c_update_status === "1"){
          
        //   localStorage.setItem(Constants.USER_ACTIVE_STATUS, response.data.payloadJson.data.c_lc_user_active_status);
        //   localStorage.setItem(Constants.USER_STATUS, response.data.payloadJson.data.c_lc_user_status);
        //   localStorage.setItem(Constants.UPDATE_STATUS, response.data.payloadJson.data.c_update_status);
        // }

        // Set Roles array here
        dispatch(loginSuccess(response.data.payloadJson.data, response.data.messages[0], response.data.appStatusCode));
        dispatch(loginSuccess("", "", ""));



        // const headers = {
        //   "Content-Type": "application/json",
        //   "X-csquare-api-token":localStorage.getItem(Constants.TOKEN),
        //   "X-csquare-api-key":localStorage.getItem(Constants.KEY),
        // };

        // const headers = {
        //   "Content-Type": "application/json",
        //   "X-Csquare-Api-Key": localStorage.getItem(Constants.KEY),
        //   "X-Csquare-Api-Token": localStorage.getItem(Constants.TOKEN),
        // };

        
        
         
        // axios.get(`${REACT_APP_BASE_URL}/c2/lc/ms/cust/firm/profile`,headers)
        // .then(responsePro => {
        //   console.log(responsePro)
        //   if (responsePro.data.appStatusCode === 0) {
        //     if(responsePro.data.payloadJson !== null){

        //       localStorage.setItem(Constants.PIN_CODE, responsePro.data.payloadJson.c_pincode)
        //       localStorage.setItem(Constants.NAME, responsePro.data.payloadJson.c_name)
        //       let city='';
        //       if(responsePro.data.payloadJson.c_city_name)
        //       {
        //         city=responsePro.data.payloadJson.c_city_name
        //       }
        //       localStorage.setItem(Constants.CITY, city);
        //       dispatch(profileDetailsSuccess(responsePro.data.payloadJson));
               
        //     } else {
        //       dispatch(profileDetailsFailure(responsePro.data.messages[0]));
        //     }
        //   } else {
        //     dispatch(profileDetailsFailure(responsePro.data.messages[0]));
        //   }
        // })
        // .catch(error => {
        //   dispatch(profileDetailsFailure("Something went wrong, Please try again later!"));
        // });



        
      } 
      else {
        dispatch(loginFailure(response.data.messages[0],response.data.appStatusCode));
      }
    })
    .catch(error => {
      dispatch(loginFailure("Something went wrong, Please try again later!"));
    });
};