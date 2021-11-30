import axios from "axios";
import { Types } from "../../constant/action";
import { ENV } from "../../constant/env";
import {
  ManufacturerActionEntity,
  MaufactererResultEntity,
} from '../../model'

export const GetmanufactureractionLoading = (): ManufacturerActionEntity => ({
  type: Types.SHOW_MANUFACTURER_LOADING,
  loading: true,
  payload: [],
  error: ""
});

export const GetmanufactureractionSuccess = (
  payload: MaufactererResultEntity[]
): ManufacturerActionEntity => ({
  type: Types.SHOW_MANUFACTURER_SUCCESS,
  loading: false,
  payload: payload,
  error: ""
});

export const GetmanufactureractionFailure = (errMsg: string): ManufacturerActionEntity => ({
  type: Types.SHOW_MANUFACTURER_FAILURE,
  loading: false,
  payload: [],
  error: errMsg
});

export const Getmanufactureraction = () => async(dispatch : any) => {
  dispatch(GetmanufactureractionLoading());
  const headers: any = {
    "Content-Type": "application/json"
  };
  await axios
    .post(`/ord/l/mfg`,{ headers })
    .then(response => {
      if(response.data.appStatusCode === 0){
        let data : any = []
        data.push(response.data.payloadJson.data)
        dispatch(GetmanufactureractionSuccess(data))
      } else {
        dispatch(GetmanufactureractionFailure(response.data.messages[0]))
      }
    })
    .catch(error => {
      dispatch(GetmanufactureractionFailure("Something went wrong, Please try again later!"));
    });
}