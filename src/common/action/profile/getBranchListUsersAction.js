import { Types } from "../../constant/action";
import { REACT_APP_BASE_URL } from "../../constant/env";
import { Constants } from "../../constant/localstorage";
import axios from "axios";


export const GetBranchListUsersSuccess = (result,code) => ({
  type: Types.GET_BRANCH_LIST_USER_SUCCESS,
  payload:result,
  error: "",
  statuscode:code
});

export const GetBranchListUsersFailure = (errMsg,code) => ({
  type: Types.GET_BRANCH_LIST_USER_FAILURE,
  payload: [],
  error: errMsg,
  statuscode:code
});

export const GetBranchListUsersAction = (body)  => async (dispatch) => {

  const headers = {
    "Content-Type": "application/json",
    "X-csquare-api-token":localStorage.getItem(Constants.TOKEN),
    "X-csquare-api-key":localStorage.getItem(Constants.KEY),
  };
  
  axios.post(`${REACT_APP_BASE_URL}/c2/lc/ms/cust/firm/getbranchdetails`,body, {headers})
  .then(response => {
    if(response.data.appStatusCode === 0){
      if(response.data.payloadJson !== null){
        dispatch(GetBranchListUsersSuccess(response.data.payloadJson.data,response.data.appStatusCode))
      } else {
        dispatch(GetBranchListUsersFailure(response.data.messages[0],response.data.appStatusCode))
      }
    } else {
      dispatch(GetBranchListUsersFailure(response.data.messages[0],response.data.appStatusCode))
    }
  })
  .catch(err => {
    dispatch(GetBranchListUsersFailure("Something went wrong, Please try again later!!!!"));
  })
}