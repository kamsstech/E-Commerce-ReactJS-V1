// import { REACT_APP_BASE_URL } from "../../../constant/env";
import { ENV } from "../../../constant/env";
import { Constants } from "../../../constant/localstorage";
import axios from "axios";
import { Types } from "../../../constant/action";

export const categoryListPageLoading = () => ({
  type: Types.CATEGORY_LIST_PAGE_LOADING,
  payload:[],
  statuscode:"",
  loading: true,
  error: "",
  msg: ""
});
export const categoryListPageSuccess = (result,code) => ({
  type: Types.CATEGORY_LIST_PAGE_SUCCESS,
  payload: result,
  statuscode:code,
  loading: false,
  error: "",
  msg: ""
});

export const categoryListPageFailure = (errMsg,code) => ({
  type: Types.CATEGORY_LIST_PAGE_FAILURE,
  payload: [],
  statuscode:code,
  loading: false,
  error: errMsg,
  msg: ""
});

export const CategoryListPageAction = (body) => async (dispatch) => {
  dispatch(categoryListPageLoading())
  // const headers = {
  //   "Content-Type": "application/json",
  // };
  await axios.post(`${ENV.ADMIN_BASE_URL}/api/v1/category/paginate`,body)
        .then(response => {
          // console.log(response)
      if(response.data.status === 1){
      dispatch(categoryListPageSuccess(response.data,response.data.status))
      }else{
        dispatch(categoryListPageFailure(response.data.message,response.data.status));
      }
   })
  .catch(error => {
    dispatch(categoryListPageFailure("Something went wrong, Please try again later!"));
  });
};
