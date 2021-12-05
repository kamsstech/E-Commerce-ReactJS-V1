// import { REACT_APP_BASE_URL } from "../../../constant/env";
import { ENV } from "../../../constant/env";
import { Constants } from "../../../constant/localstorage";
import axios from "axios";
import { Types } from "../../../constant/action";

export const categoryListLoading = () => ({
  type: Types.CATEGORY_LIST_LOADING,
  payload:[],
  statuscode:"",
  loading: true,
  error: "",
  msg: ""
});
export const categoryListSuccess = (result,code) => ({
  type: Types.CATEGORY_LIST_SUCCESS,
  payload: result,
  statuscode:code,
  loading: false,
  error: "",
  msg: ""
});

export const categoryListFailure = (errMsg,code) => ({
  type: Types.CATEGORY_LIST_FAILURE,
  payload: [],
  statuscode:code,
  loading: false,
  error: errMsg,
  msg: ""
});

export const CategoryListAction = () => async (dispatch) => {
  dispatch(categoryListLoading())
  // const headers = {
  //   "Content-Type": "application/json",
  // };
  await axios.get(`${ENV.ADMIN_BASE_URL}/api/v1/category/getall`)
        .then(response => {
          // console.log(response)
      if(response.data.status === 1){
      dispatch(categoryListSuccess(response.data,response.data.status))
      }else{
        dispatch(categoryListFailure(response.data.message,response.data.status));
      }
   })
  .catch(error => {
    dispatch(categoryListFailure("Something went wrong, Please try again later!"));
  });
};
