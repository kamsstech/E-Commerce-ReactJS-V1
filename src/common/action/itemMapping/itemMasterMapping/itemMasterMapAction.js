// import { REACT_APP_BASE_URL } from "../../../constant/env";
import { ENV } from "../../../constant/env";
import { Constants } from "../../../constant/localstorage";
import axios from "axios";
import { Types } from "../../../constant/action";

export const itemMasterMapLoading = () => ({
  type: Types.ITEM_MASTER_MAP_LOADING,
  payload:[],
  statuscode:"",
  loading: true,
  error: "",
  msg: ""
});
export const itemMasterMapSuccess = (result,code) => ({
  type: Types.ITEM_MASTER_MAP_SUCCESS,
  payload: result,
  statuscode:code,
  loading: false,
  error: "",
  msg: ""
});

export const itemMasterMapFailure = (errMsg,code) => ({
  type: Types.ITEM_MASTER_MAP_FAILURE,
  payload: [],
  statuscode:code,
  loading: false,
  error: errMsg,
  msg: ""
});

export const GetItemMasterMap = (body) => async (dispatch) => {
  dispatch(itemMasterMapLoading())
  // const headers = {
  //   "Content-Type": "application/json",
  //   "X-Csquare-Api-Token":localStorage.getItem(Constants.TOKEN),
  //   "X-Csquare-Api-Key":localStorage.getItem(Constants.KEY)
  // };
  await axios.post(`${ENV.QA_ECO_URL}/item/live/listItem`,body)
        .then(response => {
          // console.log(response.data.payloadJson.data)
      if(response.data.appStatusCode === 0){
      dispatch(itemMasterMapSuccess(response.data.payloadJson,response.data.appStatusCode))
      }else{
        dispatch(itemMasterMapFailure(response.data.messages[0],response.data.appStatusCode));
      }
   })
  .catch(error => {
    dispatch(itemMasterMapFailure("Something went wrong, Please try again later!"));
  });
};
