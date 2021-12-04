import { ENV } from "../../../constant/env";
import axios from "axios";
import { Types } from "../../../constant/action";

export const bannerUpdatePageLoading = () => ({
  type: Types.BANNER_UPDATE_PAGE_LOADING,
  payload:[],
  statuscode:"",
  loading: true,
  error: "",
  msg: ""
});
export const bannerUpdatePageSuccess = (result,code) => ({
  type: Types.BANNER_UPDATE_PAGE_SUCCESS,
  payload: result,
  statuscode:code,
  loading: false,
  error: "",
  msg: ""
});

export const bannerUpdatePageFailure = (errMsg,code) => ({
  type: Types.BANNER_UPDATE_PAGE_FAILURE,
  payload: [],
  statuscode:code,
  loading: false,
  error: errMsg,
  msg: ""
});

export const BannerUpdatePageAction = (body) => async (dispatch) => {
  dispatch(bannerUpdatePageLoading())
  await axios.post(`${ENV.ADMIN_BASE_URL}/api/v1/banner/update`,body)
        .then(response => {
      if(response.data.status === 1){
      dispatch(bannerUpdatePageSuccess(response.data,response.data.status))
      }else{
        dispatch(bannerUpdatePageFailure(response.data.message,response.data.status));
      }
   })
  .catch(error => {
    dispatch(bannerUpdatePageFailure("Something went wrong, Please try again later!"));
  });
};
