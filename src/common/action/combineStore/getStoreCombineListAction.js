import { Types } from "../../constant/action";
import { REACT_APP_BASE_URL } from "../../constant/env";
import { Constants } from "../../constant/localstorage";
import axios from "axios";

export const getStoreCombineListLoading = () => ({
  type: Types.GET_STORE_COMBINE_LIST_LOADING,
  payload:[],
  loading: true,
  statuscode:"",
  error: ""
});
export const getStoreCombineListSuccess = (result,code) => ({
  type: Types.GET_STORE_COMBINE_LIST_SUCCESS,
  payload: result,
  loading: false,
  statuscode:code,
  error: ""
});

export const getStoreCombineListFailure = (errMsg,code) => ({
  type: Types.GET_STORE_COMBINE_LIST_FAILURE,
  payload: [],
  loading: false,
  statuscode:code,
  error: errMsg
});

export const GetStoreCombineList = (body) => async (dispatch) => {
  dispatch(getStoreCombineListLoading())
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
  await axios.post(`${REACT_APP_BASE_URL}/c2/lc/ms/cust/na/store/combine/list`,body, {headers})
        .then(response => {
      if(response.data.appStatusCode === 0){
      dispatch(getStoreCombineListSuccess(response.data.payloadJson.data.j_drug_license_no,response.data.appStatusCode))
      // dispatch(getStoreCombineListSuccess("",""))

      }else{
        dispatch(getStoreCombineListFailure(response.data.messages[0],response.data.appStatusCode));
      }
   })
  .catch(error => {
    dispatch(getStoreCombineListFailure("Something went wrong, Please try again later!"));
  });

  
};
