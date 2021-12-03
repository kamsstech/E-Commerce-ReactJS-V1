// import { REACT_APP_BASE_URL } from "../../../constant/env";
import { ENV } from "../../../constant/env";
import { Constants } from "../../../constant/localstorage";
import axios from "axios";
import { Types } from "../../../constant/action";

export const addVariationsPageLoading = () => ({
  type: Types.ADD_VARIATIONS_LOADING,
  payload:[],
  statuscode:"",
  loading: true,
  error: "",
  msg: ""
});
export const addVariationsPageSuccess = (result,code) => ({
  type: Types.ADD_VARIATIONS_SUCCESS,
  payload: result,
  statuscode:code,
  loading: false,
  error: "",
  msg: ""
});

export const addVariationsPageFailure = (errMsg,code) => ({
  type: Types.ADD_VARIATIONS_FAILURE,
  payload: [],
  statuscode:code,
  loading: false,
  error: errMsg,
  msg: ""
});

export const AddVariationsPageAction = (body) => async (dispatch) => {
  dispatch(addVariationsPageLoading())

  await axios.post(`${ENV.ADMIN_BASE_URL}/api/v1/variations/create`,body)
        .then(response => {
          // console.log(response)
      if(response.data.status === 1){
      dispatch(addVariationsPageSuccess(response.data,response.data.status))
      }else{
        dispatch(addVariationsPageFailure(response.data.message,response.data.status));
      }
   })
  .catch(error => {
    dispatch(addVariationsPageFailure("Something went wrong, Please try again later!"));
  });
};
