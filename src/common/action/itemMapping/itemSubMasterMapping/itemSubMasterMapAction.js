// import { REACT_APP_BASE_URL } from "../../../constant/env";
import { ENV } from "../../../constant/env";
import { Constants } from "../../../constant/localstorage";
import axios from "axios";
import { Types } from "../../../constant/action";

export const itemSubMasterMapLoading = () => ({
  type: Types.ITEM_SUB_MASTER_MAP_LOADING,
  payload:[],
  statuscode:"",
  loading: true,
  error: "",
  msg: ""
});
export const itemSubMasterMapSuccess = (result,code) => ({
  type: Types.ITEM_SUB_MASTER_MAP_SUCCESS,
  payload: result,
  statuscode:code,
  loading: false,
  error: "",
  msg: ""
});

export const itemSubMasterMapFailure = (errMsg,code) => ({
  type: Types.ITEM_SUB_MASTER_MAP_FAILURE,
  payload: [],
  statuscode:code,
  loading: false,
  error: errMsg,
  msg: ""
});

export const GetItemSubMasterMap = (body) => async (dispatch) => {
  dispatch(itemSubMasterMapLoading())
  // const headers = {
  //   "Content-Type": "application/json",
  //   "X-Csquare-Api-Token":localStorage.getItem(Constants.TOKEN),
  //   "X-Csquare-Api-Key":localStorage.getItem(Constants.KEY)
  // };
  await axios.post(`${ENV.QA_ECO_URL}/item/sub/master/live/listManufacture`,body)
        .then(response => {
          // console.log(response.data.payloadJson.data)
      if(response.data.appStatusCode === 0){
      dispatch(itemSubMasterMapSuccess(response.data.payloadJson,response.data.appStatusCode))
      }else{
        dispatch(itemSubMasterMapFailure(response.data.messages[0],response.data.appStatusCode));
      }
   })
  .catch(error => {
    dispatch(itemSubMasterMapFailure("Something went wrong, Please try again later!"));
  });
};
