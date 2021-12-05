// import { REACT_APP_BASE_URL } from "../../../constant/env";
import { ENV } from "../../../constant/env";
import { Constants } from "../../../constant/localstorage";
import axios from "axios";
import { Types } from "../../../constant/action";

export const brandListPageLoading = () => ({
  type: Types.BRAND_LIST_PAGE_LOADING,
  payload:[],
  statuscode:"",
  loading: true,
  error: "",
  msg: ""
});
export const brandListPageSuccess = (result,code) => ({
  type: Types.BRAND_LIST_PAGE_SUCCESS,
  payload: result,
  statuscode:code,
  loading: false,
  error: "",
  msg: ""
});

export const brandListPageFailure = (errMsg,code) => ({
  type: Types.BRAND_LIST_PAGE_FAILURE,
  payload: [],
  statuscode:code,
  loading: false,
  error: errMsg,
  msg: ""
});

export const BrandListPageAction = (body) => async (dispatch) => {
  dispatch(brandListPageLoading())
  // const headers = {
  //   "Content-Type": "application/json",
  // };
  await axios.post(`${ENV.ADMIN_BASE_URL}/api/v1/brand/paginate`,body)
        .then(response => {
          console.log(response.data.status)
      if(response.data.status === 1){
        dispatch(brandListPageSuccess(response.data,response.data.status))
      }else{
        dispatch(brandListPageFailure(response.data.message,response.data.status));
      }
   })
  .catch(error => {
    dispatch(brandListPageFailure("Something went wrong, Please try again later!"));
  });
};
