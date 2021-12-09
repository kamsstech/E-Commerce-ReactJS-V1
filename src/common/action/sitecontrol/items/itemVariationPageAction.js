// import { REACT_APP_BASE_URL } from "../../../constant/env";
import { ENV } from "../../../constant/env";
import { Constants } from "../../../constant/localstorage";
import axios from "axios";
import { Types } from "../../../constant/action";

export const itemVariationPageLoading = () => ({
  type: Types.PAGE_LIST_PAGE_LOADING,
  payload:[],
  statuscode:"",
  loading: true,
  error: "",
  msg: ""
});
export const itemVariationPageSuccess = (result,code) => ({
  type: Types.PAGE_LIST_PAGE_SUCCESS,
  payload: result,
  statuscode:code,
  loading: false,
  error: "",
  msg: ""
});

export const itemVariationPageFailure = (errMsg,code) => ({
  type: Types.PAGE_LIST_PAGE_FAILURE,
  payload: [],
  statuscode:code,
  loading: false,
  error: errMsg,
  msg: ""
});

export const ItemVariationPageAction = (body) => async (dispatch) => {
  dispatch(itemVariationPageLoading())
  // const headers = {
  //   "Content-Type": "application/json",
  // };
  await axios.post(`${ENV.ADMIN_BASE_URL1}/apiaction/curl.php`,body)
        .then(response => {
          // console.log(response)
      dispatch(itemVariationPageSuccess(response,1))
   })
  .catch(error => {
    dispatch(itemVariationPageFailure("Something went wrong, Please try again later!"));
  });
};
