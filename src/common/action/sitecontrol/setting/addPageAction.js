import { ENV } from "../../../constant/env";
import axios from "axios";
import { Types } from "../../../constant/action";

export const addPageLoading = () => ({
  type: Types.ADD_PAGE_LOADING,
  payload:[],
  statuscode:"",
  loading: true,
  error: "",
  msg: ""
});
export const addPageSuccess = (result,code) => ({
  type: Types.ADD_PAGE_SUCCESS,
  payload: result,
  statuscode:code,
  loading: false,
  error: "",
  msg: ""
});

export const addPageFailure = (errMsg,code) => ({
  type: Types.ADD_PAGE_FAILURE,
  payload: [],
  statuscode:code,
  loading: false,
  error: errMsg,
  msg: ""
});

export const AddPageAction = (body) => async (dispatch) => {
  dispatch(addPageLoading())
  const headers = {
    "Content-Type": "multipart/form-data",
  };
  await axios.post(`${ENV.ADMIN_BASE_URL}/api/v1/page/create`,body,{headers})
        .then(response => {
          if(response.data.status === 1){
          dispatch(addPageSuccess(response.data, response.data.status))
          }else{
            dispatch(addPageFailure(response.data.message, response.data.status));
          }
   })
  .catch(error => {
    dispatch(addPageFailure("Something went wrong, Please try again later!"));
  });
};
