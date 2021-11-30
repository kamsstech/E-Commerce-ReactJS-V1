import axios from "axios";
import { Types } from "../../constant/action";
import { ENV } from "../../constant/env";
import {
  SellersActionEntity,
  SellersResultEntity,
} from '../../model'

export const SellersActionLoading = (): SellersActionEntity => ({
  type: Types.SHOW_SELLER_LOADING,
  loading: true,
  payload: [],
  error: ""
});

export const SellersActionSuccess = (
  payload: SellersResultEntity[]
): SellersActionEntity => ({
  type: Types.SHOW_SELLER_SUCCESS,
  loading: false,
  payload: payload,
  error: ""
});

export const SellersActionFailure = (errMsg: string): SellersActionEntity => ({
  type: Types.SHOW_SELLER_FAILURE,
  loading: false,
  payload: [],
  error: errMsg
});

export const SellersAction = () => async(dispatch : any) => {
  dispatch(SellersActionLoading());
  const headers: any = {
    "Content-Type": "application/json"
  };
  await axios
    .post(`/ord/l/sellers`,{ headers })
    .then(response => {
      if(response.data.appStatusCode === 0){
        let data : any = []
        data.push(response.data.payloadJson.data)
        dispatch(SellersActionSuccess(data))
      } else {
        dispatch(SellersActionFailure(response.data.messages[0]))
      }
    })
    .catch(error => {
      dispatch(SellersActionFailure("Something went wrong, Please try again later!"));
    });
}