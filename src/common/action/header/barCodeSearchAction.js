import { Types } from "../../constant/action";
import { REACT_APP_BASE_URL } from "../../constant/env";
import axios from "axios";
import { Constants } from "../../constant/localstorage";

export const barcodeSearchLoading = () => ({
  type: Types.BARCODE_SEARCH_LOADING,
  loading: true,
  payload: [],
  statuscode:"",
  error: ""
});

export const barcodeSearchSuccess = (result,code) => ({
  type: Types.BARCODE_SEARCH_SUCCESS,
  loading: false,
  payload: result,
  statuscode:code,
  error: ""
});

export const barcodeSearchFailure = (errMsg,code)=> ({
  type: Types.BARCODE_SEARCH_FAILURE,
  loading: false,
  payload: [],
  statuscode:code,
  error: errMsg
});

export const BarcodeSearch = (body) => async (dispatch) => {
  dispatch(barcodeSearchLoading());
  const headers = {
    "Content-Type":"application/json",
    "X-csquare-api-token":localStorage.getItem(Constants.TOKEN),
    "X-csquare-api-key":localStorage.getItem(Constants.KEY),
  };
  
  await axios
   .post(`${REACT_APP_BASE_URL}/c2/lc/ms/mst/item/barcode`,body,{ headers })
    .then(response => {
      // console.log(response)
      if(response.data.appStatusCode === 0){
        dispatch(barcodeSearchSuccess(response.data.payloadJson,response.data.appStatusCode))
      } else {
        dispatch(barcodeSearchFailure(response.data.messages[0],response.data.appStatusCode))
      }
    })
    .catch(error => {
      dispatch(barcodeSearchFailure("Something went wrong, Please try again later!"));
    });
};
