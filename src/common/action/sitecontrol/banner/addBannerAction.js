// import { REACT_APP_BASE_URL } from "../../../constant/env";
import { ENV } from "../../../constant/env";
import { Constants } from "../../../constant/localstorage";
import axios from "axios";
import { Types } from "../../../constant/action";

export const addBannerLoading = () => ({
  type: Types.ADD_BANNER_LOADING,
  payload:[],
  statuscode:"",
  loading: true,
  error: "",
  msg: ""
});
export const addBannerSuccess = (result,code) => ({
  type: Types.ADD_BANNER_SUCCESS,
  payload: result,
  statuscode:code,
  loading: false,
  error: "",
  msg: ""
});

export const addBannerFailure = (errMsg,code) => ({
  type: Types.ADD_BANNER_FAILURE,
  payload: [],
  statuscode:code,
  loading: false,
  error: errMsg,
  msg: ""
});

export const AddBannerAction = (body) => async (dispatch) => {
  dispatch(addBannerLoading())
  const headers = {
    "Content-Type": "multipart/form-data",
  };
  await axios.post(`${ENV.ADMIN_BASE_URL}/api/v1/banner/create`,body,{headers})
        .then(response => {
       if(response.data.appStatusCode === 1){
       dispatch(addBannerSuccess(response.data, response.data.status))
       }else{
         dispatch(addBannerFailure(response.data.message, response.data.status));
       }
   })
  .catch(error => {
    dispatch(addBannerFailure("Something went wrong, Please try again later!"));
  });
};

