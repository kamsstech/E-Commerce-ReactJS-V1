import { ENV } from "../../../constant/env";
import axios from "axios";
import { Types } from "../../../constant/action";

export const addCategoryLoading = () => ({
  type: Types.ADD_CATEGORY_LOADING,
  payload:[],
  statuscode:"",
  loading: true,
  error: "",
  msg: ""
});
export const addCategorySuccess = (result,code) => ({
  type: Types.ADD_CATEGORY_SUCCESS,
  payload: result,
  statuscode:code,
  loading: false,
  error: "",
  msg: ""
});

export const addCategoryFailure = (errMsg,code) => ({
  type: Types.ADD_CATEGORY_FAILURE,
  payload: [],
  statuscode:code,
  loading: false,
  error: errMsg,
  msg: ""
});

export const AddCategoryAction = (body) => async (dispatch) => {
  dispatch(addCategoryLoading())
  const headers = {
    "Content-Type": "multipart/form-data",
  };
  await axios.post(`${ENV.ADMIN_BASE_URL}/api/v1/category/create`,body,{headers})
        .then(response => {
          if(response.data.status === 1){
          dispatch(addCategorySuccess(response.data, response.data.status))
          }else{
            dispatch(addCategoryFailure(response.data.message, response.data.status));
          }
   })
  .catch(error => {
    dispatch(addCategoryFailure("Something went wrong, Please try again later!"));
  });
};
