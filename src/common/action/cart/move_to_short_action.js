import axios from "axios";
import { Types } from "../../constant/action";
import { REACT_APP_BASE_URL } from "../../constant/env";
import { Constants } from "../../constant/localstorage";


export const MoveToShortActionLoading = () => ({
  type: Types.MOVE_TO_SHORT_LOADING,
  loading: true,
  payload: "",
  message:"",
  statuscode:"",
  error: ""
});

export const MoveToShortActionSuccess = (result,code) => ({
  type: Types.MOVE_TO_SHORT_SUCCESS,
  loading: false,
  payload: result,
  message:result,
  statuscode:code,
  error: ""
});

export const MoveToShortActionFailure = (errMsg,code) => ({
  type: Types.MOVE_TO_SHORT_FAILURE,
  loading: false,
  payload: "",
  message:"",
  statuscode:code,
  error: errMsg
});

export const MoveToShortAction = (body) => async(dispatch ) => {
    


  dispatch(MoveToShortActionLoading());
  
  const headers = {
    "Content-Type": "application/json",
    "X-csquare-api-token":localStorage.getItem(Constants.TOKEN),
    "X-csquare-api-key":localStorage.getItem(Constants.KEY),
  };

  await axios.post(`${REACT_APP_BASE_URL}/c2/lc/ms/ord/l/cart/moveToShort`,body,{ headers })
    
    .then(response => {
      
      if(response.data.appStatusCode === 0){
        dispatch(MoveToShortActionSuccess(response.data.messages[0],response.data.appStatusCode))
        dispatch(MoveToShortActionSuccess("",""))
      } else if(response.data.appStatusCode === 2) {
        dispatch(MoveToShortActionFailure(response.data.messages[0],response.data.appStatusCode))
      }else{
        dispatch(MoveToShortActionFailure(response.data.messages[0],response.data.appStatusCode))
      }
    })
    .catch(error => {
      dispatch(MoveToShortActionFailure("Something went wrong, Please try again later!"));
    });
}