import { Types } from "../../constant/action";
import { REACT_APP_BASE_URL } from "../../constant/env";
import { Constants } from "../../constant/localstorage";
import axios from "axios";
import { getUserListAction } from "./getUserListAction";

export const deleteUserLoading = () => ({
  type: Types.DELETE_USER_LOADING,
  loading: true,
  error: ""
});

export const deleteUserSuccess = () => ({
  type: Types.DELETE_USER_SUCCESS,
  loading: false,
  error: ""
});

export const deleteUserFailure = (errMsg) => ({
  type: Types.DELETE_USER_FAILURE,
  loading: false,
  error: errMsg
});

export const deleteUserAction = (body)  => async (dispatch) => {
  dispatch(deleteUserLoading());

  // const headers: any = {
  //   "Content-Type": "application/json",
  //   "x-csquare-cus-id": localStorage.getItem(Constants.CUST_ID)
  // };

  // axios.get(`${REACT_APP_BASE_URL}/firm/branch/default`, {headers})
  // .then(response => {
  //   if (response.data.appStatusCode === 0) {
  //     if(response.data.payloadJson !== null){
  //       localStorage.setItem(Constants.FIRM_ID, response.data.payloadJson.n_branch_id)

        // const headers = {
        //   "x-csquare-cus-id": localStorage.getItem(Constants.CUST_ID),
        //   "x-csquare-firm-id": localStorage.getItem(Constants.FIRM_ID)//response.data.payloadJson.n_branch_id
        // };

        const headers = {
          "Content-Type": "application/json",
          "X-csquare-api-token":localStorage.getItem(Constants.TOKEN),
          "X-csquare-api-key":localStorage.getItem(Constants.KEY),
        };

        axios.post(`${REACT_APP_BASE_URL}/c2/lc/ms/cust/user/delete`,body, {headers})
        .then(response => {
          if(response.data.appStatusCode === 0){
            dispatch(getUserListAction())
          } else {
            dispatch(response.data.messages[0])
          }
        })
        .catch(err => {
          dispatch(deleteUserFailure("Something went wrong, Please try again later!"));
        })

  //     } else {
  //       dispatch(deleteUserFailure(response.data.messages[0]))
  //     }
  //   } else {
  //     dispatch(deleteUserFailure(response.data.messages[0]))
  //   }
  // })
  // .catch(err => {
  //   dispatch(deleteUserFailure("Something went wrong, Please try again later!"));
  // })
}