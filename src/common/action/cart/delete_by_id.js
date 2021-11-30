import axios from "axios";
import { Types } from "../../constant/action";
import { REACT_APP_BASE_URL } from "../../constant/env";
import { Constants } from "../../constant/localstorage";


export const DeleteByIdActionLoading = () => ({
  type: Types.DELETE_BY_ID_LOADING,
  loading: true,
  payload: "",
  statuscode:"",
  message:"",
  error: ""
});

export const DeleteByIdActionSuccess = (result,code) => ({
  type: Types.DELETE_BY_ID_SUCCESS,
  loading: false,
  payload: result,
  statuscode:code,
  message:result,
  error: ""
});

export const DeleteByIdActionFailure = (errMsg,code) => ({
  type: Types.DELETE_BY_ID_FAILURE,
  loading: false,
  payload: "",
  statuscode:code,
  message:"",
  error: errMsg
});

export const DeleteByIdAction = (body) => async(dispatch ) => {
    
    


  dispatch(DeleteByIdActionLoading());
  // const headers = {
  //   "Content-Type": "application/json"
  // };
  const headers = {
    "Content-Type": "application/json",
    "X-csquare-api-token":localStorage.getItem(Constants.TOKEN),
    "X-csquare-api-key":localStorage.getItem(Constants.KEY),
  };

  await axios.post(`${REACT_APP_BASE_URL}/c2/lc/ms/ord/l/cart/deleteItem`,body,{ headers }).then(response => {
      
      if(response.data.appStatusCode === 0){
        // let data  = []
        // data.push(response.data.payloadJson.data)
        dispatch(DeleteByIdActionSuccess(response.data.messages[0],response.data.appStatusCode))
        dispatch(DeleteByIdActionSuccess("",""))
      } else {
        dispatch(DeleteByIdActionFailure(response.data.messages[0],response.data.appStatusCode))
      }
    })
    .catch(error => {
      dispatch(DeleteByIdActionFailure("Something went wrong, Please try again later!!!!!!"));
    });
}