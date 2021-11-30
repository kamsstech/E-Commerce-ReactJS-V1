import { Types } from "../../constant/action";
import { REACT_APP_BASE_URL } from "../../constant/env";
import { Constants } from "../../constant/localstorage";
import axios from "axios";
import history from "../../../history";
import {Base64} from "../encode/encodePassword";
import { ChangePassInputEntity, RegisterActionEntity ,ChangePasRespEntity} from "../../model";

export const changePasswordLoading = () => ({
  type: Types.CHANGE_PASSWORD_LOADING,
  loading: true,
  error: "",
  statuscode:"",
  payload:[]
});
  
export const changePasswordSuccess = (result,code) => ({
  type: Types.CHANGE_PASSWORD_SUCCESS,
  loading: false,
  error: "",
  statuscode:code,
  payload:result
});

export const changePasswordFailure = (errMsg,code) => ({
  type: Types.CHANGE_PASSWORD_FAILURE,
  loading: false,
  statuscode:code,
  error: errMsg,
  payload:[]
});

export const ChangePassword = (inputs) => async (dispatch) => {
  dispatch(changePasswordLoading());
  const body = {
    c_mobile_no: localStorage.getItem(Constants.MOBILE_NO) ,
    // c_old_pwd: Base64.encode(inputs.c_old_pwd),
    // c_new_pwd: Base64.encode(inputs.c_new_pwd),
    c_old_pwd: inputs.c_old_pwd,
    c_new_pwd: inputs.c_new_pwd,
  };

  const headers = {
    "Content-Type": "application/json",
    "X-csquare-api-token":localStorage.getItem(Constants.TOKEN),
    "X-csquare-api-key":localStorage.getItem(Constants.KEY),
  };

  // console.log(inputs, body, "profile")

  await axios
  .post(`${REACT_APP_BASE_URL}/c2/password/change`, body, { headers })
  .then(response => {
    if (response.data.appStatusCode === 0) {
      dispatch(changePasswordSuccess(response.data.messages,response.data.appStatusCode));
      // localStorage.clear();
      // history.push("/login");
    } else {
      dispatch(changePasswordFailure(response.data.messages[0],response.data.appStatusCode));
    }
  })
  .catch(error => {
    // console.log(error, "error");
    dispatch(changePasswordFailure("Something went wrong, Please try again later!"));
  });
}

