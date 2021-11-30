import { Types } from "../../constant/action";
import { REACT_APP_BASE_URL } from "../../constant/env";
import { Constants } from "../../constant/localstorage";
import axios from "axios";

export const combine_StoreLoading = () => ({
  type: Types.COMBINE_STORE_LOADING,
  payload:"",
  loading: true,
  statuscode:"",
  error: ""
});
export const combine_StoreSuccess = (result,code) => ({
  type: Types.COMBINE_STORE_SUCCESS,
  payload: result,
  loading: false,
  statuscode:code,
  error: ""
});

export const combine_StoreFailure = (errMsg,code) => ({
  type: Types.COMBINE_STORE_FAILURE,
  payload: "",
  loading: false,
  statuscode:code,
  error: errMsg
});

export const Combine_Store = (body) => async (dispatch) => {
  dispatch(combine_StoreLoading())
  
  const headers = {
    "Content-Type":"application/json",
    "X-csquare-api-token":localStorage.getItem(Constants.TOKEN),
    "X-csquare-api-key":localStorage.getItem(Constants.KEY),
  };
  await axios.post(`${REACT_APP_BASE_URL}/c2/lc/ms/cust/firm/save/uncombined/stores`,body, {headers})
        .then(response => {
      if(response.data.appStatusCode === 0){
      dispatch(combine_StoreSuccess(response.data.payloadJson.data,response.data.appStatusCode))
      if(response.data.payloadJson.data.c_lc_user_active_status === "A" && response.data.payloadJson.data.c_lc_user_status === "0" && response.data.payloadJson.data.c_update_status === "1"){
          
        localStorage.setItem(Constants.USER_ACTIVE_STATUS, response.data.payloadJson.data.c_lc_user_active_status);
        localStorage.setItem(Constants.USER_STATUS, response.data.payloadJson.data.c_lc_user_status);
        localStorage.setItem(Constants.UPDATE_STATUS, response.data.payloadJson.data.c_update_status);
      }

      }else{
        dispatch(combine_StoreFailure(response.data.messages[0],response.data.appStatusCode));
      }
   })
  .catch(error => {
    dispatch(combine_StoreFailure("Something went wrong, Please try again later!"));
  });

  
};
