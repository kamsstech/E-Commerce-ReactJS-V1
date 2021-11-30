import { ENV } from "../../../constant/env";
import { Constants } from "../../../constant/localstorage";
import axios from "axios";
import { Types } from "../../../constant/action";

export const deleteItemMasterMapLoading = () => ({
  type: Types.DELETE_ITEM_MASTER_MAP_LOADING,
  payload:[],
  statuscode:"",
  loading: true,
  error: "",
  msg: ""
});
export const deleteItemMasterMapSuccess = (result,code) => ({
  type: Types.DELETE_ITEM_MASTER_MAP_SUCCESS,
  payload: [],
  statuscode:code,
  loading: false,
  error: "",
  msg: result
});

export const deleteItemMasterMapFailure = (errMsg,code) => ({
  type: Types.DELETE_ITEM_MASTER_MAP_FAILURE,
  payload: [],
  statuscode:code,
  loading: false,
  error: errMsg,
  msg: ""
});

export const DeleteItemMasterMap = (body) => async (dispatch) => {
  dispatch(deleteItemMasterMapLoading())
  // const headers = {
  //   "Content-Type": "application/json",
  //   "X-Csquare-Api-Token":localStorage.getItem(Constants.TOKEN),
  //   "X-Csquare-Api-Key":localStorage.getItem(Constants.KEY)
  // };
  await axios.post(`${ENV.QA_ECO_URL}/item/live/deleteItem`,body)
        .then(response => {
      if(response.data.appStatusCode === 0){
      dispatch(deleteItemMasterMapSuccess(response.data.messages[0],response.data.appStatusCode))
      }else{
        dispatch(deleteItemMasterMapFailure(response.data.messages[0],response.data.appStatusCode));
      }
   })
  .catch(error => {
    dispatch(deleteItemMasterMapFailure("Something went wrong, Please try again laterdfgfhfggjg!"));
  });
};
