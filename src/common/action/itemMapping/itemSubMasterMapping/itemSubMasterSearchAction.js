// import { REACT_APP_BASE_URL } from "../../../constant/env";
import { ENV } from "../../../constant/env";
import { Constants } from "../../../constant/localstorage";
import axios from "axios";
import { Types } from "../../../constant/action";

export const itemSubMasterSearchLoading = () => ({
  type: Types.ITEM_SUB_MASTER_SEARCH_LOADING,
  payload:[],
  statuscode:"",
  loading: true,
  error: "",
  msg: ""
});
export const itemSubMasterSearchSuccess = (result,code) => ({
  type: Types.ITEM_SUB_MASTER_SEARCH_SUCCESS,
  payload: result,
  statuscode:code,
  loading: false,
  error: "",
  msg: ""
});

export const itemSubMasterSearchFailure = (errMsg,code) => ({
  type: Types.ITEM_SUB_MASTER_SEARCH_FAILURE,
  payload: [],
  statuscode:code,
  loading: false,
  error: errMsg,
  msg: ""
});

export const GetItemSubMasterSearch = (body) => async (dispatch) => {
  dispatch(itemSubMasterSearchLoading())
  // const headers = {
  //   "Content-Type": "application/json",
  //   "X-Csquare-Api-Token":localStorage.getItem(Constants.TOKEN),
  //   "X-Csquare-Api-Key":localStorage.getItem(Constants.KEY)
  // };
  await axios.post(`${ENV.QA_ECO_URL}/item/sub/master/live/item/sub/mapping/search`,body)
        .then(response => {
          // console.log(response.data.payloadJson.data)
      if(response.data.appStatusCode === 0){
      dispatch(itemSubMasterSearchSuccess(response.data.payloadJson,response.data.appStatusCode))
      }else{
        dispatch(itemSubMasterSearchFailure(response.data.messages[0],response.data.appStatusCode));
      }
   })
  .catch(error => {
    dispatch(itemSubMasterSearchFailure("Something went wrong, Please try again later!"));
  });
};
