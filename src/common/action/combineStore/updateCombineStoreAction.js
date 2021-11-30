import { Types } from "../../constant/action";
import { REACT_APP_BASE_URL } from "../../constant/env";
import { Constants } from "../../constant/localstorage";
import axios from "axios";

export const updateCombineStoreLoading = () => ({
  type: Types.UPDATE_COMBINE_STORE_LOADING,
  payload:[],
  loading: true,
  statuscode:"",
  error: ""
});
export const updateCombineStoreSuccess = (result,code) => ({
  type: Types.UPDATE_COMBINE_STORE_SUCCESS,
  payload: "Success",
  loading: false,
  statuscode:code,
  error: ""
});

export const updateCombineStoreFailure = (errMsg,code) => ({
  type: Types.UPDATE_COMBINE_STORE_FAILURE,
  payload: [],
  loading: false,
  statuscode:code,
  error: errMsg
});

export const UpdateCombineStore = (body) => async (dispatch) => {
  dispatch(updateCombineStoreLoading())
  // const headers = {
  //   "Content-Type":"application/json",
  //   "X-csquare-api-token":localStorage.getItem(Constants.TOKEN),
  //   "X-csquare-api-key":localStorage.getItem(Constants.KEY),
  // };
  const headers = {
    "Content-Type":"application/json",
    "X-csquare-api-token":localStorage.getItem(Constants.TOKEN),
    "X-csquare-api-key":localStorage.getItem(Constants.KEY),
  };
  await axios.post(`${REACT_APP_BASE_URL}/c2/lc/ms/cust/firm/update/store`,body, {headers})
        .then(response => {
      if(response.data.appStatusCode === 0){
      dispatch(updateCombineStoreSuccess(response.data.messages[0],response.data.appStatusCode))

      }else{
        dispatch(updateCombineStoreFailure(response.data.messages[0],response.data.appStatusCode));
      }
   })
  .catch(error => {
    dispatch(updateCombineStoreFailure("Something went wrong, Please try again later!"));
  });

  
};
