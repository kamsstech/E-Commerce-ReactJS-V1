import axios from "axios";
import { Types } from "../../constant/action";
import { ENV } from "../../constant/env";


export const BrandsActionLoading = () => ({
  type: Types.SHOW_BRANDS_LOADING,
  loading: true,
  payload: [],
  error: ""
});

export const BrandsActionSuccess = (
  payload
) => ({
  type: Types.SHOW_BRANDS_SUCCESS,
  loading: false,
  payload: payload,
  error: ""
});

export const BrandsActionFailure = (errMsg) => ({
  type: Types.SHOW_BRANDS_FAILURE,
  loading: false,
  payload: [],
  error: errMsg
});

export const BrandsAction = () => async(dispatch) => {
  dispatch(BrandsActionLoading());
  const headers = {
    "Content-Type": "application/json"
  };
  await axios
    .post(`/ord/l/mfg`,{ headers })
    .then(response => {
      if(response.data.appStatusCode === 0){
        let data  = []
        data.push(response.data.payloadJson.data)
        dispatch(BrandsActionSuccess(data))
      } else {
        dispatch(BrandsActionFailure(response.data.messages[0]))
      }
    })
    .catch(error => {
      dispatch(BrandsActionFailure("Something went wrong, Please try again later!"));
    });
}