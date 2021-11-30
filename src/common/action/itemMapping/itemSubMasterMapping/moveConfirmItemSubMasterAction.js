import { ENV } from "../../../constant/env";
import { Constants } from "../../../constant/localstorage";
import axios from "axios";
import { Types } from "../../../constant/action";

export const confirmItemSubMasterMapLoading = () => ({
  type: Types.CONFIRM_ITEM_SUB_MASTER_MAP_LOADING,
  payload:[],
  statuscode:"",
  loading: true,
  error: "",
  msg: ""
});
export const confirmItemSubMasterMapSuccess = (result,code) => ({
  type: Types.CONFIRM_ITEM_SUB_MASTER_MAP_SUCCESS,
  payload: [],
  statuscode:code,
  loading: false,
  error: "",
  msg: result
});

export const confirmItemSubMasterMapFailure = (errMsg,code) => ({
  type: Types.CONFIRM_ITEM_SUB_MASTER_MAP_FAILURE,
  payload: [],
  statuscode:code,
  loading: false,
  error: errMsg,
  msg: ""
});

export const MoveConfirmItemSubMasterMap = (body) => async (dispatch) => {
  dispatch(confirmItemSubMasterMapLoading())
  // const headers = {
  //   "Content-Type": "application/json",
  //   "X-Csquare-Api-Token":localStorage.getItem(Constants.TOKEN),
  //   "X-Csquare-Api-Key":localStorage.getItem(Constants.KEY)
  // };
  await axios.post(`${ENV.QA_ECO_URL}/item/sub/master/live/confirmManufacture`,body)
        .then(response => {
      if(response.data.appStatusCode === 0){
      dispatch(confirmItemSubMasterMapSuccess(response.data.messages[0],response.data.appStatusCode))
      }else{
        dispatch(confirmItemSubMasterMapFailure(response.data.messages[0],response.data.appStatusCode));
      }
   })
  .catch(error => {
    dispatch(confirmItemSubMasterMapFailure("Something went wrong, Please try again later!"));
  });
};
