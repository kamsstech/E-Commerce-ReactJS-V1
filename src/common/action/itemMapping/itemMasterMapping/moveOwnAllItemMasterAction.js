import { ENV } from "../../../constant/env";
import { Constants } from "../../../constant/localstorage";
import axios from "axios";
import { Types } from "../../../constant/action";

export const ownAllItemMasterMapLoading = () => ({
  type: Types.OWN_ALL_ITEM_MASTER_MAP_LOADING,
  payload:[],
  statuscode:"",
  loading: true,
  error: "",
  msg: ""
});
export const ownAllItemMasterMapSuccess = (result,code) => ({
  type: Types.OWN_ALL_ITEM_MASTER_MAP_SUCCESS,
  payload: [],
  statuscode:code,
  loading: false,
  error: "",
  msg: result
});

export const ownAllItemMasterMapFailure = (errMsg,code) => ({
  type: Types.OWN_ALL_ITEM_MASTER_MAP_FAILURE,
  payload: [],
  statuscode:code,
  loading: false,
  error: errMsg,
  msg: ""
});

export const MoveOwnAllItemMasterMap = (body) => async (dispatch) => {
  dispatch(ownAllItemMasterMapLoading())
  // const headers = {
  //   "Content-Type": "application/json",
  //   "X-Csquare-Api-Token":localStorage.getItem(Constants.TOKEN),
  //   "X-Csquare-Api-Key":localStorage.getItem(Constants.KEY)
  // };
  await axios.post(`${ENV.QA_ECO_URL}/item/live/moveToOwnAllItem`,body)
        .then(response => {
      if(response.data.appStatusCode === 0){
      dispatch(ownAllItemMasterMapSuccess(response.data.messages[0],response.data.appStatusCode))
      }else{
        dispatch(ownAllItemMasterMapFailure(response.data.messages[0],response.data.appStatusCode));
      }
   })
  .catch(error => {
    dispatch(ownAllItemMasterMapFailure("Something went wrong, Please try again later!"));
  });
};
