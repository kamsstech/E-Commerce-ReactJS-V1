import { ENV } from "../../../constant/env";
import { Constants } from "../../../constant/localstorage";
import axios from "axios";
import { Types } from "../../../constant/action";

export const confirmItemMasterMapLoading = () => ({
  type: Types.CONFIRM_ITEM_MASTER_MAP_LOADING,
  payload:[],
  statuscode:"",
  loading: true,
  error: "",
  msg: ""
});
export const confirmItemMasterMapSuccess = (result,code) => ({
  type: Types.CONFIRM_ITEM_MASTER_MAP_SUCCESS,
  payload: [],
  statuscode:code,
  loading: false,
  error: "",
  msg: result
});

export const confirmItemMasterMapFailure = (errMsg,code) => ({
  type: Types.CONFIRM_ITEM_MASTER_MAP_FAILURE,
  payload: [],
  statuscode:code,
  loading: false,
  error: errMsg,
  msg: ""
});

export const MoveConfirmItemMasterMap = (body) => async (dispatch) => {
  dispatch(confirmItemMasterMapLoading())
  // const headers = {
  //   "Content-Type": "application/json",
  //   "X-Csquare-Api-Token":localStorage.getItem(Constants.TOKEN),
  //   "X-Csquare-Api-Key":localStorage.getItem(Constants.KEY)
  // };
  await axios.post(`${ENV.QA_ECO_URL}/item/live/confirmItem`,body)
        .then(response => {
      if(response.data.appStatusCode === 0){
      dispatch(confirmItemMasterMapSuccess(response.data.messages[0],response.data.appStatusCode))
      }else{
        dispatch(confirmItemMasterMapFailure(response.data.messages[0],response.data.appStatusCode));
      }
   })
  .catch(error => {
    dispatch(confirmItemMasterMapFailure("Something went wrong, Please try again later!"));
  });
};
