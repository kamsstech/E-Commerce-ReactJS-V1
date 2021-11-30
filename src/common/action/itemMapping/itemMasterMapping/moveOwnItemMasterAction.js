import { ENV } from "../../../constant/env";
import { Constants } from "../../../constant/localstorage";
import axios from "axios";
import { Types } from "../../../constant/action";

export const ownItemMasterMapLoading = () => ({
  type: Types.OWN_ITEM_MASTER_MAP_LOADING,
  payload:[],
  statuscode:"",
  loading: true,
  error: "",
  msg: ""
});
export const ownItemMasterMapSuccess = (result,code) => ({
  type: Types.OWN_ITEM_MASTER_MAP_SUCCESS,
  payload: [],
  statuscode:code,
  loading: false,
  error: "",
  msg: result
});

export const ownItemMasterMapFailure = (errMsg,code) => ({
  type: Types.OWN_ITEM_MASTER_MAP_FAILURE,
  payload: [],
  statuscode:code,
  loading: false,
  error: errMsg,
  msg: ""
});

export const MoveOwnItemMasterMap = (body) => async (dispatch) => {
  dispatch(ownItemMasterMapLoading())
  // const headers = {
  //   "Content-Type": "application/json",
  //   "X-Csquare-Api-Token":localStorage.getItem(Constants.TOKEN),
  //   "X-Csquare-Api-Key":localStorage.getItem(Constants.KEY)
  // };
  await axios.post(`${ENV.QA_ECO_URL}/item/live/moveToOwnItem`,body)
        .then(response => {
      if(response.data.appStatusCode === 0){
      dispatch(ownItemMasterMapSuccess(response.data.messages[0],response.data.appStatusCode))
      }else{
        dispatch(ownItemMasterMapFailure(response.data.messages[0],response.data.appStatusCode));
      }
   })
  .catch(error => {
    dispatch(ownItemMasterMapFailure("Something went wrong, Please try again later!"));
  });
};
