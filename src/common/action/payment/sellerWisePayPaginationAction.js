import { ENV } from "../../constant/env";
import { Constants } from "../../constant/localstorage";
import axios from "axios";
import { Types } from "../../constant/action";

export const sellerWisePayPaginationLoading = () => ({
  type: Types.SELLER_WISE_PAY_PAGINATION_LOADING,
  payload:[],
  statuscode:"",
  loading: true,
  error: "",
  msg: ""
});
export const sellerWisePayPaginationSuccess = (result,code) => ({
  type: Types.SELLER_WISE_PAY_PAGINATION_SUCCESS,
  payload: result,
  statuscode:code,
  loading: false,
  error: "",
  msg: ""
});
export const sellerWisePayPaginationFailure = (errMsg,code) => ({
  type: Types.SELLER_WISE_PAY_PAGINATION_FAILURE,
  payload: [],
  statuscode:code,
  loading: false,
  error: errMsg,
  msg: ""
});
export const GetSellerWisePayPagination = (body) => async (dispatch) => {
  dispatch(sellerWisePayPaginationLoading())
  // const headers = {
  //   "Content-Type": "application/json",
  //   "X-Csquare-Api-Token":localStorage.getItem(Constants.TOKEN),
  //   "X-Csquare-Api-Key":localStorage.getItem(Constants.KEY)
  // };
  const headers = {
    "Content-Type": "application/json",
    "X-Csquare-Api-Token":"1912780954a6da3b",
    "X-Csquare-Api-Key":"OKTXJyTPBNJ0qVfyWG2ksw=="
  };
  await axios.post(`${ENV.UAT_BASE_URL}/c2/lc/ms/ord/l/bill/getBillsBySeller`,body,{headers})
        .then(response => {
          // console.log(response.data.payloadJson.data)
      if(response.data.appStatusCode === 0){
      dispatch(sellerWisePayPaginationSuccess(response.data.payloadJson,response.data.appStatusCode))
      }else{
        dispatch(sellerWisePayPaginationFailure(response.data.messages[0],response.data.appStatusCode));
      }
   })
  .catch(error => {
    dispatch(sellerWisePayPaginationFailure("Something went wrong, Please try again later!"));
  });
};
