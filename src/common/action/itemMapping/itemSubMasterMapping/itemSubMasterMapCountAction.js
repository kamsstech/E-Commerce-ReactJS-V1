// import { REACT_APP_BASE_URL } from "../../../constant/env";
import { ENV } from "../../../constant/env";
import { Constants } from "../../../constant/localstorage";
import axios from "axios";
import { Types } from "../../../constant/action";

export const itemSubMasterMapCountLoading = () => ({
  type: Types.ITEM_SUB_MASTER_MAP_COUNT_LOADING,
  payload:[],
  loading: true,
  error: ""
});
export const itemSubMasterMapCountSuccess = (result) => ({
  type: Types.ITEM_SUB_MASTER_MAP_COUNT_SUCCESS,
  payload: result,
  loading: false,
  error: ""
});

export const itemSubMasterMapCountFailure = (errMsg) => ({
  type: Types.ITEM_SUB_MASTER_MAP_COUNT_FAILURE,
  payload: [],
  loading: false,
  error: errMsg
});

export const GetItemSubMasterMapCount = (body) => async (dispatch) => {
  dispatch(itemSubMasterMapCountLoading())
  // const headers = {
  //   "Content-Type": "application/json",
  //   "X-Csquare-Api-Token":localStorage.getItem(Constants.TOKEN),
  //   "X-Csquare-Api-Key":localStorage.getItem(Constants.KEY)
  // };
  // const exJson={
  //   "c_total_count":"1000",
  //   "c_mapped_count":"200",
  //   "c_unmapped_count":"200",
  //   "c_ownitems_count":"100",
  //   "c_blocked_count":"20"
  //   }
  // dispatch(itemSubMasterMapCountSuccess(exJson))
  await axios.post(`${ENV.QA_ECO_URL}/item/sub/master/live/count`,body)
        .then(response => {
      if(response.data.appStatusCode === 0){
      dispatch(itemSubMasterMapCountSuccess(response.data.payloadJson.data))
      }else{
        dispatch(itemSubMasterMapCountFailure(response.data.messages[0]));
      }
   })
  .catch(error => {
    dispatch(itemSubMasterMapCountFailure("Something went wrong, Please try again later!"));
  });
};
