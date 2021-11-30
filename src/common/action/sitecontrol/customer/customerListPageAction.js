// import { REACT_APP_BASE_URL } from "../../../constant/env";
import { ENV } from "../../../constant/env";
import { Constants } from "../../../constant/localstorage";
import axios from "axios";
import { Types } from "../../../constant/action";

export const customerListPageLoading = () => ({
  type: Types.CUSTOMER_LIST_PAGE_LOADING,
  payload:[],
  statuscode:"",
  loading: true,
  error: "",
  msg: ""
});
export const customerListPageSuccess = (result,code) => ({
  type: Types.CUSTOMER_LIST_PAGE_SUCCESS,
  payload: result,
  statuscode:code,
  loading: false,
  error: "",
  msg: ""
});

export const customerListPageFailure = (errMsg,code) => ({
  type: Types.CUSTOMER_LIST_PAGE_FAILURE,
  payload: [],
  statuscode:code,
  loading: false,
  error: errMsg,
  msg: ""
});

export const CustomerListPageAction = (body) => async (dispatch) => {
  dispatch(customerListPageLoading())
  // const headers = {
  //   "Content-Type": "application/json",
  // };
  await axios.post(`${ENV.ADMIN_BASE_URL}/api/v1/customer/paginate`,body)
        .then(response => {
          // console.log(response)
      if(response.data.status === 1){
      dispatch(customerListPageSuccess(response.data,response.data.status))
      }else{
        dispatch(customerListPageFailure(response.data.message,response.data.status));
      }
   })
  .catch(error => {
    dispatch(customerListPageFailure("Something went wrong, Please try again later!"));
  });
};
