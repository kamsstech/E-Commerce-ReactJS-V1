import { Types } from "../../constant/action";

import { REACT_APP_BASE_URL } from "../../constant/env";
import { Constants } from "../../constant/localstorage";
import axios from "axios";
// import { RegisterActionEntity } from "../../model";
import { getBranchListAction } from "./getBranchListAction";

export const deleteBranchLoading = () => ({
  type: Types.DELETE_BRANCH_LOADING,
  loading: true,
  error: ""
});

export const deleteBranchSuccess = () => ({
  type: Types.DELETE_BRANCH_SUCCESS,
  loading: false,
  error: ""
});

export const deleteBranchFailure = (errMsg) => ({
  type: Types.DELETE_BRANCH_FAILURE,
  loading: false,
  error: errMsg
});

export const deleteBranchAction = (branchId)  => async (dispatch) => {
  dispatch(deleteBranchLoading());

  // const headers: any = {
  //   "Content-Type": "application/json",
  //   "x-csquare-cus-id": localStorage.getItem(Constants.CUST_ID)
  // };

  // axios.get(`${ENV.BASE_URL}/firm/branch/default`, {headers})
  // .then(response => {
  //   if (response.data.appStatusCode === 0) {
  //     if(response.data.payloadJson !== null){
  //       localStorage.setItem(Constants.FIRM_ID, response.data.payloadJson.n_branch_id)

        // const headers = {
        //   "x-csquare-cus-id": localStorage.getItem(Constants.CUST_ID),
        //   "x-csquare-firm-id": localStorage.getItem(Constants.FIRM_ID) //response.data.payloadJson.n_branch_id
        // };

        const headers = {
          "Content-Type": "application/json",
          "X-csquare-api-token":localStorage.getItem(Constants.TOKEN),
          "X-csquare-api-key":localStorage.getItem(Constants.KEY),
        };

        const body={
          c_br_code:branchId
        }

        axios.post(`${REACT_APP_BASE_URL}/c2/lc/ms/cust/firm/removebranch`,body, {headers})
        .then(response => {
          if(response.data.appStatusCode === 0){
            dispatch(getBranchListAction());
          }
        })
        .catch(err => {
          dispatch(deleteBranchFailure("Something went wrong, Please try again later!"));
        })

  //     } else {
  //       dispatch(deleteBranchFailure(response.data.messages[0]))
  //     }
  //   } else {
  //     dispatch(deleteBranchFailure(response.data.messages[0]))
  //   }
  // })
  // .catch(err => {
  //   dispatch(deleteBranchFailure("Something went wrong, Please try again later!"));
  // })
}