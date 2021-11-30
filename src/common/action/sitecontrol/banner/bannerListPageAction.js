// import { REACT_APP_BASE_URL } from "../../../constant/env";
import { ENV } from "../../../constant/env";
import { Constants } from "../../../constant/localstorage";
import axios from "axios";
import { Types } from "../../../constant/action";

export const bannerListPageLoading = () => ({
  type: Types.BANNER_LIST_PAGE_LOADING,
  payload:[],
  statuscode:"",
  loading: true,
  error: "",
  msg: ""
});
export const bannerListPageSuccess = (result,code) => ({
  type: Types.BANNER_LIST_PAGE_SUCCESS,
  payload: result,
  statuscode:code,
  loading: false,
  error: "",
  msg: ""
});

export const bannerListPageFailure = (errMsg,code) => ({
  type: Types.BANNER_LIST_PAGE_FAILURE,
  payload: [],
  statuscode:code,
  loading: false,
  error: errMsg,
  msg: ""
});

export const BannerListPageAction = (body) => async (dispatch) => {
  dispatch(bannerListPageLoading())
  // const headers = {
  //   "Content-Type": "application/json",
  // };
  await axios.post(`${ENV.ADMIN_BASE_URL}/api/v1/banner/paginate`,body)
        .then(response => {
          // console.log(response)
      if(response.data.status === 1){
      dispatch(bannerListPageSuccess(response.data,response.data.status))
      }else{
        dispatch(bannerListPageFailure(response.data.message,response.data.status));
      }
   })
  .catch(error => {
    dispatch(bannerListPageFailure("Something went wrong, Please try again later!"));
  });
};
