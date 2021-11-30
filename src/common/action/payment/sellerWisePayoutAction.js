import { ENV } from "../../constant/env";
import { Constants } from "../../constant/localstorage";
import axios from "axios";
import { Types } from "../../constant/action";

export const sellerWisePayOutLoading = () => ({
  type: Types.SELLER_WISE_PAY_OUT_LOADING,
  payload:[],
  statuscode:"",
  loading: true,
  error: "",
  msg: ""
});
export const sellerWisePayOutSuccess = (result,code) => ({
  type: Types.SELLER_WISE_PAY_OUT_SUCCESS,
  payload: result,
  statuscode:code,
  loading: false,
  error: "",
  msg: ""
});
export const sellerWisePayOutFailure = (errMsg,code) => ({
  type: Types.SELLER_WISE_PAY_OUT_FAILURE,
  payload: [],
  statuscode:code,
  loading: false,
  error: errMsg,
  msg: ""
});
export const GetSellerWisePayOut = (body) => async (dispatch) => {
  dispatch(sellerWisePayOutLoading())
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
  await axios.post(`${ENV.UAT_BASE_URL}/c2/lc/ms/ord/l/bill/getSellersBill`,body,{headers})
        .then(response => {
          // console.log(response.data.payloadJson.data)
      if(response.data.appStatusCode === 0){
      dispatch(sellerWisePayOutSuccess(response.data.payloadJson,response.data.appStatusCode))
      }else{
        dispatch(sellerWisePayOutFailure(response.data.messages[0],response.data.appStatusCode));
      }
   })
  .catch(error => {
    dispatch(sellerWisePayOutFailure("Something went wrong, Please try again later!"));
  });
};
