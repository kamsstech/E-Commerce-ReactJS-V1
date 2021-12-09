import axios from "axios";
import { ENV } from "../../constant/env";

import { Types } from "../../constant/action";
import { REACT_APP_BASE_URL } from "../../constant/env";
import { Constants } from "../../constant/localstorage";


export const BannerActionLoading = () => ({
  type: Types.SHOW_BANNER_LOADING,
  payload: [],
  statuscode:"",
  loading: true,
  error: "",
  msg: ""
});

export const BannerActionSuccess = (
  payload,code
) => ({
  type: Types.SHOW_BANNER_SUCCESS,
  payload: payload,
  statuscode:code,
  loading: false,
  error: "",
  msg: ""
});

export const BannerActionFailure = (errMsg,code) => ({
  type: Types.SHOW_BANNER_FAILURE,
  payload: [],
  statuscode:code,
  loading: false,
  error: errMsg,
  msg: ""
});

export const BannerAction = () => async(dispatch ) => {
  dispatch(BannerActionLoading());
 
  await axios
    .get(`${ENV.ADMIN_BASE_URL}/api/v1/banner/getall`)
    
    .then(response => {
      
      if(response.data.status === 1){
        dispatch(BannerActionSuccess(response.data,response.data.status))
      } else {
        dispatch(BannerActionFailure(response.data.message,response.data.status))
      }
    })
    .catch(error => {
      dispatch(BannerActionFailure("Something went wrong, Please try again later!"));
    });
}