import { ENV } from "../../../constant/env";
import { Constants } from "../../../constant/localstorage";
import axios from "axios";
import { Types } from "../../../constant/action";

export const deleteItemSubMasterMapLoading = () => ({
  type: Types.DELETE_ITEM_SUB_MASTER_MAP_LOADING,
  payload:[],
  statuscode:"",
  loading: true,
  error: "",
  msg: ""
});
export const deleteItemSubMasterMapSuccess = (result,code) => ({
  type: Types.DELETE_ITEM_SUB_MASTER_MAP_SUCCESS,
  payload: [],
  statuscode:code,
  loading: false,
  error: "",
  msg: result
});

export const deleteItemSubMasterMapFailure = (errMsg,code) => ({
  type: Types.DELETE_ITEM_SUB_MASTER_MAP_FAILURE,
  payload: [],
  statuscode:code,
  loading: false,
  error: errMsg,
  msg: ""
});

export const DeleteItemSubMasterMap = (body) => async (dispatch) => {
  dispatch(deleteItemSubMasterMapLoading())
  // const headers = {
  //   "Content-Type": "application/json",
  //   "X-Csquare-Api-Token":localStorage.getItem(Constants.TOKEN),
  //   "X-Csquare-Api-Key":localStorage.getItem(Constants.KEY)
  // };
  await axios.post(`${ENV.QA_ECO_URL}/item/sub/master/live/deleteItem`,body)
        .then(response => {
      if(response.data.appStatusCode === 0){
      dispatch(deleteItemSubMasterMapSuccess(response.data.messages[0],response.data.appStatusCode))
      }else{
        dispatch(deleteItemSubMasterMapFailure(response.data.messages[0],response.data.appStatusCode));
      }
   })
  .catch(error => {
    dispatch(deleteItemSubMasterMapFailure("Something went wrong, Please try again laterdfgfhfggjg!"));
  });
};
