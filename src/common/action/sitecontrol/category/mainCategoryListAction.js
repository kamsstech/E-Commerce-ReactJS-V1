// import { REACT_APP_BASE_URL } from "../../../constant/env";
import { ENV } from "../../../constant/env";
import { Constants } from "../../../constant/localstorage";
import axios from "axios";
import { Types } from "../../../constant/action";

export const mainCategoryListLoading = () => ({
  type: Types.MAIN_CATEGORY_LIST_LOADING,
  payload:[],
  statuscode:"",
  loading: true,
  error: "",
  msg: ""
});
export const mainCategoryListSuccess = (result,code) => ({
  type: Types.MAIN_CATEGORY_LIST_SUCCESS,
  payload: result,
  statuscode:code,
  loading: false,
  error: "",
  msg: ""
});

export const mainCategoryListFailure = (errMsg,code) => ({
  type: Types.MAIN_CATEGORY_LIST_FAILURE,
  payload: [],
  statuscode:code,
  loading: false,
  error: errMsg,
  msg: ""
});

export const MainCategoryListAction = () => async (dispatch) => {
  dispatch(mainCategoryListLoading())
  // const headers = {
  //   "Content-Type": "application/json",
  // };
  await axios.get(`${ENV.ADMIN_BASE_URL}/api/v1/category/maincategory`)
        .then(response => {
          // console.log(response)
      if(response.data.status === 1){
      dispatch(mainCategoryListSuccess(response.data,response.data.status))
      }else{
        dispatch(mainCategoryListFailure(response.data.message,response.data.status));
      }
   })
  .catch(error => {
    dispatch(mainCategoryListFailure("Something went wrong, Please try again later!"));
  });
};
