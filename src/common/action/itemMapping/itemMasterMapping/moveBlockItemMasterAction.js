import { ENV } from "../../../constant/env";
import { Constants } from "../../../constant/localstorage";
import axios from "axios";
import { Types } from "../../../constant/action";

export const blockItemMasterMapLoading = () => ({
  type: Types.BLOCK_ITEM_MASTER_MAP_LOADING,
  payload:[],
  statuscode:"",
  loading: true,
  error: "",
  msg:""
});
export const blockItemMasterMapSuccess = (result,code) => ({
  type: Types.BLOCK_ITEM_MASTER_MAP_SUCCESS,
  payload: [],
  statuscode:code,
  loading: false,
  error: "",
  msg:result
});

export const blockItemMasterMapFailure = (errMsg,code) => ({
  type: Types.BLOCK_ITEM_MASTER_MAP_FAILURE,
  payload: [],
  statuscode:code,
  loading: false,
  error: errMsg,
  msg:""
});

export const MoveBlockItemMasterMap = (body) => async (dispatch) => {
  dispatch(blockItemMasterMapLoading())
  // const headers = {
  //   "Content-Type": "application/json",
  //   "X-Csquare-Api-Token":localStorage.getItem(Constants.TOKEN),
  //   "X-Csquare-Api-Key":localStorage.getItem(Constants.KEY)
  // };
  await axios.post(`${ENV.QA_ECO_URL}/item/live/moveToBlockedItem`,body)
        .then(response => {
      if(response.data.appStatusCode === 0){
      dispatch(blockItemMasterMapSuccess(response.data.messages[0],response.data.appStatusCode))
      }else{
        dispatch(blockItemMasterMapFailure(response.data.messages[0],response.data.appStatusCode));
      }
   })
  .catch(error => {
    dispatch(blockItemMasterMapFailure("Something went wrong, Please try again later!"));
  });
};
