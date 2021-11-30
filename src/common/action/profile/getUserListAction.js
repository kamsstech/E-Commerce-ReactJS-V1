import { Types } from "../../constant/action";
import { REACT_APP_BASE_URL } from "../../constant/env";
import { Constants } from "../../constant/localstorage";
import axios from "axios";


export const getUserSuccess = (result,code) => ({
  type: Types.GET_USER_SUCCESS,
  message: "success",
  statuscode:code,
  payload:result,
  error: ""
});

export const getUserFailure = (errMsg,code) => ({
  type: Types.GET_USER_FAILURE,
  message: "",
  statuscode:code,
  payload: [],
  error: errMsg
});

export const getUserListAction = ()  => async (dispatch) => {
  
  const body={
    "n_page":"0",
    "n_limit":"10"
  }
  const headers = {
    "Content-Type": "application/json",
    "X-csquare-api-token":localStorage.getItem(Constants.TOKEN),
    "X-csquare-api-key":localStorage.getItem(Constants.KEY),
  };

        axios.post(`${REACT_APP_BASE_URL}/c2/lc/ms/cust/user/list`,body, {headers})
        .then(response => {
          if(response.data.appStatusCode === 0){
            if(response.data.payloadJson !== null){
              dispatch(getUserSuccess(response.data.payloadJson.items,response.data.appStatusCode))
            } else {
              dispatch(getUserFailure(response.data.messages[0],response.data.appStatusCode))
            }
          } else {
            dispatch(getUserFailure(response.data.messages[0],response.data.appStatusCode))
          }
        })
        .catch(err => {
          dispatch(getUserFailure("Something went wrong, Please try again later!"));
        })

    
}