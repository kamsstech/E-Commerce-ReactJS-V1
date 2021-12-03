import { ENV } from "../../../constant/env";
import { Constants } from "../../../constant/localstorage";
import axios from "axios";
import { Types } from "../../../constant/action";

export const addBrandLoading = () => ({
  type: Types.ADD_BRAND_LOADING,
  payload:[],
  statuscode:"",
  loading: true,
  error: "",
  msg: ""
});
export const addBrandSuccess = (result,code) => ({
  type: Types.ADD_BRAND_SUCCESS,
  payload: result,
  statuscode:code,
  loading: false,
  error: "",
  msg: ""
});

export const addBrandFailure = (errMsg,code) => ({
  type: Types.ADD_BRAND_FAILURE,
  payload: [],
  statuscode:code,
  loading: false,
  error: errMsg,
  msg: ""
});

export const AddBrandAction = (body) => async (dispatch) => {
  dispatch(addBrandLoading())
  const headers = {
    "Content-Type": "multipart/form-data",
  };
  await axios.post(`${ENV.ADMIN_BASE_URL}/api/v1/brand/create`,body,{headers})
        .then(response => {
          if(response.data.status === 1){
          dispatch(addBrandSuccess(response.data, response.data.status))
          }else{
            dispatch(addBrandFailure(response.data.message, response.data.status));
          }
   })
  .catch(error => {
    dispatch(addBrandFailure("Something went wrong, Please try again later!"));
  });
};

