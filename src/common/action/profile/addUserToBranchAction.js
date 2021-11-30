import { Types } from "../../constant/action";

import { ENV } from "../../constant/env";
import { Constants } from "../../constant/localstorage";
import axios from "axios";
import { BranchUserListInputEntity, RegisterActionEntity } from "../../model";

export const addUserToBranchLoading = () => ({
    type: Types.ADD_USER_TO_BRANCH_LOADING,
    loading: true,
    error: ""
});
  
export const addUserToBranchSuccess = () => ({
    type: Types.ADD_USER_TO_BRANCH_SUCCESS,
    loading: false,
    error: ""
});
  
export const addUserToBranchFailure = (errMsg) => ({
    type: Types.ADD_USER_TO_BRANCH_FAILURE,
    loading: false,
    error: errMsg
});
  
export const AddUserToBranchAction = (input)  => async (dispatch) => {
    dispatch(addUserToBranchLoading());

    // const headers = {
    //     "Content-Type": "application/json",
    //     "x-csquare-cus-id": localStorage.getItem(Constants.CUST_ID),
    //     "x-csquare-firm-id": localStorage.getItem(Constants.FIRM_ID)//response.data.payloadJson.n_branch_id
    // };
    const headers = {
      "Content-Type": "application/json",
      "X-csquare-api-token":localStorage.getItem(Constants.TOKEN),
      "X-csquare-api-key":localStorage.getItem(Constants.KEY),
    };
    const body = {
        data: input
    }

    axios.post(`${ENV.BASE_URL}/firm/branch/addUser`, body, {headers})
    .then(response => {
      if(response.data.appStatusCode === 0){
        // history.push("/profile/branch");
        //   console.log(response.data.payloadJson.list, "ac")
          dispatch(addUserToBranchSuccess())
      } else {
        dispatch(addUserToBranchFailure(response.data.messages[0]))
      }
    })
    .catch(err => {
      dispatch(addUserToBranchFailure("Something went wrong, Please try again later!"));
    })
  }