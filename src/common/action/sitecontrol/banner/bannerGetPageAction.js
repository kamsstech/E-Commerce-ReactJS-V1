import { ENV } from "../../../constant/env";
import axios from "axios";
import { Types } from "../../../constant/action";

export const bannerGetPageLoading = () => ({
  type: Types.BANNER_GET_PAGE_LOADING,
  payload:[],
  statuscode:"",
  loading: true,
  error: "",
  msg: ""
});
export const bannerGetPageSuccess = (result,code) => ({
  type: Types.BANNER_GET_PAGE_SUCCESS,
  payload: result,
  statuscode:code,
  loading: false,
  error: "",
  msg: ""
});

export const bannerGetPageFailure = (errMsg,code) => ({
  type: Types.BANNER_GET_PAGE_FAILURE,
  payload: [],
  statuscode:code,
  loading: false,
  error: errMsg,
  msg: ""
});

export const BannerGetPageAction = (body) => async (dispatch) => {
  dispatch(bannerGetPageLoading())
  await axios.post(`${ENV.ADMIN_BASE_URL}/api/v1/banner/getdata`,body)
        .then(response => {
      if(response.data.status === 1){
      dispatch(bannerGetPageSuccess(response.data,response.data.status))
      }else{
        dispatch(bannerGetPageFailure(response.data.message,response.data.status));
      }
   })
  .catch(error => {
    dispatch(bannerGetPageFailure("Something went wrong, Please try again later!"));
  });
};
