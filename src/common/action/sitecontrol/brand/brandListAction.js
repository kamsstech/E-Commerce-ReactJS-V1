// import { REACT_APP_BASE_URL } from "../../../constant/env";
import { ENV } from "../../../constant/env";
import { Constants } from "../../../constant/localstorage";
import axios from "axios";
import { Types } from "../../../constant/action";

export const brandListLoading = () => ({
  type: Types.BRAND_LIST_LOADING,
  payload:[],
  statuscode:"",
  loading: true,
  error: "",
  msg: ""
});
export const brandListSuccess = (result,code) => ({
  type: Types.BRAND_LIST_SUCCESS,
  payload: result,
  statuscode:code,
  loading: false,
  error: "",
  msg: ""
});

export const brandListFailure = (errMsg,code) => ({
  type: Types.BRAND_LIST_FAILURE,
  payload: [],
  statuscode:code,
  loading: false,
  error: errMsg,
  msg: ""
});

export const BrandListAction = () => async (dispatch) => {
  dispatch(brandListLoading())
  // const headers = {
  //   "Content-Type": "application/json",
  // };
  await axios.get(`${ENV.ADMIN_BASE_URL}/api/v1/brand/getall`)
        .then(response => {
          // console.log(response)
      if(response.data.status === 1){
      dispatch(brandListSuccess(response.data,response.data.status))
      }else{
        dispatch(brandListFailure(response.data.message,response.data.status));
      }
   })
  .catch(error => {
    dispatch(brandListFailure("Something went wrong, Please try again later!"));
  });
};
