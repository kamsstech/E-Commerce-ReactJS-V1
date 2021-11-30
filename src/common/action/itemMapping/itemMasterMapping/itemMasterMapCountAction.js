// import { REACT_APP_BASE_URL } from "../../../constant/env";
import { ENV } from "../../../constant/env";
import { Constants } from "../../../constant/localstorage";
import axios from "axios";
import { Types } from "../../../constant/action";

export const itemMasterMapCountLoading = () => ({
  type: Types.ITEM_MASTER_MAP_COUNT_LOADING,
  payload:[],
  loading: true,
  error: ""
});
export const itemMasterMapCountSuccess = (result) => ({
  type: Types.ITEM_MASTER_MAP_COUNT_SUCCESS,
  payload: result,
  loading: false,
  error: ""
});

export const itemMasterMapCountFailure = (errMsg) => ({
  type: Types.ITEM_MASTER_MAP_COUNT_FAILURE,
  payload: [],
  loading: false,
  error: errMsg
});

export const GetItemMasterMapCount = (body) => async (dispatch) => {
  dispatch(itemMasterMapCountLoading())
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
  // dispatch(itemMasterMapCountSuccess(exJson))
  await axios.post(`${ENV.QA_ECO_URL}/item/live/count`,body)
        .then(response => {
      if(response.data.appStatusCode === 0){
      dispatch(itemMasterMapCountSuccess(response.data.payloadJson.data))
      }else{
        dispatch(itemMasterMapCountFailure(response.data.messages[0]));
      }
   })
  .catch(error => {
    dispatch(itemMasterMapCountFailure("Something went wrong, Please try again later!"));
  });
};
