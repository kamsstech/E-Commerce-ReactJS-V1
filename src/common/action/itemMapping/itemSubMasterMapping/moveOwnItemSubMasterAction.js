import { ENV } from "../../../constant/env";
import { Constants } from "../../../constant/localstorage";
import axios from "axios";
import { Types } from "../../../constant/action";

export const ownItemSubMasterMapLoading = () => ({
  type: Types.OWN_ITEM_SUB_MASTER_MAP_LOADING,
  payload:[],
  statuscode:"",
  loading: true,
  error: "",
  msg: ""
});
export const ownItemSubMasterMapSuccess = (result,code) => ({
  type: Types.OWN_ITEM_SUB_MASTER_MAP_SUCCESS,
  payload: [],
  statuscode:code,
  loading: false,
  error: "",
  msg: result
});

export const ownItemSubMasterMapFailure = (errMsg,code) => ({
  type: Types.OWN_ITEM_SUB_MASTER_MAP_FAILURE,
  payload: [],
  statuscode:code,
  loading: false,
  error: errMsg,
  msg: ""
});

export const MoveOwnItemSubMasterMap = (body) => async (dispatch) => {
  dispatch(ownItemSubMasterMapLoading())
  // const headers = {
  //   "Content-Type": "application/json",
  //   "X-Csquare-Api-Token":localStorage.getItem(Constants.TOKEN),
  //   "X-Csquare-Api-Key":localStorage.getItem(Constants.KEY)
  // };
  await axios.post(`${ENV.QA_ECO_URL}/item/sub/master/live/moveToOwnManufacture`,body)
        .then(response => {
      if(response.data.appStatusCode === 0){
      dispatch(ownItemSubMasterMapSuccess(response.data.messages[0],response.data.appStatusCode))
      }else{
        dispatch(ownItemSubMasterMapFailure(response.data.messages[0],response.data.appStatusCode));
      }
   })
  .catch(error => {
    dispatch(ownItemSubMasterMapFailure("Something went wrong, Please try again later!"));
  });
};
