import { ENV } from "../../../constant/env";
import { Constants } from "../../../constant/localstorage";
import axios from "axios";
import { Types } from "../../../constant/action";

export const ownAllItemSubMasterMapLoading = () => ({
  type: Types.OWN_ALL_ITEM_SUB_MASTER_MAP_LOADING,
  payload:[],
  statuscode:"",
  loading: true,
  error: "",
  msg: ""
});
export const ownAllItemSubMasterMapSuccess = (result,code) => ({
  type: Types.OWN_ALL_ITEM_SUB_MASTER_MAP_SUCCESS,
  payload: [],
  statuscode:code,
  loading: false,
  error: "",
  msg: result
});

export const ownAllItemSubMasterMapFailure = (errMsg,code) => ({
  type: Types.OWN_ALL_ITEM_SUB_MASTER_MAP_FAILURE,
  payload: [],
  statuscode:code,
  loading: false,
  error: errMsg,
  msg: ""
});

export const MoveOwnAllItemSubMasterMap = (body) => async (dispatch) => {
  dispatch(ownAllItemSubMasterMapLoading())
  // const headers = {
  //   "Content-Type": "application/json",
  //   "X-Csquare-Api-Token":localStorage.getItem(Constants.TOKEN),
  //   "X-Csquare-Api-Key":localStorage.getItem(Constants.KEY)
  // };
  await axios.post(`${ENV.QA_ECO_URL}/item/sub/master/live/moveToOwnAllManufacture`,body)
        .then(response => {
      if(response.data.appStatusCode === 0){
      dispatch(ownAllItemSubMasterMapSuccess(response.data.messages[0],response.data.appStatusCode))
      }else{
        dispatch(ownAllItemSubMasterMapFailure(response.data.messages[0],response.data.appStatusCode));
      }
   })
  .catch(error => {
    dispatch(ownAllItemSubMasterMapFailure("Something went wrong, Please try again later!"));
  });
};
