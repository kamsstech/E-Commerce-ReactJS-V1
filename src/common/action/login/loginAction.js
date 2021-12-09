import { Types } from "../../constant/action";
import { ENV } from "../../constant/env";
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
  payload: result,
  statuscode:code,
  loading: false,
  error: "",
  msg: ""
});

export const profileDetailsFailure = (errMsg,code) => ({
  type: Types.PROFILE_DETAILS_SUCCESS,
  loading: false,
  error: errMsg,
  message: "",
  statuscode:code
});

export const login = (inputs) => async (dispatch) => {
  dispatch(loginLoading(0));
 const body = {
   "c_user_email": inputs.c_email,
   "c_password": inputs.password
 };
  const headers = {
    "Content-Type": "application/json"
  };
  await axios.post(`${ENV.ADMIN_BASE_URL}/api/v1/user/login`,body,{headers})
        .then(response => {
       if(response.data.status === 1){
        localStorage.setItem(Constants.USER_ID, response.data.data.id);
       dispatch(loginSuccess(response.data, response.data.status))
      //  dispatch(loginLoading(1));
       }else{
         dispatch(loginFailure(response.data.message, response.data.status));
        //  dispatch(loginLoading(1));
       }
   })
  .catch(error => {
    dispatch(loginFailure("Something went wrong, Please try again later!"));
  });
};