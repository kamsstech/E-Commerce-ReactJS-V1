import { Types } from "../../constant/action";
import { REACT_APP_BASE_URL } from "../../constant/env";
import { Constants } from "../../constant/localstorage";
import axios from "axios";

export const saveUnCombineStoreLoading = () => ({
  type: Types.SAVE_UN_COMBINE_STORE_LOADING,
  payload:"",
  loading: true,
  statuscode:"",
  error: ""
});
export const saveUnCombineStoreSuccess = (result,code) => ({
  type: Types.SAVE_UN_COMBINE_STORE_SUCCESS,
  payload: result,
  loading: false,
  statuscode:code,
  error: ""
});

export const saveUnCombineStoreFailure = (errMsg,code) => ({
  type: Types.SAVE_UN_COMBINE_STORE_FAILURE,
  payload: "",
  loading: false,
  statuscode:code,
  error: errMsg
});

export const SaveUnCombineStore = (body) => async (dispatch) => {
  dispatch(saveUnCombineStoreLoading())
  // const headers = {
  //   "Content-Type":"application/json",
  //   "X-csquare-api-token":localStorage.getItem(Constants.TOKEN),
  //   "X-csquare-api-key":localStorage.getItem(Constants.KEY),
  // };
  const headers = {
    "Content-Type":"application/json",
    "X-csquare-api-token":localStorage.getItem(Constants.TOKEN) || "",
    "X-csquare-api-key":localStorage.getItem(Constants.KEY) || "",
  };
  await axios.post(`${REACT_APP_BASE_URL}/c2/lc/ms/cust/na/combine/store`,body, {headers})
        .then(response => {
      if(response.data.appStatusCode === 0){
      dispatch(saveUnCombineStoreSuccess(response.data.payloadJson.j_store,response.data.appStatusCode))
      
      localStorage.setItem(Constants.TOKEN, response.data.payloadJson.j_register.token);
      localStorage.setItem(Constants.KEY, response.data.payloadJson.j_register.key);
      // dispatch(saveUnCombineStoreSuccess("",""))

      }else{
        dispatch(saveUnCombineStoreFailure(response.data.messages[0],response.data.appStatusCode));
      }
   })
  .catch(error => {
    dispatch(saveUnCombineStoreFailure("Something went wrong, Please try again later!"));
  });

  
};
