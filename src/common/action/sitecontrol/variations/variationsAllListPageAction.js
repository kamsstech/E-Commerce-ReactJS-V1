// import { REACT_APP_BASE_URL } from "../../../constant/env";
import { ENV } from "../../../constant/env";
import { Constants } from "../../../constant/localstorage";
import axios from "axios";
import { Types } from "../../../constant/action";

export const variationsListPageLoading = () => ({
  type: Types.VARIATIONS_LIST_PAGE_LOADING,
  payload:[],
  statuscode:"",
  loading: true,
  error: "",
  msg: ""
});
export const variationsListPageSuccess = (result,code) => ({
  type: Types.VARIATIONS_LIST_PAGE_SUCCESS,
  payload: result,
  statuscode:code,
  loading: false,
  error: "",
  msg: ""
});

export const variationsListPageFailure = (errMsg,code) => ({
  type: Types.VARIATIONS_LIST_PAGE_FAILURE,
  payload: [],
  statuscode:code,
  loading: false,
  error: errMsg,
  msg: ""
});

export const VariationsAllListPageAction = () => async (dispatch) => {
  dispatch(variationsListPageLoading())
  // const headers = {
  //   "Content-Type": "application/json",
  // };
  await axios.get(`${ENV.ADMIN_BASE_URL}/api/v1/variations/variationlist`)
        .then(response => {
          // console.log(response)
      if(response.data.status === 1){
      dispatch(variationsListPageSuccess(response.data,response.data.status))
      }else{
        dispatch(variationsListPageFailure(response.data.message,response.data.status));
      }
   })
  .catch(error => {
    dispatch(variationsListPageFailure("Something went wrong, Please try again later!"));
  });
};
