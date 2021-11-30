import { ENV } from "../../../constant/env";
import { Constants } from "../../../constant/localstorage";
import axios from "axios";
import { Types } from "../../../constant/action";

export const blockItemSubMasterMapLoading = () => ({
  type: Types.BLOCK_ITEM_SUB_MASTER_MAP_LOADING,
  payload:[],
  statuscode:"",
  loading: true,
  error: "",
  msg:""
});
export const blockItemSubMasterMapSuccess = (result,code) => ({
  type: Types.BLOCK_ITEM_SUB_MASTER_MAP_SUCCESS,
  payload: [],
  statuscode:code,
  loading: false,
  error: "",
  msg:result
});

export const blockItemSubMasterMapFailure = (errMsg,code) => ({
  type: Types.BLOCK_ITEM_SUB_MASTER_MAP_FAILURE,
  payload: [],
  statuscode:code,
  loading: false,
  error: errMsg,
  msg:""
});

export const MoveBlockItemSubMasterMap = (body) => async (dispatch) => {
  dispatch(blockItemSubMasterMapLoading())
  // const headers = {
  //   "Content-Type": "application/json",
  //   "X-Csquare-Api-Token":localStorage.getItem(Constants.TOKEN),
  //   "X-Csquare-Api-Key":localStorage.getItem(Constants.KEY)
  // };
  await axios.post(`${ENV.QA_ECO_URL}/item/sub/master/live/moveToBlockedManufacture`,body)
        .then(response => {
      if(response.data.appStatusCode === 0){
      dispatch(blockItemSubMasterMapSuccess(response.data.messages[0],response.data.appStatusCode))
      }else{
        dispatch(blockItemSubMasterMapFailure(response.data.messages[0],response.data.appStatusCode));
      }
   })
  .catch(error => {
    dispatch(blockItemSubMasterMapFailure("Something went wrong, Please try again later!"));
  });
};
